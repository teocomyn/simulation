"use client";

import { docHref } from "@/lib/catalog";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";

export type SearchItem = {
  slug: string;
  title: string;
  thesis: string;
  section: string;
  excerpt: string;
  body?: string;
};

/**
 * Recherche plein texte. La liste d'aperçu arrive avec la page ; l'index complet
 * (texte intégral des documents) est téléchargé à part, depuis /search-index.json.
 */
export function SearchBox({ preview, initialQuery = "" }: { preview: SearchItem[]; initialQuery?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? initialQuery);
  const [index, setIndex] = useState<SearchItem[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: SearchItem[]) => {
        if (alive) setIndex(data);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(index ?? preview, {
        keys: [
          { name: "title", weight: 2 },
          { name: "thesis", weight: 1.4 },
          { name: "body", weight: 1 },
          { name: "excerpt", weight: 0.6 },
          { name: "section", weight: 0.4 },
        ],
        threshold: 0.32,
        ignoreLocation: true,
      }),
    [index, preview],
  );
  const results = q.trim() ? fuse.search(q).slice(0, 24) : preview.slice(0, 12).map((item) => ({ item }));
  const status = !q.trim()
    ? "Aperçu du corpus"
    : `${results.length} texte${results.length > 1 ? "s" : ""}${
        index ? "" : failed ? " · titres et thèses seulement" : " · chargement du texte intégral…"
      }`;

  useEffect(() => {
    const next = q.trim();
    const current = params.get("q") ?? "";
    if (next === current) return;
    router.replace(next ? `${pathname}?q=${encodeURIComponent(next)}` : pathname, { scroll: false });
  }, [q, params, pathname, router]);

  return (
    <div>
      <label className="block">
        <span className="sr-only">Rechercher dans le corpus</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Bostrom, BF = 1, Wolpert, Stargate, K₄…"
          className="min-h-11 w-full border border-line bg-paper px-4 py-3.5 text-ink outline-none focus:border-brass"
        />
      </label>
      <p className="mt-3 text-sm text-muted">
        {status}
      </p>
      {results.length === 0 ? (
        <p className="mt-8 text-sm leading-6 text-muted">
          Aucun texte pour « {q} ». Essayez un auteur, un sigle (Q1, H5, BF) ou un titre de section.
        </p>
      ) : (
      <ul className="mt-5 space-y-3">
        {results.map(({ item }) => (
          <li key={item.slug}>
            <Link href={docHref(item.slug)} className="surface block min-h-11 p-4">
              <span className="text-[11px] tracking-[0.14em] text-dim uppercase">{item.section}</span>
              <span className="mt-1 block font-display text-xl text-ink">{item.title}</span>
              <span className="mt-1 block text-sm text-muted">{item.thesis}</span>
            </Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

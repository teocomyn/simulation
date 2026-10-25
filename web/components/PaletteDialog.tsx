"use client";

import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { jumpIndex, type JumpItem } from "@/lib/nav-index";

const items = jumpIndex();
const fuse = new Fuse(items, {
  keys: [
    { name: "title", weight: 2 },
    { name: "hint", weight: 1 },
    { name: "group", weight: 0.3 },
  ],
  threshold: 0.32,
  ignoreLocation: true,
});

/** Fenêtre de la palette ⌘K. Chargée à la première ouverture seulement. */
export default function PaletteDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const found = q.trim() ? fuse.search(q).map((r) => r.item) : items.slice(0, 10);
    return found.slice(0, 12);
  }, [q]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const node = listRef.current?.querySelectorAll<HTMLElement>("[data-jump]")[active];
    node?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function go(item: JumpItem) {
    onClose();
    router.push(item.href);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-void/70 px-4 pt-[12vh]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recherche"
        className="w-full max-w-xl border border-line bg-paper"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((i) => Math.min(results.length - 1, i + 1));
          }
          if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((i) => Math.max(0, i - 1));
          }
          if (event.key === "Enter" && results[active]) {
            event.preventDefault();
            go(results[active]);
          }
        }}
      >
        <label className="block border-b border-line">
          <span className="sr-only">Aller à</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Aller à un texte, une section, un instrument…"
            className="w-full bg-transparent px-4 py-3.5 text-ink outline-none"
            onKeyDown={(event) => {
              if (event.key === "Enter" && results[active]) {
                event.preventDefault();
                go(results[active]);
              }
            }}
          />
        </label>
        <ul ref={listRef} className="max-h-[50vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-muted">
              Aucun raccourci pour cette requête.
              <button
                type="button"
                className="mt-3 block min-h-11 text-brass underline underline-offset-4"
                onClick={() => {
                  onClose();
                  router.push(q.trim() ? `/recherche?q=${encodeURIComponent(q.trim())}` : "/recherche");
                }}
              >
                Ouvrir la recherche intégrale
              </button>
            </li>
          ) : (
            results.map((item, i) => (
              <li key={item.href}>
                <button
                  type="button"
                  data-jump
                  onClick={() => go(item)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex min-h-11 w-full flex-col items-start px-4 py-3 text-left ${
                    i === active ? "bg-bg-3" : ""
                  }`}
                >
                  <span className="text-[10px] tracking-[0.14em] text-brass uppercase">{item.group}</span>
                  <span className="font-display text-lg text-ink">{item.title}</span>
                  <span className="line-clamp-1 text-sm text-muted">{item.hint}</span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center justify-between border-t border-line px-4 py-2 text-xs text-muted">
          <span>↑↓ entrer · esc</span>
          <button
            type="button"
            className="text-brass underline underline-offset-4"
            onClick={() => {
              onClose();
              router.push(q.trim() ? `/recherche?q=${encodeURIComponent(q.trim())}` : "/recherche");
            }}
          >
            Recherche intégrale
          </button>
        </div>
      </div>
    </div>
  );
}

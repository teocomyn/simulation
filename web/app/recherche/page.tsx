import { Suspense } from "react";
import { SearchBox } from "@/components/SearchBox";
import { getSection } from "@/lib/catalog";
import { loadAllDocs } from "@/lib/content";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Recherche",
  description: "Recherche intégrale dans les titres, thèses et markdown source des 38 textes.",
  path: "/recherche",
});

export default async function RecherchePage() {
  const all = await loadAllDocs();
  const items = all.map((d) => ({
    slug: d.slug,
    title: d.title,
    thesis: d.thesis,
    section: getSection(d.section)?.title ?? d.section,
    excerpt: d.excerpt,
    body: d.body,
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="kicker">Index</p>
      <h1 className="display mt-3 text-4xl text-ink">Chercher dans les 38 textes</h1>
      <p className="mt-4 text-muted">
        Le moteur lit titres, thèses et le texte intégral du markdown source.
      </p>
      <div className="mt-8">
        <Suspense fallback={<p className="text-muted">Préparation de l&apos;index…</p>}>
          <SearchBox items={items} />
        </Suspense>
      </div>
    </main>
  );
}

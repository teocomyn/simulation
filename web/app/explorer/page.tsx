import { ExplorerBrowser } from "@/components/ExplorerBrowser";
import { docs, sections } from "@/lib/catalog";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Explorer le dossier",
  description: "38 textes du corpus Simulation, section par section, avec filtre des textes pivots.",
  path: "/explorer",
});

export default function ExplorerPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">Corpus</p>
      <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
        {docs.length} textes, lus dans l&apos;ordre du dossier
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Chaque page rend le markdown source. Rien n&apos;est résumé à la place des données.
      </p>
      <div className="mt-8">
        <ExplorerBrowser sections={sections} docs={docs} />
      </div>
    </main>
  );
}

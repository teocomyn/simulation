import Link from "next/link";
import { factcheckSummary } from "@/lib/data/factcheck";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sources",
  description: "Bibliographie primaire au 29 août 2026 et fact-check des 51 affirmations du corpus.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">09 · Vérification</p>
      <h1 className="display mt-3 text-4xl text-ink">Sources primaires, 29 août 2026</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Toute source secondaire est identifiée comme telle. Les communiqués ne
        remplacent pas les papiers.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/d/sources/bibliographie" className="surface p-6">
          <h2 className="font-display text-2xl text-ink">Bibliographie</h2>
          <p className="mt-2 text-sm text-muted">
            Bostrom, Chalmers, Beane, Wolpert, COGITATE, Vazza, Hecht, archives Stargate.
          </p>
        </Link>
        <Link href="/outils/fact-check" className="surface p-6">
          <h2 className="font-display text-2xl text-ink">51 affirmations</h2>
          <p className="mt-2 text-sm text-muted">
            {factcheckSummary.exact} exactes · {factcheckSummary.nuance} à nuancer ·{" "}
            {factcheckSummary.false} fausses · {factcheckSummary.unknown} non vérifiables
          </p>
        </Link>
        <Link href="/d/reception/fil-de-commentaires" className="surface p-6">
          <h2 className="font-display text-2xl text-ink">Second fact-check</h2>
          <p className="mt-2 text-sm text-muted">
            163 commentaires. Non-signalisation, Hoffman, Wolpert contre C7.
          </p>
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import { BayesLab } from "@/components/tools/BayesLab";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Facteur de Bayes",
  description: "Quand P(D|H1) = P(D|H2), l'observation est vide. BF = 1 pour presque tous les arguments du domaine.",
  path: "/outils/bayes",
});

export default function BayesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">11 · Mathématiques</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Quand l&apos;observation ne dit rien</h1>
      <p className="mt-4 max-w-2xl font-mono text-sm text-muted">
        P(D|H₁) = P(D|H₂) ⇒ P(H₁|D)/P(H₂|D) = P(H₁)/P(H₂) · BF = 1
      </p>
      <div className="mt-10">
        <BayesLab />
      </div>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/mathematiques/sous-determination" className="text-brass">
          Sous-détermination
        </Link>
      </p>
    </main>
  );
}

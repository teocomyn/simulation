import Link from "next/link";
import { DecoherenceLab } from "@/components/tools/DecoherenceLab";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Décohérence",
  description: "Le temps de décohérence τ_D ferme conscience-effondrement et rendu à la demande.",
  path: "/outils/decoherence",
});

export default function DecoherencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">11 · Mathématiques</p>
      <h1 className="mt-3 font-display text-4xl text-ink">La conscience arrive dernière</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Ordres de grandeur seulement. Ils suffisent : le rapport perception / décohérence
        s&apos;étend de 10¹³ à 10³⁰.
      </p>
      <div className="mt-10">
        <DecoherenceLab />
      </div>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/mathematiques/decoherence-boltzmann" className="text-brass">
          Décohérence et Boltzmann
        </Link>
      </p>
    </main>
  );
}

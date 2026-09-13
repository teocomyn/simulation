import Link from "next/link";
import { TrilemmaLab } from "@/components/tools/TrilemmaLab";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Laboratoire du trilemme",
  description: "f_p, f_I et N̄ donnent f_sim. Retirez P1, la substrat-indépendance : plus rien. Probabilité conditionnelle.",
  path: "/outils/trilemme",
});

export default function TrilemmePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">01 · Argument</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Le trilemme, sans caricature</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Bostrom démontre une disjonction, pas un chiffre. f_sim → 1 dès que f_p · f_I n&apos;est
        pas quasi nul <em>et</em> que N est astronomique. Retirez la substrat-indépendance :
        l&apos;édifice s&apos;effondre.
      </p>
      <div className="mt-10">
        <TrilemmaLab />
      </div>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/argument/trilemme-bostrom" className="text-brass">
          Le trilemme de Bostrom
        </Link>{" "}
        ·{" "}
        <Link href="/d/argument/faille-probabiliste" className="text-brass">
          La faille probabiliste
        </Link>
      </p>
    </main>
  );
}

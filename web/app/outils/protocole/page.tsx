import Link from "next/link";
import { ProtocolForm } from "@/components/tools/ProtocolForm";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Règle 0",
  description: "Sans prédiction différentielle, l'affirmation reste métaphysique et n'entre pas dans le corpus empirique.",
  path: "/outils/protocole",
});

export default function ProtocolePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="kicker">08 · Protocole</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Règle 0</h1>
      <blockquote className="mt-6 border-l-2 border-brass pl-4 font-display text-xl italic text-ink">
        Une hypothèse de simulation qui ne produit pas au moins une observation où elle diverge
        de la physique standard n&apos;entre pas dans le corpus. Elle est archivée comme
        position métaphysique, pas comme hypothèse de travail.
      </blockquote>
      <p className="mt-6 text-base leading-7 text-muted">
        Cette règle élimine d&apos;un coup 90 % de la littérature du domaine. C&apos;est le but.
        Survivants : Beane, et Campbell comme méthode, prédiction probablement fausse.
      </p>
      <div className="mt-10">
        <ProtocolForm />
      </div>
      <p className="mt-8 text-sm text-muted">
        Sources :{" "}
        <Link href="/d/protocole/programme-de-recherche" className="text-brass">
          Programme
        </Link>{" "}
        ·{" "}
        <Link href="/d/protocole/hygiene-epistemique" className="text-brass">
          Hygiène
        </Link>
      </p>
    </main>
  );
}

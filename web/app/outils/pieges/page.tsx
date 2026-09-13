import Link from "next/link";
import { traps } from "@/lib/data/traps";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Quatorze pièges",
  description: "P1 à P14. Un piège nommé est un piège repérable dans le débat sur la simulation.",
  path: "/outils/pieges",
});

export default function PiegesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">08 · Protocole</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Un piège nommé est un piège repérable</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {traps.map((p) => (
          <article key={p.id} className="border border-line bg-bg-2 p-5">
            <p className="font-mono text-xs text-brass">{p.id}</p>
            <h2 className="mt-2 font-display text-2xl text-ink">{p.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink-2">{p.form}</p>
            <p className="mt-4 border-t border-line pt-3 text-sm italic text-muted">{p.test}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/protocole/hygiene-epistemique" className="text-brass">
          Hygiène épistémique
        </Link>
      </p>
    </main>
  );
}

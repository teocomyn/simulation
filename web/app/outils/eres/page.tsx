import Link from "next/link";
import { eras, metaphors } from "@/lib/data/eras";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ères et métaphores",
  description: "Cinq ères cosmologiques. Nous sommes à 0,01 % de l'ère stellifère. Chaque époque a sa métaphore du réel.",
  path: "/outils/eres",
});

export default function EresPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">05 · Cosmologie · 01 · Généalogie</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Cinq ères, neuf métaphores</h1>
      <div className="mt-10 space-y-3">
        {eras.map((e) => (
          <article
            key={e.id}
            className={`border p-5 ${e.here ? "border-brass bg-bg-3" : "border-line bg-bg-2"}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-ink">{e.name}</h2>
              <span className="font-mono text-xs text-brass">{e.scale}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{e.body}</p>
            {e.here ? <p className="mt-3 text-xs tracking-[0.14em] text-brass uppercase">Nous sommes ici · 0,01 %</p> : null}
          </article>
        ))}
      </div>
      <h2 className="mt-14 font-display text-3xl text-ink">La métaphore suit la machine</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-bg-3 text-left">
              <th className="border border-line px-3 py-2">Époque</th>
              <th className="border border-line px-3 py-2">Technologie</th>
              <th className="border border-line px-3 py-2">Figure du réel</th>
            </tr>
          </thead>
          <tbody>
            {metaphors.map((m) => (
              <tr key={m.era}>
                <td className="border border-line px-3 py-2 text-ink">{m.era}</td>
                <td className="border border-line px-3 py-2 text-muted">{m.tech}</td>
                <td className="border border-line px-3 py-2 text-ink-2">{m.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-sm text-muted">
        Sources :{" "}
        <Link href="/d/cosmologie/cinq-eres" className="text-brass">
          Les cinq ères
        </Link>{" "}
        ·{" "}
        <Link href="/d/argument/genealogie-du-doute" className="text-brass">
          Généalogie du doute
        </Link>
      </p>
    </main>
  );
}

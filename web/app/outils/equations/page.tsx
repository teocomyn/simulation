import Link from "next/link";
import { depthLevels } from "@/lib/data/equations";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Échelle de profondeur",
  description: "Niveaux 0 à 6. Les mathématiques déplacent la question du fondamental, elles n'y répondent pas.",
  path: "/outils/equations",
});

export default function EquationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">11 · Mathématiques</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink">
        Les mathématiques ne répondent pas. Elles déplacent.
      </h1>
      <div className="mt-10 space-y-6">
        {depthLevels.map((lvl) => (
          <article key={lvl.level} className="border border-line bg-bg-2 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-ink">
                <span className="font-mono text-sm text-brass">N{lvl.level}</span>{" "}
                {lvl.title}
              </h2>
              <p className="text-xs tracking-[0.12em] text-dim uppercase">
                Ferme : {lvl.closes}
              </p>
            </div>
            <p className="mt-2 text-sm text-muted">Par {lvl.by}</p>
            <ul className="mt-5 space-y-3">
              {lvl.items.map((item) => (
                <li key={item.eq} className="border-t border-line pt-3">
                  <code className="block font-mono text-sm text-brass">{item.eq}</code>
                  <span className="mt-1 block text-sm text-muted">{item.note}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-2xl font-display text-xl italic text-brass-2">
        Quel est le niveau le plus fondamental, et existe-t-il seulement un dernier niveau ?
      </p>
      <p className="mt-6 text-sm text-muted">
        Source :{" "}
        <Link href="/d/mathematiques/equations-profondes" className="text-brass">
          Les équations les plus profondes
        </Link>
      </p>
    </main>
  );
}

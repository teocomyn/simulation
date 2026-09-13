"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { chain, hypotheses, type Hypothesis } from "@/lib/data/ontologies";
import { readQuery, writeQuery } from "@/lib/query-state";

const compat: Record<Hypothesis["compatibleH2"], string> = {
  exclusive: "Exclusive de H2",
  assumes: "Suppose H2",
  compatible: "Compatible avec H2",
  independent: "Indépendante de H2",
  reformulates: "Reformule H2",
};

export default function OntologieToolPage() {
  const [active, setActive] = useState(hypotheses[0]);

  useEffect(() => {
    const id = readQuery().get("h");
    const found = hypotheses.find((h) => h.id === id);
    if (found) setActive(found);
  }, []);

  useEffect(() => {
    const q = new URLSearchParams();
    q.set("h", active.id);
    writeQuery(q);
  }, [active]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">04 · Ontologie</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Huit hypothèses de niveau fondamental</h1>
      <p className="mt-4 max-w-2xl font-display text-xl italic text-brass-2">{chain}</p>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hypotheses.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setActive(h)}
            className={`border p-4 text-left ${active.id === h.id ? "border-brass bg-bg-3" : "border-line bg-bg-2"}`}
          >
            <span className="font-mono text-xs text-brass">{h.id}</span>
            <span className="mt-1 block font-display text-lg leading-snug text-ink">{h.name}</span>
          </button>
        ))}
      </div>
      <article className="mt-8 border border-line bg-bg-2 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-brass">{active.id}</span>
          <span className="text-[11px] tracking-[0.14em] text-dim uppercase">{active.status}</span>
          <span className="text-[11px] tracking-[0.14em] text-muted uppercase">
            {compat[active.compatibleH2]}
          </span>
        </div>
        <h2 className="mt-3 font-display text-3xl text-ink">{active.name}</h2>
        <p className="mt-2 font-mono text-sm text-muted">{active.formula}</p>
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-dim uppercase">Force</dt>
            <dd className="mt-1 text-sm leading-6 text-ink-2">{active.strength}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-dim uppercase">Faiblesse</dt>
            <dd className="mt-1 text-sm leading-6 text-ink-2">{active.weakness}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-dim uppercase">Prédiction</dt>
            <dd className="mt-1 text-sm leading-6 text-ink-2">{active.prediction}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-dim uppercase">Rang conceptuel</dt>
            <dd className="mt-1 text-sm leading-6 text-ink-2">
              {active.rank} · {active.rankNote}
            </dd>
          </div>
        </dl>
      </article>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/ontologie/carte-des-niveaux" className="text-brass">
          Carte des niveaux
        </Link>
      </p>
    </main>
  );
}

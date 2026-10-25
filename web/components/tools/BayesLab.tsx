"use client";

import { useState } from "react";
import { useLocationSearch, writeQuery } from "@/lib/query-state";

type Params = { p1: number; p2: number; prior: number };

const DEFAULTS: Params = { p1: 0.5, p2: 0.5, prior: 1 };

function fromSearch(search: string): Params {
  const q = new URLSearchParams(search);
  const num = (key: keyof Params, min: number, max: number) => {
    const value = Number(q.get(key));
    return q.has(key) && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : DEFAULTS[key];
  };
  return { p1: num("p1", 0.01, 1), p2: num("p2", 0.01, 1), prior: num("prior", 0.1, 10) };
}

export function BayesLab() {
  const search = useLocationSearch();
  const [override, setOverride] = useState<Params | null>(null);
  const params = override ?? fromSearch(search);
  const { p1, p2, prior } = params;

  function update(patch: Partial<Params>) {
    const next = { ...params, ...patch };
    setOverride(next);
    writeQuery(new URLSearchParams({ p1: String(next.p1), p2: String(next.p2), prior: String(next.prior) }));
  }

  const bf = p2 === 0 ? Infinity : p1 / p2;
  const posterior = Number.isFinite(bf) ? prior * bf : Infinity;
  const empty = Math.abs(p1 - p2) < 0.02;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 border border-line bg-bg-2 p-6">
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>P(D | H_simulation)</span>
            <span className="font-mono text-brass">{p1.toFixed(2)}</span>
          </div>
          <input type="range" min={0.01} max={1} step={0.01} value={p1} onChange={(e) => update({ p1: Number(e.target.value) })} className="mt-2 w-full accent-[var(--brass)]" />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>P(D | H_non)</span>
            <span className="font-mono text-brass">{p2.toFixed(2)}</span>
          </div>
          <input type="range" min={0.01} max={1} step={0.01} value={p2} onChange={(e) => update({ p2: Number(e.target.value) })} className="mt-2 w-full accent-[var(--brass)]" />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>Prior P(H_S) / P(H_N)</span>
            <span className="font-mono text-brass">{prior.toFixed(2)}</span>
          </div>
          <input type="range" min={0.1} max={10} step={0.1} value={prior} onChange={(e) => update({ prior: Number(e.target.value) })} className="mt-2 w-full accent-[var(--brass)]" />
        </label>
      </div>
      <div className="border border-line bg-bg-2 p-6">
        <p className="kicker">Facteur de Bayes</p>
        <p className="mt-4 font-display text-5xl text-ink">{Number.isFinite(bf) ? bf.toFixed(2) : "∞"}</p>
        <p className="mt-2 text-sm text-muted">
          Posterior / prior = {Number.isFinite(posterior) ? posterior.toFixed(2) : "∞"}
        </p>
        <p className={`mt-6 text-sm leading-6 ${empty ? "text-warn" : "text-ink-2"}`}>
          {empty
            ? "BF ≈ 1. L'observation est également probable sous les deux hypothèses. Elle ne dit rien. C'est le cas de 12 arguments populaires sur 12, du cerveau prédictif, de Planck, de l'information, de māyā."
            : "L'observation discrimine. Dans toute la littérature du dossier, un seul observable atteint ce régime : l'anisotropie ℓ = 4 des rayons cosmiques UHE (Beane). Il est négatif."}
        </p>
      </div>
    </div>
  );
}

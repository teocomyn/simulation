"use client";

import { useEffect, useState } from "react";
import { readQuery, writeQuery } from "@/lib/query-state";

export function BayesLab() {
  const [p1, setP1] = useState(0.5);
  const [p2, setP2] = useState(0.5);
  const [prior, setPrior] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const q = readQuery();
    if (q.has("p1")) setP1(Number(q.get("p1")));
    if (q.has("p2")) setP2(Number(q.get("p2")));
    if (q.has("prior")) setPrior(Number(q.get("prior")));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const q = new URLSearchParams();
    q.set("p1", String(p1));
    q.set("p2", String(p2));
    q.set("prior", String(prior));
    writeQuery(q);
  }, [p1, p2, prior, ready]);

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
          <input type="range" min={0.01} max={1} step={0.01} value={p1} onChange={(e) => setP1(Number(e.target.value))} className="mt-2 w-full accent-[var(--brass)]" />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>P(D | H_non)</span>
            <span className="font-mono text-brass">{p2.toFixed(2)}</span>
          </div>
          <input type="range" min={0.01} max={1} step={0.01} value={p2} onChange={(e) => setP2(Number(e.target.value))} className="mt-2 w-full accent-[var(--brass)]" />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>Prior P(H_S) / P(H_N)</span>
            <span className="font-mono text-brass">{prior.toFixed(2)}</span>
          </div>
          <input type="range" min={0.1} max={10} step={0.1} value={prior} onChange={(e) => setPrior(Number(e.target.value))} className="mt-2 w-full accent-[var(--brass)]" />
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

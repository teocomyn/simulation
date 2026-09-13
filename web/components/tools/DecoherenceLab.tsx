"use client";

import { useMemo, useState } from "react";

const ENVIRONMENTS = [
  { id: "cmb", name: "CMB / vide cosmique", lambda: 1e-6, note: "Grain de poussière 1 s : déjà décohéré par le fond diffus." },
  { id: "air", name: "Air à 300 K", lambda: 1e20, note: "Objet macroscopique : 10⁻³¹ à 10⁻²⁰ s." },
  { id: "neuron", name: "Neurone (Tegmark)", lambda: 1e18, note: "≈ 10⁻²⁰ s. La conscience arrive dernière." },
  { id: "lab", name: "Labo isolé", lambda: 1e8, note: "Encore des ordres de grandeur sous la perception." },
];

export function DecoherenceLab() {
  const [env, setEnv] = useState(ENVIRONMENTS[1]);
  const [dx, setDx] = useState(1e-6);

  const tau = useMemo(() => 1 / (env.lambda * dx * dx), [env, dx]);
  const ratio = 0.1 / tau;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5 border border-line bg-bg-2 p-6">
        <div className="grid gap-2">
          {ENVIRONMENTS.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setEnv(e)}
              className={`border px-3 py-2 text-left text-sm ${env.id === e.id ? "border-brass text-ink" : "border-line text-muted"}`}
            >
              {e.name}
            </button>
          ))}
        </div>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span>Δx (m)</span>
            <span className="font-mono text-brass">{dx.toExponential(1)}</span>
          </div>
          <input
            type="range"
            min={-10}
            max={-3}
            step={0.1}
            value={Math.log10(dx)}
            onChange={(e) => setDx(10 ** Number(e.target.value))}
            className="mt-2 w-full accent-[var(--brass)]"
          />
        </label>
      </div>
      <div className="border border-line bg-bg-2 p-6">
        <p className="kicker">τ_D = 1 / (Λ Δx²)</p>
        <p className="mt-4 font-display text-5xl text-ink">{tau.toExponential(1)} s</p>
        <p className="mt-3 text-sm text-muted">
          Rapport perception (0,1 s) / décohérence ≈ {ratio.toExponential(1)}
        </p>
        <p className="mt-6 text-sm leading-6 text-ink-2">{env.note}</p>
        <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-muted">
          La conscience n&apos;est pas requise. L&apos;information est déjà publique. Cela ferme
          « la conscience cause l&apos;effondrement » et « le rendu à la demande » dans tous les
          régimes où nous savons calculer.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { useLocationSearch, writeQuery } from "@/lib/query-state";

/** Curseur N̄ par défaut : 27 simulations, soit κ ≈ 1 et f_sim ≈ 50 %, là où le résultat est le plus sensible. */
const DEFAULT_N_SLIDE = 12;

type Params = { fp: number; fi: number; n: number; p1: boolean };

const DEFAULTS: Params = { fp: 0.2, fi: 0.2, n: DEFAULT_N_SLIDE, p1: true };

function fromSearch(search: string): Params {
  const q = new URLSearchParams(search);
  const num = (key: string, fallback: number, min: number, max: number) => {
    const value = Number(q.get(key));
    return q.has(key) && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
  };
  return {
    fp: num("fp", DEFAULTS.fp, 0, 1),
    fi: num("fi", DEFAULTS.fi, 0, 1),
    n: num("n", DEFAULTS.n, 0, 100),
    p1: q.has("p1") ? q.get("p1") !== "0" : DEFAULTS.p1,
  };
}

function toSearch(p: Params) {
  return new URLSearchParams({ fp: String(p.fp), fi: String(p.fi), n: String(p.n), p1: p.p1 ? "1" : "0" });
}

function logSlider(value: number, min: number, max: number) {
  const minL = Math.log10(min);
  const maxL = Math.log10(max);
  return 10 ** (minL + (value / 100) * (maxL - minL));
}

export function TrilemmaLab() {
  const search = useLocationSearch();
  const [override, setOverride] = useState<Params | null>(null);
  const params = override ?? fromSearch(search);
  const { fp, fi, n: nSlide, p1 } = params;

  function update(patch: Partial<Params>) {
    const next = { ...params, ...patch };
    setOverride(next);
    writeQuery(toSearch(next));
  }

  const N = logSlider(nSlide, 1, 1e12);
  const kappa = fp * fi * N;
  const fsim = p1 ? kappa / (kappa + 1) : 0;

  const branch = useMemo(() => {
    if (!p1) return "P1 retiré : les simulés ne sont pas dans notre classe. f_sim n'a plus d'objet.";
    if (fp < 0.02) return "Branche (1) : presque aucune civilisation n'atteint le stade posthumain, le Grand Filtre.";
    if (fi < 0.02) return "Branche (2) : les civilisations posthumaines n'ont pas intérêt à simuler des ancêtres conscients.";
    if (fsim > 0.9) return "Branche (3) : si les conditions tiennent, la fraction simulée tend vers 1. Cela ne dit toujours pas où nous sommes.";
    return "Les trois branches restent ouvertes. Aucun chiffre inconditionnel n'est dérivé.";
  }, [fp, fi, fsim, p1]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 border border-line bg-bg-2 p-6">
        <label className="block">
          <div className="flex justify-between text-sm">
            <span className="text-ink">f_p · fraction posthumaine</span>
            <span className="font-mono text-brass">{fp.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={fp}
            onChange={(e) => update({ fp: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--brass)]"
          />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span className="text-ink">f_I · intérêt pour les simulations d&apos;ancêtres</span>
            <span className="font-mono text-brass">{fi.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={fi}
            onChange={(e) => update({ fi: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--brass)]"
          />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm">
            <span className="text-ink">N̄ · simulations par civilisation</span>
            <span className="font-mono text-brass">{N.toExponential(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={nSlide}
            onChange={(e) => update({ n: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--brass)]"
          />
        </label>
        <label className="flex items-center gap-3 text-sm text-ink">
          <input
            type="checkbox"
            checked={p1}
            onChange={(e) => update({ p1: e.target.checked })}
            className="accent-[var(--brass)]"
          />
          P1 · substrat-indépendance de la conscience
        </label>
        <button
          type="button"
          className="text-sm text-brass underline underline-offset-4"
          onClick={() => update(DEFAULTS)}
        >
          Réinitialiser
        </button>
      </div>
      <div className="border border-line bg-bg-2 p-6">
        <p className="kicker">Résultat conditionnel</p>
        <p className="mt-4 font-mono text-sm text-muted">κ = f_p · f_I · N̄ = {kappa.toExponential(2)}</p>
        <p className="mt-2 font-display text-5xl text-ink">{(fsim * 100).toFixed(2)}%</p>
        <p className="mt-1 text-sm text-muted">f_sim = κ / (κ + 1)</p>
        <p className="mt-6 text-sm leading-6 text-ink-2">{branch}</p>
        <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-muted">
          C&apos;est P(simulé | P1 ∧ … ∧ P5). Ce n&apos;est pas P(simulé). f_I est
          structurellement inaccessible : préférences d&apos;entités hypothétiques.
        </p>
      </div>
    </div>
  );
}

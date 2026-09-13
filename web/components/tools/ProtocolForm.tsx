"use client";

import { useMemo, useState } from "react";
import { protocolSteps } from "@/lib/data/traps";

export function ProtocolForm() {
  const [answers, setAnswers] = useState<string[]>(() => protocolSteps.map(() => ""));

  const result = useMemo(() => {
    const filled = answers.filter((a) => a.trim()).length;
    const failEarly = !answers[0]?.trim() || !answers[1]?.trim();
    if (filled === 0) return null;
    if (failEarly) {
      return {
        title: "Classer comme position philosophique",
        body: "Sans version assez précise pour prédire, ou sans divergence d'avec la physique standard, l'affirmation n'entre pas dans le corpus empirique. C'est une catégorie honorable. Ce n'est pas la même catégorie.",
      };
    }
    return {
      title: "Candidate à l'hypothèse de travail",
      body: "Elle produit au moins une observation où elle diverge. Reste à pré-enregistrer, énumérer les alternatives, lire le papier et calculer le facteur de Bayes.",
    };
  }, [answers]);

  return (
    <div className="space-y-4">
      {protocolSteps.map((step, i) => (
        <label key={step} className="block border border-line bg-bg-2 p-4">
          <span className="font-mono text-xs text-brass">{String(i + 1).padStart(2, "0")}</span>
          <span className="ml-3 text-sm text-ink">{step}</span>
          <textarea
            value={answers[i]}
            onChange={(e) => {
              const next = [...answers];
              next[i] = e.target.value;
              setAnswers(next);
            }}
            rows={2}
            className="mt-3 w-full resize-y border border-line bg-bg px-3 py-2 text-sm text-ink-2 outline-none focus:border-brass"
          />
        </label>
      ))}
      {result ? (
        <div className="border border-brass/40 bg-bg-2 p-5">
          <p className="kicker">Verdict méthodologique</p>
          <h3 className="mt-2 font-display text-2xl text-ink">{result.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{result.body}</p>
        </div>
      ) : null}
    </div>
  );
}

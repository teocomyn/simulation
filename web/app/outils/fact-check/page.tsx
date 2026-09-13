"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { factcheckSummary, factchecks, type CheckMark } from "@/lib/data/factcheck";
import { factcheckGroupHref } from "@/lib/links";
import { readQuery, writeQuery } from "@/lib/query-state";

const labels: Record<CheckMark, string> = {
  exact: "Exact",
  nuance: "À nuancer",
  false: "Faux",
  unknown: "Non vérifiable",
};

const colors: Record<CheckMark, string> = {
  exact: "text-good",
  nuance: "text-warn",
  false: "text-bad",
  unknown: "text-info",
};

export default function FactCheckPage() {
  const [filter, setFilter] = useState<CheckMark | "all">("all");
  const items = useMemo(
    () => (filter === "all" ? factchecks : factchecks.filter((f) => f.verdict === filter)),
    [filter],
  );

  useEffect(() => {
    const next = readQuery().get("v");
    if (next === "exact" || next === "nuance" || next === "false" || next === "unknown") {
      setFilter(next);
    }
  }, []);

  useEffect(() => {
    const q = new URLSearchParams();
    if (filter !== "all") q.set("v", filter);
    writeQuery(q);
  }, [filter]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">09 · Sources</p>
      <h1 className="mt-3 font-display text-4xl text-ink">51 affirmations du corpus fourni</h1>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {(["exact", "nuance", "false", "unknown"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(filter === k ? "all" : k)}
            className={`border p-4 text-left ${filter === k ? "border-brass bg-bg-3" : "border-line bg-bg-2"}`}
          >
            <span className={`font-display text-3xl ${colors[k]}`}>{factcheckSummary[k]}</span>
            <span className="mt-1 block text-sm text-muted">{labels[k]}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-2">
        {items.map((f) => (
          <article key={f.n} className="grid gap-2 border border-line bg-bg-2 p-4 md:grid-cols-[3rem_8rem_1fr]">
            <span className="font-mono text-xs text-dim">{String(f.n).padStart(2, "0")}</span>
            <span className={`text-sm ${colors[f.verdict]}`}>{labels[f.verdict]}</span>
            <div>
              <p className="text-sm text-ink">{f.claim}</p>
              <p className="mt-1 text-sm text-muted">
                {factcheckGroupHref[f.group] ? (
                  <Link href={factcheckGroupHref[f.group]} className="text-brass underline underline-offset-4">
                    {f.group}
                  </Link>
                ) : (
                  f.group
                )}{" "}
                · {f.note}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Source :{" "}
        <Link href="/d/sources/fact-check-corpus" className="text-brass">
          Fact-check du corpus
        </Link>
      </p>
    </main>
  );
}

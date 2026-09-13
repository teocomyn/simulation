"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { popularArguments } from "@/lib/data/arguments";
import { readQuery, writeQuery } from "@/lib/query-state";

export default function ArgumentsPage() {
  const [id, setId] = useState(popularArguments[0].id);
  const active = popularArguments.find((a) => a.id === id) ?? popularArguments[0];

  useEffect(() => {
    const next = readQuery().get("a");
    if (next && popularArguments.some((a) => a.id === next)) setId(next);
  }, []);

  useEffect(() => {
    const q = new URLSearchParams();
    q.set("a", id);
    writeQuery(q);
  }, [id]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="kicker">02 · Physique</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Aucun argument populaire ne résiste</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Ce qui reste : le trilemme comme structure conditionnelle, Beane, et la question
        ontologique reformulée.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-[18rem_1fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {popularArguments.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setId(a.id)}
              className={`flex items-center gap-3 border px-3 py-2 text-left ${id === a.id ? "border-brass bg-bg-3" : "border-line bg-bg-2"}`}
            >
              <span className={`font-mono text-xs ${a.verdict === "false" ? "text-bad" : "text-warn"}`}>
                {a.id}
              </span>
              <span className="text-sm text-ink">{a.title}</span>
            </button>
          ))}
        </div>
        <article className="border border-line bg-bg-2 p-6">
          <p className={`kicker ${active.verdict === "false" ? "text-bad" : "text-warn"}`}>
            {active.id} · {active.verdictLabel}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink">{active.title}</h2>
          <p className="mt-4 font-display text-xl italic text-ink-2">« {active.claim} »</p>
          <p className="mt-6 text-base leading-7 text-muted">{active.why}</p>
          <Link href={active.href} className="mt-6 inline-block text-sm text-brass">
            Lire le développement →
          </Link>
        </article>
      </div>
    </main>
  );
}

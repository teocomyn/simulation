"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { StarLegend } from "@/components/StarLegend";
import type { Doc, Section } from "@/lib/catalog";

export function ExplorerBrowser({
  sections,
  docs,
}: {
  sections: Section[];
  docs: Doc[];
}) {
  const [pivotOnly, setPivotOnly] = useState(false);
  const visible = useMemo(
    () => (pivotOnly ? docs.filter((d) => d.starred) : docs),
    [docs, pivotOnly],
  );

  return (
    <div>
      <div className="sticky top-[4.25rem] z-20 -mx-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex max-w-full gap-2 overflow-x-auto" aria-label="Aller à une section">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#sec-${s.id}`}
                className="shrink-0 border border-line bg-paper px-2.5 py-1.5 font-mono text-[11px] text-muted hover:border-ink hover:text-ink"
              >
                {s.number}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-pressed={pivotOnly}
            onClick={() => setPivotOnly((v) => !v)}
            className={`min-h-11 shrink-0 border px-3 text-sm ${
              pivotOnly ? "border-brass bg-paper text-brass" : "border-line bg-paper text-muted hover:text-ink"
            }`}
          >
            {pivotOnly ? "Tous les textes" : "Pivots seulement"}
          </button>
        </div>
      </div>

      <StarLegend className="mt-6" />

      <div className="mt-10 space-y-12">
        {sections.map((s) => {
          const items = visible.filter((d) => d.section === s.id);
          if (items.length === 0) return null;
          return (
            <section key={s.id} id={`sec-${s.id}`} className="scroll-mt-32">
              <div className="flex items-end justify-between border-b border-line pb-3">
                <div>
                  <p className="font-mono text-xs text-dim">{s.number}</p>
                  <h2 className="font-display text-2xl text-ink">{s.title}</h2>
                </div>
                <Link href={`/s/${s.id}`} className="min-h-11 text-sm text-brass underline underline-offset-4">
                  Section
                </Link>
              </div>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {items.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/d/${d.slug}`} className="surface block min-h-11 p-4">
                      <span className="font-display text-lg text-ink">
                        {d.title}
                        {d.starred ? <span className="ml-2 text-brass">★</span> : null}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-muted">{d.thesis}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

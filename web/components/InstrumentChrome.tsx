"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { adjacentInstruments } from "@/lib/nav-index";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/schema";

export function InstrumentChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { current, prev, next } = adjacentInstruments(pathname);

  if (!current) return children;

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: current.title,
          description: current.body,
          path: current.href,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Instruments", path: "/outils" },
          { name: current.title, path: current.href },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
          <Link href="/outils" className="hover:text-ink">
            Instruments
          </Link>
          <span className="mx-2 text-dim">/</span>
          <span className="text-ink">{current.title}</span>
        </nav>
      </div>
      <div className="-mt-4">{children}</div>
      <nav className="mx-auto max-w-6xl px-4 pb-14 sm:px-6" aria-label="Autres instruments">
        <div className="grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link href={prev.href} className="surface p-4">
              <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Précédent</span>
              <span className="mt-1 block font-display text-lg text-ink">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={next.href} className="surface p-4 sm:text-right">
              <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Suivant</span>
              <span className="mt-1 block font-display text-lg text-ink">{next.title}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
}

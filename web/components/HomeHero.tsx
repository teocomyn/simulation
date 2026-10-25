"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DecryptText } from "@/components/ui/decrypt-text";
import { ShaderBackground } from "@/components/ui/kk";
import { useHydrated, useReducedMotion } from "@/lib/client-hooks";
import { formatDateFr } from "@/lib/seo";

export function HomeHero({
  docCount,
  sectionCount,
  updated,
}: {
  docCount: number;
  sectionCount: number;
  updated: string;
}) {
  const reduce = useReducedMotion();
  const ready = useHydrated();

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        minHeight: "calc(100svh - 4.25rem)",
        ["--motiq-fg" as string]: "#fffdf8",
        ["--motiq-muted" as string]: "rgba(234,249,255,0.62)",
        ["--motiq-accent" as string]: "#5ad2f4",
        ["--motiq-accent-text" as string]: "#eaf9ff",
        ["--motiq-border" as string]: "rgba(234,249,255,0.28)",
        ["--motiq-surface" as string]: "#071920",
        ["--motiq-success" as string]: "#5ad2f4",
        ["--motiq-secondary-accent" as string]: "#5ad2f4",
      }}
    >
      {!ready || reduce ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 28% 18%, #1b6ca8 0%, transparent 52%), radial-gradient(ellipse at 82% 78%, #5ad2f4 0%, transparent 42%), #031c26",
          }}
        />
      ) : (
        <ShaderBackground className="pointer-events-none absolute inset-0 h-full w-full" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#031c26]/75 via-[#031c26]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col justify-between px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center justify-between gap-4 text-[#eaf9ff]/70">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[#5ad2f4] uppercase">
            Mis à jour le {formatDateFr(updated)}
          </p>
          <p className="hidden font-mono text-xs tracking-[0.16em] uppercase sm:block">
            {docCount} textes · {sectionCount} sections
          </p>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] items-end gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)]">
          <div className="min-w-0">
            {ready ? (
              <DecryptText
                as="h1"
                text="SIMULATION"
                variant="display"
                trigger="mount"
                loop={false}
                stagger={38}
                startDelay={180}
                retriggerOnHover={false}
                className="display !w-auto max-w-none text-[clamp(2.75rem,14vw,9.5rem)] font-semibold tracking-[-0.06em] text-[#fffdf8]"
              />
            ) : (
              <h1 className="display max-w-none text-[clamp(2.75rem,14vw,9.5rem)] font-semibold tracking-[-0.06em] text-[#fffdf8]">
                SIMULATION
              </h1>
            )}
            {ready ? (
              <DecryptText
                as="p"
                text="La question n'est pas « sommes-nous dans une simulation ? »"
                variant="display"
                trigger="mount"
                loop={false}
                startDelay={700}
                stagger={22}
                retriggerOnHover={false}
                className="mt-4 max-w-3xl text-[clamp(1.2rem,3.2vw,2.1rem)] font-medium leading-snug tracking-tight text-[#eaf9ff]"
              />
            ) : (
              <p className="mt-4 max-w-3xl text-[clamp(1.2rem,3.2vw,2.1rem)] font-medium leading-snug tracking-tight text-[#eaf9ff]">
                La question n&apos;est pas « sommes-nous dans une simulation ? »
              </p>
            )}
            <p className="mt-6 max-w-xl text-lg leading-7 text-[#eaf9ff]/80">
              Quel est le niveau le plus fondamental de la réalité, et cette question a-t-elle une
              réponse ?
            </p>
            <div className="mt-8">
              {ready ? (
                <DecryptText
                  text="query --fondamental --lock conscience"
                  variant="terminal"
                  trigger="mount"
                  startDelay={1100}
                  loop={6400}
                  className="w-full max-w-xl"
                />
              ) : (
                <p className="font-mono text-sm text-[#eaf9ff]/80">query --fondamental --lock conscience</p>
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/synthese" className="btn btn-primary">
                Lire la synthèse
              </Link>
              <Link
                href="/outils"
                className="btn border border-[#eaf9ff]/50 text-[#fffdf8] hover:bg-[#fffdf8] hover:text-[#031c26]"
              >
                Ouvrir les instruments
              </Link>
              <a
                href="#sommaire"
                className="btn border border-transparent text-[#eaf9ff]/80 underline underline-offset-4 hover:text-[#fffdf8]"
              >
                Continuer le dossier
              </a>
            </div>
          </div>

          <aside className="border border-[#eaf9ff]/20 bg-[#031c26]/45 p-6 backdrop-blur-sm">
            <BrandMark className="h-8 w-8 text-[#5ad2f4]" />
            <p className="mt-4 text-sm leading-6 text-[#eaf9ff]/80">
              L&apos;hypothèse n&apos;est pas une question, c&apos;en est quatre. Bostrom calcule
              une probabilité conditionnelle dont aucune condition n&apos;est établie.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-[#5ad2f4] uppercase">
              Règle 0 · chercher la vérité
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

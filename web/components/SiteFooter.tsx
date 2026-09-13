import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="inverse">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 text-ink">
              <BrandMark className="h-6 w-6 text-brass" />
              <span className="font-display text-2xl">Dossier</span>
            </div>
            <p className="mt-5 font-display text-2xl leading-snug text-ink">
              Nous cherchons la vérité, pas la simulation.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Revue constituée le 29 août 2026. Quatre questions séparées. Un argument
              conditionnel. Un verrou : l&apos;expérience subjective.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-muted">
            <Link href="/synthese" className="inline-flex min-h-11 items-center hover:text-ink">
              Synthèse
            </Link>
            <Link href="/outils" className="inline-flex min-h-11 items-center hover:text-ink">
              Instruments
            </Link>
            <Link href="/explorer" className="inline-flex min-h-11 items-center hover:text-ink">
              38 textes
            </Link>
            <Link href="/sources" className="inline-flex min-h-11 items-center hover:text-ink">
              Sources
            </Link>
            <Link href="/recherche" className="inline-flex min-h-11 items-center hover:text-ink">
              Recherche
            </Link>
            <Link href="/glossaire" className="inline-flex min-h-11 items-center hover:text-ink">
              Glossaire
            </Link>
            <Link href="/methode" className="inline-flex min-h-11 items-center hover:text-ink">
              Méthode
            </Link>
            <Link href="/outils/protocole" className="inline-flex min-h-11 items-center hover:text-ink">
              Règle 0
            </Link>
            <Link href="/rss.xml" className="inline-flex min-h-11 items-center hover:text-ink">
              RSS
            </Link>
            <Link href="/llms.txt" className="inline-flex min-h-11 items-center hover:text-ink">
              llms.txt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

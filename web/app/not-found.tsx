import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page absente",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <p className="kicker">404</p>
      <h1 className="display mt-3 text-4xl text-ink">Cette page n&apos;est pas dans le corpus.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Peut-être un niveau trop bas. Ou trop haut. Cherchez un titre, ou reprenez par un
        texte pivot.
      </p>
      <form action="/recherche" className="mt-8 flex flex-wrap gap-3" role="search">
        <label className="sr-only" htmlFor="q-404">
          Rechercher dans le corpus
        </label>
        <input
          id="q-404"
          name="q"
          type="search"
          placeholder="Wolpert, Bayes, conscience…"
          className="min-h-11 min-w-[16rem] flex-1 border border-line bg-paper px-3 text-ink placeholder:text-dim"
        />
        <button type="submit" className="btn btn-primary">
          Chercher
        </button>
      </form>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ghost">
          Revenir à la reformulation
        </Link>
        <Link href="/explorer" className="btn btn-ghost">
          Ouvrir le corpus
        </Link>
      </div>
      <ul className="mt-12 space-y-3 text-sm">
        <li>
          <Link href="/synthese" className="text-brass underline underline-offset-4">
            Synthèse
          </Link>
        </li>
        <li>
          <Link href="/d/argument/faille-probabiliste" className="text-brass underline underline-offset-4">
            La faille probabiliste
          </Link>
        </li>
        <li>
          <Link href="/d/mathematiques/wolpert" className="text-brass underline underline-offset-4">
            Wolpert 2025
          </Link>
        </li>
        <li>
          <Link href="/outils" className="text-brass underline underline-offset-4">
            Instruments
          </Link>
        </li>
      </ul>
    </main>
  );
}

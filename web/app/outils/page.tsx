import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { instruments } from "@/lib/nav-index";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Instruments",
  description: "Trilemme, Bayes, ontologie H1–H8, arguments, décohérence et Règle 0, extraits du corpus.",
  path: "/outils",
});

export default function OutilsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd
        data={webPageJsonLd({
          title: "Instruments",
          description:
            "Trilemme, Bayes, ontologie H1–H8, arguments, décohérence et Règle 0, extraits du corpus.",
          path: "/outils",
          type: "CollectionPage",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Instruments", path: "/outils" },
        ])}
      />
      <p className="answer-block max-w-2xl text-base leading-7 text-ink-2">
        Chaque instrument est calé sur un fichier source. Aucun chiffre n&apos;est inventé.
        Le trilemme, Bayes, H1–H8 et la Règle 0 extraient le dossier, ils ne l&apos;étendent
        pas.
      </p>
      <p className="kicker mt-10">Instruments</p>
      <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
        Ce que le dossier permet de faire, pas seulement de lire
      </h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {instruments.map((t, i) => (
          <Link key={t.href} href={t.href} className="surface grid gap-3 p-5 md:grid-cols-[3.5rem_1fr]">
            <span className="font-mono text-xs text-brass">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <h2 className="font-display text-2xl text-ink">{t.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{t.body}</p>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

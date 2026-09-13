import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/schema";
import { DATE_PUBLISHED, formatDateFr, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Méthode",
  description: "Comment le Dossier Simulation a été constitué, la Règle 0, et ce qu'il n'affirme pas.",
  path: "/methode",
});

export default function MethodePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd
        data={webPageJsonLd({
          title: "Méthode",
          description:
            "Comment le Dossier Simulation a été constitué, la Règle 0, et ce qu'il n'affirme pas.",
          path: "/methode",
          type: "AboutPage",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Méthode", path: "/methode" },
        ])}
      />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="hover:text-ink">
          Accueil
        </Link>
        <span className="mx-2 text-dim">/</span>
        <span className="text-ink">Méthode</span>
      </nav>
      <p className="kicker mt-8">Colophon</p>
      <h1 className="display mt-3 text-4xl text-ink">Méthode</h1>
      <p className="answer-block mt-6 border-l-2 border-brass bg-paper px-5 py-4 text-base leading-7 text-ink-2">
        Revue constituée le <time dateTime={DATE_PUBLISHED}>{formatDateFr()}</time>. Le site
        rend le corpus markdown. Il n&apos;ajoute aucune affirmation scientifique. Une hypothèse
        qui ne produit pas d&apos;observation divergente de la physique standard est archivée
        comme position métaphysique.
      </p>
      <div className="prose-dossier mt-10">
        <h2>Source de vérité</h2>
        <p>
          Les dossiers numérotés à la racine du dépôt sont le corpus. Chaque page article
          affiche ce fichier. Les instruments (trilemme, Bayes, H1–H8, fact-check) sont
          extraits de ces textes. Aucun chiffre n&apos;est inventé pour l&apos;interface.
        </p>
        <h2>Règle 0</h2>
        <p>
          Une hypothèse de simulation qui ne produit pas au moins une observation où elle
          diverge de la physique standard n&apos;entre pas dans le corpus empirique. Elle est
          archivée comme position métaphysique.
        </p>
        <h2>Ce que le dossier n&apos;affirme pas</h2>
        <p>
          Il n&apos;affirme pas que nous sommes simulés. Il n&apos;affirme pas que nous ne le
          sommes pas. Il sépare quatre questions, montre que Bostrom donne une probabilité
          conditionnelle, et place le verrou sur la conscience, pas sur le calcul.
        </p>
        <h2>Statuts</h2>
        <p>
          Les pastilles (établi, débattu, spéculatif, non scientifique) restent collées aux
          assertions. Elles ne sont pas décoratives.
        </p>
        <h2>Date</h2>
        <p>
          Le tableau est arrêté au {formatDateFr()} : Wolpert (décembre 2025), COGITATE (avril
          2025), l&apos;échange Vazza–Bostrom. Toute actualisation ultérieure devra être datée.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/outils/protocole" className="btn btn-primary">
          Appliquer la Règle 0
        </Link>
        <Link href="/glossaire" className="btn btn-ghost">
          Ouvrir le glossaire
        </Link>
      </div>
    </main>
  );
}

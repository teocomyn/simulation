import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/schema";
import { StatusBadge } from "@/components/StatusBadge";
import { latestUpdate } from "@/lib/dates";
import { DATE_PUBLISHED, formatDateFr, pageMeta } from "@/lib/seo";

const STATUSES: { label: string; meaning: string }[] = [
  { label: "[ÉTABLI]", meaning: "Publié, vérifié en source primaire, sans contestation sérieuse dans la littérature citée." },
  { label: "[DÉBATTU]", meaning: "Publié, mais contesté par des travaux sérieux. Aucune position ne fait consensus." },
  { label: "[SPÉCULATIF]", meaning: "Cohérent, parfois formalisé, sans appui empirique." },
  { label: "[NON SCIENTIFIQUE]", meaning: "Sans prédiction réfutable ni protocole contrôlé." },
  { label: "[TESTABLE]", meaning: "Produit une prédiction qu'une observation peut contredire." },
  { label: "[PRÉDICTION PROBABLEMENT FAUSSE]", meaning: "Testable, mais les données disponibles vont contre la prédiction." },
  { label: "[À VÉRIFIER]", meaning: "Calcul ou affirmation du dossier pas encore confronté à une source primaire." },
  { label: "[PROBLÈME OUVERT]", meaning: "Question posée précisément, sans réponse connue." },
  { label: "[PHILOSOPHIQUE]", meaning: "Question conceptuelle : analysable, pas tranchable par l'expérience." },
];

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
          Chaque affirmation porte une pastille, collée au texte. Elle n&apos;est pas
          décorative : elle dit ce que l&apos;affirmation vaut. Une pastille peut porter une
          précision après une virgule, par exemple « établi en AdS/CFT et modèles-jouets ».
          La précision fait partie du statut.
        </p>
        <dl className="not-prose mt-6 grid gap-4">
          {STATUSES.map((s) => (
            <div key={s.label} className="grid gap-1.5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-4">
              <dt>
                <StatusBadge>{s.label}</StatusBadge>
              </dt>
              <dd className="text-base leading-7 text-ink-2">{s.meaning}</dd>
            </div>
          ))}
        </dl>
        <h2>Dates</h2>
        <p>
          L&apos;état de l&apos;art est arrêté au {formatDateFr()} : Wolpert (décembre 2025),
          COGITATE (avril 2025), l&apos;échange Vazza, Edge et Brown, Bostrom. Le corpus a été
          modifié pour la dernière fois le {formatDateFr(latestUpdate())}. Chaque texte affiche
          sa propre date de mise à jour, tirée de l&apos;historique des versions.
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

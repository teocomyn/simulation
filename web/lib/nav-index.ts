import { docs, getSection, sections } from "./catalog";

export type JumpItem = {
  href: string;
  title: string;
  hint: string;
  group: "Page" | "Section" | "Texte" | "Instrument";
};

export const instruments = [
  {
    href: "/outils/ontologie",
    title: "Carte H1–H8",
    body: "Huit hypothèses, compatibilité, classement de plausibilité. H5 exclut H2.",
  },
  {
    href: "/outils/trilemme",
    title: "Laboratoire du trilemme",
    body: "f_p, f_I, N̄ → f_sim. Retirez P1 : plus rien. C'est une probabilité conditionnelle.",
  },
  {
    href: "/outils/arguments",
    title: "12 arguments populaires",
    body: "Aucun ne résiste. Verdict par verdict, avec le piège nommé.",
  },
  {
    href: "/outils/pieges",
    title: "14 pièges nommés",
    body: "P1 à P14. Un piège nommé est un piège repérable.",
  },
  {
    href: "/outils/bayes",
    title: "Facteur de Bayes",
    body: "Le théorème central. Quand P(D|H₁) = P(D|H₂), l'observation est vide.",
  },
  {
    href: "/outils/decoherence",
    title: "Temps de décohérence",
    body: "τ_D ferme conscience-effondrement et rendu à la demande.",
  },
  {
    href: "/outils/equations",
    title: "Échelle de profondeur",
    body: "Niveaux 0 à 6. Les mathématiques déplacent la question, elles n'y répondent pas.",
  },
  {
    href: "/outils/eres",
    title: "Cinq ères + métaphores",
    body: "Nous sommes à 0,01 % de l'ère stellifère. Chaque époque a sa métaphore.",
  },
  {
    href: "/outils/protocole",
    title: "Règle 0 et protocole",
    body: "Huit questions. Sans prédiction différentielle : archive métaphysique.",
  },
  {
    href: "/outils/fact-check",
    title: "51 affirmations",
    body: "Dashboard du corpus fourni : 27 exactes, 12 à nuancer, 6 fausses, 6 non vérifiables.",
  },
] as const;

export function adjacentInstruments(href: string) {
  const i = instruments.findIndex((item) => item.href === href);
  return {
    current: i >= 0 ? instruments[i] : undefined,
    prev: i > 0 ? instruments[i - 1] : undefined,
    next: i >= 0 && i < instruments.length - 1 ? instruments[i + 1] : undefined,
  };
}

const pages: JumpItem[] = [
  { href: "/", title: "Accueil", hint: "Couverture et parcours", group: "Page" },
  { href: "/synthese", title: "Synthèse", hint: "Position d'ensemble", group: "Page" },
  { href: "/explorer", title: "Corpus", hint: "38 textes", group: "Page" },
  { href: "/outils", title: "Instruments", hint: "Calculateurs et cartes", group: "Page" },
  { href: "/sources", title: "Sources", hint: "Bibliographie et fact-check", group: "Page" },
  { href: "/recherche", title: "Recherche intégrale", hint: "Texte complet des 38 fichiers", group: "Page" },
  { href: "/methode", title: "Méthode", hint: "Règle 0 et colophon", group: "Page" },
  { href: "/glossaire", title: "Glossaire", hint: "Q, H, A, P", group: "Page" },
];

export function jumpIndex(): JumpItem[] {
  return [
    ...pages,
    ...sections.map((s) => ({
      href: `/s/${s.id}`,
      title: s.title,
      hint: `${s.number} · ${s.blurb}`,
      group: "Section" as const,
    })),
    ...instruments.map((t) => ({
      href: t.href,
      title: t.title,
      hint: t.body,
      group: "Instrument" as const,
    })),
    ...docs.map((d) => ({
      href: `/d/${d.slug}`,
      title: d.title,
      hint: `${getSection(d.section)?.title ?? d.section} · ${d.thesis}`,
      group: "Texte" as const,
    })),
  ];
}

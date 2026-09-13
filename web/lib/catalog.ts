export type SectionId =
  | "synthese"
  | "argument"
  | "physique"
  | "conscience"
  | "ontologie"
  | "cosmologie"
  | "ethique"
  | "sociologie"
  | "protocole"
  | "sources"
  | "actualisation"
  | "mathematiques"
  | "biocomputing"
  | "reception";

export type Doc = {
  slug: string;
  file: string;
  section: SectionId;
  title: string;
  thesis: string;
  starred?: boolean;
};

export type Section = {
  id: SectionId;
  number: string;
  title: string;
  blurb: string;
  starred?: boolean;
};

export const sections: Section[] = [
  {
    id: "synthese",
    number: "00",
    title: "Synthèse",
    blurb: "La position d'ensemble, les quatre questions, les verdicts.",
  },
  {
    id: "argument",
    number: "01",
    title: "L'argument",
    blurb: "Le trilemme de Bostrom, sa faille probabiliste, la généalogie du doute.",
  },
  {
    id: "physique",
    number: "02",
    title: "Physique",
    blurb: "Ce que la physique établit, les signatures testables, les 12 arguments populaires.",
  },
  {
    id: "conscience",
    number: "03",
    title: "Conscience",
    blurb: "Le verrou réel : problème difficile, Campbell, réalisme de simulation.",
  },
  {
    id: "ontologie",
    number: "04",
    title: "Ontologie",
    blurb: "Huit hypothèses de niveau fondamental, et pourquoi H5 exclut H2.",
  },
  {
    id: "cosmologie",
    number: "05",
    title: "Cosmologie",
    blurb: "Les cinq ères, Boltzmann, fact-check de la fin de l'univers.",
  },
  {
    id: "ethique",
    number: "06",
    title: "Éthique",
    blurb: "Univers sans souffrance, et ce qu'une preuve changerait vraiment.",
  },
  {
    id: "sociologie",
    number: "07",
    title: "Sociologie",
    blurb: "Pourquoi la Silicon Valley, et pourquoi ça n'invalide rien.",
  },
  {
    id: "protocole",
    number: "08",
    title: "Protocole",
    blurb: "Règle 0, programme de recherche, quatorze pièges nommés.",
  },
  {
    id: "sources",
    number: "09",
    title: "Sources",
    blurb: "Bibliographie primaire et fact-check des 51 affirmations du corpus.",
  },
  {
    id: "actualisation",
    number: "10",
    title: "Actualisation 2026",
    blurb: "Wolpert, COGITATE, Vazza, DESI : ce qui a changé le tableau.",
    starred: true,
  },
  {
    id: "mathematiques",
    number: "11",
    title: "Mathématiques",
    blurb: "La colonne vertébrale : BF = 1, Wolpert, holographie, profondeur 0–6.",
    starred: true,
  },
  {
    id: "biocomputing",
    number: "12",
    title: "Biocomputing",
    blurb: "DishBrain, CL1, énergie libre : le seul terrain de labo du verrou.",
    starred: true,
  },
  {
    id: "reception",
    number: "13",
    title: "Réception",
    blurb: "Le fil de commentaires comme second fact-check.",
    starred: true,
  },
];

export const docs: Doc[] = [
  {
    slug: "synthese",
    file: "00-SYNTHESE.md",
    section: "synthese",
    title: "Synthèse du dossier",
    thesis:
      "Quatre questions indépendantes, un argument conditionnel, un verrou : la conscience.",
  },
  {
    slug: "argument/trilemme-bostrom",
    file: "01-ARGUMENT/01-trilemme-bostrom.md",
    section: "argument",
    title: "Le trilemme de Bostrom",
    thesis:
      "Au moins une des trois branches est vraie. Aucune probabilité inconditionnelle n'en découle.",
  },
  {
    slug: "argument/faille-probabiliste",
    file: "01-ARGUMENT/02-la-faille-probabiliste.md",
    section: "argument",
    title: "La faille probabiliste",
    thesis:
      "Bostrom calcule une probabilité conditionnelle, pas la démonstration de la condition.",
  },
  {
    slug: "argument/genealogie-du-doute",
    file: "01-ARGUMENT/03-genealogie-du-doute.md",
    section: "argument",
    title: "Généalogie du doute",
    thesis:
      "Chaque époque emprunte sa métaphore du réel à sa technologie dominante.",
  },
  {
    slug: "physique/arguments-physiques",
    file: "02-PHYSIQUE/01-arguments-physiques.md",
    section: "physique",
    title: "Ce que la physique établit",
    thesis:
      "L'information est une grandeur physique. Cela n'indique aucune simulation.",
  },
  {
    slug: "physique/signatures-testables",
    file: "02-PHYSIQUE/02-signatures-testables.md",
    section: "physique",
    title: "Signatures testables",
    thesis:
      "Seule une hypothèse qui diverge de la physique standard entre dans le corpus.",
  },
  {
    slug: "physique/arguments-contre",
    file: "02-PHYSIQUE/03-arguments-contre.md",
    section: "physique",
    title: "Les arguments contre",
    thesis:
      "Aucun argument physique ne réfute l'hypothèse. Le seul décisif est logique.",
  },
  {
    slug: "physique/arguments-populaires",
    file: "02-PHYSIQUE/04-fact-check-arguments-populaires.md",
    section: "physique",
    title: "Douze arguments populaires",
    thesis: "Aucun ne résiste. Ce qui reste est peu, et c'est solide.",
  },
  {
    slug: "conscience/probleme-difficile",
    file: "03-CONSCIENCE/01-probleme-difficile-et-substrat.md",
    section: "conscience",
    title: "Le problème difficile",
    thesis:
      "Sans théorie de l'expérience, la question est indécidable par construction.",
  },
  {
    slug: "conscience/campbell-effondrement",
    file: "03-CONSCIENCE/02-conscience-et-effondrement.md",
    section: "conscience",
    title: "Conscience et effondrement",
    thesis:
      "Campbell : protocole valide, prédiction probablement fausse, reste non scientifique.",
  },
  {
    slug: "conscience/realisme-de-simulation",
    file: "03-CONSCIENCE/03-realisme-de-simulation.md",
    section: "conscience",
    title: "Réalisme de simulation",
    thesis:
      "Simulé n'implique pas irréel. C'est une thèse sur la composition, pas la tromperie.",
  },
  {
    slug: "ontologie/carte-des-niveaux",
    file: "04-ONTOLOGIE/01-carte-des-niveaux.md",
    section: "ontologie",
    title: "Carte des huit hypothèses",
    thesis:
      "Abandonner réel contre simulé. Chaque étage peut être réel sans être fondamental.",
  },
  {
    slug: "ontologie/information-regression",
    file: "04-ONTOLOGIE/02-information-mathematiques-regression.md",
    section: "ontologie",
    title: "Information, mathématiques, régression",
    thesis:
      "Wheeler, Tegmark et Bostrom sont incompatibles. Seul H6 est un programme actif.",
  },
  {
    slug: "cosmologie/cinq-eres",
    file: "05-COSMOLOGIE/01-les-cinq-eres.md",
    section: "cosmologie",
    title: "Les cinq ères",
    thesis:
      "Nous sommes à 0,01 % de l'ère stellifère. Boltzmann et Bostrom ont la même structure.",
  },
  {
    slug: "cosmologie/fact-check-fin-univers",
    file: "05-COSMOLOGIE/02-fact-check-fin-de-univers.md",
    section: "cosmologie",
    title: "Fact-check : la fin de l'univers",
    thesis:
      "Document de bonne qualité. Le lien Boltzmann–Bostrom manquait. La dilution est conditionnelle.",
  },
  {
    slug: "ethique/univers-sans-souffrance",
    file: "06-ETHIQUE/01-univers-sans-souffrance.md",
    section: "ethique",
    title: "Un univers sans souffrance",
    thesis:
      "Information négative ≠ expérience négative. Aucune propriété démontrée impossible sans souffrance.",
  },
  {
    slug: "ethique/si-c-etait-vrai",
    file: "06-ETHIQUE/02-si-c-etait-vrai.md",
    section: "ethique",
    title: "Si c'était vrai",
    thesis:
      "Une preuve ne rendrait rien moins réel. La communication avec le substrat est mal posée.",
  },
  {
    slug: "sociologie/silicon-valley",
    file: "07-SOCIOLOGIE/01-pourquoi-la-silicon-valley.md",
    section: "sociologie",
    title: "Pourquoi la Silicon Valley",
    thesis:
      "Elle n'a pas découvert l'hypothèse : elle l'a adoptée. La sociologie ne tranche pas l'ontologie.",
  },
  {
    slug: "protocole/programme-de-recherche",
    file: "08-PROTOCOLE/01-programme-de-recherche.md",
    section: "protocole",
    title: "Programme de recherche",
    thesis:
      "Sans prédiction différentielle, on accumule du plausible, pas de la science.",
  },
  {
    slug: "protocole/hygiene-epistemique",
    file: "08-PROTOCOLE/02-hygiene-epistemique.md",
    section: "protocole",
    title: "Hygiène épistémique",
    thesis: "Quatorze pièges nommés. Un piège nommé est un piège repérable.",
  },
  {
    slug: "sources/bibliographie",
    file: "09-SOURCES/01-bibliographie.md",
    section: "sources",
    title: "Bibliographie",
    thesis: "Sources primaires vérifiées le 29 août 2026.",
  },
  {
    slug: "sources/fact-check-corpus",
    file: "09-SOURCES/02-fact-check-du-corpus.md",
    section: "sources",
    title: "Fact-check du corpus",
    thesis: "51 affirmations : 27 exactes, 12 à nuancer, 6 fausses, 6 non vérifiables.",
  },
  {
    slug: "actualisation/etat-de-l-art-2026",
    file: "10-ACTUALISATION/01-etat-de-l-art-2026.md",
    section: "actualisation",
    title: "État de l'art 2026",
    thesis:
      "Wolpert détruit la hiérarchie. COGITATE élargit le verrou. Le coût de l'expérience est non calculable.",
    starred: true,
  },
  {
    slug: "mathematiques/formalisme-anthropique",
    file: "11-MATHEMATIQUES/01-formalisme-anthropique.md",
    section: "mathematiques",
    title: "Formalisme anthropique",
    thesis: "SSA, SIA, classe de référence. Boltzmann ≡ Bostrom.",
    starred: true,
  },
  {
    slug: "mathematiques/wolpert",
    file: "11-MATHEMATIQUES/02-computabilite-et-auto-simulation.md",
    section: "mathematiques",
    title: "Computabilité et auto-simulation",
    thesis:
      "Wolpert 2025 : aucune dégradation n'est requise. Un univers peut se simuler lui-même.",
    starred: true,
  },
  {
    slug: "mathematiques/bornes-complexite",
    file: "11-MATHEMATIQUES/03-bornes-physiques-et-complexite.md",
    section: "mathematiques",
    title: "Bornes physiques et complexité",
    thesis: "Landauer → Lloyd. Le motif K₄ n'a jamais été cherché.",
    starred: true,
  },
  {
    slug: "mathematiques/sous-determination",
    file: "11-MATHEMATIQUES/04-sous-determination.md",
    section: "mathematiques",
    title: "Sous-détermination",
    thesis: "Le théorème central : BF = 1. Trois débats, un seul théorème.",
    starred: true,
  },
  {
    slug: "mathematiques/fitness-beats-truth",
    file: "11-MATHEMATIQUES/05-perception-fitness-beats-truth.md",
    section: "mathematiques",
    title: "Fitness beats truth",
    thesis: "La sélection favorise la fitness, pas la vérité. BF = 1 pour la simulation.",
  },
  {
    slug: "mathematiques/preuves-nonlocalite",
    file: "11-MATHEMATIQUES/06-preuves-interactives-et-nonlocalite.md",
    section: "mathematiques",
    title: "Preuves interactives et non-localité",
    thesis: "Bell exclut les moteurs locaux. MIP* = RE s'effondre sous le bruit.",
  },
  {
    slug: "mathematiques/probabilite-algorithmique",
    file: "11-MATHEMATIQUES/07-probabilite-algorithmique.md",
    section: "mathematiques",
    title: "Probabilité algorithmique",
    thesis: "Le prior de Solomonoff est indécis à constante près. K est incomputable.",
  },
  {
    slug: "mathematiques/holographie",
    file: "11-MATHEMATIQUES/08-holographie-et-emergence.md",
    section: "mathematiques",
    title: "Holographie et émergence",
    thesis:
      "Géométrie = intrication. Démontré en AdS. Notre univers a Λ > 0. Pas le mot simulation.",
  },
  {
    slug: "mathematiques/indecidabilite",
    file: "11-MATHEMATIQUES/09-indecidabilite-physique.md",
    section: "mathematiques",
    title: "Indécidabilité physique",
    thesis: "Quatre murs plafonnent l'omniscience interne. Indécidable ≠ simulé.",
  },
  {
    slug: "mathematiques/decoherence-boltzmann",
    file: "11-MATHEMATIQUES/10-decoherence-et-boltzmann-quantitatifs.md",
    section: "mathematiques",
    title: "Décohérence et Boltzmann",
    thesis:
      "τ_D tue conscience-effondrement. Boltzmann et Bostrom partagent la même mesure.",
  },
  {
    slug: "mathematiques/formalismes-conscience",
    file: "11-MATHEMATIQUES/11-formalismes-de-la-conscience.md",
    section: "mathematiques",
    title: "Formalismes de la conscience",
    thesis: "Si Φ est intrinsèque, P1 est fausse. COGITATE écorne IIT et GNWT.",
  },
  {
    slug: "mathematiques/equations-profondes",
    file: "11-MATHEMATIQUES/12-les-equations-les-plus-profondes.md",
    section: "mathematiques",
    title: "L'échelle de profondeur",
    thesis:
      "Les maths ne répondent pas. Elles déplacent la question jusqu'à la reformuler.",
    starred: true,
  },
  {
    slug: "biocomputing/dishbrain-cl1",
    file: "12-BIOCOMPUTING/01-dishbrain-cl1.md",
    section: "biocomputing",
    title: "DishBrain et CL1",
    thesis:
      "Boucle fermée ≠ substrat. Le consentement est actionnable. La souffrance ne l'est pas.",
    starred: true,
  },
  {
    slug: "biocomputing/energie-libre",
    file: "12-BIOCOMPUTING/02-energie-libre-et-inference-active.md",
    section: "biocomputing",
    title: "Énergie libre et inférence active",
    thesis: "Friston explique DishBrain, pas la conscience. La sous-détermination revient.",
  },
  {
    slug: "reception/fil-de-commentaires",
    file: "13-RECEPTION/01-fil-de-commentaires.md",
    section: "reception",
    title: "Fil de commentaires",
    thesis:
      "163 commentaires : second fact-check. Nommer le statut épistémique est non négociable.",
    starred: true,
  },
];

export function getSection(id: string) {
  return sections.find((s) => s.id === id);
}

export function getDoc(slug: string) {
  return docs.find((d) => d.slug === slug);
}

export function docsInSection(id: SectionId) {
  return docs.filter((d) => d.section === id);
}

export function adjacentDocs(slug: string) {
  const i = docs.findIndex((d) => d.slug === slug);
  return {
    prev: i > 0 ? docs[i - 1] : undefined,
    next: i >= 0 && i < docs.length - 1 ? docs[i + 1] : undefined,
  };
}

export function adjacentSections(id: string) {
  const i = sections.findIndex((s) => s.id === id);
  return {
    prev: i > 0 ? sections[i - 1] : undefined,
    next: i >= 0 && i < sections.length - 1 ? sections[i + 1] : undefined,
  };
}

export function relatedPivots(slug: string, n = 3) {
  const current = getDoc(slug);
  const pool = docs.filter((d) => d.starred && d.slug !== slug);
  const same = pool.filter((d) => d.section === current?.section);
  const rest = pool.filter((d) => d.section !== current?.section);
  return [...same, ...rest].slice(0, n);
}

export function fileToSlug(file: string) {
  const normalized = file.replace(/^\.\.\/+/, "").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!normalized) return undefined;
  return docs.find((d) => {
    if (d.file === normalized) return true;
    if (d.file.endsWith(`/${normalized}`)) return true;
    if (normalized.includes("/") && (d.file.endsWith(normalized) || normalized.endsWith(d.file))) {
      return true;
    }
    return false;
  })?.slug;
}

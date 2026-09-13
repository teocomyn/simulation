export const questions = [
  {
    id: "Q1",
    title: "Le substrat est-il computationnel ?",
    status: "Débattu",
    testable: "Partiellement",
    body: "Question de physique fondamentale. Programme de recherche actif et légitime. Un univers informationnel n'a pas plus besoin d'un programmeur qu'une équation n'a besoin d'un calculateur.",
  },
  {
    id: "Q2",
    title: "A-t-il été produit intentionnellement ?",
    status: "Spéculatif",
    testable: "Très difficilement",
    body: "Question métaphysique déguisée en question empirique. Le glissement le plus fréquent du domaine : démontrer Q1 et conclure Q2. C'est un non-sequitur.",
  },
  {
    id: "Q3",
    title: "Un agent extérieur peut-il intervenir ?",
    status: "Spéculatif",
    testable: "En principe oui, en pratique non",
    body: "Presque toujours importée en contrebande depuis la fiction. Un simulateur compétent ne laisserait pas de bugs observables.",
  },
  {
    id: "Q4",
    title: "Qu'est-ce que cela changerait ?",
    status: "Philosophique",
    testable: "Non, mais analysable",
    body: "La seule dont la réponse soit à peu près stable : beaucoup moins qu'on ne croit. Sous le réalisme de simulation, rien n'est moins réel.",
  },
] as const;

export const results = [
  {
    n: "01",
    title: "BF = 1",
    body: "Presque tous les arguments du domaine ont un facteur de Bayes égal à 1 : également probables que l'hypothèse soit vraie ou fausse. Ils ne sont pas faux. Ils sont informationnellement vides. Un seul observable y échappe : l'anisotropie ℓ = 4 des rayons cosmiques UHE. Il est négatif.",
    href: "/d/mathematiques/sous-determination",
  },
  {
    n: "02",
    title: "Trois débats, un théorème",
    body: "« Sommes-nous simulés ? », « le tissu neuronal souffre-t-il ? », « le modèle de langage ressent-il ? » ont exactement la même structure formelle, et la même sous-détermination. Exiger plus de données est une erreur de stratégie.",
    href: "/d/mathematiques/sous-determination",
  },
  {
    n: "03",
    title: "Aucune observation ne fixe la probabilité",
    body: "Le seul prior principiel (Solomonoff–Levin) est indécis à constante près. K est incomputable. Le problème de la classe de référence de Bostrom est le problème de la mesure des cerveaux de Boltzmann : même objet, traitements opposés.",
    href: "/d/mathematiques/equations-profondes",
  },
  {
    n: "04",
    title: "La hiérarchie n'existe peut-être pas",
    body: "Wolpert (décembre 2025) démontre qu'aucune dégradation n'est requise entre simulateur et simulé, que la simulation mutuelle est possible, et qu'un univers peut se simuler lui-même. L'objection la plus répandue est fausse.",
    href: "/d/mathematiques/wolpert",
  },
] as const;

export const verdicts = [
  {
    title: "Q1 est scientifique",
    body: "Le substrat informationnel est une question sérieuse et un programme actif. Elle mérite d'être suivie.",
  },
  {
    title: "Q2 n'est pas une hypothèse scientifique",
    body: "Faute de prédiction différentielle. Ce n'est pas une insulte : c'est un constat de statut.",
  },
  {
    title: "Bostrom ne fournit aucune probabilité",
    body: "Seulement une structure conditionnelle dont les conditions sont inconnues.",
  },
  {
    title: "Le verrou est la conscience",
    body: "Pas la physique, pas la puissance de calcul. L'absence de théorie de l'expérience.",
  },
  {
    title: "La bonne question n'est pas binaire",
    body: "Quel est le niveau le plus fondamental, et y en a-t-il un.",
  },
  {
    title: "Le risque n'est pas de se tromper",
    body: "C'est de vouloir avoir raison. Nous cherchons la vérité, pas la simulation.",
  },
] as const;

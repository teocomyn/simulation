export type Hypothesis = {
  id: string;
  name: string;
  formula: string;
  status: string;
  statusKind: "default" | "spec" | "formal" | "active" | "meta";
  prediction: string;
  compatibleH2: "exclusive" | "assumes" | "compatible" | "independent" | "reformulates";
  strength: string;
  weakness: string;
  rank: number;
  rankNote: string;
};

export const hypotheses: Hypothesis[] = [
  {
    id: "H1",
    name: "Physique fondamentale, non simulée",
    formula: "R₀ est le niveau de base",
    status: "Hypothèse par défaut",
    statusKind: "default",
    prediction: "Aucune anomalie de type simulation ; la physique converge",
    compatibleH2: "exclusive",
    strength: "Aucune entité supplémentaire. Rasoir d'Ockham.",
    weakness: "Ne répond pas à « pourquoi ces lois », ni à « pourquoi quelque chose ».",
    rank: 1,
    rankNote: "À combiner avec H6 : seul programme de recherche actif",
  },
  {
    id: "H2",
    name: "Simulation par une civilisation supérieure",
    formula: "R₀ → S₁, nous sommes S₁",
    status: "Spéculatif",
    statusKind: "spec",
    prediction: "Aucune en général. Version réseau cubique : anisotropie UHE (Beane)",
    compatibleH2: "assumes",
    strength: "Cohérente ; motivée par l'extrapolation technologique.",
    weakness: "Substrat-indépendance et classe de référence indéterminée.",
    rank: 5,
    rankNote: "Possible, non étayée",
  },
  {
    id: "H3",
    name: "Simulations emboîtées",
    formula: "R₀ → S₁ → S₂ → …",
    status: "Formalisé depuis déc. 2025",
    statusKind: "formal",
    prediction: "Aucune. Découvrir qu'on est simulé déplace le problème d'un étage.",
    compatibleH2: "assumes",
    strength: "Wolpert : pas de dégradation requise ; simulation mutuelle possible.",
    weakness: "Hérite des défauts empiriques de H2.",
    rank: 6,
    rankNote: "Conditionnelle à H2",
  },
  {
    id: "H4",
    name: "Pas de réalité fondamentale",
    formula: "… → R₋₁ → R₀ → R₁ → …",
    status: "Spéculatif, formellement traité",
    statusKind: "spec",
    prediction: "Non testable. La question « à quel niveau ? » peut être mal posée.",
    compatibleH2: "compatible",
    strength: "Aucun coût logique. Kleene : un univers peut se simuler lui-même.",
    weakness: "Contre-intuitive. Le besoin de fondation est peut-être psychologique.",
    rank: 3,
    rankNote: "Cohérente, sous-explorée",
  },
  {
    id: "H5",
    name: "Univers mathématique (Tegmark)",
    formula: "structure = univers. Personne n'exécute.",
    status: "Spéculatif",
    statusKind: "spec",
    prediction: "Très difficile. « Sur quel ordinateur tourne le 7 ? »",
    compatibleH2: "exclusive",
    strength: "Élimine « qui fait tourner l'univers » comme erreur de catégorie.",
    weakness: "Problème de mesure sur l'ensemble des structures.",
    rank: 4,
    rankNote: "Élégante, difficilement testable. Incompatible avec H2.",
  },
  {
    id: "H6",
    name: "It from bit (Wheeler)",
    formula: "matière, espace, temps émergent de l'information",
    status: "Programme de recherche actif",
    statusKind: "active",
    prediction: "Partielles : holographie, Landauer, information quantique",
    compatibleH2: "independent",
    strength: "S'appuie sur des résultats établis. Ne dit rien sur un simulateur.",
    weakness: "« Information » a plusieurs sens ; l'émergence reste programmatique.",
    rank: 1,
    rankNote: "Le plus scientifique de la liste",
  },
  {
    id: "H7",
    name: "La conscience est fondamentale",
    formula: "conscience → expérience de la réalité",
    status: "Spéculatif",
    statusKind: "spec",
    prediction: "Aucune en l'état (Campbell en propose une, probablement fausse)",
    compatibleH2: "reformulates",
    strength: "Attaque le problème difficile que les autres laissent intact.",
    weakness: "Problème de combinaison. Pas besoin de l'hypothèse de simulation.",
    rank: 7,
    rankNote: "Très spéculative, mais attaque le vrai problème",
  },
  {
    id: "H8",
    name: "Quelque chose d'inconcevable",
    formula: "notre architecture ne peut pas représenter le fond",
    status: "Méta-hypothèse",
    statusKind: "meta",
    prediction: "Aucune par construction",
    compatibleH2: "compatible",
    strength: "Rigoureusement sans réplique.",
    weakness: "Stérile comme conclusion. Joker trop facile.",
    rank: 2,
    rankNote: "Avertissement épistémique, pas une réponse",
  },
];

export const chain =
  "structure fondamentale → information → physique → chimie → vie → cerveau → conscience";

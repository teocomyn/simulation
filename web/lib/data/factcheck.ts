export type CheckMark = "exact" | "nuance" | "false" | "unknown";

export const factcheckSummary = {
  exact: 27,
  nuance: 12,
  false: 6,
  unknown: 6,
  total: 51,
} as const;

export const factchecks: {
  n: number;
  claim: string;
  verdict: CheckMark;
  note: string;
  group: string;
}[] = [
  { n: 1, group: "Interview", claim: "L'auteur a écrit Le Syndrome de Palo Alto", verdict: "exact", note: "Loïc Hecht. Le corpus ne le nommait pas." },
  { n: 2, group: "Interview", claim: "La Simulation, ~400 p., 7–8 ans d'écriture", verdict: "exact", note: "Les Arènes, 16 avril 2026." },
  { n: 3, group: "Interview", claim: "Deux déclencheurs 2016 : Code Conference et New Yorker", verdict: "exact", note: "Juin et 10 octobre 2016." },
  { n: 4, group: "Interview", claim: "Musk : une chance sur des milliards", verdict: "exact", note: "Citation authentique, contenu quantitatif nul." },
  { n: 5, group: "Interview", claim: "Deux milliardaires ont engagé des scientifiques", verdict: "exact", note: "Tad Friend, New Yorker." },
  { n: 6, group: "Interview", claim: "Ils cherchaient le glitch", verdict: "nuance", note: "L'article dit « nous en faire sortir »." },
  { n: 7, group: "Interview", claim: "Le premier est reconnaissable comme Musk", verdict: "nuance", note: "Aucun n'est nommé dans l'article." },
  { n: 8, group: "Interview", claim: "L'article raconte la naissance d'OpenAI", verdict: "nuance", note: "Le thème saillant est « the merge »." },
  { n: 9, group: "Interview", claim: "Rich Terrile, un des directeurs du JPL", verdict: "unknown", note: "Astrophysicien au JPL. Titre exact non vérifié." },
  { n: 10, group: "Interview", claim: "Musk a investi >38 M$ dans OpenAI", verdict: "unknown", note: "Ordre de grandeur rapporté, non vérifié ici." },
  { n: 11, group: "Physique", claim: "À l'échelle quantique, nuage de probabilités", verdict: "exact", note: "Formulation acceptable." },
  { n: 12, group: "Physique", claim: "L'observation condense le nuage", verdict: "nuance", note: "Observation ≠ regard conscient." },
  { n: 13, group: "Physique", claim: "Personne ne sait pourquoi", verdict: "nuance", note: "La décohérence explique une grande part. Absente du corpus." },
  { n: 14, group: "Physique", claim: "Analogie GTA : on ne calcule que l'observé", verdict: "false", note: "A1. Décohérence + non-signalisation." },
  { n: 15, group: "Physique", claim: "Citation Einstein sur la Lune", verdict: "nuance", note: "Authentique dans l'esprit. Argument contre l'idéalisme." },
  { n: 16, group: "Physique", claim: "Aspect, Nobel au début des années 1980", verdict: "false", note: "Expériences 1980s. Nobel 2022." },
  { n: 17, group: "Physique", claim: "Une dizaine de physiciens savent régler ces expériences", verdict: "unknown", note: "Invérifiable, probablement exagéré." },
  { n: 18, group: "Physique", claim: "Le saut quantique → macro ferait bondir un physicien", verdict: "exact", note: "Lucidité suffisante pour invalider l'analogie." },
  { n: 19, group: "Neurosciences", claim: "Le cerveau fonctionne par prédiction", verdict: "exact", note: "Bien établi." },
  { n: 20, group: "Neurosciences", claim: "Réalité HD / cerveau modem 56k", verdict: "exact", note: "Image acceptable." },
  { n: 21, group: "Neurosciences", claim: "Donc le réel perçu n'est pas le réel tel qu'il est", verdict: "exact", note: "Vrai, mais ne discrimine pas. P6." },
  { n: 22, group: "Neurosciences", claim: "La science valide les intuitions mystiques", verdict: "nuance", note: "Convergence sur la question, pas la réponse. P9." },
  { n: 23, group: "Neurosciences", claim: "Rêve lucide réel, techniques efficaces", verdict: "exact", note: "Vérifié en labo depuis les années 1980." },
  { n: 24, group: "Neurosciences", claim: "Contrôles de réalité (mains, technologie)", verdict: "exact", note: "Techniques documentées." },
  { n: 25, group: "Neurosciences", claim: "Sortie de corps : quelque chose quitte le corps", verdict: "false", note: "L'expérience est réelle (Blanke). Rien ne quitte le corps." },
  { n: 26, group: "Neurosciences", claim: "Cinq bandes d'ondes = états de conscience", verdict: "nuance", note: "Les bandes existent. L'association est simplifiée." },
  { n: 27, group: "Campbell", claim: "Physicien, carrière NASA et défense", verdict: "unknown", note: "Plausible, non vérifié ici." },
  { n: 28, group: "Campbell", claim: "Mesure n'est pas défini en MQ", verdict: "nuance", note: "Problème réel, décohérence largement suffisante." },
  { n: 29, group: "Campbell", claim: "La conscience cause l'effondrement", verdict: "nuance", note: "Von Neumann–Wigner, minoritaire, abandonnée. Wigner a renoncé." },
  { n: 30, group: "Campbell", claim: "Il conçoit des expériences testables", verdict: "exact", note: "À son crédit : prédiction différentielle." },
  { n: 31, group: "Campbell", claim: "Financement participatif de plusieurs centaines de k$", verdict: "unknown", note: "Rapporté, non vérifié." },
  { n: 32, group: "Campbell", claim: "Résultats obtenus", verdict: "false", note: "Aucun résultat évalué par les pairs au 29 août 2026." },
  { n: 33, group: "Campbell", claim: "Stargate, CIA, 1975–1995, ~20 M$", verdict: "exact", note: "Documenté, archives déclassifiées. Aussi DIA/armée." },
  { n: 34, group: "Campbell", claim: "Le programme a obtenu des renseignements", verdict: "false", note: "Omission majeure. CIA a suivi Hyman : pas de valeur opérationnelle." },
  { n: 35, group: "Campbell", claim: "Guérison à distance après intention collective", verdict: "nuance", note: "Anecdote. Placebo, régression. P11." },
  { n: 36, group: "Campbell", claim: "2 diagnostics corrects sur 12, non probants", verdict: "exact", note: "Honnêteté à saluer. Compatible avec le hasard." },
  { n: 37, group: "Campbell", claim: "Annales akashiques = base de données", verdict: "unknown", note: "Reformulation, pas une affirmation vérifiable." },
  { n: 38, group: "Ontologie", claim: "Bostrom 2003, simulations d'ancêtres", verdict: "exact", note: "Philosophical Quarterly 53 (211)." },
  { n: 39, group: "Ontologie", claim: "Ce n'est qu'une des trois branches", verdict: "exact", note: "Rappel correct, souvent omis." },
  { n: 40, group: "Ontologie", claim: "Tegmark : structure mathématique", verdict: "exact", note: "MUH, Foundations of Physics, 2008." },
  { n: 41, group: "Ontologie", claim: "Sur quel ordinateur tourne le 7 ?", verdict: "exact", note: "H5 exclut H2." },
  { n: 42, group: "Ontologie", claim: "Wheeler, It from bit", verdict: "exact", note: "1989." },
  { n: 43, group: "Ontologie", claim: "Appeler l'univers simulation devient trompeur sous H6", verdict: "exact", note: "Non-sequitur A4." },
  { n: 44, group: "Ontologie", claim: "Régression sans premier niveau", verdict: "exact", note: "Analogie du premier entier négatif." },
  { n: 45, group: "Ontologie", claim: "Chaque étage réel sans être fondamental", verdict: "exact", note: "Réalisme de simulation de Chalmers, sans le nom." },
  { n: 46, group: "Ontologie", claim: "La conscience pourrait être fondamentale", verdict: "nuance", note: "Position sérieuse, absence de preuve signalée." },
  { n: 47, group: "Ontologie", claim: "Niveau inconcevable pour nous", verdict: "exact", note: "Sans réplique, stérile comme conclusion." },
  { n: 48, group: "Ontologie", claim: "Chaque époque use sa technologie comme métaphore", verdict: "exact", note: "La meilleure intuition du corpus." },
  { n: 49, group: "Probabiliste", claim: "Probabilité conditionnelle, pas démonstration de la condition", verdict: "exact", note: "L'élément le plus solide de tout le corpus." },
  { n: 50, group: "Probabiliste", claim: "Trois choses non sues : consciences, production, échantillon", verdict: "exact", note: "P1, P2–P3, P4–P5." },
  { n: 51, group: "Probabiliste", claim: "Raisonnement de Musk sur les consoles", verdict: "false", note: "Compter des consoles ≠ compter des observateurs. P4." },
];

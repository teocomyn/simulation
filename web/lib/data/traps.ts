export const traps = [
  {
    id: "P1",
    title: "Glissement information → simulation",
    form: "L'univers est fait d'information, donc c'est un calcul, donc quelqu'un le calcule.",
    test: "Ma conclusion ajoute-t-elle un agent que la prémisse ne contenait pas ?",
  },
  {
    id: "P2",
    title: "Confusion rendu / conscience",
    form: "On sait faire des images indiscernables, donc on saura simuler un monde.",
    test: "Ce progrès concerne-t-il la perception ou l'expérience ?",
  },
  {
    id: "P3",
    title: "Irréfutabilité prise pour un argument",
    form: "On ne peut pas prouver le contraire.",
    test: "Quelle observation me ferait abandonner cette idée ?",
  },
  {
    id: "P4",
    title: "Probabilité sur un espace non défini",
    form: "Calculer P(X) sans mesure sur l'espace des possibles.",
    test: "Sur quel ensemble, avec quelle mesure ?",
  },
  {
    id: "P5",
    title: "Hypothèse ad hoc auto-confirmante",
    form: "Ajouter une clause qui explique après coup, sans rien prédire de neuf.",
    test: "Cette clause prédit-elle quelque chose que je n'ai pas encore observé ?",
  },
  {
    id: "P6",
    title: "Argument qui ne discrimine pas",
    form: "Invoquer un fait vrai sous les deux hypothèses concurrentes.",
    test: "Ce fait serait-il différent sous l'autre hypothèse ?",
  },
  {
    id: "P7",
    title: "Saut d'échelle",
    form: "Transposer une propriété quantique au macroscopique.",
    test: "La propriété survit-elle à l'interaction avec l'environnement ?",
  },
  {
    id: "P8",
    title: "Généalogie prise pour une réfutation",
    form: "Cette idée n'est que la métaphore de l'époque, donc elle est fausse.",
    test: "Est-ce que je critique l'origine de l'idée ou son contenu ?",
  },
  {
    id: "P9",
    title: "Convergence rétrospective",
    form: "Les anciens le disaient déjà.",
    test: "Cette tradition aurait-elle exclu l'hypothèse inverse ?",
  },
  {
    id: "P10",
    title: "Autorité déplacée",
    form: "C'est un physicien de la NASA, c'est un prix Nobel.",
    test: "L'affirmation relève-t-elle du domaine où cette personne est compétente ?",
  },
  {
    id: "P11",
    title: "Anecdote prise pour une donnée",
    form: "Un récit frappant traité comme une observation.",
    test: "Combien de fois cela a-t-il été tenté sans succès, et qui a compté ?",
  },
  {
    id: "P12",
    title: "Communiqué pris pour le papier",
    form: "Citer un titre de presse plutôt que le résultat publié.",
    test: "Ai-je lu l'abstract ? Le papier dit-il ce que le titre dit ?",
  },
  {
    id: "P13",
    title: "Réfutation par le coût",
    form: "Simuler un univers coûterait trop cher.",
    test: "Mon argument suppose-t-il que le niveau supérieur suit nos lois ?",
  },
  {
    id: "P14",
    title: "Asymétrie de traitement",
    form: "Accepter un raisonnement ici, le rejeter là, alors que la structure est identique.",
    test: "Si j'applique ce raisonnement à un autre cas, en accepterais-je la conclusion ?",
  },
];

export const protocolSteps = [
  "Quelle version ? L'hypothèse est-elle assez précise pour prédire quelque chose ?",
  "Quelle prédiction ? Où diverge-t-elle de la physique standard ?",
  "Pré-enregistrée ? La prédiction est-elle publiée avant les données ?",
  "Quelles alternatives ? Ont-elles été énumérées et écartées explicitement ?",
  "Quelle source ? Papier évalué, ou communiqué ?",
  "Quelle réplication ? Par une équipe indépendante, idéalement hostile ?",
  "Quel facteur de Bayes ? Le fait serait-il différent sous l'hypothèse concurrente ?",
  "Qu'est-ce qui me ferait changer d'avis ?",
];

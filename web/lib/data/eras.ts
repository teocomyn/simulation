export const eras = [
  {
    id: "primordiale",
    name: "Primordiale",
    scale: "jusqu'à ~10⁶ ans",
    body: "Big Bang, nucléosynthèse, recombinaison. Presque toute la vulgarisation s'arrête ici par intérêt humain, pas par équilibre chronologique.",
  },
  {
    id: "stellifere",
    name: "Stellifère",
    scale: "10⁶ → ~10¹⁴ ans",
    body: "Celle où nous vivons. Nous sommes à 1,4×10¹⁰ ans : les premiers 0,01 %. Les naines rouges brûlent des milliers de milliards d'années.",
    here: true,
  },
  {
    id: "degeneree",
    name: "Dégénérée",
    scale: "10¹⁴ → ~10⁴⁰ ans",
    body: "Naines blanches, naines brunes, étoiles à neutrons. Le sort dépend de la désintégration du proton, un paramètre seulement borné par le bas.",
  },
  {
    id: "trous-noirs",
    name: "Trous noirs",
    scale: "10⁴⁰ → ~10¹⁰⁰ ans",
    body: "Évaporation de Hawking. Stellaire ~10⁶⁷ ans ; supermassif ~10¹⁰⁰ ans. Il n'y a pas d'état final stable et peuplé.",
  },
  {
    id: "sombre",
    name: "Sombre",
    scale: "au-delà de 10¹⁰⁰ ans",
    body: "Photons de très basse énergie, électrons et positrons isolés, densité proche de zéro. Borne de Krauss–Starkman : ~10¹²⁰ bits.",
  },
];

export const metaphors = [
  { era: "Antiquité", tech: "Théâtre, caverne, rêve", figure: "Platon, māyā" },
  { era: "XVIIe", tech: "Horloge", figure: "Dieu horloger" },
  { era: "XIXe", tech: "Machine à vapeur", figure: "Univers thermique" },
  { era: "XXe", tech: "Cinéma, radio", figure: "Malin génie, cerveau dans une cuve" },
  { era: "1960–1990", tech: "Ordinateur", figure: "Putnam, Simulacron-3" },
  { era: "1999", tech: "Jeu vidéo", figure: "Matrix, et son contresens" },
  { era: "2003", tech: "Calcul statistique", figure: "Bostrom : doute de proportion, pas sceptique" },
  { era: "2022", tech: "Mondes virtuels", figure: "Chalmers : réalisme de simulation" },
  { era: "2024–", tech: "IA générative", figure: "Le rendu remplace le jeu comme image" },
];

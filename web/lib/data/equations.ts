export const depthLevels = [
  {
    level: 0,
    title: "Les équations qui ne disent rien",
    closes: "Rien, arguments vides",
    by: "BF = 1",
    items: [
      { eq: "ℓ_P = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m", note: "« le pixel », BF = 1, et faux (n=1 exclu)" },
      { eq: "S = A/4G", note: "hologramme vrai en AdS, notre Λ > 0" },
      { eq: "F = D_KL[q‖p(s|o)] − ln p(o)", note: "redescription, non générique" },
    ],
  },
  {
    level: 1,
    title: "Elles contraignent le substrat",
    closes: "Moteurs naïfs (locaux, précalculés, à rendu conditionnel)",
    by: "Bell, KS, décohérence",
    items: [
      { eq: "|S| ≤ 2  (local)   |S| ≤ 2√2  (quantique)   |S| ≤ 4", note: "ferme la table locale précalculée" },
      { eq: "K₄ ∝ Y₄⁰ + √(5/14)(Y₄⁴ + Y₄⁻⁴)    b⁻¹ ≳ 10¹¹ GeV", note: "seule prédiction BF ≠ 1. Négative." },
      { eq: "τ_D = 1/(Λ Δx²)    τ_perception / τ_D ∈ [10¹³, 10³⁰]", note: "ferme conscience-effondrement et rendu à la demande" },
    ],
  },
  {
    level: 2,
    title: "Elles bornent la connaissance interne",
    closes: "L'omniscience interne, des deux côtés de l'écran",
    by: "Löb, Chaitin, Cubitt, Rice",
    items: [
      { eq: "PA ⊢ Prov(⌜A⌝) → A  ⇒  PA ⊢ A", note: "Löb : pas de raccourci auto-référentiel" },
      { eq: "T ⊬ « K(x) > c_T »", note: "on ne prouve jamais que le monde est trop complexe" },
      { eq: "P non trivial ⇒ {e : φ_e ∈ P} indécidable", note: "fondement formel de la Règle 0" },
    ],
  },
  {
    level: 3,
    title: "Elles détruisent la hiérarchie",
    closes: "Haut et bas entre niveaux",
    by: "Kleene, Wolpert",
    items: [
      { eq: "∀ f totale, ∃ e : φ_e = φ_f(e)", note: "un univers peut se simuler lui-même" },
      { eq: "UTM simule UTM ⇒ puissance préservée, seul le temps est perdu", note: "l'objection « plus pauvre » est fausse" },
      { eq: "A simule B ∧ B simule A ⇒ A, B indiscernables", note: "la hiérarchie disparaît" },
    ],
  },
  {
    level: 4,
    title: "Elles détruisent la probabilité",
    closes: "Toute probabilité inconditionnelle",
    by: "Classe de référence, Leike–Hutter, mesure",
    items: [
      { eq: "f_sim = κ/(κ+1),  κ = f_p · f_I · N̄", note: "correct, et conditionnel" },
      { eq: "P(sim) = P(sim|A)P(A) + …    P(A) inconnue", note: "le trou" },
      { eq: "P(simulé) ≈ μ(R_sim)/μ(R)   ≡   P(BB) ≈ μ(R_BB)/μ(R)", note: "même objet, traitements opposés" },
    ],
  },
  {
    level: 5,
    title: "L'équation qui gouverne tout",
    closes: "Toute inférence sur les observables actuels",
    by: "Sous-détermination",
    items: [
      { eq: "P(D|H₁) = P(D|H₂)  ⇒  P(H₁|D)/P(H₂|D) = P(H₁)/P(H₂)", note: "BF = 1. Posterior = prior." },
      { eq: "simulé / non  ≡  souffrance / homéostasie  ≡  phénoménalité / modèle", note: "trois débats, un théorème" },
      { eq: "seul BF ≠ 1 : anisotropie ℓ = 4 des UHE", note: "négatif. Personne n'a cherché le motif K₄." },
    ],
  },
  {
    level: 6,
    title: "Elles dissolvent la question",
    closes: "La question elle-même, peut-être",
    by: "Müller ; holographie",
    items: [
      { eq: "P(y | x) ∝ M(y | x)", note: "un monde extérieur émerge comme théorème" },
      { eq: "S(A) = min Area(χ)/(4G) + S_bulk(χ)", note: "espace-temps redondant avec l'intrication" },
      { eq: "magie non locale = 0  ⟺  back-reaction = 0", note: "sans le mot simulation" },
    ],
  },
];

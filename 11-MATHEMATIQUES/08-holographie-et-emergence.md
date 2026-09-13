# Holographie et émergence de l'espace-temps — les équations exactes

> Le programme H6 est le seul qui avance ([04-ONTOLOGIE](../04-ONTOLOGIE/01-carte-des-niveaux.md)).
> Voici ses équations, dans l'ordre de leur découverte — une chaîne de formules qui,
> mises bout à bout, disent : *la géométrie de l'espace-temps est de l'intrication
> comptée*. C'est le contenu réel, démontrable, derrière tous les slogans
> « l'univers est de l'information ».
>
> Convention : `c = k_B = 1` sauf mention ; `ℓ_P² = Għ/c³ ≈ 2,61 × 10⁻⁷⁰ m²`.

---

## 1. La chaîne des formules

### 1.1 Bekenstein-Hawking (1973-1975) — l'entropie est une aire
```
S_BH  =  k_B c³ A / (4 G ħ)  =  k_B A / (4 ℓ_P²)          T_H  =  ħ c³ / (8π G M k_B)
```
Un mètre carré d'horizon ≈ `10⁶⁹ k_B` ; un trou noir solaire ≈ `10⁷⁷ k_B`, contre `10⁵⁸ k_B`
pour le Soleil lui-même : l'effondrement multiplie l'entropie par `~10¹⁹`.
Confirmée microscopiquement pour des trous noirs extrémaux (Strominger–Vafa 1996).

**Borne de Bekenstein (1981)** : `S ≤ 2π k_B R E / (ħ c)`. Forme rigoureuse
(**Casini 2008**) : en QFT, `ΔS ≤ Δ⟨K⟩` avec `K` l'hamiltonien modulaire de Rindler —
un **théorème** découlant de `S(ρ‖σ) ≥ 0`, sans ambiguïté sur `E` et `R`.

### 1.2 Bousso (1999) — la borne covariante
Pour toute surface `B` d'aire `A(B)`, et tout *light-sheet* `L(B)` (hypersurface nulle
engendrée par des géodésiques orthogonales à `B`, d'expansion `θ ≤ 0`) :
```
S[L(B)]  ≤  A(B) / (4 G ħ)
```
Covariante, valide en cosmologie et dans les trous noirs. Démontrée sous hypothèses
hydrodynamiques (Flanagan–Marolf–Wald 2000). Version quantique : conjecture de
focalisation quantique ⇒ **QNEC** `⟨T_kk⟩ ≥ (ħ/2π) S″_out`, démontrée en QFT
(Balakrishnan–Faulkner–Khandker–Wang 2019).

### 1.3 Ryu–Takayanagi (2006) — l'intrication est une aire
Hypothèses : AdS/CFT, géométrie classique (`N → ∞`, couplage fort), état statique.
```
S(A)  =  min_{γ_A ~ A}  Area(γ_A) / (4 G_N ħ)
```
minimum sur les surfaces du volume ancrées sur `∂A` et **homologues** à `A` — la contrainte
d'homologie produit les transitions de phase et la courbe de Page. Covariante : HRT (2007,
surfaces extrémales). **Démontrée** dans AdS/CFT par répliques gravitationnelles
(Lewkowycz–Maldacena 2013). Implique géométriquement la sous-additivité forte et la
monogamie de l'information mutuelle.

### 1.4 FLM (2013) — la correction quantique
```
S(A)  =  ⟨Area(γ_A)⟩/(4G_N)  +  S_bulk(Σ_A)  +  S_Wald-like  +  O(G_N)
```
Corollaire JLMS (2016) : **égalité des entropies relatives** bord/volume,
`S_rel(ρ_A‖σ_A)_CFT = S_rel(ρ_Σ‖σ_Σ)_bulk + O(G_N)` — le fondement de la reconstruction.

### 1.5 Surfaces extrémales quantiques (Engelhardt–Wall 2015)
```
S(A)  =  min_χ ext_χ [ Area(χ)/(4 G_N ħ)  +  S_bulk(Σ_χ) ]         δ S_gen[χ] = 0
```
La position de la surface est déplacée par l'entropie du volume. C'est cette formule
qui, appliquée à l'évaporation, engendre les îlots.

### 1.6 La formule des îlots (2019) — le sommet
Penington (arXiv:1905.08255) ; Almheiri–Engelhardt–Marolf–Maxfield (1905.08762).
```
S(R)  =  min ext_I [ Area(∂I)/(4 G_N)  +  S_semi-cl(R ∪ I) ]

S(R,t)  ≈  min( S_rad(t), S_BH(t) )          — la courbe de Page
```
Avant `t_Page` (≈ mi-évaporation) : `I = ∅`, `S(R)` croît (Hawking). Après : un îlot
non trivial **à l'intérieur** du trou noir domine, `S(R)` redescend. Justifié par les
**selles « replica wormholes »** de l'intégrale de chemin gravitationnelle
(Penington–Shenker–Stanford–Yang ; Almheiri–Hartman–Maldacena–Shaghoulian–Tajdini, 2019).

| Résolu | Non résolu |
|---|---|
| La version **entropique** du paradoxe : la gravité semi-classique calcule une évolution unitaire | Le **mécanisme dynamique** du transfert d'information |
| L'intérieur est **encodé** dans le rayonnement extérieur | La description de l'intérieur ; le statut des selles répliques hors moyenne d'ensemble |
| | Le cas 4D réaliste sans dilaton, établi qualitativement seulement |

**Signification structurelle :** une région d'espace-temps est reconstructible depuis
des degrés de liberté situés ailleurs. **« Où » est une propriété du code.**

---

## 2. L'espace-temps comme code correcteur d'erreurs

**Almheiri–Dong–Harlow (JHEP 2015)** : AdS/CFT a la structure d'un code correcteur
d'effacement — les opérateurs du volume sont des opérateurs **logiques**, représentables
sur plusieurs sous-régions du bord, aucune indispensable.

**Théorème de Harlow (2017)** — pour un code à *complementary recovery*, sont
**équivalents** : (i) RT algébrique `S(A) = ⟨L_A⟩_code + S(ρ_A|code)` ;
(ii) reconstruction des opérateurs du wedge d'intrication sur `A` ;
(iii) égalité JLMS des entropies relatives.

**Reconstruction explicite** (Dong–Harlow–Wall 2016 ; Cotler et al. 2017) — canal de Petz :
```
O_A  ≈  σ_A^{1/2} · Tr_Ā[ σ^{−1/2} O_bulk σ^{−1/2} ] · σ_A^{1/2}
```

**Code HaPPY** (Pastawski–Yoshida–Harlow–Preskill 2015) : pavage hyperbolique de
pentagones portant des **tenseurs parfaits** à 6 pattes (code `[[5,1,3]]`) ; un qubit
logique par pentagone. RT y est un **théorème combinatoire** : `S(A) = |γ_A| · ln 2`
(coupe minimale du graphe) pour `A` connexe. Sans dynamique, sans temps, sans `1/N`.

### 2.1 Réalisation expérimentale — juillet 2026
- **Biswas, Cheng, …, Monroe, Preskill, Linke, Cao, Noel** (arXiv:2607.12047, 13 juillet
  2026) : HaPPY sur **IonQ Forte**, vérification expérimentale de la structure **FLM**
  (aire + entropie du volume), « précurseurs entropiques » de gravité émergente,
  construction à comportement de type *wormhole*.
- **Steiner, …, Monz, Blatt, Huber, Ringbauer** (arXiv:2607.16503, 17 juillet 2026,
  Innsbruck) : codes pentagone `[[5,1,3]]` et heptagone (Steane `[[7,1,3]]`),
  récupération de qubits logiques du volume depuis le bord (reconstruction du wedge),
  test de la loi d'aire RT.

**Lecture exacte.** Ce sont **nos** physiciens qui simulent des univers-jouets de
10-30 qubits, à `10¹²⁰` ordres de grandeur du patch causal réel, sans dynamique, sans
matière, en AdS. La distance entre « simuler un code HaPPY » et « simuler un univers »
**est** le contenu du problème.

### 2.2 Le raffinement 2024-2025 : la gravité exige de la « magie »
**Cao, Cheng, Hamma, Leone, Munizzi, Oliviero, *Gravitational back-reaction is magical*,
PRX Quantum 6, 040375 (2025 ; arXiv:2403.07056).** `[DÉBATTU]`
```
magie non locale d'une bipartition  =  0    ⟺    back-reaction gravitationnelle  =  0
```
Les états **stabilisateurs** (spectre d'intrication plat, `S_n` indépendant de `n`) —
comme HaPPY exact — correspondent à une géométrie **sans rétroaction**. L'intrication
seule construit la cinématique ; la **dynamique d'Einstein** (`G_μν = 8πG T_μν`) exige
de la nonstabilizerness.

**Conséquence directe pour l'hypothèse de simulation :** par Gottesman–Knill, les
circuits stabilisateurs sont classiquement simulables en temps polynomial. Si ces liens
tiennent, **un univers avec gravité rétroagissante n'est pas simulable efficacement par
un ordinateur classique** — la gravité certifierait une « quantumness » computationnellement
dure. Rien contre un simulateur **quantique** ; rien pour ou contre la simulation elle-même.

---

## 3. L'entropie de de Sitter — le budget total

Rayon d'horizon `ℓ = √(3/Λ)`, aire `A = 12π/Λ` :
```
S_dS  =  k_B A / (4ℓ_P²)  =  3π k_B c³ / (Λ G ħ)          [Gibbons–Hawking 1977 : ln Z_eucl(S⁴) = S_dS]
T_dS  =  ħ H / (2π k_B),    H = c √(Λ/3)

Λ_obs ≈ 1,1 × 10⁻⁵² m⁻²   ⇒   S_dS ≈ 3 × 10¹²² k_B  ≈ 4 × 10⁹⁹ J/K,    T_dS ≈ 10⁻³⁰ K
```
⚠️ La forme `π/(ΛGħ)` qui circule en vulgarisation **omet le facteur 3** ; l'ordre de
grandeur est inchangé. Comparer : trous noirs supermassifs de l'univers observable
`~10¹⁰⁴ k_B` ; CMB `~10⁸⁹ k_B` ; Lloyd (2002) : `≤ 10¹²⁰` opérations sur `≤ 10⁹⁰` bits
(`10¹²²` avec la gravité).

**Statut rigoureux récent :** l'algèbre des observables du static patch avec observateur
est de **type II₁** (Chandrasekaran–Longo–Penington–Witten, JHEP 2023) — trace finie,
`S_dS` bien définie comme **entropie maximale** d'une algèbre à trace finie, dépendante
de l'observateur.

**Ce que le chiffre implique :** si `Λ > 0` est fondamentale, simuler exactement notre
patch causal requiert un espace de Hilbert de dimension `≤ e^{3πc³/(ΛGħ)}` — **fini**.
C'est LE chiffre de tout argument de coût. Ce qu'il n'implique pas : que la finitude
prouve un simulateur (un système fermé fini n'est pas plus « simulé » qu'un infini) ;
et `10¹²²` qubits logiques restent inaccessibles à tout simulateur interne à un univers
semblable au nôtre.

---

## 4. Le point de contrôle épistémique : Λ > 0

**Toutes les formules démontrées (RT, FLM, QES avec frontière, HaPPY) vivent en AdS
(`Λ < 0`), où existe une frontière asymptotique portant la théorie duale. Notre univers
a `Λ > 0` et pas de telle frontière.**

| Proposition | Statut 2026 |
|---|---|
| **dS/CFT** (Strominger 2001 ; Maldacena 2002) : `Ψ_HH[h] = Z_CFT[h]`, CFT euclidienne non unitaire à `I⁺` | Jamais réalisée dans un exemple contrôlé de théorie des cordes |
| **Holographie du static patch** : dual sur l'horizon étiré ; candidat concret **DSSYK** (Susskind ; Narovlansky–Verlinde 2023 ; raffinements 2025 sur l'algèbre des *chords*, complexité linéaire dans le static patch 2026) | Sérieux en basse dimension ; **aucun dual contrôlé de dS₄** |
| Analogue RT en dS (« monolayer vs bilayer ») | Disputé, pas de dérivation à la Lewkowycz–Maldacena |

**Ce qui survit au passage AdS → dS :** la finitude de `S_dS` (robuste) et la structure
d'algèbre II₁ (rigoureuse, observateur-dépendante). Le reste est une **extrapolation
non démontrée**. Toute version forte de l'hypothèse de simulation qui s'appuie sur RT ou
sur les codes holographiques hérite de ce trou : **les théorèmes sont dans le mauvais
signe de Λ.**

---

## 5. La discipline d'interprétation

| Lecture | Statut |
|---|---|
| Intrication et géométrie : deux descriptions d'une même structure, dans les cadres contrôlés | ✅ `[ÉTABLI en AdS/CFT et modèles-jouets]` |
| L'espace-temps est émergent, non fondamental | `[DÉBATTU]` — lecture dominante du programme, pas un théorème sur notre univers |
| Notre univers (`Λ > 0`) est couvert | ❌ Non — §4 |
| « L'univers est un code, donc quelqu'un l'a codé » | ❌ Non-sequitur A4 — les codes correcteurs émergent aussi spontanément (états topologiques, toric code), sans concepteur |
| « L'extrémisation est une optimisation de ressources » | ❌ Principe variationnel standard, de même nature que la moindre action |
| « C'est la preuve de la simulation » | ❌ Rien ne distingue `H_S` de `H_N` : `BF = 1` ([04](04-sous-determination.md)) |

**La formulation correcte, qui suffit à donner le vertige sans tricher :**

> Dans tous les régimes où nous savons calculer, la géométrie de l'espace-temps est
> exactement redondante avec la structure d'intrication d'un système quantique sans
> gravité — et sa dynamique avec la nonstabilizerness de cet état. Si cela s'étend à notre
> univers — ce qui n'est pas démontré — alors l'espace et le temps sont des grandeurs
> dérivées, et la meilleure réponse actuelle à « qu'y a-t-il au niveau fondamental ? »
> est : **de l'information quantique intriquée, sans espace ni temps.**

Cette réponse ne contient pas le mot « simulation ». C'est le fait le plus important
de ce fichier.

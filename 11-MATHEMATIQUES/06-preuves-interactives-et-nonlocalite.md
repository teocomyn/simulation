# Preuves interactives et non-localité — ce qu'un observateur borné peut vérifier

> Deux familles de résultats parmi les plus profonds de tout le sujet, et presque jamais
> mobilisées dans le débat sur la simulation : la hiérarchie des preuves interactives
> (que peut-on **vérifier** sur un prouveur tout-puissant ?) et les bornes exactes de la
> non-localité (à quel point le « moteur » a-t-il le droit d'être non-local ?).
>
> **Note d'attribution.** Le cadre « observateur = vérificateur, substrat = prouveur »
> appliqué à l'hypothèse de simulation n'existe dans **aucune publication à comité de
> lecture** identifiée au 29 août 2026. Il est présenté ici comme une **construction du
> dossier**, appuyée sur Aharonov–Vazirani (2012, falsifiabilité de la mécanique quantique
> par protocoles interactifs) et sur JNVWY (2020). Ne pas le citer comme cadre établi.

---

## 1. Le cadre : l'observateur comme vérificateur

```
Vérificateur V   =  observateur interne, temps polynomial, aléa privé
Prouveur P       =  le substrat / le simulateur, puissance arbitraire, peut mentir
Protocole        =  échange de messages ; V accepte ou rejette
Complétude       :  énoncé vrai   ⇒ ∃ P :  Pr[V accepte] ≥ 2/3
Validité         :  énoncé faux   ⇒ ∀ P* : Pr[V accepte] ≤ 1/3
```

Une classe de preuve interactive répond à : **quels énoncés `V` peut-il vérifier avec
confiance arbitraire, alors que `P` peut mentir ?** C'est la seule formalisation exacte
existante de « interroger le simulateur ».

### 1.1 IP = PSPACE (Shamir, J. ACM 1992 ; Lund–Fortnow–Karloff–Nisan)
```
IP  =  PSPACE
```
Un seul prouveur, de l'aléa privé : le vérificateur polynomial vérifie tout énoncé de
PSPACE. Preuve par arithmétisation de TQBF et protocole *sum-check* :
```
vérifier  K = Σ_{x₁∈{0,1}} … Σ_{xₙ∈{0,1}} p(x₁,…,xₙ),   p de bas degré sur 𝔽_q
erreur de validité après n tours  ≤  n·d / q
```
Le résultat **ne relativise pas** — il existe un oracle `A` avec `IP^A ≠ PSPACE^A`.

### 1.2 MIP = NEXP (Babai–Fortnow–Lund 1991 ; Feige–Lovász 1992)
Deux prouveurs **non communicants** (contre-interrogatoire) :
```
MIP  =  NEXP        (2 prouveurs, 1 tour suffisent ; amplification : Raz 1998)
```
Nuance importante : contre des prouveurs **non-signalants généralisés** (boîtes PR),
la classe retombe exactement à **EXP** (Ito 2010). La puissance dépend finement du modèle
de corrélations autorisé.

### 1.3 MIP* = RE (Ji, Natarajan, Vidick, Wright, Yuen, arXiv:2001.04383)
Accepté aux *Annals of Mathematics* (version finale v4 sur arXiv, 16 octobre 2026), pas
encore paru au 25 octobre 2026.
Deux prouveurs non communicants **partageant de l'intrication** de dimension non bornée :
```
MIP*  =  RE        ⊇  { problème de l'arrêt }
```
Réduction explicite : à toute machine de Turing `M` on associe un jeu non-local `G_M` :
```
M s'arrête        ⇒  val*(G_M) = 1
M ne s'arrête pas ⇒  val*(G_M) ≤ 1/2
```
Technique : **compression récursive** de jeux (un jeu de taille `n` vérifie un jeu de
taille `2ⁿ`), rendue possible par le self-testing.

**Corollaires prouvés dans le même article :**
```
C_q  ⊆  C_qs  ⊆  C_qa  ⊊  C_qc
```
(corrélations : dimension finie ⊆ séparables ⊆ fermeture tensorielle ⊊ commutantes).
La dernière inclusion stricte est la **réponse négative au problème de Tsirelson** —
et, par les équivalences de Fritz / Junge et al. / Ozawa, la **réfutation de la conjecture
de plongement de Connes** (1976). Décider `val*(G) = 1` est RE-complet ; calculer `val*(G)`
exactement est `Π₂`-complet dans la hiérarchie arithmétique (Mousavi–Nezhadi–Yuen 2022).

**Statut de la preuve (vérifié août 2026).** La v1 dépendait d'un test quantique de bas
degré appuyé sur Vidick 2016, où une erreur a été trouvée (erratum). Réparée par
arXiv:2009.12982 (solidité quantique du test classique de bas degré individuel), intégrée
en v2 (sept. 2020), v3 (nov. 2022, 223 p.). Version abrégée dans *Communications of the
ACM* 64(11), 2021. **Consensus : le résultat tient.** Mise à jour du 25 octobre 2026 :
la v4 (16 octobre 2026, 250 p.) est la version finale, acceptée aux *Annals of
Mathematics* et pas encore parue ; son commentaire arXiv renvoie à une formalisation en
Lean du résultat principal.

### 1.4 Le résultat qui change tout pour l'usage ici : le bruit tue RE

**Dong, Fu, Natarajan, Qin, Xu, Yao, *The Computational Advantage of MIP\* Vanishes in
the Presence of Noise*, CCC 2024 (arXiv:2312.04360).**

```
intrication partagée idéale        ⇒  MIP* = RE
intrication soumise à bruit constant  ⇒  classe ⊆ NEXP  (décidable)
```

**Conséquence pour le dossier, et elle est décisive :** le « télescope vers l'indécidable »
exige une intrication **parfaite et de dimension non bornée** — physiquement irréalisable.
Tout substrat réel est bruité. Le scénario-limite (§1.6) est donc un énoncé de
mathématiques pures, pas de physique.

### 1.5 Ce qui est établi, sans le cadre spéculatif

| Résultat | Statut |
|---|---|
| Un observateur borné peut vérifier PSPACE face à un prouveur menteur | `[ÉTABLI]` |
| Deux composantes isolées → NEXP | `[ÉTABLI]` |
| Vérification classique de tout calcul BQP par un seul prouveur quantique, sous LWE | `[ÉTABLI]` — Mahadev, FOCS 2018 |
| Zero-knowledge parfait pour tout MIP* | `[ÉTABLI]` — 2024-2025 |
| Le tout s'effondre si le prouveur refuse de jouer ou contrôle l'aléa du vérificateur | `[ÉTABLI]` — c'est la limite structurelle |

**La limite structurelle, écrite.** La validité (*soundness*) suppose : aléa **privé** du
vérificateur, non-communication **réelle** des prouveurs, validité de la mécanique
quantique pour les self-tests. Un simulateur contrôlant la physique apparente peut
invalider les trois **par construction**. Le cadre est donc **épistémiquement circulaire
face à un simulateur total** — il ne borne que ce qu'un prouveur coopératif peut faire
certifier, jamais ce qu'un habitant peut extorquer à un substrat non coopératif.

### 1.6 Ce qu'il reste : trois énoncés, par solidité décroissante

1. `[ÉTABLI]` La connaissance vérifiable d'un observateur borné **n'est pas bornée par
   sa puissance de calcul** dès qu'il y a interaction : P → PSPACE → NEXP → RE.
   L'argument « nous sommes trop limités pour rien savoir » est faux en principe.
2. `[ÉTABLI]` **Self-testing** : certaines corrélations certifient l'état et les mesures
   **sans confiance dans le matériel** (§2.5). Un observateur peut certifier une classe
   d'équivalence de son substrat sans le comprendre.
3. `[SPÉCULATIF, et bruité = faux]` Avec deux « simulateurs » intriqués idéaux, un
   observateur vérifierait l'indécidable. Formellement exact, physiquement vide (§1.4).

---

## 2. Les bornes de la non-localité — le réglage exact du moteur

### 2.1 Hiérarchie des corrélations

```
S  =  E(a,b) + E(a,b′) + E(a′,b) − E(a′,b′)

Variables cachées locales (Bell 1964, CHSH 1969)  :  |S| ≤ 2
Mécanique quantique (Tsirelson 1980)              :  |S| ≤ 2√2 ≈ 2,828
Non-signalisation seule (boîtes PR 1994)          :  |S| ≤ 4
```

Hypothèses de Bell, exactement : **(i)** factorisation locale
`P(a,b|x,y,λ) = P(a|x,λ)·P(b|y,λ)` ; **(ii)** indépendance de mesure `ρ(λ|x,y) = ρ(λ)`.
Théorème de Fine (1982) : les inégalités CHSH sont aussi **suffisantes** — un modèle
local existe ssi elles sont toutes satisfaites.

Singulet : `E(a,b) = −cos θ_ab` ; angles 0°, 45°, 90°, 135° ⇒ `S = 2√2`.

Tests sans échappatoire : Hensen et al. (Nature 2015, spins NV à 1,3 km), Giustina,
Shalm (2015, photons), **Storz et al. (Nature 617, 2023, circuits supraconducteurs,
`S = 2,0747 ± 0,0033`)**. Nobel 2022 : Aspect, Clauser, Zeilinger.

### 2.2 Tsirelson en deux lignes

Observables `A_x² = B_y² = 𝟙`, `[A_x, B_y] = 0`. Avec `𝒞 = A₀B₀ + A₀B₁ + A₁B₀ − A₁B₁` :
```
𝒞²  =  4·𝟙  −  [A₀, A₁]·[B₀, B₁]
‖[A₀,A₁]‖ ≤ 2,  ‖[B₀,B₁]‖ ≤ 2   ⇒   ‖𝒞²‖ ≤ 8   ⇒   ‖𝒞‖ ≤ 2√2
```
**La borne vient de l'existence des commutateurs** — de la structure d'algèbre
d'opérateurs — pas d'un principe physique évident. Deux qubits la saturent.

### 2.3 Pourquoi 2√2 et pas 4 ? — partiellement ouvert

Boîte PR : `P(a,b|x,y) = ½ si a ⊕ b = x·y`, non-signalante, `S = 4`. Rien dans la
non-signalisation n'interdit `S > 2√2`. Principes connus qui découpent la zone `[2√2, 4]` :

| Principe | Ce qu'il exclut |
|---|---|
| Complexité de communication non triviale (van Dam ; Brassard et al. PRL 2006) | `S > 4√(2/3) ≈ 3,266` |
| **Causalité de l'information** (Pawłowski et al., Nature 461, 2009) | **`S > 2√2` exactement** (famille isotrope) |
| Localité macroscopique, orthogonalité locale | portions partielles |

**Causalité de l'information, énoncé exact.** Alice reçoit `N` bits `a₁…a_N`, envoie
`m` bits classiques à Bob, qui doit deviner `a_b` pour un `b` aléatoire :
```
I  ≡  Σ_{k=1}^{N}  I(a_k : β | b = k)   ≤   m
```
Cas `m = 0` : non-signalisation. Preuve quantique via trois propriétés de l'information
mutuelle de von Neumann (consistance classique, data-processing, règle de chaîne).
Violation ssi `2E² > 1` avec `E = S/4`, soit exactement `S > 2√2`.

**Limites démontrées, à ne pas escamoter :**
- L'ensemble **presque quantique** (Navascués et al., Nat. Commun. 2015) est strictement
  plus grand que l'ensemble quantique et satisfait toutes les instances testées de IC
  (évidence numérique) : **IC ne singularise pas la mécanique quantique.**
- Avec des entropies de **Rényi** au lieu de Shannon, IC ne redonne **pas** 2√2
  (Entropy 26, 562, 2024). La dérivation dépend du choix de l'entropie.
- Jain, Gachechiladze, Miklin (PRL 133, 160201, 2024) : IC renforcée produit des
  inégalités polynomiales dépassant Uffink — outil, pas axiome fondateur unique.

**Lecture correcte pour le dossier.** La mécanique quantique *implique* la causalité de
l'information ; la causalité de l'information *n'implique pas* un implémenteur.
L'argument « l'univers gère ses ressources informationnelles comme un système distribué »
inverse la flèche. Ce qui est réel : **si la non-localité était un raccourci
d'implémentation (« le serveur partage la RAM »), rien n'expliquerait l'arrêt exact à
2√2 plutôt qu'à 4.** Le point d'arrêt trahit une structure mathématique (Hilbert),
pas une commodité d'ingénierie.

### 2.4 Ce que Bell exclut, et ce qu'il n'exclut pas

| Classe de substrat | Exclue ? |
|---|---|
| Calcul **local** par région, variables définies avant mesure | ✅ **Exclue** empiriquement (loophole-free 2015-2023) |
| Substrat **global** mettant à jour tout l'état (toute simulation numérique de Schrödinger) | ❌ Non — reproduit trivialement `S = 2√2` ; deux qubits intriqués peuvent être adjacents en mémoire |
| **Superdéterminisme** (`ρ(λ|x,y) ≠ ρ(λ)` — le moteur connaît les réglages futurs) | ❌ Non — mais mine l'indépendance statistique dont toute science a besoin |
| Rétrocausalité, évaluation globale a posteriori | ❌ Non |
| Influences cachées à vitesse **finie** `v > c` dans un référentiel privilégié | ✅ Exclues : Bancal et al. (Nat. Phys. 2012) — signalisation macroscopique dans des scénarios à 4 partenaires ; borne expérimentale `v > 54 000 c` (Salart et al., Nature 2008) |

**Résultat net :** Bell est l'un des rares théorèmes qui **réfute** rigoureusement une
classe entière de simulations — les moteurs de jeu locaux, au sens strict. Ce qui survit
doit être **global et effectivement instantané** (ou superdéterministe). Et la
non-signalisation est ce qui rend ce substrat global **indétectable** de l'intérieur —
elle est l'amie, pas l'ennemie, des scénarios de simulation.

### 2.5 Self-testing : certifier sans comprendre

Mayers–Yao (1998/2004) ; robuste : McKague–Yang–Scarani (2012) ; général : Coladangelo–
Goh–Scarani (2017/2018, tout état pur bipartite intriqué est self-testable).
```
S = 2√2   ⇒   ∃ isométrie locale Φ :  Φ(|ψ⟩⊗|aux⟩) = |Φ⁺⟩⊗|junk⟩,   |Φ⁺⟩ = (|00⟩+|11⟩)/√2
S ≥ 2√2 − ε   ⇒   distance à l'état idéal  O(√ε)
```
Certification d'aléa (Pironio et al., Nature 2010 ; Coudron–Yuen 2014) — et depuis le
**11 juin 2025, un service public** : CURBy (NIST / CU Boulder, Nature), 512 bits certifiés
par impulsion, 99,7 % de réussite sur 40 jours.

**Limite exacte :** le self-testing caractérise **à isométrie locale près** — une classe
d'équivalence de comportements, jamais l'ontologie. Et du point de vue d'un simulateur
global, l'aléa « certifié » est parfaitement prévisible : la certification suppose la
liberté de choix des entrées, que le substrat contrôle par construction.

### 2.6 Compléments : ce que le substrat doit respecter

- **Non-signalisation** : `Σ_b P(a,b|x,y) = P(a|x)`. Version quantique : la trace
  partielle commute avec les opérations locales distantes — une ligne.
- **PBR** (Pusey–Barrett–Rudolph, Nat. Phys. 2012) : sous l'indépendance des préparations
  `μ(λ₁,…,λ_n) = Π μ_{ψ_i}(λ_i)`, l'état quantique est **ψ-ontique** (supports disjoints).
  Le substrat doit stocker `~2ⁿ` amplitudes — argument de coût contre les variantes
  naïves. **Mais** l'hypothèse d'indépendance des préparations est précisément la moins
  naturelle **dans** un scénario de simulation (toutes les préparations partagent la même
  machine) : PBR ne peut pas être retourné contre lui. Gao (2025, préprint, non consensuel)
  soutient que PBR se passerait de cette hypothèse.
- **Kochen–Specker** (1967) : pas de valuation non contextuelle en dimension ≥ 3.
  Records : 117 vecteurs (1967), 31 (Conway–Kochen), 18 vecteurs / 9 bases (Cabello 1996),
  **14 bases (arXiv:2508.07335, août 2025)**. Version testable KCBS : classique `≥ −3`,
  quantique `5 − 4√5 ≈ −3,944`. Échappatoire à précision finie (Meyer–Kent–Clifton 1999) —
  une porte pour un substrat discret, mais refermée par les violations robustes au bruit.

---

## 3. Synthèse

```
Ce qu'un observateur borné PEUT faire (théorèmes) :
  · vérifier PSPACE face à un prouveur menteur                      [IP = PSPACE]
  · vérifier NEXP avec deux composantes isolées                     [MIP = NEXP]
  · vérifier jusqu'à l'indécidable avec intrication IDÉALE          [MIP* = RE]
      … et plus rien au-delà de NEXP dès que l'intrication est bruitée   [Dong et al. 2024]
  · certifier son substrat à isométrie près, sans le comprendre     [self-testing]

Ce que le substrat DOIT respecter (théorèmes + expérience) :
  · pas de calcul local à variables prédéfinies                     [Bell + loophole-free]
  · pas de pré-calcul non contextuel                                [Kochen–Specker]
  · ψ structurel (sous indépendance des préparations)               [PBR]
  · non-signalisation exacte, influence effectivement instantanée   [marginales + Bancal]
  · corrélations ≤ 2√2, saturées                                    [Tsirelson + IC]
```

**La limite commune, et fondamentale :** KS + Bell excluent ensemble les deux
architectures naïves — la table locale précalculée et la table globale non contextuelle.
Ce qui survit — substrat global, contextuel, non-signalant en interface — est exactement
la description d'un simulateur d'état quantique global, **et aussi, indistinctement, celle
de la mécanique quantique elle-même prise au sérieux.** Aucun de ces théorèmes ne
distingue « monde quantique réel » de « simulation d'un monde quantique ».
`BF = 1`, encore ([04](04-sous-determination.md)).

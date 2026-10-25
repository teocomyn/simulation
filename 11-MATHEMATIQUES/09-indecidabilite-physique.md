# Indécidabilité dans la physique — les limites internes de la connaissance du substrat

> Question de ce fichier : que peut savoir, **en principe**, un observateur situé
> *à l'intérieur* d'un système sur les propriétés de ce système ? La réponse est un
> ensemble de théorèmes durs — et un résultat de **juillet 2026** qui en change le statut
> pratique.

---

## 1. Le socle logique : diagonalisation, Gödel, Löb

**Lemme diagonal** (Gödel 1931 ; Carnap 1934). Pour toute formule `φ(x)` :
```
∃ ψ :   PA ⊢ ψ ↔ φ(⌜ψ⌝)
```
Toute théorie assez riche contient des phrases qui parlent d'elles-mêmes — le même
point fixe que le théorème de récursion de Kleene ([02](02-computabilite-et-auto-simulation.md)).

**Conditions de dérivabilité** (Hilbert–Bernays–Löb) pour le prédicat `Prov` :
```
D1 :  PA ⊢ A                    ⇒  PA ⊢ Prov(⌜A⌝)
D2 :  PA ⊢ Prov(⌜A→B⌝) → (Prov(⌜A⌝) → Prov(⌜B⌝))
D3 :  PA ⊢ Prov(⌜A⌝) → Prov(⌜Prov(⌜A⌝)⌝)
```
(Base minimale : arithmétique de Robinson `Q` + `Σ₁`-induction.)

**Théorème de Löb** (J. Symb. Logic 1955) :
```
Si   PA ⊢ Prov(⌜A⌝) → A      alors      PA ⊢ A
```
Preuve : prendre `ψ` avec `PA ⊢ ψ ↔ (Prov(⌜ψ⌝) → A)` ; D1-D3 donnent
`Prov(⌜ψ⌝) → Prov(⌜A⌝)`, donc `Prov(⌜ψ⌝) → A`, donc `ψ`, donc `Prov(⌜ψ⌝)`, donc `A`.

**Gödel II comme corollaire** : `A = ⊥`. Si `PA ⊢ Con(PA)`, i.e. `PA ⊢ Prov(⌜⊥⌝) → ⊥`,
Löb donne `PA ⊢ ⊥`. Donc `PA` cohérente ⇒ `PA ⊬ Con(PA)`.

Logique modale de la prouvabilité `GL` : axiome `□(□A → A) → □A`, complétude
arithmétique (Solovay 1976).

**Portée exacte.** Ces théorèmes portent sur des systèmes formels. Leur transport vers
la physique exige une hypothèse non triviale : que le raisonnement de l'agent (ou la
théorie finale) soit récursivement axiomatisable et arithmétiquement suffisant.
Sous cette hypothèse : un habitant ne peut pas certifier de l'intérieur la cohérence du
cadre déductif avec lequel il analyserait le substrat ; il n'existe pas de raccourci
« le substrat garantit mes preuves ». Ce que cela **n'implique pas** : que l'esprit
« dépasse les machines » (Lucas–Penrose n'est pas un théorème) ; ni que le simulateur
échappe à ces limites — s'il raisonne formellement, il y est soumis à son niveau.
**Ces théorèmes plafonnent la certification interne, pas l'accès causal** : ils
n'interdisent pas d'observer une anomalie, ils interdisent de *prouver* qu'on dispose
d'un détecteur d'anomalies totalement fiable.

---

## 2. Chaitin : l'incomplétude quantifiée

Détaillé en [07](07-probabilite-algorithmique.md) §2. Rappel de l'énoncé :
```
∃ c_T = K(T) + O(1) :  T ⊬ « K(x) > c_T »  pour aucun x        (Chaitin, J. ACM 1974)
Ω_U = Σ_{p↓} 2^(−|p|),   K(Ω₁…Ω_n) ≥ n − O(1),   T n'en détermine que K(T) + O(1) bits
```
Limite sur les **minorations** de complexité uniquement.

---

## 3. Le résultat qui transporte tout cela DANS la physique

### 3.1 L'indécidabilité du gap spectral
**Cubitt, Pérez-García, Wolf, *Undecidability of the spectral gap*, Nature 528, 207-211
(2015)** ; version complète ~130 p., *Forum of Mathematics, Pi* 10, e14 (2022).

Énoncé exact : il existe une famille **explicite** `{H(n)}` sur le réseau carré 2D,
**invariante par translation, à interactions entre plus proches voisins**, de dimension
locale `d` fixe (finie, énorme), dont les éléments de matrice sont calculables en `n`,
avec une **promesse** (pas de cas intermédiaire) :
```
Cas gappé     :  spec(H) ⊂ {λ₀} ∪ [λ₀ + 1, ∞),   Δ ≥ 1,  état fondamental unique
Cas non gappé :  spec(H) dense dans [λ₀, ∞),     Δ = 0

MTU s'arrête sur n   ⟺   H(n) non gappé
```
Construction : pavages apériodiques de Robinson + hamiltoniens d'histoire de
Feynman–Kitaev encodant une estimation de phase quantique qui écrit `n` en binaire
(éléments de matrice contenant `e^{iπφ}` et `e^{iπ2^{−|φ|}}`). Corollaire axiomatique :
des hamiltoniens précis dont le caractère gappé est **indépendant de ZFC**.

**1D** : Bausch, Cubitt, Lucia, Pérez-García, Phys. Rev. X 10, 031038 (2020) — déjà en
dimension 1, la classe la mieux comprise de la matière quantique (MPS, DMRG prouvés).
**Avec symétrie** : Castilla-Castellano & Lucia (arXiv:2410.13589, Phys. Rev. Research) —
persiste avec symétrie de rotation imposée (interactions à 4 corps).

### 3.2 Ce que le théorème dit exactement

| Il dit | Il ne dit pas |
|---|---|
| Aucun algorithme général ne décide gappé/non gappé pour une **famille** | Que le hamiltonien de *notre* monde soit indécidable |
| La propriété macroscopique est découplée de la connaissance **complète** du microscopique | Que toute propriété physique soit indécidable (faux — voir §3.5) |
| Le comportement à la limite thermodynamique peut dépendre de l'arrêt d'une machine | Rien sur les systèmes finis, toujours décidables en principe |

### 3.3 ★ Le résultat de juillet 2026 qui change le statut pratique

**Castilla-Castellano & Lucia, *Instability of the undecidable behavior of the spectral
gap in 1D*, arXiv:2607.08686 (juillet 2026).**

> Pour tout `ε > 0`, une perturbation **locale, de rang 1, de norme `O(ε)`** de la famille
> 1D de Bausch et al. rend le problème du gap **décidable**.

**Conséquence, et elle est lourde :** ces constructions reposent sur un **réglage
infiniment fin** des couplages. Elles sont **instables au bruit**. Un substrat à
**précision finie** — toute simulation numérique — ne contient littéralement **aucune**
de ces instances. Paradoxalement : un monde où ces pathologies seraient réalisables à
précision infinie ressemblerait **plus** à un continuum non simulé qu'à une simulation
discrète.

Le slogan « même le simulateur ne peut pas savoir ce que fait sa simulation » ne tient
donc que pour un substrat à précision **exacte**.

### 3.4 Panorama vérifié des indécidabilités physiques prouvées

| Objet | Résultat | Référence |
|---|---|---|
| Occurrence d'un résultat de mesure séquentielle | indécidable (réduction à la mortalité de matrices) | Eisert–Müller–Gogolin, PRL 108, 260501 (2012) |
| Diagrammes de phase | non calculables | Bausch–Cubitt–Watson, Nat. Commun. 12, 452 (2021) |
| Flots du groupe de renormalisation | non calculables, complexité arbitraire | Watson–Onorati–Cubitt, Nat. Commun. 13, 7618 (2022) |
| Thermalisation d'une observable locale (chaîne 1D, état produit) | indécidable | Shiraishi–Matsumoto, Nat. Commun. 12, 5084 (2021) |
| Propriétés macroscopiques d'un Ising périodique infini à champs inhomogènes | indécidables | Gu–Weedbrook–Perales–Nielsen, Physica D 238 (2009) |
| Brisure de SUSY en QFT 2D | pas d'algorithme ; une théorie explicite brise la SUSY **ssi `Con(ZFC)`** | Tachikawa, IJTP 62, 199 (2023) |
| Dynamique classique (billards, dimension 3) | prédiction à long terme indécidable | Moore, PRL 64, 2354 (1990) ; Nonlinearity 4 (1991) |
| Problème à N corps gravitationnel | **non prouvé** — série de Sundman–Wang convergente mais inutilisable ; da Costa–Doria contesté | — |

**Moore 1990, précisément :** *generalized shift*
`Φ(s) = σ^{F(s)}(s ⊕ G(s))`, ruban encodé dans les décimales de `(x, y) ∈ [0,1]²` ;
atteignabilité et bassins d'attraction indécidables. Distinct du chaos : ici la
prédiction est impossible **même avec précision initiale exacte**. La mécanique classique
idéalisée est déjà Turing-complète ; l'observateur laplacien interne est faux dès la
dimension 3. Mais l'encodage exige un ruban infini dans les décimales d'un réel —
exactement ce qu'un substrat à précision finie ne contient pas.

### 3.5 Le contrepoint — la nature générique est plus décidable que le pire cas
**Pilatowsky-Cameo & Choi, *Quantum thermalization must occur in translation-invariant
systems at high temperature*, Nat. Commun. 17, 75 (déc. 2025), DOI
10.1038/s41467-025-66777-7 ; arXiv:2409.07516** : la
thermalisation **doit** se produire pour des systèmes de qubits invariants par
translation à haute température sans résonances parfaites. L'indécidabilité de
Shiraishi–Matsumoto est confinée hors de ce régime.

**Motif général, vérifié :** chaque résultat d'indécidabilité = famille paramétrée +
limite infinie + encodage exact d'une machine universelle. **Aucun** ne montre qu'une
question sur *un* système naturel donné, mesurable, est indécidable. Et l'existence
massive de théories effectives prédictives (hydrodynamique, lois d'échelle) est en
tension empirique avec toute « irréductibilité générique ».

---

## 4. Rice, Wolpert, et la limite du transport

**Théorème de Rice (1953)** : toute propriété **non triviale et extensionnelle** des
fonctions partielles calculables est indécidable.

**Attention :** Rice ne s'applique **pas** littéralement à la physique — un hamiltonien
n'est pas un programme, et « gappé » n'est pas extensionnel au sens de Rice. Chaque
résultat de §3 exige une **réduction ad hoc** — construire des hamiltoniens dont la
physique macroscopique *est* la sémantique d'un programme. C'est précisément le contenu
non trivial de ces papiers. Un énoncé général « toute propriété macroscopique non
triviale est indécidable » est **faux**.

**Wolpert (Phys. Rev. E 65, 016128, 2001 ; Physica D 237, 2008)** — indépendant du
modèle de Turing : pour tout « dispositif d'inférence » `C` dans l'univers `U`,
```
∃ f : U → {−1, 1}  telle que C n'infère pas fortement f
C₁ ≠ C₂  ⇒  ¬( C₁ infère C₂  ∧  C₂ infère C₁ )
```
Aucun dispositif interne n'est un prédicteur universel de l'univers qui le contient —
simulation ou pas. (Portée dépendante d'une définition forte de *strong inference* ;
parfois surinterprété.)

---

## 5. Irréductibilité computationnelle — état de la formalisation

`[SPÉCULATIF]` comme principe ; fragments prouvés :
- **Cook (2004)** : la règle 110 est Turing-universelle ⇒ prédiction asymptotique
  indécidable, prédiction bornée **P-complète** (pas de raccourci parallèle sous `NC ≠ P`).
- **Profondeur logique** (Bennett 1988) : `depth_s(x) = min{T(p) : U(p) = x, |p| ≤ K(x) + s}`.
- Zwirn & Delahaye (2013) : définition par absence de prédiction asymptotiquement plus
  rapide que la simulation — aucun théorème inconditionnel du type « le système X est
  irréductible ».

Le « Principle of Computational Equivalence » de Wolfram n'a **pas de formulation
falsifiable acceptée**. Ne pas le présenter comme un théorème.

---

## 6. Les quatre murs — synthèse

```
Mur 1 — LOGIQUE (Gödel/Löb)
        Sa théorie ne peut certifier ni sa cohérence ni sa propre fiabilité.

Mur 2 — COMPLEXITÉ DESCRIPTIVE (Chaitin)
        Il ne peut certifier plus de complexité que sa théorie n'en contient.

Mur 3 — CALCULABILITÉ SÉMANTIQUE (Rice/Wolpert)
        Aucune procédure générale ne décide les propriétés du programme-univers.

Mur 4 — ÉMERGENCE (Cubitt et al.)
        Même le code microscopique complet ne détermine pas décidablement le macroscopique
        … pour des familles à précision infinie, instables au bruit (2026).
```

**Ce qui est établi :** le scénario fort « lire le substrat de l'intérieur puis en
déduire tout le comportement » est mathématiquement fermé, même avec accès total et
ressources illimitées — et il est fermé aussi **pour le simulateur** vis-à-vis de sa
propre simulation (il ne peut que la faire tourner).

**Ce qui ne suit pas :**
```
Indécidabilité(famille)  ⇏  Inobservabilité(instance)     — chercher une anomalie est empirique, pas la décision d'un prédicat Π₁
Indécidabilité           ⇏  Simulation                    — les théorèmes valent identiquement dans un univers non simulé
Simulation               ⇏  Indécidabilité                — un substrat à précision finie n'en contient aucune (2026)
```

**Bilan asymétrique.** L'indécidabilité interne affaiblit les scénarios d'omniscience
— des deux côtés de l'écran — mais elle est **strictement neutre** sur l'existence d'un
substrat simulé. Son usage le plus solide est **négatif** : éliminer les arguments qui
supposent qu'un accès au code suffirait, dans un sens (« on pourra tout vérifier »)
comme dans l'autre (« le simulateur contrôle tout ce qui émerge »). Il ne reste que deux
voies : des versions **restreintes** réfutables (Beane et al.), ou des considérations de
**prior** ([07](07-probabilite-algorithmique.md)).

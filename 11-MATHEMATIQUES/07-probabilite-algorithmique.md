# Probabilité algorithmique — le seul prior principiel du sujet

> L'objection centrale du dossier établit que l'argument de Bostrom n'a pas de mesure.
> Ce fichier traite la seule tentative mathématiquement sérieuse d'en construire une :
> le prior universel de Solomonoff–Levin. Il donne un argument d'Occam **quantitatif**
> contre les clauses de simulation, son retournement exact, et la faille commune aux deux.

---

## 1. L'appareil

### 1.1 Complexité de Kolmogorov et invariance
```
K_U(x)  =  min { |p| : U(p) = x }          (machine universelle préfixe U)

Invariance :   ∀x,  |K_U(x) − K_V(x)|  ≤  c_{U,V}       (constante indépendante de x)
K(x)  ≤  |x| + 2 log₂|x| + O(1)
|{x : K(x) < n}|  <  2ⁿ                    (presque toute chaîne est incompressible)
```
`c_{U,V}` est grosso modo la taille de l'interpréteur de `V` écrit pour `U` : finie,
mais **sans borne uniforme**. C'est le talon d'Achille de tout ce qui suit (§4).

**Incomputabilité.** `K` n'est pas calculable (réduction au problème de l'arrêt) ; aucune
minoration calculable non bornée n'existe ; `K` est seulement approximable **par le haut**
(`K(x) = lim_t K_t(x)`, `K_t` décroissante calculable, sans savoir quand la limite est atteinte).

### 1.2 Probabilité algorithmique et théorème du codage (Levin 1974)
```
m(x)  =  Σ_{p : U(p) = x}  2^(−|p|)                     (discrète, préfixe)
M(x)  =  Σ_{p : U(p) = x…}  2^(−|p|)                    (monotone, pour la prédiction)

Théorème du codage :   −log₂ m(x)  =  K(x) + O(1)
```
La probabilité a priori d'un objet est dominée par son plus court programme.
**Le rasoir d'Occam est ici un théorème** — dans ce cadre.

⚠️ **Précision souvent manquée (Gács 1983) :** l'identité exacte vaut pour la
semi-mesure **discrète** `m` et `K` préfixe. Pour la `M` **monotone** utilisée en
prédiction séquentielle, `Km(x) − (−log₂ M(x))` est **non borné**. L'identification
naïve échoue dans le cadre séquentiel.

`M` domine multiplicativement toute semi-mesure semi-calculable `ν` :
`M(x) ≥ 2^(−K(ν)) · ν(x)`. C'est **le** prior bayésien universel. `Σ_x m(x) < 1` :
semi-mesure, pas mesure ; la normaliser détruit sa semi-calculabilité.

### 1.3 Convergence de Solomonoff (1978)
Si les données suivent une mesure calculable `μ` :
```
Σ_{t=1}^{∞} Σ_{x<t} μ(x<t) · ( M(0|x<t) − μ(0|x<t) )²   ≤   (ln 2 / 2) · K(μ)  ≈  0,347 · K(μ)
```
Le nombre total d'erreurs de prédiction est **fini et linéaire en la complexité du vrai
monde**. C'est le socle de l'AIXI de Hutter (2005), incomputable.

---

## 2. Chaitin — l'incomplétude quantifiée

Pour toute théorie formelle `T` cohérente, récursivement axiomatisée, correcte pour les
énoncés `K(x) > n` :
```
∃ c_T = K(T) + O(1)  :   T ⊬ « K(x) > c_T »  pour AUCUN x
alors que  |{x : K(x) ≤ c_T}| < 2^(c_T+1)  est fini  (donc presque tout x le viole)
```
Nombre `Ω` : `Ω_U = Σ_{p : U(p)↓} 2^(−|p|)`, algorithmiquement aléatoire
(`K(Ω₁…Ω_n) ≥ n − O(1)`) ; ses `n` premiers bits décident l'arrêt de tout programme de
longueur `≤ n` ; `T` n'en détermine que `K(T) + O(1)`. Calude, Dinneen, Shu (2002) ont
calculé les **64 premiers bits** d'un `Ω` concret : `0.0000001000000100000110…`

**Portée exacte.** Un observateur interne muni d'une théorie `T` ne peut jamais certifier
« la complexité de mon monde dépasse `K(T) + c` » — donc ne peut prouver **ni** qu'une
hypothèse de simulation est « trop complexe pour être vraie », **ni** que son monde est
« trop complexe pour être simulé ». Limite interne rigoureuse sur les **minorations** de
`K` uniquement ; toute la physique effective (des majorations) reste accessible.

---

## 3. L'argument d'Occam quantitatif — et son retournement

### 3.1 La forme de l'argument
```
H_N :  observations produites directement par des lois L          |p_N| = K(L)
H_S :  hôte de lois L′ + pointeur vers le simulateur + interpréteur + localisation
                                                                   |p_S| = K(L′) + Δ

      M(H_S) / M(H_N)   ≲   2^( −Δ ),      Δ = K(hôte) + K(pointeur) + K(interpréteur) − K(direct)
```
Chaque bit de spécification supplémentaire divise le prior par deux.

### 3.2 Provenance — à présenter honnêtement
**Aucun article à comité de lecture n'énonce cet argument sous cette forme exacte.**
Ancêtres rigoureux ou semi-rigoureux :
- **Schmidhuber (1997, 2000)** : dans l'ensemble de tous les programmes, un univers simulé
  est redondant avec sa version directe — la description via l'hôte n'est jamais plus courte.
- **Hutter (2010)**, *A Complete Theory of Everything (will be subjective)* : la bonne
  comptabilité est `K(univers) + K(localisation de l'observateur)` — la localisation
  coûte `~log₂ N` bits parmi `N` candidats.
- **Wei Dai, UDASSA** (~1998-2005, listes de diffusion, jamais publié) : poids d'un moment
  d'observateur `∝ 2^(−K(programme + localisation))`.
Véhicule principal : la littérature rationaliste (LessWrong). À citer comme
**reconstruction**, pas comme théorème connu.

### 3.3 Le retournement — le « prior universel malin » (Christiano 2016)
`[SPÉCULATIF, littérature grise]`. Parmi les programmes courts reproduisant un flux
d'observations humain figurent : *hôte très simple + évolution produisant des agents +
ces agents simulent des mondes et écrivent le flux ciblé sur le canal de sortie*.
Si des univers très simples engendrent génériquement de l'intelligence :
```
K(hôte_minimal + évolution + politique_de_sortie)  <?  K(physique_directe + localisation)
```
inégalité **conjecturale, non démontrée**. Si elle tenait, la masse de `M` sur nos
observations serait dominée par des simulations *motivées* — le prior d'Occam deviendrait
un argument **pour** la simulation.

**Les deux camps se disputent la même somme `M(x)`, et aucun ne peut en calculer les
termes.** C'est la situation exacte.

### 3.4 Ce qui tient malgré tout
1. **Le prior n'est pas neutre.** « On ne sait rien, donc 50/50 » est indéfendable :
   l'ignorance n'est pas l'uniformité. Le seul prior principiel pénalise par défaut les
   couches descriptives sans gain prédictif.
2. **La charge est déplacée du bon côté.** Sous `M`, la question devient « quel est le
   plus court programme produisant mon flux ? » — et non « combien d'observateurs de
   chaque type existent ? ». **Le moteur de Bostrom (comptage d'observateurs) est
   remplacé**, pas réfuté : c'est le pas franchi par UDASSA et Müller.

---

## 4. La faille commune : Leike–Hutter (2015)

**J. Leike, M. Hutter, *Bad Universal Priors and Notions of Optimality*, COLT 2015.**

Pour tout comportement voulu, il existe une machine universelle légale (« prior
dogmatique ») le rendant optimal ; l'optimalité de Pareto est **vide** (tout agent est
Pareto-optimal). **La dépendance à la machine de référence n'est pas un détail :
elle détruit l'objectivité à horizon fini.**

Transposé ici : `Δ` n'est défini qu'à `c_{U,V}` près, et `c_{U,V}` peut **dépasser** `Δ`.
Il existe une machine de référence pour laquelle `H_S` est plus courte que `H_N`
(une `U` dont l'interpréteur natif est celui du simulateur). Comparer deux hypothèses
fixes avec un prior défini à `O(1)` près **n'a pas de contenu machine-indépendant** —
seules les limites asymptotiques en ont.

Hutter lui-même conclut : la théorie complète du tout **sera subjective** (dépendante de
`U` et de l'observateur).

---

## 5. Müller — dissoudre la question

**M. P. Müller, *Law without law: from observer states to physics via algorithmic
information theory*, Quantum 4, 301 (2020).** Suivi : *Algorithmic idealism: what should
you believe to experience next?*, arXiv:2412.02826, publié dans **Foundations of Physics**
56, 11 (2026), DOI 10.1007/s10701-026-00913-1. ⚠️ Ne pas confondre avec la série « Algorithmic Idealism »
de K. Sienicki (2024-2026), auteur distinct.

### 5.1 Le postulat unique
Il n'y a fondamentalement que des **états d'observateur** (états informationnels finis,
à la première personne). Ce que l'observateur voit ensuite suit l'induction universelle :
```
P(y | x)  ∝  M(y | x)          (probabilité algorithmique conditionnelle de la continuation)
```

### 5.2 Théorèmes (dans son « bit model »)
- **Convergence** : si le flux d'états a suivi une mesure calculable `μ`, alors avec forte
  probabilité il continue de la suivre — l'apparence d'un **monde extérieur simple,
  calculable, probabiliste émerge** comme phénomène statistique asymptotique, sans être postulée.
- **Objectivité partagée** entre observateurs, comme fait statistique.
- **Cerveaux de Boltzmann dissous** : la probabilité d'être une fluctuation ne s'obtient pas
  en *comptant* les cerveaux dans une cosmologie, mais par la probabilité algorithmique du
  flux — les continuations erratiques ont `K` énorme, donc mesure minuscule,
  **indépendamment de leur abondance cosmologique**.
- **Simulation** : « suis-je dans la simulation ou dans le monde réel ? » **n'est pas bien
  posée**. Seules les probabilités des états futurs le sont ; une simulation influence ce
  que je verrai uniquement si elle modifie `M` de mes continuations. Simuler un observateur
  ne « capture » ni ne dédouble sa mesure.

### 5.3 Statut
`[DÉBATTU]` — programme minoritaire, mathématiquement propre, publié dans des revues
sérieuses. Ses théorèmes internes sont solides ; c'est le **postulat** (l'induction
universelle comme loi fondamentale des chances subjectives) qui est métaphysique.
La dérivation de la théorie quantique y reste programmatique. Et le pont
expérience → chaîne finie suppose la substrat-indépendance P1 de Bostrom, réintroduite
en amont : le verrou de la conscience est déplacé dans le postulat, pas contourné.

**C'est néanmoins la seule théorie existante où la question de la simulation reçoit une
réponse** — ni oui ni non, mais *dissoute*. À rapprocher du réalisme de simulation de
Chalmers ([03-CONSCIENCE/03](../03-CONSCIENCE/03-realisme-de-simulation.md)), atteint ici
par théorème plutôt que par analyse conceptuelle. Et c'est la formalisation exacte de
l'objection de classe de référence du dossier : **le comptage d'instances physiques n'est
pas ce qui fixe les probabilités à la première personne.**

---

## 6. Schmidhuber — le prior de vitesse

`[SPÉCULATIF]`. *Algorithmic Theories of Everything* (2000) ; *The Speed Prior* (COLT 2002).
Postulat : la probabilité a priori cumulée des univers non calculables en temps `t` est
`≤ 1/t` ; contribution d'un programme `≈ 2^(−|p|) / t` (complexité de Levin
`Kt(x) = min_p {|p| + log₂ temps(p)}` : un facteur 2 de temps = 1 bit).

Sous ce prior, notre univers est probablement l'un des **plus rapides à calculer**
produisant nos observations. Prédiction revendiquée : le bruit apparemment aléatoire
(y compris quantique) recèlerait des régularités pseudo-aléatoires calculables. **Non
confirmée**, et fortement contrainte par Bell (sauf superdéterminisme ou pseudo-aléa
non local). Dans l'ensemble de Schmidhuber, « simulé par un hôte » et « exécuté
directement » sont indiscernables de l'intérieur.

---

## 7. Bilan

| Question | Réponse du cadre algorithmique |
|---|---|
| Existe-t-il un prior principiel ? | ✅ `M` — le seul dérivé plutôt que postulé |
| Que dit-il de la clause de simulation ? | Pénalité `2^(−Δ)`, contestée par le retournement de Christiano ; aucun des deux calculable |
| Le 50/50 par ignorance est-il défendable ? | ❌ Non |
| Le comptage d'observateurs de Bostrom survit-il ? | ❌ Remplacé par `M` (UDASSA, Müller) |
| La question peut-elle être dissoute ? | Müller 2020/2026 : oui, formellement — au prix de P1 |
| Le problème de la mesure disparaît-il ? | ❌ Il migre dans le choix de `U` — Leike–Hutter 2015 le prouve |
| Peut-on calculer `P(simulé)` ? | ❌ **Jamais** — `K` et `M` sont incomputables |

**Verdict honnête :** le prior d'Occam transforme le débat en un problème **bien posé**
et le laisse **indécis à constante près**. Il détruit la version « comptage d'observateurs »
de l'argument de simulation sans établir l'improbabilité de la simulation elle-même.

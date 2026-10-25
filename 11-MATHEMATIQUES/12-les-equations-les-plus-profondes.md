# Les équations les plus profondes — l'échelle de profondeur

> Fichier de synthèse de la section mathématique. Chaque équation est classée par
> **ce qu'elle établit réellement** sur la question du dossier, du plus superficiel au
> plus profond. La profondeur n'est pas la difficulté technique : c'est la quantité de
> ce qu'un énoncé **ferme** définitivement.

---

## Niveau 0 — Les équations qui ne disent rien (et qu'on cite le plus)

```
ℓ_P = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m        « le pixel de l'univers »            BF = 1, et faux (n=1 exclu > 10 E_Pl)
S = A/4G                                 « l'univers est un hologramme »       vrai en AdS, notre Λ > 0
F = D_KL[q‖p(s|o)] − ln p(o)             « tout ce qui existe fait de l'inférence »   redescription, non générique
```
Ces trois équations sont exactes et importantes — pour d'autres questions. Sur la
simulation, leur facteur de Bayes vaut 1. Voir [04](04-sous-determination.md).

---

## Niveau 1 — Les équations qui contraignent le substrat

**Bell / Tsirelson / Kochen–Specker**
```
|S| ≤ 2  (local)      |S| ≤ 2√2  (quantique)      |S| ≤ 4  (non-signalant)
𝒞² = 4·𝟙 − [A₀,A₁][B₀,B₁]                            Σ_i v(P_i) = 1 impossible en d ≥ 3
```
Ce qu'elles ferment : la **table locale précalculée** (Bell, loophole-free) et la
**table globale non contextuelle** (KS). Ce qu'elles laissent : un substrat global,
contextuel, non-signalant — c'est-à-dire *la mécanique quantique elle-même*. Le point
d'arrêt exact à `2√2` (causalité de l'information) trahit une structure d'algèbre
d'opérateurs, pas une commodité d'ingénierie. → [06](06-preuves-interactives-et-nonlocalite.md)

**Le test de réseau**
```
SO(3) → O_h :   K₄ ∝ Y₄⁰ + √(5/14)(Y₄⁴ + Y₄⁻⁴)       b⁻¹ ≳ 10¹¹ GeV
```
La **seule** prédiction différentielle jamais formulée (`BF ≠ 1`). Négative. Ne
contraint que les discrétisations régulières. → [03](03-bornes-physiques-et-complexite.md)

**Décohérence**
```
τ_D = 1/(Λ Δx²)       τ_perception / τ_D  ∈  [10¹³, 10³⁰]        R_δ ~ 10⁸ / μs
```
Ce qu'elle ferme : « la conscience cause l'effondrement », « le rendu à la demande ».
La conscience arrive dernière, l'information est déjà publique. → [10](10-decoherence-et-boltzmann-quantitatifs.md)

---

## Niveau 2 — Les équations qui bornent la connaissance interne

**Löb**
```
PA ⊢ Prov(⌜A⌝) → A     ⇒     PA ⊢ A
```
Aucun raccourci auto-référentiel vers la vérité. Un habitant ne certifie pas de
l'intérieur la fiabilité de son propre appareil déductif. → [09](09-indecidabilite-physique.md)

**Chaitin**
```
∃ c_T = K(T) + O(1) :   T ⊬ « K(x) > c_T »   pour aucun x
```
On ne peut jamais prouver que son monde est « trop complexe pour être simulé » — ni
qu'une hypothèse est « trop complexe pour être vraie ». → [07](07-probabilite-algorithmique.md)

**Cubitt–Pérez-García–Wolf**
```
MTU s'arrête sur n   ⟺   H(n) non gappé
```
Le code microscopique complet ne décide pas le macroscopique. **Mais** (2026) : une
perturbation `O(ε)` rend la famille décidable — aucun substrat à précision finie n'en
contient une instance. → [09](09-indecidabilite-physique.md) §3.3

**Rice → Wolpert**
```
P non trivial, extensionnel   ⇒   {e : φ_e ∈ P}  indécidable
```
Pas de test général de simulation. Seules les versions restreintes sont attaquables.
C'est le fondement formel de la **Règle 0**. → [02](02-computabilite-et-auto-simulation.md) §4

---

## Niveau 3 — Les équations qui détruisent la hiérarchie

**Kleene (second théorème de récursion)**
```
∀ f totale calculable,  ∃ e :   φ_e = φ_f(e)
```
Un univers peut exécuter un programme qui le simule **lui-même**, ordinateur compris.
Deux instances identiques, également réelles. Pas d'original.

**Wolpert 2025 — universalité sans dégradation**
```
UTM simule UTM  ⇒  puissance de calcul préservée, seul le temps est perdu
A simule B  ∧  B simule A   ⇒   A, B mathématiquement indiscernables
```
L'objection « une simulation est plus pauvre que ce qu'elle simule » est **fausse**.
Les chaînes infinies sont cohérentes. Les boucles sont possibles. **Il n'y a pas
nécessairement de haut et de bas.** → [02](02-computabilite-et-auto-simulation.md)

---

## Niveau 4 — Les équations qui détruisent la probabilité

**La faille de Bostrom, écrite**
```
f_sim = κ/(κ+1),  κ = f_p · f_I · N̄                              (correct)
P(sim) = P(sim|A)·P(A) + P(sim|¬A)·P(¬A),   P(A) inconnue,  f_I inaccessible   (le trou)
ρ(R) = |R_sim| / |R|   non invariant par changement de R           (pas de mesure)
```
→ [01](01-formalisme-anthropique.md)

**L'identité Boltzmann ≡ Bostrom**
```
P(je suis simulé) ≈ μ(R_sim)/μ(R)          P(je suis une BB) ≈ μ(R_BB)/μ(R)
les deux :  ∞/∞ régularisé,  réponse dépendant du régulateur
```
L'une est rejetée comme pathologie cosmologique, l'autre acceptée comme résultat.
Même objet mathématique. → [10](10-decoherence-et-boltzmann-quantitatifs.md) §10

**Leike–Hutter 2015**
```
∀ comportement voulu,  ∃ U légale le rendant optimal ;   |K_U − K_V| ≤ c_{U,V}  peut dépasser Δ
```
Le prior d'Occam est **le seul principiel** et il est **indécis à constante près**.
On ne calculera jamais `P(simulé)` : `K` et `M` sont incomputables. → [07](07-probabilite-algorithmique.md)

**Le théorème du codage, retourné**
```
−log₂ m(x) = K(x) + O(1)        ⇒   M(H_S)/M(H_N) ≲ 2^(−Δ)      … ou l'inverse (Christiano)
```
Les deux camps se disputent la même somme, et aucun ne peut en calculer les termes.

---

## Niveau 5 — L'équation qui gouverne tout

**Sous-détermination**
```
∀ D ∈ 𝒟 :   P(D | H₁) = P(D | H₂)
              ⇒     P(H₁|D) / P(H₂|D)  =  P(H₁) / P(H₂)              BF = 1
```
Posterior = prior. **Silence méthodologique**, pas ignorance. Et pour un système dont la
complexité croît, la classe des `D` partagés **croît** : la collecte de données est
anti-informative.

Trois débats, un théorème :
```
simulé / non simulé            souffrance / homéostasie            phénoménalité / modélisation
```
→ [04](04-sous-determination.md)

**Le seul observable qui y échappe, dans toute la littérature :** l'anisotropie `ℓ = 4`
des rayons cosmiques d'ultra-haute énergie. Négatif. **Personne n'a publié de recherche
dédiée du motif cubique `K₄` dans les données Auger / Telescope Array** (vérifié 2026).
C'est, littéralement, le seul test restant que personne n'a fait.

---

## Niveau 6 — Les deux équations qui dissolvent la question

**Müller 2020/2026 — l'idéalisme algorithmique**
```
P(y | x)  ∝  M(y | x)          (probabilité algorithmique conditionnelle des états d'observateur)
```
Un monde extérieur simple, calculable, probabiliste **émerge** comme théorème.
Les cerveaux de Boltzmann sont dissous. Et « suis-je dans une simulation ? » n'est
**pas bien posée** — seules les probabilités de continuation existent. C'est le réalisme
de simulation de Chalmers, obtenu par théorème. Au prix d'un postulat métaphysique — et de
P1, réintroduite en amont. → [07](07-probabilite-algorithmique.md) §5

**L'émergence de l'espace-temps**
```
S(A) = min ext_χ [ Area(χ)/(4G_N) + S_bulk(χ) ]          S(R) = min ext_I [ Area(∂I)/(4G_N) + S(R ∪ I) ]
magie non locale = 0   ⟺   back-reaction = 0
```
Dans tous les régimes où l'on sait calculer, l'espace-temps est redondant avec
l'intrication, et sa dynamique avec la nonstabilizerness. La meilleure réponse de 2026
à « qu'y a-t-il au niveau fondamental ? » : **de l'information quantique intriquée, sans
espace ni temps.** Démontré en AdS. Notre univers a `Λ > 0`. → [08](08-holographie-et-emergence.md)

---

## Ce que l'échelle montre

| Niveau | Ce qui est fermé | Par quoi |
|---|---|---|
| 0 | Rien — arguments vides | `BF = 1` |
| 1 | Les moteurs naïfs (locaux, précalculés, à rendu conditionnel) | Bell, KS, décohérence |
| 2 | L'omniscience interne, des deux côtés de l'écran | Löb, Chaitin, Cubitt, Rice |
| 3 | La hiérarchie des niveaux | Kleene, Wolpert |
| 4 | Toute probabilité inconditionnelle | Classe de référence, Leike–Hutter, mesure |
| 5 | Toute inférence sur les observables actuels | Sous-détermination |
| 6 | La question elle-même, peut-être | Müller ; holographie |

**Lecture de l'ensemble.** Les mathématiques du sujet ne convergent pas vers une
réponse ; elles convergent vers **un déplacement**. Chaque niveau retire quelque chose
à la question « sommes-nous dans une simulation ? » — d'abord ses arguments, puis ses
moteurs, puis sa hiérarchie, puis sa probabilité, puis ses observables — jusqu'à ce qu'il
ne reste que la forme reformulée du dossier :

> **Quel est le niveau le plus fondamental — et existe-t-il seulement un dernier niveau ?**

Et à celle-là, deux réponses formelles coexistent en 2026, sans se contredire :
*il n'y a peut-être pas d'ordre* (Wolpert), et *il n'y a peut-être pas d'espace ni de
temps au fond, seulement de l'intrication* (holographie). Aucune des deux ne contient
le mot « simulation ».

---

## Ce que le dossier n'a pas vérifié

- La littérature 2024-2026 sur SSA/SIA et les classes de référence, non balayée.
- Réception communautaire de Wolpert 2025, trop récente.

Vérifié depuis, le 25 octobre 2026 :
- La section Boltzmann ([10](10-decoherence-et-boltzmann-quantitatifs.md) Partie II),
  confrontée à Page (2007, 2008) et à Bousso et Freivogel (2007) : trois corrections,
  détaillées dans le fichier.
- Les statuts de publication. `MIP* = RE` est accepté aux *Annals of Mathematics*, pas
  encore paru. Findlay et al. 2024, Castilla-Castellano et Lucia 2026, Biswas et al. 2026
  et Steiner et al. 2026 restent des préprints.

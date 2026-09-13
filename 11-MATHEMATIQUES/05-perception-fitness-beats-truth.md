# Perception et vérité — le théorème FBT

> Ajout signalé comme manquant par le fil de commentaires du corpus, et à juste titre :
> une partie de l'argumentation sur « la perception n'est pas le réel » vient de
> **Donald Hoffman**, qui n'est jamais cité. Or c'est la partie **mathématisée** de
> cette thèse, et elle mérite d'être traitée comme telle.

---

## 1. La référence

**Chetan Prakash, Kyle D. Stephens, Donald D. Hoffman, Manish Singh, Chris Fields,
*Fitness Beats Truth in the Evolution of Perception*, Psychonomic Bulletin & Review, 2020.**

Chetan Prakash est mathématicien (California State University, San Bernardino).
C'est un résultat de **théorie des jeux évolutionnaires** couplée à la **théorie
bayésienne de la décision**, pas un essai.

---

## 2. Le théorème FBT

### Cadre
- Un monde objectif `W` avec `|W| = n` états.
- Un espace perceptuel `X` avec `|X| = k` états, `k ≤ n`.
- Une fonction de fitness `f : W → ℝ⁺`.
- Une **stratégie perceptuelle** est une application (stochastique) `p : W → X`.

Deux familles de stratégies :

| Stratégie | Définition |
|---|---|
| **Vérité** (*truth*) | `p` est un homomorphisme structurel : elle préserve l'information sur `W` |
| **Fitness** (*fitness-only*) | `p` partitionne `W` selon les **niveaux de fitness**, sans préserver la structure de `W` |

### Énoncé informel
> Dans une dynamique évolutionnaire, une stratégie qui ne cherche qu'à maximiser
> l'espérance de gain en fitness, sans tenter d'estimer l'état « vrai » du monde,
> supplante systématiquement une stratégie véridique.

Et — c'est le point quantitatif — le théorème fournit **une mesure du degré de
domination**, qui **croît avec la taille de l'espace perceptuel `k`**.

### Intuition de la preuve
Une stratégie véridique dépense de la résolution perceptuelle à distinguer des états
de `W` qui ont la **même** valeur de fitness. Cette résolution est gaspillée.
Une stratégie fitness-only réalloue toute la résolution à discriminer les niveaux de
fitness. À nombre égal de catégories perceptuelles, elle discrimine mieux ce qui compte.

Le rapport de fitness attendu entre les deux croît, sous les conditions du théorème,
avec `n` et `k` — donc les organismes complexes, dans des mondes riches, sont **plus**
poussés à percevoir de façon non véridique, pas moins.

---

## 3. Ce que le théorème établit et n'établit pas

| Affirmation | Statut |
|---|---|
| La sélection naturelle ne favorise pas la véridicité perceptuelle | ✅ **Démontré dans le modèle** |
| Nos perceptions sont une **interface**, pas une reproduction | ✅ Conclusion du modèle |
| Donc le monde objectif n'existe pas | ❌ **Non** — le théorème présuppose `W` |
| Donc nous sommes dans une simulation | ❌ **Non** — sans rapport |
| Donc la conscience est fondamentale | ❌ Non — c'est la thèse *séparée* de Hoffman |

**La distinction est capitale et systématiquement écrasée dans la vulgarisation.**
FBT est un résultat mathématique **dans un modèle** où le monde objectif `W` existe
et a une structure. Il conclut que nos perceptions n'en sont pas un isomorphisme.

L'idéalisme conscientiel que défend Hoffman par ailleurs (« conscious agents ») est une
thèse métaphysique **distincte**, non impliquée par FBT.

Attribuer à FBT la conclusion « rien n'existe si on ne le regarde pas » — le titre du
podcast — est un contresens complet : le théorème *suppose* un monde qui existe.

---

## 4. Les objections sérieuses au théorème

Il faut les donner, sinon on répète l'erreur qu'on reproche.

1. **Étroitesse du modèle.** Les jeux considérés sont statiques, avec des fonctions de
   fitness fixes. Dans des environnements changeants, une représentation structurellement
   fidèle a une valeur d'option : elle généralise à des fitness non anticipées.
2. **La dichotomie vérité/fitness est trop nette.** Les stratégies réelles sont des
   **compressions partiellement structurelles**. Le théorème compare deux extrêmes.
3. **Coût des stratégies non pris en compte.** Le modèle ne pénalise pas le coût de
   maintenir une partition fitness-only complexe.
4. **Portée limitée à la perception.** Il ne dit rien sur la **cognition**, qui construit
   des modèles explicitement véridiques — la physique en est un.

**Objection 4 est la plus décisive contre l'usage qu'on fait du théorème.** Notre
science n'est pas notre perception. Une interface non véridique n'empêche nullement de
construire, par la théorie et l'instrument, des modèles qui prédisent — c'est
exactement ce que fait la physique.

---

## 5. Effet sur le dossier

### 5.1 Ce que cela renforce
L'argument A6 du fact-check (« le cerveau reconstruit la perception ») gagne une base
mathématique : ce n'est pas seulement que le cerveau reconstruit, c'est qu'il est
**sélectionné pour ne pas** être véridique.

### 5.2 Ce que cela ne change pas
Le facteur de Bayes reste 1. FBT est vrai **que nous soyons simulés ou non**.
Un organisme évolué dans un univers de base et un organisme évolué dans une simulation
subissent la même pression. **`P(FBT | H_S) = P(FBT | H_N)`.**

L'argument reste donc informationnellement vide sur la question de la simulation,
tout en étant un beau résultat sur autre chose.

### 5.3 L'usage correct
FBT appartient à la couche **épistémologique** du dossier, pas à la couche des indices.
Il dit : *ne prenez pas votre interface pour le fond*. C'est une raison d'humilité
sur nos concepts — donc un appui pour **H8** (le niveau fondamental pourrait être
inconcevable pour nous), et une raison de plus de préférer les instruments à l'intuition.

---

## 6. Note d'attribution

Le fil de commentaires reproche au corpus d'avoir « emprunté des pans entiers de
raisonnement » à Hoffman sans le citer, et d'ignorer **Anil Seth**.

C'est fondé, et c'est un défaut de méthode plutôt que d'honnêteté : la thèse du
cerveau prédictif et de la perception constructive a des auteurs identifiables —
Hoffman et Prakash pour la version évolutionnaire formalisée, **Karl Friston** pour
le cadre de l'inférence active, **Anil Seth** pour la version « hallucination
contrôlée ». Les citer change le statut de l'affirmation : de l'intuition partagée
à un corps de résultats discutables.

Voir [12-BIOCOMPUTING/02](../12-BIOCOMPUTING/02-energie-libre-et-inference-active.md)
pour Friston, dont le formalisme est par ailleurs **le moteur du protocole DishBrain**.

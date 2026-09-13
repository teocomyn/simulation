# Ce que la physique apporte réellement

> Règle appliquée dans tout ce fichier : distinguer ce qui est **établi**,
> ce qui est **débattu**, et ce qui est une **interprétation ajoutée** par des tiers.

## 1. L'information comme grandeur physique `[ÉTABLI]`

Ce n'est pas une métaphore, c'est un résultat.

- **Entropie de Bekenstein-Hawking.** L'entropie d'un trou noir est proportionnelle à
  l'aire de son horizon, non à son volume : `S = kA/4ℓ_P²`. L'information contenue dans
  une région est bornée par sa **surface**.
- **Principe holographique** ('t Hooft, Susskind). Généralisation : le contenu
  informationnel d'un volume d'espace est encodable sur sa frontière.
- **Principe de Landauer.** Effacer un bit d'information a un coût énergétique minimal
  `kT ln 2`. L'information a une thermodynamique. Vérifié expérimentalement.
- **Borne de Lloyd.** La capacité de calcul de l'univers observable depuis le Big Bang
  est bornée : de l'ordre de 10¹²⁰ opérations sur 10⁹⁰ bits.

**Ce que cela établit :** l'information est une grandeur physique de plein droit,
liée à la géométrie, à la gravitation et à la thermodynamique. C'est solide et important.

**Ce que cela n'établit pas :** que l'univers soit *calculé par quelque chose*.
C'est le glissement central du domaine, et il faut le nommer :

```
      « l'univers est descriptible en termes d'information »
   ⇏  « l'univers est un calcul exécuté sur un support »
   ⇏  « l'univers est une simulation produite par un agent »
```

Chacune de ces flèches est un saut supplémentaire. Le premier est discutable,
le second est purement métaphysique. Une équation n'a pas besoin d'un calculateur
pour être vraie.

## 2. La discrétisation `[DÉBATTU]`

### Ce qui est vrai
L'échelle de Planck (`ℓ_P ≈ 1,616 × 10⁻³⁵ m`, `t_P ≈ 5,39 × 10⁻⁴⁴ s`) est l'échelle
où les descriptions relativiste et quantique cessent conjointement d'être fiables.
Plusieurs approches de gravité quantique (gravité quantique à boucles, ensembles causaux)
proposent une structure discrète de l'espace-temps.

### Ce qui est faux
```
❌  échelle de Planck  =  « pixel de l'univers »
```
C'est l'erreur la plus répandue du domaine. L'échelle de Planck n'est pas une
granularité mesurée ; c'est une combinaison dimensionnelle de constantes
(`ℓ_P = √(ħG/c³)`) marquant la limite de validité des théories actuelles.
Aucune expérience n'a mis en évidence une granularité de l'espace à cette échelle.
Plusieurs observations la contraignent d'ailleurs fortement : la propagation
des photons gamma sur des milliards d'années-lumière (Fermi-LAT) n'a montré aucune
dispersion dépendante de l'énergie, ce qui exclut certains modèles d'espace-temps discret.

### Ce qui serait un vrai indice
Une **anisotropie** — c'est-à-dire une direction privilégiée. Un réseau de calcul brise
l'invariance par rotation. Chercher cette brisure est la seule stratégie sérieuse,
et c'est exactement ce que fait Beane et al. Voir
[02-signatures-testables.md](02-signatures-testables.md).

## 3. La mécanique quantique `[SOURCE DE CONFUSION MAJEURE]`

### Ce que dit la mécanique quantique
Un système non mesuré est décrit par une superposition d'états. Après interaction avec
un appareil de mesure, on n'observe qu'un résultat. C'est le **problème de la mesure**,
et il est réel : il n'existe pas d'interprétation faisant l'unanimité.

### Ce qu'elle ne dit pas
- Elle ne dit pas que la réalité « n'existe pas » tant qu'on ne regarde pas.
- Elle ne dit pas qu'un **observateur conscient** est nécessaire.
- Elle ne dit pas que l'univers « économise du calcul » en ne rendant que le visible.

### La décohérence, qui manque à presque toutes les vulgarisations
Depuis les travaux de Zeh (1970) et Zurek (1980s), la **décohérence** explique
quantitativement pourquoi les superpositions macroscopiques deviennent inobservables :
l'intrication rapide avec l'environnement disperse la cohérence de phase dans un nombre
astronomique de degrés de liberté. Aucune conscience n'est requise. Le processus est
mesuré en laboratoire, et ses temps caractéristiques sont prédits puis vérifiés.

La décohérence ne résout pas entièrement le problème de la mesure — il reste la question
de la sélection d'un résultat unique, sur laquelle les interprétations divergent.
Mais elle **retire à la conscience tout rôle nécessaire** dans l'apparence de
l'effondrement, et c'est précisément ce qui vide de sa substance l'argument
« observation = rendu ».

Traitement détaillé du cas Campbell en
[03-CONSCIENCE/02](../03-CONSCIENCE/02-conscience-et-effondrement.md).

## 4. Les constantes et l'ajustement fin `[DÉBATTU]`

Argument fréquemment mobilisé : les constantes fondamentales seraient « réglées » pour
permettre la complexité, ce qui suggérerait un réglage intentionnel.

Trois réponses concurrentes, aucune décisive :
1. **Multivers** — un grand nombre d'univers aux constantes variées, sélection anthropique.
2. **Théorie plus fondamentale** — les constantes ne seraient pas libres mais dérivées.
3. **Erreur de raisonnement** — nous n'avons pas la mesure de probabilité sur l'espace
   des constantes possibles qui permettrait de dire qu'un réglage est improbable.

La troisième objection est la plus forte et la moins citée : parler d'un réglage
« improbable » suppose une distribution de probabilité sur les valeurs possibles.
Nous n'en avons aucune. C'est le même défaut structurel que dans l'argument de Bostrom —
une probabilité calculée sur un espace non défini.

## 5. L'irréductibilité computationnelle `[DÉBATTU]`

Stephen Wolfram et d'autres soutiennent qu'une large classe de systèmes est
**computationnellement irréductible** : il n'existe pas de raccourci pour prédire leur
état futur, il faut faire tourner le calcul pas à pas.

Conséquence pour l'hypothèse de simulation, et elle est à double tranchant :

- **Contre** : simuler un univers irréductible coûte au moins autant que l'univers
  lui-même. L'idée d'une simulation « économique » d'un univers riche devient douteuse.
- **Pour** : cela ne réfute rien si le substrat dispose de ressources d'un ordre
  supérieur. On ne sait rien de la physique du niveau supérieur — c'est le problème
  récurrent de toute réfutation par le coût.

**Ce qu'il faut en retenir :** l'argument du coût ne tranche dans aucun sens.
Il est régulièrement invoqué dans les deux camps, et il est faible dans les deux.

## 6. Tableau de synthèse

| Piste | Statut | Direction |
|---|---|---|
| Information comme grandeur physique | `[ÉTABLI]` | Neutre — souvent surinterprété |
| Principe holographique | `[ÉTABLI]` en gravité semi-classique | Neutre |
| Bornes de calcul (Lloyd, Landauer) | `[ÉTABLI]` | Neutre |
| Discrétisation de l'espace-temps | `[DÉBATTU]` | Testable, non observée |
| Anisotropie des rayons cosmiques UHE | `[TESTABLE]` | **La seule vraie piste** |
| Problème de la mesure | `[OUVERT]` | Neutre — mal utilisé |
| Décohérence | `[ÉTABLI]` | **Contre** l'argument « conscience = rendu » |
| Ajustement fin | `[DÉBATTU]` | Neutre — mesure de probabilité indéfinie |
| Irréductibilité computationnelle | `[DÉBATTU]` | Ambivalent |

**Bilan.** La physique ne fournit aujourd'hui **aucune indication positive** en faveur
de l'hypothèse de simulation. Elle fournit un cadre — l'information comme grandeur
physique — dont l'hypothèse s'inspire, et une seule stratégie de test réellement
réfutable, qui n'a rien donné jusqu'ici. Ce n'est pas rien : c'est exactement ce qu'on
attend d'un programme de recherche jeune et honnête.

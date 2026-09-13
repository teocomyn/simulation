# Formalisme anthropique

> Objet : écrire proprement l'argument de Bostrom, puis écrire proprement l'objection.
> Une fois formalisées, les deux deviennent nettement plus tranchantes.

## 1. La dérivation de Bostrom

Notation :

| Symbole | Signification |
|---|---|
| `f_p` | fraction des civilisations de niveau humain atteignant le stade posthumain |
| `f_I` | fraction des civilisations posthumaines lançant des simulations d'ancêtres |
| `N̄` | nombre moyen de simulations d'ancêtres par civilisation qui en lance |
| `H̄` | nombre moyen d'individus ayant vécu dans une civilisation avant le stade posthumain |
| `f_sim` | fraction des observateurs « de notre type » qui sont simulés |

Comptage sur une civilisation type :

```
observateurs simulés  =  f_p · f_I · N̄ · H̄
observateurs réels    =  H̄

                    f_p · f_I · N̄ · H̄            f_p · f_I · N̄
f_sim  =  ─────────────────────────────────  =  ───────────────────
           f_p · f_I · N̄ · H̄  +  H̄              f_p · f_I · N̄ + 1
```

Posons `κ = f_p · f_I · N̄`. Alors :

```
f_sim = κ / (κ + 1)
```

Fonction croissante, saturante. `f_sim → 1` dès que `κ ≫ 1`.

**Le rôle de `N̄` est décisif et rarement souligné.** Si `N̄` est astronomique — Bostrom
argumente par les bornes physiques du calcul posthumain — alors `κ ≫ 1` sauf si
`f_p · f_I` est lui-même astronomiquement petit. D'où la disjonction :

```
f_p ≈ 0    ou    f_I ≈ 0    ou    f_sim ≈ 1
```

C'est **rigoureusement correct**. Ce n'est pas là que l'argument casse.

## 2. Le pas non démontré : de `f_sim` à `P(je suis simulé)`

Bostrom passe de la **fréquence** `f_sim` à la **probabilité subjective** que *je* sois
simulé, via un principe d'auto-localisation.

### 2.1 SSA — Self-Sampling Assumption
> Raisonner comme si l'on était un échantillon aléatoire uniforme dans l'ensemble des
> observateurs de sa **classe de référence** `R`.

Formellement, pour un monde `w` contenant `|R(w)|` observateurs de la classe :

```
P(je suis l'observateur i | w)  =  1 / |R(w)|     pour tout i ∈ R(w)
```

D'où, par marginalisation sur les mondes :

```
P(je suis simulé)  =  Σ_w  P(w) · ( |R_sim(w)| / |R(w)| )
```

Si l'on suppose de plus `|R_sim(w)|/|R(w)| ≈ f_sim` uniformément, on obtient
`P(simulé) ≈ f_sim`. **C'est ce dernier pas qui est l'argument entier**, et c'est un
choix de mesure, pas un théorème.

### 2.2 SIA — Self-Indication Assumption
Alternative : pondérer aussi les **hypothèses** par le nombre d'observateurs qu'elles
contiennent.

```
P_SIA(w | je suis un observateur)  ∝  P(w) · |R(w)|
```

SSA et SIA donnent des résultats **différents** sur les mêmes données, et chacune
produit des paradoxes documentés dans certains cas (SSA → argument de l'apocalypse ;
SIA → présomption démesurée en faveur des mondes très peuplés).

**Il n'existe pas de choix par défaut justifié.** Prétendre « ne rien supposer »
en appliquant l'indifférence est faux : on suppose une mesure sur un espace
d'observateurs, et **c'est la mesure qui fait le résultat**.

## 3. Le problème de la classe de référence, écrit

Le résultat dépend de `R`, et `R` n'est pas spécifié. Formellement, le rapport

```
ρ(R)  =  |R_sim| / |R|
```

n'est **pas invariant** par changement de `R` :

| Choix de `R` | Effet sur `ρ` |
|---|---|
| Tous les observateurs conscients | `ρ` élevé si les simulations abondent |
| Observateurs ayant *exactement* nos expériences | indéterminé — dépend de la granularité de « exactement » |
| Observateurs **biologiques** | `ρ = 0` par construction. L'argument ne démarre pas |
| Observateurs dans des univers de base | `ρ = 0` idem |
| Observateurs dont l'univers a nos constantes | inconnu |

Bostrom reconnaît lui-même que la définition de la classe reste ouverte.

**Conséquence formelle :** un argument dont la conclusion varie avec un paramètre
non spécifié n'a pas de conclusion. `ρ` n'est pas une quantité bien définie tant que
`R` ne l'est pas.

## 4. L'objection, écrite proprement

Notons `A` la conjonction des prémisses :

```
A  =  P1 ∧ P2 ∧ P3 ∧ P4 ∧ P5

P1 : substrat-indépendance de la conscience
P2 : ressources posthumaines rendant N̄ astronomique
P3 : coût négligeable d'une simulation d'ancêtres
P4 : les simulés et nous sont dans la même classe de référence R
P5 : principe d'indifférence sur R (SSA ou variante)
```

Bostrom établit :

```
P(sim | A)  ≈  1        [sous réserve que f_p·f_I ne soit pas quasi nul]
```

La lecture populaire affirme :

```
P(sim)  ≈  1
```

Or, par la loi des probabilités totales :

```
P(sim)  =  P(sim | A) · P(A)  +  P(sim | ¬A) · P(¬A)
```

**Le premier terme est borné par `P(A)`.** Et `P(A)` est inconnue — pas seulement
« mal estimée », mais **structurellement inaccessible** sur au moins un facteur :

```
f_I  =  fraction des civilisations posthumaines lançant des simulations d'ancêtres
```

C'est une affirmation sur les **préférences** d'entités hypothétiques dont on ignore
l'existence. Aucune accumulation de données, aujourd'hui ou dans mille ans, ne la
contraint. Un paramètre libre inaccessible en principe empêche l'argument de devenir
empirique par accumulation.

**Formulation minimale de l'objection :**

> Une probabilité conditionnelle dont l'antécédent a une probabilité inconnue, et dont
> au moins un facteur est non identifiable, ne fournit aucune information sur le conséquent.

## 5. La preuve par la symétrie : Boltzmann

C'est l'argument le plus fort du dossier, et il est purement formel.

Considérons les deux raisonnements :

```
(B1)  Bostrom
      |R_sim| / |R|  ≈  1        ⇒   P(je suis simulé) ≈ 1

(B2)  Boltzmann
      |R_BB|  / |R|  ≈  1        ⇒   P(je suis une fluctuation) ≈ 1
```

**Ils ont la même forme.** Même SSA, même passage fréquence → probabilité indexicale,
même classe de référence non spécifiée.

Or en cosmologie, `(B2)` est traité comme une **réduction à l'absurde** : un modèle
prédisant une domination des cerveaux de Boltzmann est dit *pathologique* et l'on rejette
le modèle, pas la conclusion. C'est un critère standard de sélection de modèles
cosmologiques.

**Le problème de la mesure est le même objet mathématique.** Dans un espace de de Sitter
éternel, les deux populations sont infinies :

```
|R_BB| = ∞      |R_ord| = ∞      ⇒   ratio de la forme ∞/∞
```

Il faut un **régulateur** (une prescription de coupure) pour définir le rapport,
et **différents régulateurs donnent des réponses différentes**. C'est le *measure problem*
de la cosmologie, ouvert depuis vingt ans.

**Le problème de la classe de référence de Bostrom est exactement ce problème,
sous un autre nom.** L'un est traité comme une pathologie disqualifiante, l'autre
comme un résultat. Cette asymétrie de traitement n'est justifiée par rien.

## 6. Ce que l'objection ne fait pas

Elle ne réfute pas l'hypothèse. Elle établit trois choses, toutes précises :

1. `P(sim)` n'est pas dérivable de l'argument.
2. `f_sim` est mal défini tant que `R` ne l'est pas.
3. Le passage `f_sim → P(sim)` est un **choix de mesure**, et ce choix est le contenu
   de l'argument, pas son préalable neutre.

## 7. La lecture bayésienne correcte

Ce qu'on peut légitimement écrire, si l'on veut travailler proprement :

```
              P(D | H_S)     P(H_S)
posterior  =  ────────────  ·  ──────
              P(D | H_N)     P(H_N)
```

Et le constat, développé en [04-sous-determination.md](04-sous-determination.md) :

**pour toute donnée `D` actuellement accessible, `P(D|H_S) ≈ P(D|H_N)`.**

Le facteur de Bayes vaut 1. Le posterior égale le prior. Aucune observation disponible
n'informe la question.

C'est un énoncé beaucoup plus fort et plus utile que « on ne sait pas » :
c'est **on ne peut pas savoir avec les observables dont on dispose**, et c'est
démontrable argument par argument.

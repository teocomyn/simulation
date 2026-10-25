# Programme de recherche — version durcie

Reprise du projet SIMULATION PROTOCOL du corpus. L'intuition de départ est bonne ;
elle a une faiblesse fatale qu'il faut corriger avant tout le reste.

## 1. Ce que le corpus a juste

| Élément | Pourquoi c'est bon |
|---|---|
| Ne pas viser « prouver que nous sommes simulés » | Évite le biais de confirmation dès l'énoncé de l'objectif |
| Mise à jour bayésienne, facteur de Bayes | Le bon cadre formel pour l'inférence sur des hypothèses concurrentes |
| Construire une **carte des versions** de l'hypothèse | Décisif : « nous sommes simulés » est scientifiquement presque vide |
| Base d'anomalies avec pondération de la réplication | La réplication doit peser plus que la significativité |
| Pré-enregistrement des prédictions | La seule protection réelle contre l'interprétation post hoc |
| **Recruter des sceptiques** | Le point le plus important de tout le projet |
| Marché de prédiction interne et calibration | Permet de mesurer qui a raison, dans dix ans |
| Refuser de « provoquer le simulateur » | Correct scientifiquement et éthiquement |
| « Nous cherchons la vérité, pas la simulation » | La bonne règle constitutionnelle |
| Accepter que `P` passe de 10 % à 0,001 % comme une réussite | Le marqueur d'un vrai programme |

C'est un ensemble sérieux. La plupart des projets amateurs sur ce sujet n'ont aucun
de ces éléments.

## 2. La faiblesse fatale, et sa correction

**Le projet n'exige pas qu'une hypothèse produise une prédiction différentielle
avant d'entrer dans le corpus.** Sans cette exigence, il accumulera indéfiniment des
positions métaphysiques en croyant faire de la science, et le knowledge graph deviendra
une encyclopédie du plausible.

### La règle à ajouter, en tête de charte

> **Règle 0.** Une hypothèse de simulation qui ne produit **aucune observation où elle
> diverge de la physique standard** n'entre pas dans le corpus de recherche.
> Elle est archivée comme position métaphysique, avec ce label.

Cette règle élimine d'un coup la quasi-totalité de la littérature du domaine —
y compris la plupart des arguments du corpus de départ. **C'est le but.**

Ce qui survit à la Règle 0, aujourd'hui : essentiellement Beane, Davoudi & Savage (2012),
et le protocole de Campbell (dont la prédiction est probablement fausse, mais qui est
au moins une prédiction).

## 3. Corrections structurelles

### C1 — Renoncer au nom
« Simulation Protocol » et « Simulation Hypothesis Map » encodent la conclusion dans
l'intitulé. Un chercheur qui rejoint un projet nommé d'après une hypothèse ne peut pas
être neutre à son égard, et il le sait.

**Nom recommandé :** *Foundations of Reality Programme*, ou tout intitulé désignant
la **question** et non une réponse. Le corpus arrive d'ailleurs à cette conclusion
tout seul avec le « Reality Research Institute » — il faut appliquer la même logique
au niveau du programme, pas seulement de l'institut.

### C2 — Inverser la charge du travail
Le projet consacre six mois à construire la théorie **avant** de chercher des anomalies.
Bon principe. Mais il faut aller plus loin : consacrer le premier effort à **réfuter
les arguments existants**, pas à en accumuler.

Le fichier [02-PHYSIQUE/04](../02-PHYSIQUE/04-fact-check-arguments-populaires.md)
est un exemple de ce travail. Il produit un résultat net : douze arguments populaires,
zéro survivant. C'est plus informatif que douze nouveaux arguments.

### C3 — Séparer physiquement les deux programmes
Q1 (substrat informationnel) et Q2 (simulation intentionnelle) n'ont pas le même statut.
Les mêmes chercheurs ne devraient pas travailler sur les deux, sous peine de contamination.

```
Programme A — Fondements physiques et informationnels   [scientifique]
  Holographie, espace-temps émergent, information quantique, discrétisation, tests d'anisotropie

Programme B — Hypothèses de simulation                  [philosophique, sous Règle 0]
  Formalisation, analyse des arguments, cartographie ontologique

Programme C — Conscience                                [le verrou réel]
  Substrat-indépendance, théories, critères opérationnels

Programme D — Épistémologie et sociologie               [méta]
  Pourquoi ce sujet, pourquoi ce milieu, quelles erreurs récurrentes
```

**Le budget devrait aller majoritairement à C**, parce que c'est le seul verrou dont
la levée débloquerait les autres. Voir
[03-CONSCIENCE/01](../03-CONSCIENCE/01-probleme-difficile-et-substrat.md) §4.

### C4 — Le moteur IA doit chercher les réfutations, pas les hypothèses
Le corpus imagine un « AI Scientist » qui lit la littérature et **génère des hypothèses**.
C'est la mauvaise direction : générer des hypothèses n'est pas le goulot d'étranglement.
Il y en a déjà trop.

**Réorientation :** un système qui, pour chaque affirmation du corpus, cherche
systématiquement les explications alternatives, les échecs de réplication, les critiques
publiées, et les surinterprétations médiatiques.

Le cas Vopson / Ringel-Kovrizhin en est la démonstration : deux papiers légitimes,
transformés en preuves opposées d'une même thèse par la communication. Un système qui
détecte ce motif vaut plus qu'un système qui produit une hypothèse de plus.

### C5 — La base d'anomalies doit exiger un modèle a priori
Une anomalie n'est intéressante que **si une hypothèse la prédisait avant**.

```
Score(A) = f(significativité, réplication, qualité de mesure, surprise théorique)
```

À la formule du corpus, ajouter un facteur binaire :

```
Score(A) = 0  si aucune hypothèse pré-enregistrée ne prédisait A
```

Sans cela, la base devient un catalogue de curiosités, et le biais de sélection fait
le reste. C'est la différence entre une base de données et un cabinet de curiosités.

## 4. Feuille de route révisée

| Phase | Contenu | Livrable |
|---|---|---|
| **0 — Assainissement** | Réfuter systématiquement les arguments existants. Établir la carte des non-sequiturs | Un document du type [02-PHYSIQUE/04](../02-PHYSIQUE/04-fact-check-arguments-populaires.md), exhaustif |
| **1 — Formalisation** | Décomposer l'hypothèse en versions assez précises pour prédire. Appliquer la Règle 0 | Liste des versions survivantes — probablement très courte |
| **2 — Différentiation** | Pour chaque survivante, dériver au moins une observation divergente | Prédictions pré-enregistrées publiquement |
| **3 — Test** | Collaboration avec des équipes expérimentales indépendantes | Résultats publiés, quel que soit leur signe |
| **4 — Mise à jour** | Actualisation bayésienne, publication des probabilités révisées | Historique de calibration |

**Critère de succès du programme :** que la liste de la phase 1 soit courte, et que la
phase 2 échoue souvent. Un programme qui trouve toujours des prédictions confirmées
sur un sujet pareil ne fait pas de la science.

## 5. Le risque n° 1, nommé par le corpus lui-même

> Ton ennemi numéro un ne sera probablement pas le manque de puissance informatique.
> Ce sera ta propre envie que l'hypothèse soit vraie.

C'est exact, et c'est la phrase à garder. Les contre-mesures concrètes :

1. **Un sceptique rémunéré à temps plein**, dont l'évaluation dépend explicitement du
   nombre d'hypothèses détruites.
2. **Publication obligatoire des résultats négatifs**, avec la même visibilité que les positifs.
3. **Pré-enregistrement systématique**, sans exception.
4. **Analyse en aveugle** quand c'est possible.
5. **Historique public des probabilités**, pour que la calibration soit vérifiable
   après coup — y compris celle du fondateur.
6. **Une règle de sortie écrite d'avance** : à quelles conditions le programme s'arrête.

Le point 6 est le plus difficile et le plus révélateur. Un programme de recherche
qui ne peut pas dire ce qui le ferait renoncer n'est pas un programme de recherche.

## 6. Le réalisme sur l'échelle

Le corpus imagine 2 physiciens théoriciens, 1 cosmologiste, 1 spécialiste des fondements
quantiques, 1 mathématicien, 1 philosophe des sciences, 2 chercheurs en IA, plus la
coordination. Une roadmap 2026-2032 et au-delà.

**C'est irréaliste comme point de départ**, et ce n'est pas nécessaire.

Ce qui est faisable et immédiatement utile, seul ou à deux :

- La **phase 0** en entier. Elle ne demande aucun laboratoire, seulement de la rigueur
  et du temps. Le présent dossier en est un premier jet.
- La **veille structurée** sur Q1 (holographie, espace-temps émergent, information
  quantique) — le seul domaine où il se passe réellement quelque chose.
- Le **suivi des surinterprétations médiatiques**, qui est un travail utile, publiable,
  et que personne ne fait systématiquement.
- Le **test mensuel de citation** : poser dix questions type aux moteurs génératifs
  et relever ce qu'ils affirment sur le sujet. Cela mesure la diffusion des erreurs
  en temps réel.

Un travail sérieux et modeste sur ces quatre points vaut mieux qu'un institut annoncé.
Et c'est aussi la meilleure façon de recruter plus tard : par la qualité du travail
déjà fait, pas par l'ambition de l'organigramme.

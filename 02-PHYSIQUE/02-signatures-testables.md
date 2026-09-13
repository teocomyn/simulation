# Signatures testables

> Critère d'entrée dans ce fichier : l'hypothèse doit produire une observation où elle
> **diverge** de la physique standard. Tout le reste est en
> [04-ONTOLOGIE](../04-ONTOLOGIE/01-carte-des-niveaux.md), pas ici.

## 1. Beane, Davoudi & Savage (2012) — la seule vraie tentative

**Référence.** S. R. Beane, Z. Davoudi, M. J. Savage, *Constraints on the Universe as a
Numerical Simulation*, arXiv:1210.1847 ; publié dans **European Physical Journal A**, 2014.

### La démarche, et pourquoi elle est exemplaire

Les auteurs ne testent pas « l'hypothèse de simulation » — notion trop vague pour être
testée. Ils testent **une version précise** : notre univers serait simulé sur un
**réseau cubique d'espace-temps**, par extrapolation de ce que fait aujourd'hui la
chromodynamique quantique sur réseau (lattice QCD), avec une discrétisation de type
fermions de Wilson non améliorés.

C'est la bonne méthode, et c'est ce qui manque partout ailleurs :
**restreindre l'hypothèse jusqu'à ce qu'elle prédise quelque chose.**

### La signature

Un réseau cubique **brise l'invariance par rotation**. Cette brisure devrait apparaître
dans les phénomènes de plus haute énergie disponibles, c'est-à-dire dans le spectre des
rayons cosmiques d'ultra-haute énergie :

1. Le seuil de coupure du spectre (coupure GZK) serait modifié.
2. Surtout, la **distribution des directions d'arrivée** des rayons cosmiques les plus
   énergétiques présenterait une anisotropie reflétant les axes du réseau.

### Le résultat

Aucune anisotropie de ce type observée. Les auteurs en tirent une **borne** :
l'inverse du pas de réseau serait `b⁻¹ ≳ 10¹¹ GeV`.

Autres observables considérées : le moment magnétique anomal du muon (`g-2`) et les
écarts entre déterminations de la constante de structure fine.

### Ce que le résultat signifie exactement

| Lecture | Correcte ? |
|---|---|
| « On a prouvé qu'on n'est pas dans une simulation » | ❌ Non |
| « On a prouvé qu'on est dans une simulation » | ❌ Non |
| « Si l'univers est simulé sur un réseau cubique de ce type, le pas est inférieur à cette borne » | ✅ Oui |

C'est un résultat modeste et honnête. Il ne teste **qu'une famille très particulière**
de simulations : celles reposant sur une discrétisation régulière de type réseau.
Une simulation utilisant un maillage adaptatif, une géométrie non régulière, ou tout
autre schéma numérique échapperait entièrement au test.

**C'est la limite structurelle de toute cette approche :** on ne peut tester que
les simulations qui ressemblent à celles qu'on sait faire.

## 2. Les expériences de Tom Campbell `[TESTABLE, PRÉDICTION PROBABLEMENT FAUSSE]`

### Le dispositif

Cinq expériences, variantes de la double fente et de la gomme quantique à choix retardé.
Le protocole central : deux supports d'enregistrement (des clés USB dans la description
publique). L'un enregistre l'information de chemin (*which-way*), l'autre le motif d'impact.

**Prédiction de Campbell :** le motif d'interférence apparaîtrait dans les données
seulement si l'information de chemin a été **détruite avant qu'un humain n'y accède**.
Autrement dit, ce n'est pas l'appareil qui provoque l'effondrement, c'est l'accès d'une
conscience à l'information.

**Prédiction de la mécanique quantique standard :** le motif dépend de l'existence
physique de l'information de chemin dans l'environnement, pas de sa lecture par un humain.
Détruire une clé USB après coup ne restaure pas d'interférence dans des données déjà
enregistrées.

### Évaluation en deux temps

**À son crédit `[MÉTHODE VALIDE]`.** La prédiction est claire, différentielle et
réfutable. Dans un domaine où l'écrasante majorité des propositions sont invérifiables,
il faut le reconnaître explicitement. Le financement participatif plutôt qu'académique
n'est pas en soi un défaut méthodologique.

**Et le protocole est publié et évalué par les pairs :** T. Campbell, H. Owhadi,
J. Sauvageau, D. Watkinson, *On Testing the Simulation Theory*, **International Journal
of Quantum Foundations** 3(3), 2017. **Houman Owhadi est professeur à Caltech.**
Les expériences sont conduites à **California State Polytechnic University, Pomona**.
Un protocole publié n'est pas rien, et il faut le distinguer d'un simple communiqué.

**Contre `[PRÉDICTION PROBABLEMENT FAUSSE]`.** Trois raisons convergentes :

1. **La décohérence.** Dès que l'information de chemin est enregistrée dans un système
   macroscopique, la cohérence est perdue de façon irréversible. Ce n'est pas une
   question d'interprétation, c'est un calcul vérifié expérimentalement.
2. **Les gommes quantiques ont déjà été faites**, depuis les années 1990, dans de
   nombreuses configurations. Aucune n'a montré de dépendance à l'observation humaine.
3. **L'interprétation von Neumann–Wigner** — la conscience cause l'effondrement — est
   une position minoritaire, largement abandonnée depuis les années 1980, précisément
   parce que la décohérence rend le recours à la conscience superflu.

### Ce qu'il faut surveiller

À la date du 29 août 2026, la recherche publique ne fait apparaître **aucun résultat
expérimental publié et évalué par les pairs** issu de ce programme — seulement des
communiqués, des conférences et des descriptions de protocole. C'est le point critique :
un protocole annoncé n'est pas un résultat.

**Ce qu'il faudrait pour prendre le résultat au sérieux, s'il arrivait :**
publication dans une revue de physique évaluée, protocole pré-enregistré, analyse en
aveugle, et surtout **réplication par une équipe indépendante et sceptique**.
Sans ces quatre conditions, un résultat positif serait plus vraisemblablement un artefact
qu'une révolution — c'est la leçon de toutes les expériences antérieures sur la
conscience et l'effondrement.

## 3. Autres pistes proposées, et leur solidité

| Piste | Auteur | Verdict |
|---|---|---|
| Anisotropie du rayonnement cosmique UHE | Beane et al. 2012 | ✅ **Testable, testé, négatif à ce jour** |
| Coupure du spectre à haute énergie | Beane et al. 2012 | ✅ Testable |
| Dispersion des photons gamma dépendante de l'énergie | Fermi-LAT et al. | ✅ Testable, contraint fortement l'espace-temps discret |
| Gomme quantique dépendante de l'observateur humain | Campbell | ⚠️ Testable, prédiction probablement fausse, pas de résultat publié |
| « Second principe de l'infodynamique » | Vopson (2023, AIP Advances) | ❌ Voir §4 |
| Gravité comme minimisation d'entropie informationnelle | Vopson (2025, AIP Advances) | ❌ Voir §4 |
| Détection d'un « glitch » | culture populaire | ❌ Non testable — voir §5 |

## 4. Le cas Vopson `[CONTESTÉ, À NE PAS PRÉSENTER COMME UNE PREUVE]`

Melvin Vopson (université de Portsmouth) a publié un « second principe de
l'infodynamique » (AIP Advances, 2023) selon lequel l'entropie informationnelle de
certains systèmes décroîtrait, ce qu'il interprète comme la signature d'une compression
de données — donc d'une simulation. Il a prolongé en 2025 avec une proposition présentant
la gravité comme un mécanisme d'optimisation informationnelle.

Ces travaux ont eu un fort écho médiatique (« un scientifique dit avoir la preuve que
nous vivons dans une simulation »). Ils sont **contestés sur le fond** :
Sabine Hossenfelder a publié une critique détaillée pointant des erreurs mathématiques,
une contradiction avec le second principe de la thermodynamique et une confusion sur
la notion d'information. Vopson et ses soutiens ont répondu ; le débat n'est pas clos,
mais la thèse n'a aucun statut de résultat acquis.

**Traitement recommandé :** citer comme exemple de la difficulté du domaine et de
l'écart entre publication et communiqué de presse, jamais comme élément de preuve.
C'est aussi un cas d'école pour
[08-PROTOCOLE/02](../08-PROTOCOLE/02-hygiene-epistemique.md), piège n° 12.

## 5. Pourquoi la recherche de « glitchs » ne peut pas fonctionner

L'anecdote fondatrice du livre de Loïc Hecht — deux milliardaires finançant des
scientifiques pour trouver le bug — repose sur une intuition qui ne tient pas à l'analyse.

1. **Aucun modèle de ce qu'est un glitch.** Sans théorie du substrat, on ne sait pas
   ce qui compterait comme anomalie plutôt que comme physique inconnue. Toute anomalie
   observée serait d'abord, et beaucoup plus vraisemblablement, une lacune de nos théories.
2. **Le déjà-vu n'est pas une donnée.** C'est un phénomène neurologique documenté.
   Les subreddits de type *Glitch in the Matrix* collectent des anecdotes non
   reproductibles, non contrôlées, soumises à biais de mémoire et de sélection.
3. **Un simulateur compétent n'a pas de bugs observables de l'intérieur.**
   L'argument s'auto-détruit : plus la simulation est bonne — et l'argument de Bostrom
   suppose qu'elle est excellente — moins il y a de glitch à trouver.
4. **Asymétrie fatale.** Trouver un glitch ne prouverait pas la simulation ;
   ne pas en trouver ne prouverait rien non plus.

**Le seul programme cohérent** est l'inverse : ne pas chercher des anomalies au hasard,
mais construire une hypothèse assez contrainte pour prédire *où* et *quelle* anomalie
chercher. C'est exactement ce que fait Beane et al., et c'est pourquoi c'est le seul
travail sérieux du domaine.

## 6. Grille d'évaluation à appliquer à toute proposition future

| Critère | Question |
|---|---|
| Différentialité | Prédit-elle une observation où elle diffère de la physique standard ? |
| Précision | La prédiction est-elle quantitative, avec des barres d'erreur ? |
| Pré-enregistrement | La prédiction a-t-elle été publiée **avant** de regarder les données ? |
| Explications alternatives | Ont-elles été énumérées et écartées explicitement ? |
| Réplication | Une équipe indépendante — idéalement hostile — a-t-elle reproduit ? |
| Publication | Revue évaluée, ou communiqué de presse ? |
| Robustesse | Le résultat survit-il à un changement d'analyse raisonnable ? |

Une proposition qui échoue au premier critère n'est pas une hypothèse scientifique.
Elle peut rester une position philosophique intéressante — mais elle sort du corpus
de recherche.

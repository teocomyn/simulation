# Synthèse

> **État de l'art arrêté au 29 août 2026.** Trois développements postérieurs à la rédaction
> initiale changent le tableau :
> **(1)** Wolpert (*J. Phys. Complexity*, décembre 2025) donne le premier cadre
> mathématiquement précis du sujet et montre qu'il n'y a pas nécessairement de niveau
> supérieur et de niveau inférieur ;
> **(2)** COGITATE (*Nature*, avril 2025) met en difficulté les deux principales théories
> de la conscience — le verrou central s'élargit ;
> **(3)** l'échange Vazza ↔ Edge & Brown ↔ Bostrom déplace le débat vers le coût de
> simuler l'expérience elle-même, que **personne n'a jamais chiffré**, faute de savoir ce
> que coûte une conscience.
> Détail complet en [10-ACTUALISATION](10-ACTUALISATION/01-etat-de-l-art-2026.md),
> traitement formel en [11-MATHEMATIQUES](11-MATHEMATIQUES/), bilan au §9 ci-dessous.

## 1. Le geste central : séparer quatre questions

Presque toute la discussion publique sur la simulation — y compris dans le corpus de départ —
traite comme une seule question ce qui en est quatre. Elles sont logiquement indépendantes
et n'ont ni les mêmes conditions de vérification, ni les mêmes conséquences.

| # | Question | Statut | Testable ? |
|---|---|---|---|
| **Q1** | Le substrat de la réalité est-il de nature **computationnelle ou informationnelle** ? | `[DÉBATTU]` — programme de recherche actif et légitime | Partiellement |
| **Q2** | Notre univers a-t-il été **produit intentionnellement** par un agent ? | `[SPÉCULATIF]` | Très difficilement |
| **Q3** | Existe-t-il un agent extérieur **capable d'intervenir** ? | `[SPÉCULATIF]` | En principe oui, en pratique non |
| **Q4** | Si oui, **qu'est-ce que cela change** à ce qui est réel, vrai, bon ? | `[PHILOSOPHIQUE]` | Non, mais analysable |

Q1 est une vraie question de physique fondamentale. Q2 est une question métaphysique
déguisée en question empirique. Q3 est presque toujours importée en contrebande depuis
la fiction. Q4 est la seule dont la réponse soit à peu près stable — et c'est « beaucoup
moins qu'on ne croit » (voir §6).

**Le glissement le plus fréquent du domaine est de démontrer Q1 et de conclure Q2.**
C'est un non-sequitur, et il structure une grande partie de la littérature grand public.
Un univers informationnel n'a pas plus besoin d'un programmeur qu'une équation n'a
besoin d'un calculateur.

## 2. Verdict sur l'argument de Bostrom

L'objection formulée à la fin du corpus est correcte, et c'est la chose la plus solide
de tout l'ensemble :

> « Ton calcul est correct uniquement après avoir supposé que des consciences simulées
> existent, que les civilisations avancées en produisent massivement et que nous sommes
> un échantillon aléatoire de l'ensemble de ces consciences. Or ce sont précisément les
> trois choses que nous ne savons pas. Tu as calculé une probabilité conditionnelle,
> pas démontré la condition. »

C'est exactement cela. Développement complet en
[01-ARGUMENT/02-la-faille-probabiliste.md](01-ARGUMENT/02-la-faille-probabiliste.md).

Trois précisions qui renforcent l'objection sans la déformer :

1. **Bostrom lui-même ne conclut pas que nous sommes simulés.** Son papier de 2003
   établit une disjonction : *au moins une* des trois branches est vraie. La lecture
   populaire — « donc nous sommes probablement dans une simulation » — n'est ni sa
   conclusion, ni impliquée par son argument. Elle exige un postulat supplémentaire
   sur l'improbabilité des deux premières branches, que rien n'établit.
2. **La condition de substrat-indépendance de la conscience est le point d'appui de tout
   l'édifice**, et elle est explicitement posée par Bostrom comme une hypothèse. Si la
   conscience dépend de propriétés physiques que le calcul ne réplique pas, les entités
   simulées ne sont pas dans notre classe de référence et l'argument s'effondre entièrement.
3. **Le problème de la classe de référence n'est pas un détail technique.** Bostrom
   reconnaît que la définition de « notre classe de référence » reste ouverte. Or c'est
   elle qui autorise le passage de « les simulations sont nombreuses » à « nous sommes
   probablement dedans ». Sans elle, la proportion de simulés dans une population ne dit
   rien sur *de quel côté* on se trouve.

**Verdict.** L'argument de Bostrom est valide et intéressant comme structure conditionnelle.
Il n'établit aucune probabilité inconditionnelle. Le chiffre de Musk — « une chance sur
des milliards d'être dans la réalité de base » — n'a aucun contenu quantitatif :
il résulte d'un dénombrement de consoles de jeu appliqué à une population dont on ignore
si elle existe.

## 3. Ce que la physique apporte réellement

| Piste | Ce qu'elle établit | Ce qu'elle n'établit pas |
|---|---|---|
| Contraintes sur un réseau d'espace-temps (Beane, Davoudi, Savage 2012) | Une **borne inférieure** sur le pas de réseau, ≳ 10¹¹ GeV, et une signature possible : anisotropie du spectre des rayons cosmiques d'ultra-haute énergie | Aucune indication positive de simulation. C'est un test **d'une version très particulière** de l'hypothèse |
| Principe holographique, bornes de Bekenstein | Que l'information est une grandeur physique fondamentale, liée à la géométrie et à la gravitation | Que l'univers soit *calculé* par quelque chose |
| Complexité de simulation classique (Ringel & Kovrizhin 2017) | Que certains systèmes quantiques ne sont pas simulables efficacement sur un **calculateur classique** | Que l'univers ne soit pas une simulation. Cette lecture, très reprise dans la presse, est une **surinterprétation** — voir [02-PHYSIQUE/03](02-PHYSIQUE/03-arguments-contre.md) |
| Échelle de Planck | Une échelle où la description actuelle cesse d'être valide | Que ce soit un « pixel ». Cette assimilation est fausse. Les données de sursauts gamma excluent les modèles discrets à effet linéaire au-delà de 10 fois l'énergie de Planck, mais le cas quadratique, celui d'un réseau, n'est contraint qu'à environ 7 × 10¹¹ GeV (LHAASO 2024) : voir [11-MATHEMATIQUES/03](11-MATHEMATIQUES/03-bornes-physiques-et-complexite.md) |

**Le seul travail qui mérite le nom de test est celui de Beane et al.**, précisément
parce qu'il commence par restreindre l'hypothèse à une forme assez précise pour produire
une prédiction réfutable. C'est le modèle méthodologique du domaine, et il est rarement
cité dans la vulgarisation.

## 4. Le nœud réel est la conscience, pas la physique

Tout, dans ce dossier, converge vers une seule inconnue.

- L'argument de Bostrom exige que la conscience soit substrat-indépendante.
- La thèse de Tom Campbell exige que la conscience cause l'effondrement de la fonction d'onde.
- La question de l'univers sans souffrance exige de savoir si une architecture consciente
  peut fonctionner sans états aversifs.
- Le débat sur la conscience des IA est le même débat, déplacé.

Or nous n'avons **aucune théorie de la conscience qui fasse consensus**, et le problème
difficile de Chalmers n'a pas de commencement de solution. Tant que c'est le cas,
la question de la simulation reste indécidable **par construction**, pas par manque de données.

C'est le point le plus important du dossier et le plus rarement formulé :
la simulation n'est pas bloquée par la puissance de calcul, elle est bloquée par
l'absence de théorie de l'expérience subjective.

## 5. Le cas Tom Campbell : traité avec précision

Le corpus de départ accorde à Tom Campbell une place centrale. Il mérite un traitement
en deux temps, parce que les deux moitiés n'ont pas le même statut.

**Ce qui est à son crédit `[MÉTHODE VALIDE]`**
Il formule une prédiction **réfutable**. Son dispositif — variantes de la double fente
et de la gomme quantique à choix retardé, où l'information de chemin est enregistrée
sur support puis détruite avant qu'un humain n'y accède — produit une prédiction claire
et opposée à celle de la mécanique quantique standard. Dans un domaine saturé
d'irréfutable, c'est rare et il faut le dire.

**Ce qui est contre lui `[PRÉDICTION VRAISEMBLABLEMENT FAUSSE]`**
La prédiction est presque certainement fausse. La théorie de la décohérence explique
l'apparence d'effondrement sans conscience, et les expériences de gomme quantique
menées depuis les années 1990 ne montrent aucune dépendance à l'observation humaine.
L'interprétation « la conscience cause l'effondrement » (von Neumann–Wigner) est une
position minoritaire, largement abandonnée depuis les années 1980 précisément à cause
de la décohérence.

**Ce qui n'est pas de la science `[NON SCIENTIFIQUE]`**
Vision à distance, sorties de corps, guérison à distance, « bases de données »
akashiques rebaptisées. Sur le programme Stargate, le corpus est incomplet :
le rapport d'évaluation de l'AIR de novembre 1995 a rendu un **verdict divisé** —
Jessica Utts concluant que le phénomène était statistiquement établi, Ray Hyman
concluant à des défauts méthodologiques. La CIA a suivi Hyman et fermé le programme,
concluant à l'absence de valeur opérationnelle. Présenter le programme comme ayant
« obtenu des renseignements » sans mentionner cette conclusion est trompeur.

**La règle à retenir :** le fait qu'un physicien de la NASA porte une thèse ne confère
aucun statut à cette thèse. Et inversement, le fait qu'il croie à des choses non
scientifiques n'invalide pas automatiquement une expérience bien conçue. Les deux
jugements doivent rester séparés.

## 6. Ce que la découverte changerait, et ce qu'elle ne changerait pas

C'est là que Chalmers apporte le déplacement le plus utile, et il manque au corpus.

Dans *Reality+* (2022), il défend le **réalisme de simulation** : si nous sommes dans
une simulation, le monde qui nous entoure n'est pas une illusion, il est réel — fait de
bits plutôt que de quarks. Une chaise simulée est une vraie chaise, faite d'autre chose.
La douleur simulée est une vraie douleur. L'hypothèse de simulation n'est pas une thèse
sceptique sur l'irréalité du monde ; c'est une thèse **métaphysique sur sa composition**.

Conséquence directe, et elle est libératrice : la dichotomie « réel *contre* simulé »
est mal posée. Une molécule est réelle bien qu'elle soit faite d'atomes. Une température
est réelle bien qu'elle émerge d'un mouvement. Notre univers peut être parfaitement réel
sans être le niveau fondamental.

Cela recoupe exactement l'intuition formulée dans le corpus — « chaque étage est réel,
mais pas nécessairement fondamental » — et lui donne son nom et sa littérature.

Et cela explique la réponse de Loïc Hecht à la dernière question de l'interview :
si on lui apportait la preuve, cela ne changerait « rien du tout ». Ce n'est pas de la
désinvolture. C'est la conséquence correcte du réalisme de simulation.

## 7. La question de l'univers sans souffrance

C'est, avec l'objection probabiliste, la meilleure question du corpus, et elle est
sous-exploitée. Formulée rigoureusement :

> Existe-t-il une propriété d'un univers contenant des êtres conscients, apprenants et
> capables de sens, qui soit **logiquement impossible** à obtenir sans expérience négative ?

Réponse honnête : **on n'en connaît aucune de façon démontrée.** La distinction décisive,
correctement identifiée dans le corpus, est celle entre *information négative* et
*expérience négative*. Un système apprend d'un gradient de récompense ; rien n'impose
que le bas du gradient soit vécu comme une souffrance plutôt que comme un moindre plaisir.

Ce que cela produit n'est pas une réfutation de l'hypothèse de simulation, mais une
**contrainte sur les simulateurs bienveillants** — une version computationnelle du
problème du mal, plus tranchante que la version théologique parce qu'elle est technique
et non morale. Développement en
[06-ETHIQUE/01-univers-sans-souffrance.md](06-ETHIQUE/01-univers-sans-souffrance.md).

## 8. Ce qu'il faudrait pour faire avancer le sujet

Le programme de recherche esquissé dans le corpus (SIMULATION PROTOCOL) a la bonne
intuition centrale — bayésianisme, facteur de Bayes, pré-enregistrement, recrutement
de sceptiques — et une faiblesse fatale s'il n'est pas corrigée : **il n'exige pas
que les hypothèses produisent des prédictions différentielles avant d'être retenues.**

Correction proposée, en une règle :

> Une hypothèse de simulation qui ne produit pas au moins une observation où elle diverge
> de la physique standard n'entre pas dans le corpus. Elle est archivée comme position
> métaphysique, pas comme hypothèse de travail.

Cette règle élimine d'un coup 90 % de la littérature du domaine, y compris la plupart
des arguments du corpus de départ. C'est le but.

Version révisée du programme en [08-PROTOCOLE/](08-PROTOCOLE/).

## 9. Ce que les sections 10 à 13 ont ajouté

Les huit premières sections ont été rédigées avant le balayage de la littérature
2025-2026. Les sections 10 à 13 l'intègrent, et six apports changent la lecture de
ce qui précède.

1. **La sous-détermination est un résultat formel, pas un manque de données.**
   Presque tous les arguments du domaine ont un facteur de Bayes égal à 1 : ils sont
   aussi probables si l'hypothèse est vraie que si elle est fausse. Un seul observable
   de toute la littérature y échappe, l'anisotropie `ℓ = 4` des rayons cosmiques
   d'ultra-haute énergie, et il est négatif. Le même résultat gouverne trois débats :
   la simulation, la souffrance du tissu neuronal cultivé, la conscience des modèles de
   langage. Voir [11-MATHEMATIQUES/04](11-MATHEMATIQUES/04-sous-determination.md).
2. **Aucun prior ne fixe la probabilité.** Le seul prior principiel, celui de
   Solomonoff et Levin, n'est défini qu'à une constante près, cette constante peut
   dépasser l'écart à mesurer (Leike et Hutter 2015), et la complexité de Kolmogorov
   est incalculable. Le problème de la classe de référence de Bostrom est le problème
   de la mesure en cosmologie, celui des cerveaux de Boltzmann. Voir
   [11-MATHEMATIQUES/07](11-MATHEMATIQUES/07-probabilite-algorithmique.md) et
   [11-MATHEMATIQUES/01](11-MATHEMATIQUES/01-formalisme-anthropique.md).
3. **La hiérarchie des niveaux n'est pas une nécessité.** Wolpert montre qu'aucune
   dégradation n'est requise entre simulateur et simulé, que la simulation mutuelle
   est possible et qu'un univers peut se simuler lui-même. Ce sont des possibilités
   logiques, pas des indices empiriques. Voir
   [11-MATHEMATIQUES/02](11-MATHEMATIQUES/02-computabilite-et-auto-simulation.md).
4. **La physique n'a toujours aucun signal.** L'anomalie du moment magnétique du muon
   a disparu en juin 2025, à environ 0,6 σ. Le cas d'un espace-temps en réseau reste
   peu contraint, comme le montre la ligne « Échelle de Planck » du §3. Et les murs
   d'indécidabilité ne tiennent qu'en précision exacte : l'indécidabilité du gap
   spectral devient décidable sous une perturbation arbitrairement petite (juillet
   2026), et `MIP* = RE` s'effondre sous bruit constant. Voir
   [11-MATHEMATIQUES/03](11-MATHEMATIQUES/03-bornes-physiques-et-complexite.md),
   [06](11-MATHEMATIQUES/06-preuves-interactives-et-nonlocalite.md) et
   [09](11-MATHEMATIQUES/09-indecidabilite-physique.md).
5. **Le verrou s'est resserré.** COGITATE met en difficulté les deux principales
   théories de la conscience. Le calcul exact de Findlay et al. montre qu'un
   simulateur de von Neumann n'a pas la structure Φ du système qu'il simule : si la
   théorie de l'information intégrée est juste, la condition de
   substrat-indépendance de Bostrom tombe. Mais cette théorie est elle-même en litige.
   Voir [11-MATHEMATIQUES/11](11-MATHEMATIQUES/11-formalismes-de-la-conscience.md).
6. **Le seul terrain expérimental du verrou est le tissu neuronal en boucle fermée.**
   Ce qui est nouveau dans DishBrain et le CL1 n'est pas l'humanité du substrat, c'est
   la boucle : le tissu reçoit des entrées, agit sur un environnement et un signal le
   contraint. L'éthique actionnable y porte sur les ablations publiées et le
   consentement documenté, pas sur une souffrance supposée. Voir
   [12-BIOCOMPUTING/01](12-BIOCOMPUTING/01-dishbrain-cl1.md). Le fil de commentaires
   public qui a suivi a lui-même corrigé plusieurs points du dossier : voir
   [13-RECEPTION/01](13-RECEPTION/01-fil-de-commentaires.md).

**Ce qui ne change pas :** l'objection probabiliste centrale, la reformulation
ontologique, la Règle 0, et le constat que la physique n'apporte aucune indication
positive en faveur de l'hypothèse.

## 10. Position finale du dossier

1. **Q1 (substrat informationnel) est une question scientifique sérieuse** et un
   programme de recherche actif. Elle mérite d'être suivie.
2. **Q2 (simulation intentionnelle) n'est aujourd'hui pas une hypothèse scientifique**,
   faute de prédiction différentielle. Ce n'est pas une insulte : c'est un constat de statut.
3. **L'argument de Bostrom ne fournit aucune probabilité**, seulement une structure
   conditionnelle rigoureuse dont les conditions sont inconnues.
4. **Le verrou est la conscience**, pas la physique ni la puissance de calcul.
5. **La bonne question n'est pas « sommes-nous simulés »** mais « quel est le niveau
   le plus fondamental, et y en a-t-il un ». Cette reformulation, présente dans le corpus,
   est son apport le plus solide.
6. **Le risque principal n'est pas de se tromper, c'est de vouloir avoir raison.**
   Le corpus le dit lui-même, et c'est la phrase à garder :
   *« Nous cherchons la vérité, pas la simulation. »*

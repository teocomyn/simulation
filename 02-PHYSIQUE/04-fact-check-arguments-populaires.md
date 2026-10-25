# Fact-check des arguments populaires

Douze arguments qui circulent, y compris dans le corpus de départ. Verdict par verdict.

---

## A1 — « La physique quantique montre que la réalité n'existe pas tant qu'on ne l'observe pas, comme GTA qui ne charge que ce que le joueur voit »

**Verdict : ❌ Faux tel que formulé. C'est l'argument le plus répandu et le plus erroné du domaine.**

C'est l'argument central de Rich Terrile dans le corpus, et l'analogie du frigo derrière
les volets fermés.

### Ce qui ne va pas

1. **« Observation » ne veut pas dire « regard conscient ».** En mécanique quantique,
   une mesure est une interaction produisant de l'intrication avec un système à grand
   nombre de degrés de liberté. Un photodétecteur mesure. Une molécule d'air mesure.
   Aucun humain n'est requis.

2. **La décohérence explique le phénomène sans rendu à la demande.** Depuis Zeh (1970)
   et Zurek (1980s), on sait calculer les temps de décohérence, et ils sont vérifiés
   expérimentalement. Un objet macroscopique décohère en un temps si court qu'il n'existe
   à aucun moment utile dans une superposition observable — que quelqu'un regarde ou non.

3. **Le saut du quantique au macroscopique est illégitime.** L'indétermination
   quantique concerne des degrés de liberté isolés et protégés. Votre réfrigérateur
   est en interaction permanente avec l'air, les photons thermiques, le sol. Il ne
   « cesse pas d'être calculé » quand vous fermez les volets. Le corpus a la lucidité
   de noter que « passer du quantique au macro ferait bondir un physicien » — c'est exact,
   et cela suffit à disqualifier l'analogie.

4. **L'analogie s'inverse.** Dans un jeu, le rendu à la demande est une **optimisation**
   qui produit des artefacts détectables (popping, latence, incohérences aux transitions).
   Nous n'observons rien de tel. Si le monde était rendu paresseusement, on s'attendrait
   à trouver des traces de la stratégie d'optimisation. On n'en trouve pas.

### Ce qui reste vrai
Le problème de la mesure est réel et non résolu. Aucune interprétation ne fait
l'unanimité. Mais un problème ouvert n'est pas un indice en faveur d'une hypothèse
particulière — c'est une invitation à ne pas conclure.

### Le coup de grâce : le théorème de non-signalisation
Argument indépendant de la décohérence, et décisif. Pour toute paire de mesures
`A` (Alice, réglage `x`) et `B` (Bob, réglage `y`) sur un état intriqué :

```
Σ_b  P(a, b | x, y)  =  P(a | x)          — indépendant de y
```

**La marginale d'Alice ne dépend pas du réglage de Bob.** Les corrélations violent les
inégalités de Bell, mais **aucune information n'est transmise**.

Or un « moteur de rendu » exigerait précisément qu'une décision d'observation quelque
part modifie ce qui est observable ailleurs. La non-signalisation l'interdit.
L'analogie GTA tombe donc **deux fois**, par deux chemins indépendants : la décohérence
et la non-signalisation.

*(Cette objection vient du fil de commentaires du corpus — voir
[13-RECEPTION/01](../13-RECEPTION/01-fil-de-commentaires.md) §3.)*

### La citation d'Einstein
« Je ne peux pas croire que la Lune n'existe pas si personne ne la regarde » est
authentique dans l'esprit (rapportée par Abraham Pais). Mais elle exprime le **refus**
d'Einstein d'une lecture idéaliste de la mécanique quantique — c'est un argument
*contre* la position qu'on lui fait soutenir dans ce raisonnement.

---

## A2 — « Le progrès des jeux vidéo prouve qu'on peut simuler un univers »

**Verdict : ⚠️ Motivation légitime, démonstration nulle.**

Pong → GTA V → Apple Vision Pro → IA générative : la trajectoire est réelle et
impressionnante. Elle établit que nous savons produire des **rendus perceptifs**
de plus en plus convaincants.

Elle ne dit **rien** sur :
- l'instanciation d'expériences subjectives (le vrai coût, et le vrai mystère) ;
- la simulation d'une physique cohérente à toutes les échelles ;
- la classe de référence et l'auto-localisation.

Un rendu graphique ne contient aucun esprit. La distance entre « image indiscernable »
et « conscience instanciée » n'est pas une distance de degré, c'est le problème difficile
en entier. Confondre les deux est le glissement structurant du discours technologique
sur le sujet.

L'anecdote du corpus — « j'avais l'impression que le réel était plus réel » au retrait
du casque — est un fait phénoménologique intéressant sur la perception humaine.
Ce n'en est pas un sur l'ontologie.

---

## A3 — « L'échelle de Planck est le pixel de l'univers »

**Verdict : ❌ Faux.**

`ℓ_P = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m` est une combinaison dimensionnelle de constantes,
marquant l'échelle où gravité et quantique doivent être traitées ensemble.
Ce n'est pas une granularité mesurée.

Aucune expérience n'a mis en évidence de discrétisation de l'espace à cette échelle,
et certaines observations la contraignent : la propagation de photons gamma sur des
distances cosmologiques n'a montré aucune dispersion dépendante de l'énergie, ce qui
exclut plusieurs modèles d'espace-temps discret.

Le corpus a raison de signaler cette erreur : elle est explicitement identifiée dans
le projet SIMULATION PROTOCOL comme « le genre de raccourci qu'il faut éliminer ».

---

## A4 — « L'univers est fait d'information, donc c'est une simulation »

**Verdict : ❌ Non-sequitur. C'est *le* glissement du domaine.**

```
« descriptible en termes d'information »
   ⇏ « est un calcul »
   ⇏ « est un calcul exécuté par quelqu'un »
```

Le premier point est solide (Bekenstein, holographie, Landauer). Les deux suivants
sont des ajouts métaphysiques. Une structure mathématique n'a pas besoin d'un
calculateur — c'est précisément la position de Tegmark, qui est **incompatible**
avec l'hypothèse du simulateur, pas identique à elle.

Demander « sur quel ordinateur tourne l'univers ? » quand on tient une ontologie
informationnelle est une erreur de catégorie, exactement comme le note le corpus :
« sur quel ordinateur le nombre 7 fonctionne-t-il ? »

---

## A5 — « Les traditions spirituelles anciennes le disaient déjà »

**Verdict : ⚠️ Convergence sur la question, pas sur la réponse.**

Platon, le Vedānta, le bouddhisme madhyamaka ont soutenu que l'apparence n'épuise pas
le réel. C'est une intuition robuste et remarquablement répandue.

Elle ne préjuge de rien quant au contenu. *Māyā* n'est pas un rendu graphique.
La vacuité n'est pas une thèse sur un substrat computationnel — elle affirme l'absence
d'essence propre, ce qui va plutôt à l'encontre d'un niveau fondamental caché.

Piège de la **convergence rétrospective** : une doctrine assez vague pour être
compatible avec n'importe quelle physique future ne confirme aucune physique.

---

## A6 — « Le cerveau reconstruit la perception, donc la réalité est simulée »

**Verdict : ⚠️ Prémisse vraie, conclusion non suivie.**

La prémisse est solide : le cerveau prédictif, la perception comme inférence,
l'exemple du tigre reconnu par quelques taches — tout cela est bien établi en
neurosciences.

La conclusion confond deux niveaux :
- Que **notre modèle du monde** soit une reconstruction : `[ÉTABLI]`
- Que **le monde** soit une simulation : sans rapport

Le premier point est vrai *que* nous soyons simulés ou non. Il ne discrimine donc
entre aucune des deux hypothèses. Un argument qui a la même valeur sous H_S et sous H_N
a un facteur de Bayes de 1 : il n'apporte aucune information.

---

## A7 — « Une simulation économiserait du calcul en ne rendant que l'observé »

**Verdict : ⚠️ Cohérent en informatique, sans support empirique, et à double tranchant.**

L'évaluation paresseuse est une technique réelle et l'argument est ingénieux :
si la vitesse de la lumière borne l'information causalement accessible, cela ressemble
à une architecture efficace.

Trois objections :

1. **Explication concurrente complète.** La relativité rend compte de cette structure
   sans aucun simulateur. Un argument dont l'explication standard est complète n'apporte
   rien : `P(D|H_S) ≈ P(D|H_N)`.
2. **L'économie porte sur le décor, pas sur les esprits.** Ce qui coûte dans une
   simulation d'ancêtres, ce sont les consciences — et elles, par hypothèse, doivent être
   calculées en permanence et intégralement. On économise sur la galaxie lointaine, pas
   sur le seul poste qui compte.
3. **Aucune trace d'optimisation.** Toute stratégie d'optimisation laisse des artefacts.
   On n'en observe aucun.

**Statut correct :** hypothèse de conception intéressante, pas indice.
Le corpus le formule d'ailleurs correctement — « c'est une extrapolation
computationnelle », « aucune observation actuelle ne démontre ce mécanisme ».

---

## A8 — « Musk dit que la probabilité d'être dans la réalité de base est d'une sur des milliards »

**Verdict : ❌ Chiffre sans contenu.**

Déclaration authentique, Code Conference (Recode), juin 2016.

Le raisonnement : les jeux deviendront indiscernables du réel, il y aura des milliards
de consoles, donc le rapport simulés/réels est de milliards contre un.

Ce que le chiffre suppose sans le dire : que ces consoles hébergent des **consciences**,
qu'elles existeront effectivement, et que nous sommes tirés au hasard dans cette
population. Ce sont les trois conditions non démontrées de
[01-ARGUMENT/02](../01-ARGUMENT/02-la-faille-probabiliste.md).

Compter des consoles n'est pas compter des observateurs. Le chiffre a une précision
rhétorique, pas quantitative.

---

## A9 — « Deux milliardaires ont payé des scientifiques pour trouver le bug »

**Verdict : ⚠️ L'anecdote est réelle, mais couramment déformée.**

Source primaire : Tad Friend, *Sam Altman's Manifest Destiny*, **The New Yorker**,
numéro du 10 octobre 2016 (titre imprimé : *Adding a Zero*).

Ce que l'article dit exactement : de nombreuses personnes de la Silicon Valley sont
obsédées par l'hypothèse de simulation, et **deux milliardaires de la tech sont allés
jusqu'à engager secrètement des scientifiques pour travailler à nous en faire sortir**.
Aucun des deux n'est nommé.

Deux précisions par rapport à la version qui circule :
- La formulation est « nous **en faire sortir** » (*breaking us out*), pas « trouver
  le glitch ». La nuance est importante : elle révèle le contresens de type *Matrix*
  analysé en [01-ARGUMENT/03](../01-ARGUMENT/03-genealogie-du-doute.md) §4 —
  l'idée qu'il y aurait un dehors où aller.
- L'attribution à Musk est une inférence de journalistes, pas une information de l'article.

Sur le fond, voir [02-signatures-testables.md](02-signatures-testables.md) §5 :
la recherche de glitch ne peut pas fonctionner, faute de modèle de ce qui compterait
comme glitch.

---

## A10 — « Un scientifique a prouvé que nous sommes dans une simulation » (Vopson)

**Verdict : ❌ Contesté sur le fond, à ne pas présenter comme un résultat.**

Voir [02-signatures-testables.md](02-signatures-testables.md) §4.
Cas d'école de l'écart entre une publication et son communiqué de presse.

---

## A11 — « Des physiciens ont prouvé que nous ne sommes PAS dans une simulation » (Ringel & Kovrizhin)

**Verdict : ❌ Même erreur, sens inverse.**

Voir [03-arguments-contre.md](03-arguments-contre.md) §1.
Le papier porte sur la simulabilité classique de certains systèmes quantiques.
Il ne traite pas de l'hypothèse de simulation.

Ce couple A10/A11 est le meilleur exercice du dossier : la même faute de communication,
dans les deux directions, en trois ans d'intervalle. Si l'on rejette l'une et accepte
l'autre, c'est du biais de confirmation, pas du raisonnement.

---

## A12 — « On ne peut pas prouver le contraire »

**Verdict : ❌ Vrai mais sans portée argumentative.**

L'irréfutabilité n'est pas une présomption de vérité. Elle est plutôt le symptôme
d'une hypothèse mal formée pour un usage empirique.

Formulation correcte : *l'hypothèse est possible, indécidable en l'état, et
le travail utile consiste à en produire une version qui prédise quelque chose
de différent.*

---

## Récapitulatif

| # | Argument | Verdict |
|---|---|---|
| A1 | Quantique = rendu à la demande | ❌ Faux |
| A2 | Progrès des jeux vidéo | ⚠️ Motive, ne démontre pas |
| A3 | Planck = pixel | ❌ Faux |
| A4 | Information ⇒ simulation | ❌ Non-sequitur |
| A5 | Traditions anciennes | ⚠️ Convergence sur la question seulement |
| A6 | Cerveau prédictif | ⚠️ Ne discrimine pas |
| A7 | Évaluation paresseuse | ⚠️ Explication standard complète |
| A8 | « Une sur des milliards » | ❌ Chiffre sans contenu |
| A9 | Les deux milliardaires | ⚠️ Réel, déformé |
| A10 | Vopson « preuve pour » | ❌ Contesté |
| A11 | Ringel « preuve contre » | ❌ Surinterprété |
| A12 | Irréfutabilité | ❌ Sans portée |

**Aucun argument populaire ne résiste.** Ce qui reste debout après ce tri :
le trilemme comme structure conditionnelle, les contraintes de Beane et al.,
et la question ontologique reformulée. C'est peu, et c'est solide — ce qui vaut
mieux que l'inverse.

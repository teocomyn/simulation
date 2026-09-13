# Biocomputing — DishBrain, CL1, et le vrai terrain

> Pourquoi ce sujet appartient à ce dossier : c'est **le seul endroit où la question du
> substrat de la conscience devient une question de laboratoire**. Tout le reste du
> dossier tourne autour d'un verrou théorique ; ici, on le heurte physiquement.

---

## 1. Chronologie technique

| Date | Étape | Référence |
|---|---|---|
| ~2000 | Neurones de lamproie pilotant un dispositif | Reger & Mussa-Ivaldi |
| 2002 | Cultures neuronales en boucle fermée | Steve Potter, Georgia Tech |
| 2008 | Robot « Gordon » piloté par neurones de rat | Warwick, Whalley, Hammond — Reading |
| 2006-2012 | Reprogrammation cellulaire (iPSC) | Yamanaka, Nobel 2012 |
| 2013 | Organoïdes cérébraux 3D | Lancaster & Knoblich, *Nature* |
| 2022 | **DishBrain** — ~800 000 neurones jouent à Pong | Kagan et al., *Neuron* 110(23) |
| 2023 | Lettre critique de ~30 chercheurs | Balci et al., *Neuron* 111(5) |
| 2023 | Réponse des auteurs, **même numéro** | Kagan et al., *Neuron* 111(5), 606-607 |
| 2025 | Premières livraisons CL1 (115 unités) | Cortical Labs |
| **fév. 2026** | **CL1 — ~200 000 neurones humains jouent à Doom** | Démo publiée le 25 février |
| mars 2026 | Annonce de « data centers biologiques » (Melbourne, Singapour) | Cortical Labs |

---

## 2. Ce que la démo Doom montre réellement

Architecture, d'après le code publié :

```
Silicium (processeur classique)
   ├─ analyse d'image du jeu
   ├─ boucle d'apprentissage
   └─ fonction de récompense              ← TOUTE l'intelligence est ici
         ↓
   Encodeur : image → motifs d'impulsions
         ↓
   ~200 000 neurones humains (59 électrodes, array planaire)
         ↓
   Décodeur : décharges → actions
```

**Constat central :** l'essentiel de ce qui ressemble à de l'intelligence vit sur le
silicium. Le tissu contribue à une partie réelle mais restreinte de la boucle.

### Le test d'ablation, et sa vraie force

Le développeur (**Sean Cole**, chercheur indépendant — et non « Shun Call », erreur de
transcription du corpus) a remplacé les décharges neuronales par des valeurs nulles ou
aléatoires : **l'apprentissage disparaît**.

**Mais il documente lui-même les limites**, ce qui est remarquable et rare :
- dans ses tests, les décharges du SDK étaient aléatoires ; il écrit que cela devrait
  être testé par ablation **sur le matériel réel** ;
- le décodeur « tend à devenir une tête de politique » — le logiciel classique peut
  apprendre à contourner le tissu ;
- certaines variantes récentes n'ont pas été suffisamment testées contre les ablations ;
- une docstring du code indique que le dispositif « n'effectue AUCUN calcul ».

Choix de conception qui atténuent le doute : décodeur linéaire à **biais nul**
(l'action dépend directement des décharges mesurées), et **centrage** des features de
décharges pour éviter qu'un taux de base non nul agisse comme biais implicite.

**Conclusion honnête :** il y a probablement une contribution réelle du tissu.
L'auteur du code refuse d'en tirer une certitude ; il faut le suivre, pas le dépasser.

---

## 3. L'erreur factuelle qui efface le résultat le plus intéressant

Le corpus rapporte que DishBrain utilisait « un mix de cellules d'embryon de souris et
de cellules humaines ». **C'est faux**, et l'erreur est coûteuse.

Le papier compare **deux populations séparées** :
- **HCC** : neurones dérivés de cellules souches pluripotentes induites **humaines**
- **MCC** : cultures corticales embryonnaires de **souris**

Ce n'est pas un mélange, c'est un **contrôle expérimental**. Et le résultat qui en
découle est précisément celui que la confusion fait disparaître :

> À nombre de cellules et environnement comparables, les neurones **humains** montrent
> une capacité de traitement de l'information **supérieure** à celle des neurones de
> rongeur — attribuée à des arbres dendritiques plus denses et plus longs.

C'est l'un des résultats les plus intéressants du papier, et il est directement
pertinent pour le dossier : il suggère que **la microarchitecture compte**, ce qui est
un argument en faveur de la dépendance au substrat.

---

## 4. La controverse « sentience » — les deux côtés

**Titre du papier de 2022 :** *In vitro neurons learn and exhibit sentience when
embodied in a simulated game-world*.

| Sens | Contenu |
|---|---|
| **Courant** | Ressentir subjectivement — donc statut moral |
| **Technique, revendiqué** | Générer des réponses adaptées à des perturbations sensorielles, au sens du principe d'énergie libre (Friston et al., 2020) |

**Lettre critique :** Balci et al., *Neuron* 111(5), 1er mars 2023, ~30 signataires,
forte représentation française. Griefs : usage non étayé de « sentience »,
« comportement orienté vers un but », « incarnation », « gestion de l'incertitude ».

**Ce que le corpus omet :** Kagan et al. ont **répondu dans le même numéro**
(*Neuron* 111(5), 606-607). Argument : « sentience » y est défini fonctionnellement,
et l'implication d'expérience subjective est **explicitement niée**.

**Le jugement équilibré.** Présenter la lettre sans la réponse transforme un désaccord
terminologique entre traditions de recherche en simple mensonge marketing.
La littérature de bioéthique ultérieure note que le terme n'est pas arbitraire mais
malheureux : en langage bioéthique, « sentience » **implique un statut moral**.

C'est un cas d'école de collision entre un vocabulaire technique et un vocabulaire
à charge morale — exactement le piège nommé en
[08-PROTOCOLE/02](../08-PROTOCOLE/02-hygiene-epistemique.md).

---

## 5. Le renversement : le substrat n'est pas le problème

C'est l'apport le plus fort du corpus fourni, et il faut le conserver tel quel.

Rien dans le CL1 n'est plus « humain » qu'une culture cellulaire ordinaire. Des millions
de cultures de cellules humaines existent depuis des décennies. Une cellule HeLa est
aussi « un fragment de vie humaine ».

> **Ce qui est nouveau n'est pas l'humanité du substrat. C'est la boucle.**

Le tissu est plongé dans un environnement, reçoit des entrées structurées, ses sorties
modifient cet environnement, et un signal de récompense le contraint.

**On ne fabrique pas un cerveau. On fabrique une situation.**

La question morale n'est donc pas « est-ce un bout d'humain » mais « y a-t-il un sujet
d'expérience ». Le substrat est un leurre ; la boucle fermée est l'enjeu.

---

## 6. Pourquoi l'intuition « c'est l'enfer pour eux » est probablement une projection

Les neurones du CL1 n'ont : pas de système visuel, pas de carte corporelle, pas de
nocicepteurs, pas de voie de la douleur, **aucune représentation de Doom**.
Ils reçoivent des motifs de stimulation sur 59 électrodes.

Décrire cela comme « jouer en boucle à un jeu violent, enfermé pour toujours » importe
la phénoménologie humaine du jeu vidéo dans un système dépourvu de tout ce qui la produit.

**Cela n'établit pas qu'il ne se passe rien.** Cela invalide **la forme précise** de
l'horreur mise en scène. Et c'est important : une inquiétude mal ciblée produit
exactement l'effet redouté par la lettre de 2023 — une contestation qui frappe la
recherche utile (modélisation de maladies, réduction des tests sur animaux) sans
toucher au vrai problème.

---

## 7. L'argument énergétique se retourne

Le motif affiché est l'efficience : 20 W pour un cerveau, contre l'explosion
énergétique des centres de données.

**Le calcul honnête :**
- 20 W valent pour **86 milliards** de neurones.
- Le CL1 en contient **200 000**, soit ≈ **0,0002 %** d'un cerveau.
- Il faut y ajouter incubateur, contrôle thermique, perfusion, support vital, et un
  ordinateur classique complet qui fait l'essentiel du travail.
- Un rack : **moins de 1 000 W**.

**Au niveau système, l'ordinateur biologique est aujourd'hui l'inverse d'un gain
énergétique.** L'efficience du cerveau est une **hypothèse sur une limite théorique**,
pas une propriété mesurée du dispositif.

L'argument honnête serait : *on parie que le vivant a trouvé une architecture qu'on ne
sait pas reproduire en silicium* — pas *on économise des watts*.

---

## 8. L'erreur logique sur l'émergence

Le raisonnement courant : la conscience a émergé de neurones, donc en ajouter pourrait
la faire émerger.

**L'émergence est fonction de l'organisation, pas de la quantité.** Et les exemples
canoniques le démontrent *contre* la thèse qu'ils sont censés soutenir :

| Exemple | Ce qui produit l'émergence |
|---|---|
| Colonie de fourmis | Règles d'interaction spécifiques (phéromones, castes) |
| Jeu de la vie | Une règle de voisinage précise, sur une topologie précise |
| Murmuration d'étourneaux | **Trois règles locales explicites** |

Dans les trois cas, c'est **la structure des interactions**, pas le nombre.
Une boîte plus dense n'est pas plus proche d'un cerveau. Elle est plus dense.

Et un organoïde cortical n'a ni thalamus, ni tronc cérébral, ni périphérie sensorielle,
ni corps — or c'est précisément ce que la plupart des théories de la conscience exigent
sous une forme ou une autre (espace de travail global, boucles thalamo-corticales,
intégration à haut `Φ`).

**Le paradoxe 2D/3D est le vrai obstacle**, et il est bien identifié : on sait cultiver
en 3D, on sait dialoguer en boucle fermée, on ne sait pas faire les deux. Une puce est
une grille plate ; poser un organoïde dessus ne touche que les cellules du dessous.
**On sacrifie l'architecture pour pouvoir parler au tissu** — c'est-à-dire précisément
la variable qui compte.

---

## 9. L'éthique actionnable : le consentement, pas la souffrance

Les neurones proviennent de cellules sanguines ou cutanées d'un donneur.
**Ils portent l'ADN de quelqu'un.**

C'est un problème de type Henrietta Lacks, et il a trois propriétés que la question de
la conscience n'a pas :

1. Il est **réel aujourd'hui**, pas dans trente ans.
2. Il est **juridiquement traitable** : consentement éclairé, périmètre d'usage,
   droit de retrait, partage de valeur.
3. Il ne requiert **aucune percée théorique**.

Et le lien avec le reste du dossier est direct : la souffrance du tissu est
**sous-déterminée** (`BF = 1`, voir
[11-MATHEMATIQUES/04](../11-MATHEMATIQUES/04-sous-determination.md)), donc indécidable
par observation. Le consentement du donneur, lui, est **décidable et actionnable**.

**Consacrer toute l'attention éthique à la question indécidable et rien à la question
décidable est une erreur d'allocation.**

---

## 10. Norme minimale proposée

Pour tout système biologique en boucle fermée :

1. **Publication obligatoire des ablations** — décharges nulles et aléatoires,
   sur matériel réel, pas en simulation.
2. Toute affirmation d'apprentissage assortie d'un **critère explicite de falsification**.
3. **Séparation stricte**, dans la communication publique, entre sens technique et sens
   courant des termes à charge morale.
4. **Traçabilité et consentement documentés** du donneur.

Observation remarquable : **Sean Cole a fait spontanément les points 1 et 2** dans son
README public. La communication institutionnelle n'a fait ni le 3 ni, publiquement, le 4.

C'est la vraie leçon de gouvernance du dossier, et elle est encourageante :
la bonne pratique existe, elle vient du code, pas du communiqué.

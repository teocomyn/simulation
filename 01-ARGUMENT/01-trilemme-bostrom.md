# Le trilemme de Bostrom, sans caricature

## 1. La source

Nick Bostrom, *Are You Living in a Computer Simulation?*, **Philosophical Quarterly**,
vol. 53, n° 211, 2003, p. 243-255. Papier de philosophie, publié dans une revue de
philosophie, pas de physique. Ce point est constamment oublié.

## 2. L'argument exact

Bostrom démontre une **disjonction**. Au moins une des trois propositions suivantes est vraie :

```
(1)  f_p  ≈ 0
     La fraction des civilisations de niveau humain atteignant un stade posthumain
     est proche de zéro.

(2)  f_I  ≈ 0
     La fraction des civilisations posthumaines intéressées par des simulations
     d'ancêtres est proche de zéro.

(3)  f_sim ≈ 1
     La fraction des êtres ayant des expériences du type des nôtres qui vivent dans
     une simulation est proche de un.
```

Formellement, avec `N` le nombre moyen de simulations d'ancêtres produites par une
civilisation posthumaine et `H` le nombre d'individus ayant vécu dans une civilisation
avant qu'elle n'atteigne ce stade :

```
f_sim  =  (f_p · f_I · N · H)  /  (f_p · f_I · N · H  +  H)
       =  (f_p · f_I · N)      /  (f_p · f_I · N  +  1)
```

Si `N` est astronomiquement grand — l'argument suppose une puissance de calcul posthumaine
permettant un très grand nombre de simulations — alors `f_sim → 1` **dès que** `f_p · f_I`
n'est pas quasi nul. D'où la disjonction.

## 3. Les prémisses, explicitées

L'argument ne fonctionne que si l'on accepte, dans l'ordre :

| # | Prémisse | Statut chez Bostrom | Statut réel |
|---|---|---|---|
| P1 | **Substrat-indépendance** de la conscience : un calcul suffisamment détaillé d'un cerveau produit une expérience subjective | Posée explicitement comme hypothèse | `[NON ÉTABLI]` — voir [03-CONSCIENCE](../03-CONSCIENCE/01-probleme-difficile-et-substrat.md) |
| P2 | Une civilisation posthumaine dispose d'une puissance de calcul quasi illimitée | Argumentée par extrapolation | `[SPÉCULATIF]` — bornes physiques discutées |
| P3 | Le coût d'une simulation d'ancêtres est négligeable pour une telle civilisation | Argumentée | `[SPÉCULATIF]` |
| P4 | Les simulés et nous appartenons à la **même classe de référence** d'observateurs | **Présupposée, non défendue** | `[PROBLÉMATIQUE]` — voir [02](02-la-faille-probabiliste.md) |
| P5 | Un principe d'indifférence permet de se traiter comme un tirage aléatoire dans cette classe | Posé (« bland indifference principle ») | `[CONTESTÉ]` |

**P1 et P4 sont les deux points d'appui.** Retirez l'un ou l'autre, l'argument ne
produit plus rien du tout.

## 4. Ce que Bostrom ne dit pas

C'est le point le plus systématiquement déformé, y compris par ceux qui invoquent
son autorité.

| Ce qu'on lui prête | Ce qu'il écrit |
|---|---|
| « Nous sommes probablement dans une simulation » | Au moins une des trois branches est vraie ; il ne dit pas laquelle |
| « La probabilité est de 20 %, 50 %, une sur des milliards… » | Aucun chiffre inconditionnel n'est dérivé |
| « C'est une théorie scientifique » | C'est un argument philosophique, publié comme tel |
| « La preuve, c'est le progrès des jeux vidéo » | L'extrapolation technologique sert à motiver P2, elle ne démontre rien |

Bostrom lui-même a répété qu'il n'attribuait pas une probabilité élevée à la troisième
branche en particulier, et qu'il considérait les trois comme ouvertes.

## 5. Les branches (1) et (2) sont sous-analysées

Le débat public se concentre entièrement sur la branche (3), qui est la plus spectaculaire.
Les deux autres sont pourtant au moins aussi intéressantes, et bien plus informatives.

### Branche (1) : quasi aucune civilisation n'atteint le stade posthumain
C'est le **Grand Filtre**, et c'est une thèse empiriquement mordante : elle prédit
quelque chose sur la distribution de la vie et de l'intelligence dans l'univers.
Elle recoupe le paradoxe de Fermi. Si elle est vraie, cela dit quelque chose de sombre
et de concret sur notre propre avenir — ce qui la rend, paradoxalement, **la branche
la plus actionnable des trois**.

### Branche (2) : les posthumains ne font pas de simulations d'ancêtres
Souvent écartée d'un revers de main (« bien sûr qu'ils en feraient »). C'est une
projection anthropocentrique. Raisons sérieuses de ne pas en faire :
- **Éthique** : simuler des ancêtres conscients, c'est créer des êtres capables de
  souffrir. Une civilisation avancée pourrait précisément l'interdire — c'est le lien
  direct avec [06-ETHIQUE/01](../06-ETHIQUE/01-univers-sans-souffrance.md).
- **Convergence des valeurs** : rien ne garantit qu'une intelligence posthumaine
  s'intéresse à son passé, ni qu'elle ait quelque chose comme de la curiosité historique.
- **Efficacité** : une civilisation capable de modéliser son passé n'a peut-être pas
  besoin de le simuler à la résolution de la conscience pour en tirer ce qu'elle veut.

**Le point à retenir :** l'argument dit « au moins une de ces trois choses est vraie ».
Il ne dit pas que la troisième est la plus probable. Le sentiment qu'elle l'est vient
de sa force narrative, pas de sa force logique.

## 6. Où l'argument est fort

Il faut être juste : ce n'est pas un sophisme, et le rejeter en bloc serait une erreur
symétrique de celle qui consiste à l'accepter en bloc.

- Il est **valide** : la conclusion suit des prémisses.
- Il est **fécond** : il force à expliciter des hypothèses (substrat-indépendance,
  classe de référence) qu'on ne formule d'habitude jamais.
- Il **déplace correctement la charge** : si vous rejetez (3), vous devez accepter (1)
  ou (2), et ces deux-là ont un coût. Vous ne pouvez pas rester neutre gratuitement.

C'est cette dernière propriété qui en fait un bon argument philosophique.
C'est aussi ce qui le rend inutilisable comme argument scientifique : une disjonction
dont aucun terme n'est mesurable ne produit aucune prédiction.

## 7. Ce qu'il faudrait pour le faire avancer

| Verrou | Ce qui le lèverait | Faisabilité |
|---|---|---|
| P1 substrat-indépendance | Une théorie de la conscience validée expérimentalement | Aucune en vue |
| P4 classe de référence | Une théorie de l'auto-localisation indexicale qui fasse consensus | Débat ouvert depuis 30 ans |
| f_p | Détection de vie ou d'intelligence extraterrestre, ou son absence caractérisée | En cours, très lentement |
| f_I | Rien : porte sur des préférences d'entités hypothétiques | Nulle |
| N | Bornes physiques dures sur le calcul (Bekenstein, Lloyd, Landauer) | Partiellement établies |

`f_I` est le paramètre le plus intéressant : il est **structurellement inaccessible**.
Aucune observation, aujourd'hui ou dans mille ans, ne renseignera sur les préférences
d'une civilisation posthumaine dont on ignore l'existence. Un argument dont un paramètre
libre est inaccessible en principe ne peut pas devenir une science empirique par
accumulation de données.

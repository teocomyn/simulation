# La faille probabiliste

> C'est le cœur du dossier. L'objection formulée à la fin du corpus est correcte,
> et elle est plus forte que ne le laisse paraître sa formulation compacte.

## 1. L'objection, telle que formulée

> « Ton calcul est correct uniquement après avoir supposé que des consciences simulées
> existent, que les civilisations avancées en produisent massivement et que nous sommes
> un échantillon aléatoire de l'ensemble de ces consciences. Or ce sont précisément les
> trois choses que nous ne savons pas. Tu as calculé une probabilité conditionnelle,
> pas démontré la condition. »

Cette objection touche trois prémisses distinctes. Elles ne tombent pas de la même façon
et il vaut la peine de les séparer, parce que **la troisième est la plus profonde**
et c'est celle qu'on discute le moins.

## 2. Objection A — L'existence de consciences simulées

Bostrom pose la substrat-indépendance comme hypothèse de travail. C'est intellectuellement
honnête, mais cela signifie que **tout l'argument est suspendu à une thèse non établie**
en philosophie de l'esprit.

Trois positions possibles, et l'argument ne survit qu'à la première :

| Position | Conséquence sur l'argument |
|---|---|
| **Computationnalisme** : l'expérience subjective est réalisée par n'importe quel substrat exécutant le bon calcul | L'argument fonctionne |
| **Biologisme / physicalisme du substrat** : l'expérience dépend de propriétés physiques particulières (électrochimie, dynamique continue, quelque chose d'inconnu) | Les simulés sont des **zombies philosophiques** : ils se comportent comme nous, sans expérience. Ils ne sont pas dans la classe de référence. `f_sim` devient sans objet |
| **Conscience fondamentale** (idéalisme, panpsychisme) | La question change entièrement de forme ; la notion de « simulation d'un esprit » perd son sens habituel |

**Le point décisif :** ce n'est pas une objection sceptique de principe. C'est une
question ouverte de première importance, sur laquelle il n'existe aucun consensus,
et dont dépend **entièrement** la validité de l'argument. Bostrom le sait et le dit ;
ses vulgarisateurs l'omettent systématiquement.

Voir [03-CONSCIENCE/01](../03-CONSCIENCE/01-probleme-difficile-et-substrat.md).

## 3. Objection B — La production massive

Deux hypothèses empilées, aucune vérifiable :

1. Des civilisations posthumaines existent (`f_p > 0`).
2. Elles produisent effectivement un grand nombre de simulations d'ancêtres (`f_I · N` grand).

Le paramètre `f_I` mérite une attention particulière : c'est une affirmation sur les
**préférences** d'entités hypothétiques dont on ne sait rien. Il n'est pas seulement
inconnu, il est **structurellement inaccessible**. Aucune accumulation de données ne
peut le contraindre.

Un argument dont un paramètre libre ne peut jamais être contraint, même en principe,
ne peut pas devenir une hypothèse empirique. Il peut rester une hypothèse philosophique
intéressante — c'est ce qu'il est.

À quoi s'ajoute une objection de coût rarement prise au sérieux : simuler des ancêtres
**à la résolution de la conscience** n'est pas simuler un monde en gros. Les arguments
d'économie de calcul (voir §6 et
[02-PHYSIQUE/04](../02-PHYSIQUE/04-fact-check-arguments-populaires.md)) permettent
d'économiser sur le décor, pas sur les esprits — or ce sont eux qui font tout le coût.

## 4. Objection C — L'échantillonnage aléatoire

**C'est la plus fondamentale et la moins discutée.**

Le passage de « la plupart des observateurs de ce type sont simulés » à « je suis
probablement simulé » n'est pas une déduction. C'est l'application d'un **principe
d'auto-localisation** — chez Bostrom, un « principe d'indifférence blande » : en
l'absence d'information distinctive, se traiter comme un tirage aléatoire dans sa
classe de référence.

Trois problèmes, du plus technique au plus profond.

### 4.1 La classe de référence est indéterminée
Bostrom reconnaît que la définition de « notre classe de référence » reste ouverte.
Or le résultat en dépend entièrement.

- Classe = tous les observateurs conscients → un résultat.
- Classe = les observateurs ayant *exactement* nos expériences → un autre.
- Classe = les observateurs biologiques → l'argument ne démarre pas.
- Classe = les observateurs dans des univers de base → idem.

Un argument dont la conclusion varie avec un paramètre non spécifié n'a pas de conclusion.
C'est le problème de la classe de référence, connu depuis les débats sur l'argument
de l'apocalypse, et jamais résolu.

### 4.2 Le principe d'indifférence n'est pas neutre
Choisir SSA (*self-sampling assumption*) plutôt que SIA (*self-indication assumption*)
change les résultats, parfois du tout au tout. Il n'existe pas de choix par défaut
justifié : les deux produisent des paradoxes dans certains cas. Prétendre qu'on
« ne suppose rien » en appliquant l'indifférence est faux — on suppose une mesure
sur un espace d'observateurs, et le choix de cette mesure fait le résultat.

### 4.3 Une proportion n'est pas une localisation
C'est l'objection la plus propre, et elle est contenue dans la formulation du corpus :

> la fraction de la classe qui est simulée ne dit pas, et n'a jamais été en position
> de dire, **de quel côté** de la classe nous nous trouvons.

Analogie qui rend la chose visible. Supposons établi que 99,9 % des textes écrits en
français ont été écrits après 1900. Cela ne rend pas probable qu'un texte que vous
tenez, dont vous savez déjà qu'il est un manuscrit médiéval, ait été écrit après 1900.
La proportion globale est écrasée par toute information indexicale dont vous disposez
déjà sur votre propre position.

Or nous disposons d'une masse considérable d'information sur notre position — nous
savons énormément de choses sur notre univers, ses lois, son histoire. Traiter ces
informations comme non distinctives est un choix, pas une neutralité. Et c'est un choix
que rien ne justifie.

### 4.4 La réplique publiée, et où l'objection doit désormais porter
Teruji Thomas (*Simulation Expectation*, Erkenntnis 91, 427-444, 2026) a publié la
réponse la plus directe à cette objection. Son argument n'exige plus une proportion
élevée de simulés : il lui suffit que la proportion *espérée* soit élevée pour qui se
suppose non simulé, dans une classe de référence adéquate. Contre cette version, dire
que la proportion est inconnue ne suffit plus.

Restent les deux appuis que Thomas conserve, et ce sont exactement les objections 4.2 et
4.3 : un principe d'indifférence auto-localisante, qu'Emily Adlam (*Against
Self-Location*, British Journal for the Philosophy of Science, 2024) juge dépourvu de
légitimité a priori, et une classe de référence qui absorbe toute notre information
indexicale. **L'objection tient, mais son centre de gravité se déplace** : de
l'ignorance des paramètres vers le principe d'indifférence lui-même. `[DÉBATTU]` Détail
en [10-ACTUALISATION](../10-ACTUALISATION/01-etat-de-l-art-2026.md) §12.

## 5. La structure logique du problème, en une ligne

```
Bostrom démontre :    P(simulé | P1 ∧ P2 ∧ P3 ∧ P4 ∧ P5)  ≈  1

La lecture populaire :  P(simulé)  ≈  1

L'écart entre les deux :  P(P1 ∧ P2 ∧ P3 ∧ P4 ∧ P5)  =  inconnue,
                          et au moins un facteur structurellement inaccessible
```

Une probabilité conditionnelle dont l'antécédent a une probabilité inconnue ne fournit
aucune information sur le conséquent. C'est exactement le sens de l'objection du corpus,
et c'est correct.

## 6. Deux fausses réponses à écarter

### « Mais on ne peut pas prouver le contraire non plus »
Vrai, et sans portée. L'impossibilité de réfuter une hypothèse n'est pas une présomption
en sa faveur — c'est plutôt le signe qu'elle est mal formée pour un usage empirique.
Voir [08-PROTOCOLE/02](../08-PROTOCOLE/02-hygiene-epistemique.md), piège n° 3.

### « Le progrès des jeux vidéo montre bien que… »
L'extrapolation technologique (Pong → GTA → Apple Vision → IA générative) motive P2,
elle ne l'établit pas, et surtout elle **ne touche aucune des trois objections**.
Fabriquer des mondes visuellement indiscernables ne dit rien sur la production de
consciences, sur les préférences posthumaines, ni sur notre auto-localisation.
C'est le glissement le plus fréquent du discours de la Silicon Valley sur le sujet :
il confond *rendu perceptif* et *instanciation d'esprits*, qui sont deux problèmes
sans commune mesure.

## 7. Ce que l'objection ne fait pas

Elle **ne réfute pas** l'hypothèse de simulation. Elle établit quelque chose de plus
précis et de plus utile :

- L'argument de Bostrom ne fournit **aucune probabilité inconditionnelle**.
- L'hypothèse reste **possible** et, à ce jour, **indécidable**.
- Le fardeau n'est pas de la réfuter, il est de produire une version qui **prédise
  quelque chose de différent** de la physique standard.

C'est la bonne conclusion, et c'est aussi la bonne raison de continuer à travailler
le sujet : non pour trancher, mais pour construire la version qui pourrait l'être.

## 8. La reformulation qui sauve le sujet

L'objection détruit l'argument probabiliste. Elle ne détruit pas la question.
Ce qui reste, une fois l'appareil bayésien retiré, est la formulation déjà présente
dans le corpus, et qui est la bonne :

> **Quel est le niveau le plus fondamental de la réalité — et existe-t-il seulement
> un dernier niveau ?**

Celle-là n'a pas besoin de classe de référence, ni de principe d'indifférence, ni de
préférences posthumaines. Elle est difficile, mais elle est bien posée.
C'est sur elle que porte le reste du dossier.

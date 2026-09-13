# Computabilité et auto-simulation — le résultat Wolpert

**David H. Wolpert (Santa Fe Institute), *What computer science has to say about the
simulation hypothesis*, Journal of Physics: Complexity, 1er décembre 2025.**
DOI 10.1088/2632-072X/ae1e50. Préprint arXiv:2404.16050, v5 du 19 mars 2026.
47 pages + 18 d'annexes.

C'est **le premier traitement mathématiquement rigoureux** de la question. Il change
plusieurs choses qu'on croyait acquises — dont une objection très répandue qui se
révèle fausse.

---

## 1. Le pont : thèse de Church-Turing physique

Hypothèse de travail, explicite :

> **(PCT)** Tout processus physique est simulable par une machine de Turing,
> à précision arbitraire.

C'est le seul postulat physique de tout l'édifice. Il permet de traiter un univers
comme un **objet computationnel** et d'appliquer la théorie de la calculabilité.

Si PCT est fausse — par exemple si un processus physique calcule une fonction
non-Turing-calculable — l'analyse ne s'applique pas. C'est un point de sortie honnête,
et Wolpert le pose comme tel.

---

## 2. Le second théorème de récursion de Kleene

### Énoncé
Soit `φ₀, φ₁, φ₂, …` une numérotation acceptable des fonctions partielles calculables.

> Pour toute fonction totale calculable `f`, il existe un indice `e` tel que
> ```
> φ_e  =  φ_f(e)
> ```

Autrement dit : **tout programme peut accéder à sa propre description**.
C'est le théorème de point fixe de la calculabilité. Corollaire familier : les *quines*,
programmes qui impriment leur propre code source.

### Ce que Wolpert en tire
En prenant pour `f` la transformation « construis le programme qui simule l'univers
décrit par son argument », le point fixe donne :

> **Un univers peut exécuter un programme qui simule fidèlement cet univers entier —
> y compris l'ordinateur qui exécute la simulation.**

Conséquence directe, et vertigineuse : **nous pourrions être dans une simulation
exécutée par nous-mêmes**, produisant deux instances identiques et **également réelles**.
Il n'y a pas d'original et de copie ; il y a un point fixe.

---

## 3. Le résultat qui détruit l'objection la plus répandue

L'objection, telle qu'elle circule (et telle qu'elle apparaît dans le fil de
commentaires du corpus, où elle est jugée décisive) :

> « Par définition, une simulation est plus faible que ce qu'elle prétend simuler.
> Donc la pile a un fond, et une simulation parfaite est impossible. »

**Cette objection est fausse, et la démonstration est élémentaire.**

Elle confond deux notions distinctes :

| Notion | Comportement sous simulation |
|---|---|
| **Puissance de calcul** (classe de calculabilité) | **Préservée.** Une machine de Turing universelle simule toute machine de Turing, y compris de sa propre puissance. C'est la définition de l'universalité |
| **Ressources** (temps, mémoire, énergie) | Dégradées, avec un surcoût |

Une UTM simulant une UTM ne perd **aucune** puissance de calcul : elle perd du temps.
L'intuition de l'appauvrissement vient de l'expérience physique du surcoût, pas de la
théorie.

Wolpert le formalise et en tire deux conséquences :

**(a) Aucune dégradation requise.** Une simulation n'est pas nécessairement
computationnellement plus faible que son hôte. **Les chaînes infinies de simulations
sont mathématiquement cohérentes.**

**(b) Simulation mutuelle.** Si A simule B, rien n'empêche B de simuler A.
Les deux deviennent alors **mathématiquement indiscernables** : il n'y a plus de
« niveau supérieur » ni de « niveau inférieur ».

**(c) Boucles fermées.** Des univers peuvent former un cycle où chacun simule les autres.

### Effet sur le dossier
- **H4** (pas de niveau fondamental) passe de « cohérent, non contradictoire » à
  **formellement traité**. La régression infinie n'est plus une bizarrerie tolérée,
  c'est une structure étudiée.
- **H3** (emboîtement) : l'objection de dégradation tombe.
- **La métaphore de la pile disparaît.** S'il n'y a pas d'ordre, la question
  « à quel niveau sommes-nous ? » est mal posée — non parce qu'on l'ignore, mais parce
  que l'ordre n'existe pas nécessairement.

C'est la confirmation la plus forte, et la plus inattendue, de la reformulation
ontologique retenue par ce dossier.

---

## 4. Le théorème de Rice — les impossibilités

### Énoncé
> Toute propriété **non triviale** de la fonction calculée par un programme est
> **indécidable**.

(Non triviale = vraie pour au moins un programme et fausse pour au moins un autre.)

### Ce que Wolpert en tire
> **Aucun algorithme ne peut déterminer si un univers arbitraire est capable de se
> simuler lui-même.**

Et plus largement : une large famille de questions sur les relations de simulation
est **indécidable de l'intérieur**.

### Portée exacte, à ne pas surinterpréter
Ce n'est **pas** « on ne peut pas savoir si nous sommes simulés ». C'est plus précis
et plus fort :

- Rice porte sur les propriétés **sémantiques** de programmes **arbitraires**.
- Il ne dit rien sur un cas particulier bien spécifié.
- Il dit qu'il n'existe pas de **procédure générale** qui tranche.

Traduction opérationnelle : **il n'y a pas d'algorithme universel de détection de
simulation.** On peut espérer réfuter une version *particulière* et *contrainte* de
l'hypothèse — c'est exactement ce que fait Beane et al. On ne peut pas espérer un test
général.

Cela fournit la justification formelle de la **Règle 0** du dossier
(voir [08-PROTOCOLE/01](../08-PROTOCOLE/01-programme-de-recherche.md)) : seules les
versions restreintes sont attaquables.

---

## 5. Le chiffrement homomorphe

Wolpert examine les conséquences si la simulation utilise un **chiffrement totalement
homomorphe** (FHE) : un schéma permettant de calculer sur des données chiffrées sans
jamais les déchiffrer.

Formellement, un schéma FHE fournit `Enc`, `Dec` et des opérations `⊕`, `⊗` telles que :

```
Dec( Enc(a) ⊕ Enc(b) )  =  a + b
Dec( Enc(a) ⊗ Enc(b) )  =  a × b
```

Conséquence : **le simulateur peut faire tourner l'univers sans avoir accès à son
contenu.** Ce qui retire toute pertinence aux scénarios de type « ils nous observent »,
« ils interviennent », « on peut communiquer avec eux ».

Effet direct sur Q3 (voir [00-SYNTHESE.md](../00-SYNTHESE.md) §1) : un simulateur
peut exister sans être un observateur, et sans même être en position de l'être.
Cela découple radicalement Q2 (production intentionnelle) de Q3 (agent capable
d'intervenir), qui sont presque toujours confondues.

---

## 6. Ce que Wolpert ne fait pas

À dire clairement, parce que la couverture médiatique va dans l'autre sens.

| Question | Wolpert y répond ? |
|---|---|
| Sommes-nous simulés ? | ❌ Aucune évidence empirique |
| L'hypothèse est-elle probable ? | ❌ Aucune probabilité dérivée |
| L'argument de Bostrom tient-il ? | ❌ Non traité — le papier ne discute pas la mesure sur les observateurs |
| Que peut-on savoir de l'intérieur ? | ✅ Résultats d'indécidabilité |
| Quelle structure peuvent avoir les niveaux ? | ✅ **C'est l'apport principal** |

**Wolpert formalise la *structure*, pas la *mesure*.** L'objection probabiliste du
dossier est donc **intacte** — elle porte sur un autre objet.

Les deux résultats se complètent d'ailleurs bien :
- Wolpert : la structure des niveaux est plus riche et moins hiérarchique qu'on ne croyait.
- Objection anthropique : on ne peut pas en déduire où l'on se situe.

Ensemble : **la question « à quel niveau sommes-nous ? » est doublement mal posée** —
il n'y a peut-être pas d'ordre, et il n'y a pas de mesure pour se localiser dedans.

---

## 7. Statut et précautions

- Publication récente (décembre 2025), **recul communautaire encore faible**.
- Une extension a été proposée (préprint 2025, non évalué) — à traiter avec prudence.
- Les résultats relèvent de la théorie du calcul et **dépassent largement** le sujet
  de la simulation ; leur usage ici est une application, pas leur motivation première.
- Tout repose sur PCT. C'est une hypothèse physique substantielle, pas un acquis.

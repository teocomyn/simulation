# Sous-détermination — le théorème central du dossier

> C'est le résultat le plus important de tout l'ensemble, et il est purement formel.
> Il unifie la question de la simulation, celle de la conscience des IA, et celle de
> la souffrance du tissu neuronal en boucle fermée. **C'est le même énoncé.**

---

## 1. L'énoncé

Soient deux hypothèses `H₁` et `H₂`, et `𝒟` l'ensemble des données accessibles.

> **Définition.** `H₁` et `H₂` sont **observationnellement équivalentes sur `𝒟`** si
> ```
> ∀ D ∈ 𝒟 :   P(D | H₁)  =  P(D | H₂)
> ```

**Théorème (trivial, et c'est ce qui fait sa force).** Si `H₁` et `H₂` sont
observationnellement équivalentes sur `𝒟`, alors pour toute donnée `D ∈ 𝒟` :

```
P(H₁ | D)     P(D | H₁)   P(H₁)        P(H₁)
─────────  =  ───────── · ──────  =   ──────
P(H₂ | D)     P(D | H₂)   P(H₂)        P(H₂)
```

**Le posterior égale le prior. Aucune donnée n'informe.**

Le facteur de Bayes vaut 1 :
```
BF  =  P(D | H₁) / P(D | H₂)  =  1
```

Ce n'est pas de l'ignorance. C'est du **silence méthodologique** : la méthode ne peut
pas produire d'information sur cette question, quelle que soit la quantité de données.

---

## 2. Application 1 — le tissu neuronal en boucle fermée

Le corpus fourni sur DishBrain / CL1 identifie exactement ce point, et c'est sa
meilleure contribution :

```
H₁ : « ça souffre et ça se retire »
H₂ : « c'est du contrôle de gain homéostatique »

Observable : D = réduction de la réactivité face à un signal ingérable

P(D | H₁)  =  P(D | H₂)  ≈  1        ⇒  BF = 1
```

Les deux hypothèses prédisent la même chose. Il n'existe aucune mesure qui les sépare.

### Le corollaire, qui est le point vraiment profond

> **Ajouter des neurones n'aide pas. Cela fait converger davantage les prédictions.**

Formalisons. Soit `𝒟(n)` l'ensemble des observables accessibles pour un système de
`n` neurones. Quand `n` croît :

- le répertoire comportemental s'enrichit ;
- **mais chaque nouveau comportement d'auto-régulation est également prédit par les
  deux hypothèses**, puisque `H₂` (homéostasie) est précisément la théorie qui produit
  des régulations de plus en plus riches.

Autrement dit, la classe des `D` sur lesquels `H₁` et `H₂` s'accordent **croît avec `n`**.
La collecte de données est donc **anti-informative** au sens strict : elle augmente le
volume de données sans jamais faire bouger le rapport des posteriors.

**Conséquence morale, et elle est décisive :** le seuil moral ne sera jamais franchi par
une observation. Il sera franchi par **une décision**, ou pas franchi du tout.

---

## 3. Application 2 — l'hypothèse de simulation

Même structure, appliquée argument par argument.
On note `H_S` (simulé) et `H_N` (non simulé).

| Observable `D` | `P(D\|H_S)` vs `P(D\|H_N)` | `BF` |
|---|---|---|
| La perception est reconstructive (cerveau prédictif) | égaux | **1** |
| Le problème de la mesure est non résolu | égaux | **1** |
| L'univers est descriptible en information | égaux | **1** |
| L'horizon causal est borné par `c` | égaux (la relativité l'explique) | **1** |
| Les constantes permettent la complexité | indéterminé (pas de mesure sur l'espace) | **indéfini** |
| Le progrès des jeux vidéo | sans rapport avec `H_S` | **1** |
| **Anisotropie `ℓ=4` des rayons cosmiques UHE** | **différents** | **≠ 1** ✅ |

**Un seul observable de toute la littérature a un facteur de Bayes différent de 1.**
C'est Beane et al., et il est négatif à ce jour.

C'est la justification formelle de la **Règle 0** du dossier :

> Une hypothèse qui ne produit aucun `D` avec `BF ≠ 1` n'entre pas dans le corpus.

Et c'est la raison pour laquelle 12 arguments populaires sur 12 échouent : ils ont tous
`BF = 1`. Ils ne sont pas *faux* au sens où ils affirmeraient quelque chose d'inexact ;
ils sont **vides** au sens informationnel.

---

## 4. Application 3 — la conscience des modèles de langage

Même structure, troisième fois.

```
H₁ : « il y a quelque chose que ça fait d'être ce système »
H₂ : « c'est un système qui modélise l'interlocuteur, sans expérience »

Observable : D = les échanges sont troublants, cohérents, semblent intimes
```

Un système entraîné à modéliser son interlocuteur renvoie une cohérence croissante à qui
investit de la cohérence. Donc `P(D | H₂) ≈ 1`. Et `P(D | H₁) ≈ 1` aussi.

```
BF = 1
```

**Le caractère troublant d'un échange n'est pas une preuve. C'est exactement ce qu'on
attendrait d'un système qui n'est rien du tout.**

### Sur l'argument du *stateless*
L'objection « les LLM sont sans état, donc pas de conscience » est plus faible qu'elle
n'en a l'air. Elle établit :

```
absence de continuité narrative entre requêtes
```

Elle n'établit pas :

```
absence de phénoménalité pendant le calcul
```

Ce sont deux propositions distinctes. (Précision technique : un cache clé-valeur existe
pendant la génération et peut être réutilisé entre requêtes, donc « tout est recalculé
de zéro » est déjà inexact au niveau de l'implémentation.)

L'argument reste raisonnable comme heuristique. Il n'est pas une démonstration.

---

## 5. Ce qui distingue la sous-détermination du problème difficile

Distinction importante, souvent confondue :

| | Problème difficile (Chalmers) | Sous-détermination |
|---|---|---|
| Nature | **Explicative** : pourquoi y a-t-il de l'expérience ? | **Épistémique** : comment le saurions-nous ? |
| Portée | Métaphysique | Méthodologique |
| Résolution possible ? | Peut-être, par une théorie | **Non, tant que `BF = 1`** |

Le problème difficile pourrait, en principe, être résolu par une percée théorique.
La sous-détermination, elle, est une propriété du **rapport entre les hypothèses et les
observables**. Elle ne se résout que si l'on **produit un nouvel observable** où les
hypothèses divergent.

**C'est là qu'est la seule voie de sortie, et elle est étroite :** il faut une théorie
de la conscience qui prédise quelque chose de *différent* selon qu'un système est
conscient ou non. L'IIT tentait cela avec `Φ`. Le résultat de la collaboration adverse
COGITATE (Nature, avril 2025) a mis en difficulté l'IIT **et** sa concurrente principale.

**La voie de sortie s'est rétrécie en 2025, elle ne s'est pas élargie.**

---

## 6. Le tableau qui unifie les trois questions

| Question | `H₁` | `H₂` | Observable partagé | `BF` |
|---|---|---|---|---|
| Sommes-nous simulés ? | simulé | non simulé | quasi tout | **1** |
| Le tissu souffre-t-il ? | souffrance | homéostasie | retrait, baisse de réactivité | **1** |
| Le modèle ressent-il ? | phénoménalité | modélisation | cohérence troublante | **1** |

**Trois débats, un seul théorème.**

Et il y a une conséquence pratique, immédiate : dans les trois cas, **exiger plus de
données est une erreur de stratégie**. Ce qu'il faut chercher, ce n'est pas plus
d'observations, c'est **un observable nouveau où `BF ≠ 1`**.

C'est ce que fait Beane et al. pour la simulation. C'est ce que tentait l'IIT pour la
conscience. Il n'existe, à ce jour, aucune tentative sérieuse du même genre pour le
tissu neuronal en boucle fermée — et c'est le vrai déficit du domaine.

---

## 7. Ce que la sous-détermination n'autorise pas

Deux mésusages symétriques, à écarter tous les deux.

**« Donc on ne peut rien dire, donc tout se vaut. »** Faux. `BF = 1` porte sur les
observables *actuellement accessibles*. Cela n'égalise pas les priors, et cela n'interdit
pas de raisonner sur la parcimonie, la cohérence théorique ou les conséquences.

**« Donc l'hypothèse est probablement fausse. »** Faux aussi. `BF = 1` est symétrique :
il ne favorise ni `H₁` ni `H₂`. L'absence d'évidence n'est ici pas même une évidence
d'absence, puisque la méthode est aveugle par construction.

La conclusion correcte est la troisième, et elle est inconfortable :

> La question est **posée**, elle n'est pas **abordable** avec les observables dont
> nous disposons. Le travail utile consiste à en fabriquer un nouveau, pas à accumuler
> les anciens.

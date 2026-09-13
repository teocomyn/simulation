# Information, mathématiques et le problème de la régression

## 1. Les trois familles « computationnelles », qu'il faut cesser de confondre

Elles sont régulièrement rangées ensemble sous « univers computationnel ».
Elles sont pourtant incompatibles entre elles sur des points essentiels.

| | **Univers informationnel** (Wheeler) | **Univers mathématique** (Tegmark) | **Univers simulé** (Bostrom) |
|---|---|---|---|
| Thèse | L'information est fondamentale ; la matière en dérive | La réalité **est** une structure mathématique | Notre univers est calculé sur un substrat |
| Y a-t-il un substrat ? | Question ouverte | **Non, la question n'a pas de sens** | Oui, par définition |
| Y a-t-il un agent ? | Non | Non | Oui |
| Statut | Programme de recherche | Métaphysique | Métaphysique |
| Testable | Partiellement | Très difficilement | Seulement en version restreinte |

**Conséquence directe :** si Tegmark a raison, Bostrom a tort — il n'y a pas de
simulateur, pas de substrat, pas de processus. Ce ne sont pas deux versions d'une même
idée, ce sont des ontologies rivales.

## 2. Wheeler — *It from bit* `[PROGRAMME ACTIF]`

La formule de John Wheeler (1989) : toute quantité physique tire son sens ultime de
réponses binaires à des questions oui/non — d'actes d'observation.

Ce que la physique a effectivement produit dans cette direction :

- **Entropie de Bekenstein-Hawking** — l'information d'une région est bornée par son aire.
- **Principe holographique** — 't Hooft, Susskind ; formalisé par la correspondance AdS/CFT.
- **Principe de Landauer** — l'effacement d'un bit a un coût énergétique, vérifié.
- **Borne de Lloyd** — l'univers observable a effectué au plus ~10¹²⁰ opérations.
- **Théorie de l'information quantique** — l'intrication comme ressource physique.
- **Programmes d'espace-temps émergent** — intrication → géométrie (Van Raamsdonk,
  Ryu-Takayanagi), et les approches par codes correcteurs quantiques.

La chaîne suggérée par le corpus,
`Information → Physique → Matière → Vie → Cerveau → Conscience`,
est une bonne image de ce programme. Il faut seulement noter que **la dernière flèche
est le problème difficile**, et qu'elle n'a rien d'acquis.

**Ce que H6 n'implique pas :** un simulateur. C'est le non-sequitur A4.

## 3. Tegmark — l'hypothèse de l'univers mathématique `[SPÉCULATIF]`

La thèse : toute structure mathématique existe physiquement, et notre univers est
l'une d'elles. L'existence physique et l'existence mathématique sont la même chose.

**Force.** Elle dissout élégamment plusieurs questions :
- « Pourquoi ces lois ? » — toutes les structures existent, nous sommes dans une
  qui permet des observateurs.
- « Qui a créé l'univers ? » — erreur de catégorie.
- « Sur quel ordinateur tourne-t-il ? » — personne n'exécute une structure.

**Faiblesses, sérieuses.**
1. **Problème de mesure.** Sur l'ensemble de toutes les structures mathématiques,
   quelle mesure de probabilité ? Sans elle, on ne peut rien prédire. C'est le même
   défaut que dans l'argument de Bostrom et dans l'ajustement fin : une probabilité
   sur un espace non mesuré.
2. **Que signifie « exister » pour une structure ?** La thèse identifie deux notions
   d'existence sans expliquer l'identification.
3. **Le vécu.** Rien n'explique pourquoi une structure serait *vécue de l'intérieur*.
   Le problème difficile est intact.

## 4. Les automates et les théories discrètes

| Auteur | Proposition | Statut |
|---|---|---|
| Konrad Zuse (1969) | *Rechnender Raum* : l'univers comme automate cellulaire | Historique, pionnier |
| Edward Fredkin | Physique digitale | Marginal |
| Stephen Wolfram | Automates cellulaires, puis le Wolfram Physics Project (2020) | Contesté ; peu de prédictions vérifiées |
| Gerard 't Hooft | *Cellular Automaton Interpretation of Quantum Mechanics* (2016) | Sérieux, minoritaire, par un prix Nobel |

Le cas 't Hooft mérite d'être signalé : c'est une tentative rigoureuse de dériver la
mécanique quantique d'une théorie déterministe sous-jacente, par un physicien de premier
plan. Elle se heurte aux théorèmes sur les variables cachées et à la question du
superdéterminisme. Elle reste minoritaire, mais elle n'est pas fantaisiste — et elle
illustre que « univers discret » peut être un vrai programme de physique, distinct de
tout discours sur la simulation.

## 5. Le problème de la régression

C'est le cœur de H3 et H4, et c'est ce qui limite structurellement l'intérêt de H2.

### La structure
```
Si  R₀ → R₁  (R₀ produit R₁)
alors on demande  R₋₁ → R₀ ?
puis              R₋₂ → R₋₁ ?
```

Trois issues logiques, et trois seulement :

| Issue | Description | Coût |
|---|---|---|
| **Fondement** | Il existe un `R₀` qui n'est produit par rien | Il faut expliquer pourquoi *lui* existe. Le problème initial resurgit |
| **Régression infinie** | Pas de premier niveau | Contre-intuitif, mais **sans contradiction logique** |
| **Circularité** | La chaîne se referme | Étrange, non exclu |

### Pourquoi l'intuition de fondement est suspecte
Notre exigence d'un premier niveau vient probablement de l'expérience quotidienne
de la causalité temporelle, où les choses ont des débuts. Rien n'oblige la structure
ontologique à se comporter ainsi.

L'analogie du corpus est excellente : *quel est le premier entier négatif ?*
La question est bien formée grammaticalement et n'a pas de réponse.
La suite `…, −3, −2, −1` est parfaitement définie sans premier élément.

### La conséquence qui compte pour tout le dossier
**Même une preuve de H2 ne fonderait rien.** Elle déplacerait la question d'un étage,
et rien de plus. Découvrir notre simulateur laisserait intact « pourquoi y a-t-il
quelque chose ? ».

C'est ce qui justifie la reformulation retenue par ce dossier :

> ❌ « Sommes-nous dans une simulation ? »
> ✅ « Quel est le niveau le plus fondamental — et existe-t-il seulement un dernier niveau ? »

La seconde question contient la première comme cas particulier, et elle est mieux posée :
elle n'exige ni classe de référence, ni principe d'indifférence, ni préférences
posthumaines.

## 6. Ce qui distingue un programme de recherche d'une position métaphysique

Test à appliquer :

| Question | H6 (Wheeler) | H5 (Tegmark) | H2 (Bostrom) |
|---|---|---|---|
| Produit-elle des résultats publiés et vérifiés ? | ✅ Oui | ❌ Non | ❌ Non |
| Y a-t-il des expériences en cours ? | ✅ Oui | ❌ Non | ⚠️ Une seule, restreinte |
| Peut-elle être partiellement fausse ? | ✅ Oui | ⚠️ Difficilement | ⚠️ Version restreinte seulement |
| Y a-t-il des désaccords techniques entre spécialistes ? | ✅ Oui | ⚠️ Peu | ❌ Non — désaccords philosophiques |

**Seul H6 passe le test.** C'est là qu'il faut mettre l'attention si l'on veut faire
de la science plutôt que de la métaphysique — sans mépriser la métaphysique, mais
sans la déguiser.

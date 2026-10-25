# Arguments contre l'hypothèse de simulation

> Symétrie de rigueur : les arguments *contre* sont soumis au même examen que les
> arguments *pour*. Plusieurs sont aussi faibles, et l'un est massivement surinterprété
> dans la presse.

## 1. Ringel & Kovrizhin (2017) `[SOLIDE, MAIS MASSIVEMENT SURINTERPRÉTÉ]`

**Référence.** Z. Ringel, D. L. Kovrizhin, *Quantized gravitational responses, the sign
problem and quantum complexity*, **Science Advances**, 2017.

### Ce que le papier montre réellement
Certains systèmes quantiques présentant des réponses gravitationnelles quantifiées
(conductance thermique de Hall) souffrent d'un **problème de signe** irréductible en
Monte-Carlo quantique. Autrement dit : ils ne sont pas simulables efficacement —
en temps polynomial — sur un **calculateur classique**. C'est un résultat de complexité
computationnelle, propre et intéressant.

### Ce que la presse en a fait
Titres du type « Des physiciens confirment que nous ne vivons pas dans une simulation ».
C'est une déformation.

### Pourquoi c'est une déformation
Trois raisons, chacune suffisante :

1. **Le résultat porte sur les calculateurs classiques.** Il ne dit rien sur des
   substrats quantiques, ni sur une physique de niveau supérieur dont nous ignorons tout.
2. **Il porte sur l'efficacité, pas sur la possibilité.** « Non simulable en temps
   polynomial » n'est pas « non simulable ». Un simulateur disposant de ressources
   d'un ordre supérieur n'est pas contraint par nos classes de complexité.
3. **Aucune raison de supposer que le substrat obéit à notre physique.** C'est le défaut
   commun de toutes les réfutations par le coût — voir §3.

Scott Aaronson, spécialiste de la complexité quantique, a explicitement corrigé cette
lecture en soulignant que le papier porte sur la simulabilité classique de systèmes
quantiques, et non sur l'hypothèse de simulation, qui reste **non falsifiée et
non falsifiable** en l'état.

**À retenir :** ce cas est le miroir exact du cas Vopson. Un papier technique légitime,
transformé par la communication en preuve d'une thèse qu'il ne traite pas — dans un sens
puis dans l'autre. C'est le même mécanisme, il ne devient pas acceptable parce qu'il
conclut dans le sens qui nous arrange.

## 2. Gödel, Tarski, Chaitin et l'irréductibilité `[INTÉRESSANT, NON CONCLUANT]`

Argument avancé : toute simulation purement algorithmique d'un univers complet serait
impossible, par le poids combiné des théorèmes d'incomplétude, d'indéfinissabilité de
la vérité, et de l'irréductibilité computationnelle.

**Ce qu'il y a de juste.** Un système formel ne peut pas contenir sa propre théorie
complète de la vérité. Un univers irréductible ne se calcule pas plus vite que lui-même.

**Pourquoi ce n'est pas concluant.**
- Une simulation n'a pas besoin d'être *complète* ni *auto-décrivante*.
  Elle doit être **suffisante pour ses habitants**, ce qui est beaucoup plus faible.
- Les théorèmes limitatifs portent sur les systèmes formels et les machines de Turing.
  Rien n'oblige un substrat de niveau supérieur à être une machine de Turing.
- L'irréductibilité impose un coût, pas une impossibilité.

**Verdict :** l'argument déplace correctement la discussion vers les contraintes de
calcul, mais il ne ferme rien.

## 3. Le problème structurel de toutes les réfutations par le coût

Il mérite d'être isolé, parce qu'il revient sous cinq formes différentes.

```
Toute réfutation de la forme
  « simuler un univers coûterait trop cher / prendrait trop de temps /
    demanderait trop de mémoire »
suppose que le substrat obéit à NOTRE physique, NOS bornes et NOS classes de complexité.

Or c'est exactement ce que l'hypothèse ne suppose pas.
```

L'hypothèse de simulation est donc **immunisée** contre les arguments de coût.
C'est un point important, et il coupe dans les deux sens :

- Il **protège** l'hypothèse contre une classe entière de réfutations.
- Il **révèle** sa faiblesse fondamentale : une hypothèse qu'aucun argument physique
  interne ne peut atteindre n'est pas une hypothèse physique.

C'est une immunité achetée au prix du statut scientifique.

## 4. Vazza (2025) — contraintes astrophysiques `[PUBLIÉ, CONTESTÉ]`

> ⚠️ **Correction.** La version initiale de ce dossier attribuait ce travail à
> Z. R. Struzik. **C'était une erreur.** L'auteur est **F. Vazza**.

**F. Vazza, *Astrophysical constraints on the simulation hypothesis for this Universe:
why it is (nearly) impossible that we live in a simulation*, arXiv:2504.08461,
11 avril 2025, Frontiers in Physics.**

Trois scénarios évalués : simuler l'univers visible entier, simuler la Terre seule,
simuler une Terre basse résolution calée sur les données de neutrinos de haute énergie.
Conclusion : les besoins en énergie ou en puissance de toute version de l'hypothèse sont
« entièrement incompatibles avec la physique, ou astronomiquement grands ».

**La conclusion exacte, souvent mal citée :** un univers ayant **nos** propriétés
physiques ne peut pas produire une simulation de cet univers. Ce n'est donc pas
« nous ne sommes pas simulés », mais « **si nous le sommes, l'hôte a d'autres lois** ».
C'est-à-dire exactement la structure du §3 ci-dessus.

**La réplique.** Eliott Edge et Chad Ashton Brown, commentaire, *Frontiers in Physics*,
21 avril 2026 : Vazza attaque une version plus forte que celle de Bostrom, qui n'exige
que le maintien d'une expérience subjective cohérente, pas le calcul de toute la physique
à toutes les échelles. **Bostrom lui-même**, dans sa FAQ v2.0 (2025), cite Vazza nommément
et répond que ces critiques « passent à côté ».

**Ce que l'échange révèle.** L'hypothèse survit en réduisant son périmètre —
et devient moins prédictive à chaque réduction. Analyse formelle du coût de cette
manœuvre en [11-MATHEMATIQUES/03](../11-MATHEMATIQUES/03-bornes-physiques-et-complexite.md) §4.

## 5. L'argument éthique `[PHILOSOPHIQUE, SOUS-ESTIMÉ]`

Peu invoqué, et pourtant l'un des plus intéressants — il attaque la branche (2) du
trilemme, celle que tout le monde néglige.

Une civilisation posthumaine capable de simuler des ancêtres conscients serait capable
de simuler des êtres qui **souffrent**. Si son développement moral suit son développement
technique, elle pourrait précisément l'interdire — de la même façon que nos comités
d'éthique encadrent l'expérimentation sur les êtres sensibles.

Ce n'est pas une réfutation, mais cela réduit `f_I` de façon non triviale, et cela le
fait pour des raisons **non arbitraires**. C'est l'un des rares moyens de contraindre
un paramètre qu'on disait inaccessible.

Développement en [06-ETHIQUE/01](../06-ETHIQUE/01-univers-sans-souffrance.md).

## 6. L'argument de la classe de référence `[LE PLUS SOLIDE]`

Ce n'est pas un argument contre l'hypothèse, c'est un argument contre **l'argument**.
Il est traité en [01-ARGUMENT/02](../01-ARGUMENT/02-la-faille-probabiliste.md) et
c'est, à ce jour, l'objection la plus robuste de toute la littérature.

Sa force tient à ce qu'il n'exige aucune hypothèse physique. Il porte sur la structure
logique du raisonnement, pas sur le monde. Il ne peut donc pas être contourné par
un appel à une physique de niveau supérieur inconnue — c'est la seule objection à
échapper au problème du §3.

## 7. Tableau récapitulatif

| Argument contre | Force | Défaut principal |
|---|---|---|
| Classe de référence / conditionnelle | ★★★★★ | Aucun — mais ne réfute pas l'hypothèse, seulement l'argument |
| Absence de prédiction différentielle | ★★★★☆ | Constat de statut, pas réfutation |
| Éthique (réduit `f_I`) | ★★★☆☆ | Repose sur une projection morale |
| Gödel / irréductibilité | ★★☆☆☆ | La simulation n'a pas besoin d'être complète |
| Coût computationnel | ★★☆☆☆ | Suppose que le substrat suit notre physique |
| Ringel & Kovrizhin | ★☆☆☆☆ | Ne porte pas sur la question ; surinterprété |
| Contraintes astrophysiques (Vazza 2025) | ★★☆☆☆ | Même structure que le coût computationnel : vaut seulement si l'hôte a nos lois (§4) |

**Bilan.** Aucun argument physique ne réfute l'hypothèse de simulation, et il est
probable qu'aucun ne le puisse jamais, pour la raison exposée au §3.
Le seul argument réellement décisif est **logique** et il ne porte pas sur l'hypothèse
mais sur le raisonnement qui prétend la rendre probable.

C'est exactement la position à tenir : *l'hypothèse n'est pas fausse, elle est
non étayée — et l'argument censé l'étayer ne fait pas ce qu'il prétend faire.*

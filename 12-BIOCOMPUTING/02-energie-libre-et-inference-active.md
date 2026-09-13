# Énergie libre et inférence active — le formalisme derrière DishBrain

> Point invisible dans toute la vulgarisation, et pourtant décisif : le mécanisme de
> récompense de DishBrain **n'est pas une astuce d'ingénierie**. C'est l'application
> directe d'une théorie mathématique de l'intelligence, dont Karl Friston est co-auteur
> du papier de 2022.

---

## 1. Le formalisme

### 1.1 Énergie libre variationnelle

Soit un agent avec des états internes encodant une densité de croyance `q(θ)` sur des
causes cachées `θ`, et recevant des observations `o`. L'**énergie libre variationnelle**
est :

```
F[q, o]  =  E_q(θ)[ log q(θ) − log p(θ, o) ]
```

Deux décompositions équivalentes, et chacune dit quelque chose :

```
(1)   F  =  D_KL[ q(θ) ‖ p(θ | o) ]  −  log p(o)
              └─── divergence ───┘      └ surprise ┘

(2)   F  =  D_KL[ q(θ) ‖ p(θ) ]  −  E_q[ log p(o | θ) ]
              └── complexité ──┘      └── exactitude ──┘
```

De (1) : puisque `D_KL ≥ 0`, on a **`F ≥ −log p(o)`**. L'énergie libre est une
**borne supérieure de la surprise**. Minimiser `F` minimise donc une borne sur la
surprise — et c'est calculable, alors que la surprise ne l'est pas.

### 1.2 Le principe d'énergie libre (FEP)

> Tout système qui persiste dans le temps en maintenant une frontière avec son
> environnement se comporte **comme s'il** minimisait son énergie libre variationnelle.

### 1.3 Inférence active

Deux voies pour minimiser `F` :
- **Perception** : mettre à jour `q(θ)` → réduit la divergence.
- **Action** : modifier `o` en agissant sur le monde → réduit la surprise à la source.

L'action devient de l'inférence : on agit pour rendre le monde conforme à ses attentes.

---

## 2. Le protocole DishBrain, décodé

Le mécanisme rapporté comme une astuce :

```
Balle ratée     →  stimulation électrique CHAOTIQUE, imprévisible
Balle rattrapée →  stimulation CALME, prévisible
```

Traduction formelle :

```
échec    →  o de haute surprise      →  F élevée
succès   →  o de basse surprise      →  F basse
```

**Ce n'est pas une récompense au sens de l'apprentissage par renforcement.**
C'est une manipulation directe de la quantité que le FEP dit être minimisée.
Le tissu n'apprend pas « à gagner » : il apprend **à rendre son environnement prévisible**,
et gagner se trouve être la façon d'y parvenir.

Le corpus le formule exactement bien :

> Les neurones ne cherchent pas à gagner et ne savent pas qu'ils jouent :
> ils cherchent à stabiliser leur environnement.

---

## 3. Le vrai enjeu scientifique, invisible dans la vulgarisation

> **La démo Doom n'est pas « un cerveau joue à un jeu ». C'est un test à grande échelle,
> en boucle fermée, d'une théorie mathématique de l'intelligence.**

Conséquence rarement dite : **si l'inférence active est fausse ou mal appliquée, tout le
schéma d'entraînement est arbitraire**, et l'interprétation des résultats change
complètement. C'est d'ailleurs l'un des points précis attaqués par la lettre de 2023.

C'est aussi ce qui rend l'expérience réellement intéressante : elle a un contenu
falsifiable, contrairement à la quasi-totalité du reste du dossier.

---

## 4. Pourquoi le FEP ne résout pas la question de la conscience — et l'aggrave

C'est le point de jonction avec
[11-MATHEMATIQUES/04](../11-MATHEMATIQUES/04-sous-determination.md), et il est décisif.

Le FEP prédit qu'un système qui persiste **réduira sa réactivité** face à un signal
qu'il ne peut pas rendre prévisible — c'est du contrôle de gain, une conséquence directe
de la minimisation de `F`.

Or c'est **exactement** l'observable proposé comme signe de souffrance :

```
H₁ : « ça souffre et ça se retire »
H₂ : « c'est de la minimisation d'énergie libre »

Observable : réduction de la réactivité face à un signal ingérable

P(D | H₁) = P(D | H₂) ≈ 1        ⇒     BF = 1
```

**Le FEP fournit une explication complète et quantitative du comportement sans invoquer
aucune expérience subjective.** Il ne réfute pas la souffrance ; il rend son postulat
**informationnellement inutile** pour expliquer les données.

### Le retournement inconfortable
Friston et ses collaborateurs soutiennent par ailleurs que la minimisation d'énergie
libre est **constitutive** de ce qu'est un sujet — un système qui maintient une
distinction avec son environnement. Sous cette lecture, `H₁` et `H₂` ne sont plus
concurrentes : la seconde serait la description formelle de la première.

**Si c'est vrai, alors tout système minimisant `F` a un point de vue — y compris un
thermostat bien décrit.** C'est le problème de la banalisation, symétrique du problème
de combinaison du panpsychisme.

Ni la version « `H₂` explique tout sans `H₁` » ni la version « `H₂` *est* `H₁` » ne
sont réfutables avec les observables disponibles. **La sous-détermination se reproduit
un étage plus haut.**

---

## 5. Ce que le formalisme apporte au dossier

| Apport | Portée |
|---|---|
| Le protocole DishBrain a un **contenu théorique** | Ce n'est pas une démo de foire |
| Le FEP explique le comportement **sans conscience** | Renforce `BF = 1` |
| Le FEP est parfois présenté comme **constitutif** du sujet | Déplace le problème, ne le résout pas |
| Le FEP est **le même cadre** que le cerveau prédictif invoqué dans le corpus sur la simulation | Unifie deux parties du dossier |

Ce dernier point mérite d'être souligné : l'argument « la perception est une
reconstruction » du corpus sur la simulation, et le mécanisme de récompense de DishBrain,
**sont le même formalisme**. Friston est derrière les deux. Le corpus utilise les deux
sans citer la source ni voir qu'elle est commune.

---

## 6. Critiques du FEP, à mentionner

Il ne faut pas l'importer comme un acquis.

1. **Quasi-tautologique.** Formulé assez généralement, le FEP décrit tout système
   persistant. Un principe qui ne peut pas être faux ne prédit rien.
2. **Écart entre le principe et les modèles.** Le FEP général et les modèles
   d'inférence active concrets ne sont pas au même niveau de testabilité ; les seconds
   sont réfutables, le premier beaucoup moins.
3. **Formalisation contestée.** Plusieurs travaux discutent la validité des dérivations
   dans les cas non stationnaires.

**Position recommandée :** traiter les modèles d'inférence active comme des hypothèses
testables — et DishBrain comme un test légitime — tout en refusant de traiter le FEP
lui-même comme un fait établi. C'est exactement la Règle 0 appliquée à un cadre
théorique plutôt qu'à une hypothèse cosmologique.

---

## 7. Vérification formelle (balayage du 29 août 2026)

### 7.1 L'énergie libre attendue n'est pas dérivée du principe
`G(π,τ) = E_{q(o_τ,s_τ|π)}[ln q(s_τ|π) − ln p̃(o_τ,s_τ|π)]`, avec les décompositions exactes
```
risque + ambiguïté :          G = D_KL[q(o_τ|π) ‖ p̃(o_τ)] + E_{q(s_τ|π)}[ H[p(o_τ|s_τ)] ]
épistémique + pragmatique :   G = −E_{q(o_τ|π)}[ D_KL[q(s_τ|o_τ,π) ‖ q(s_τ|π)] ] − E_{q(o_τ|π)}[ ln p̃(o_τ) ]
sélection :                   q(π) = σ(−γ G(π))
```
**Millidge, Tschantz, Buckley, *Whence the Expected Free Energy?*, Neural Comput. 33, 2021 :**
`G` n'est **ni** l'espérance de l'énergie libre future **ni** une borne sur la surprise
attendue ; le terme épistémique provient d'un **choix de définition** (`G` diffère de la
*free energy of the future* exactement par le gain d'information). **L'exploration ne
« tombe » pas du principe : elle y est mise.** Plusieurs variantes coexistent (EFE, FEEF,
inférence sophistiquée) sans dérivation unique acceptée.

### 7.2 Le lemme de Friston (2019) est faux, ou vide
**Biehl, Pollock, Kanai, *A Technical Critique of Some Parts of the Free Energy Principle*,
Entropy 23(3):293, 2021** — trois résultats démontrés :
```
(1)  les définitions de « couverture de Markov » (factorisation de p* ; ∂²ℑ/∂η∂μ = 0 ; couplage des flots)
     ne sont PAS équivalentes en général
(2)  E[f(x)] ≠ f(E[x]) : la réécriture « dynamique des modes » exige des hypothèses non énoncées
(3)  ∇_μ F(b, μ) |_{μ = μ(b)} = 0  IDENTIQUEMENT   ⇒  « les états internes descendent le gradient de F »
     est trivialement satisfait par n'importe quel flot : le lemme est VIDE de contenu dynamique
```
Réponse (Friston, Da Costa, Parr, Entropy 23(8):1076, 2021) : besoin d'hypothèses de
couplage solénoïdal creux, distinction inférence exacte/approchée. **La critique n'est pas
réfutée.**

### 7.3 Les couvertures de Markov ne sont pas génériques
**Aguilera, Millidge, Tschantz, Buckley, *How particular is the physics of the free energy
principle?*, Phys. Life Rev. 40, 2022** — dans les systèmes linéaires (Ornstein–Uhlenbeck,
`dx/dt = Jx + ω`, `JΣ + ΣJᵀ = −2Γ`), la seule classe où tout se calcule :
```
condition de blanket (gaussien) :  (Σ⁻¹)_{ημ} = 0   — de MESURE NULLE hors couplage creux imposé
décomposition :  J = (Q − Γ) Σ⁻¹ ;  la lecture inférentielle exige des restrictions sévères sur Q_{ημ}, Q_{ηb}, Q_{μb}
portée :  gradient sur F seulement pour les MODES dμ̄/dt, pas pour les trajectoires dμ/dt
```
Des systèmes-vitrines du FEP échouent à ces conditions. Réponses (Friston « Very particular » ;
Heins & Da Costa « Sparse coupling ») et réplique (« a confederation of Bayesian mechanics »,
2023). **« Tout ce qui existe de façon stable modélise son environnement » est faux comme
énoncé générique.**

### 7.4 La version actuelle : intégrales de chemin (2023)
**Friston, Da Costa, Sakthivadivel, Heins, Pavliotis, Ramstead, Parr, *Path integrals,
particular kinds, and strange things*, Phys. Life Rev. 47, 2023.** Abandon du blanket sur
la densité stationnaire au profit du **couplage creux des flots** (`∂f_η/∂μ = 0`,
`∂f_μ/∂η = 0`), action d'Onsager–Machlup
`A[γ] = ¼∫(γ̇ − f)ᵀΓ⁻¹(γ̇ − f) dt + ½∫∇·f dt`, `P[γ] ∝ e^{−A[γ]}`. Typologie : particules
inertes/actives, ordinaires/**étranges** (états actifs cachés d'elles-mêmes, `∂f_μ/∂a = 0`),
conservatives. Les particules étranges sont proposées comme modèle de la sentience.
**Statut : cadre de redescription conditionnel** (« si la partition tient, alors… »), non
falsifiable comme principe ; commentaires critiques dans Phys. Life Rev. 48 (2024), dont
Sheikhbahaee et al. (arXiv:2401.08873) sur le glissement physique → sentience.
La généricité du couplage creux des flots **reste non établie**.

### 7.5 DishBrain — ce qui est réellement manipulé
```
variable manipulée :   H[ p(o_feedback | échec) ]   ≫   H[ p(o_feedback | succès) ]
                       (entropie conditionnelle de la stimulation, donné le résultat)
quantité FEP revendiquée mais JAMAIS mesurée ni calculée :   F = E_q[ln q(s) − ln p(o,s)]
```
Paramètres (ordres de grandeur, à recontrôler dans *Neuron* 110(23)) : succès → stimulation
prévisible, ~75 mV, 100 Hz, brève ; échec → ~150 mV, 5 Hz, sites aléatoires, 4 s.
Résultat : allongement significatif des échanges en ~20 min vs contrôles, effet plus fort
avec neurones humains ; pas d'apprentissage inter-sessions robuste rapporté.

**Interprétation rivale non exclue :** *learning by stimulation avoidance* (Sinapayen,
Masumori, Ikegami, PLOS ONE 2017) / conditionnement opérant — la variable « prédictibilité »
et la variable « stimulation aversive » sont **confondues dans le design**. Suites :
comparaison avec le deep RL en efficacité d'échantillonnage (Khajehnejad et al.,
arXiv:2405.16946, 2024) — toujours sans mesure de `F`.

**Conflit d'intérêts à consigner :** auteurs affiliés à Cortical Labs ; Friston est
co-auteur du papier **et** auteur du principe testé.

### 7.6 Les deux lectures, et le théorème qui manque
| Lecture | Défenseurs | Contenu |
|---|---|---|
| **(A) Instrumentale** | Bruineberg, Dołęga, Dewhurst, Baltieri (*The Emperor's New Markov Blankets*, BBS 2022) ; Andrews (*The math is not the territory*, 2021) | Le FEP redécrit ; le blanket de Pearl (outil statistique) n'est pas le blanket de Friston (frontière ontologique). Zéro engagement sur la phénoménalité |
| **(B) Constitutive** | Friston 2023 (particules étranges) ; Kirchhoff, Kiverstein ; Hohwy (*self-evidencing*) ; Solms | La bonne structure inférentielle **est** être un sujet |

**Aucun critère interne au formalisme ne sépare un système qui *a* des croyances d'un
système simplement *descriptible ainsi*.** Si (B) : les simulations d'ancêtres seraient
automatiquement peuplées de sujets — P1 de Bostrom deviendrait gratuite. Si (A) : le FEP
est neutre, des agents FEP comportementalement complets et phénoménalement vides sont
possibles. **En l'état, le FEP ne fournit aucun théorème permettant de trancher** : il ne
renforce ni n'affaiblit l'argument de simulation — il déplace le vocabulaire. C'est la
sous-détermination ([11-MATHEMATIQUES/04](../11-MATHEMATIQUES/04-sous-determination.md)),
reproduite un étage plus haut.

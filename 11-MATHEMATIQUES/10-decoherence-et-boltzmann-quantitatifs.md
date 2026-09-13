# Décohérence et cerveaux de Boltzmann — les nombres

> Deux dossiers que la vulgarisation traite qualitativement et qui sont, en réalité,
> **quantitatifs à vingt ordres de grandeur près**. Partie I : l'observation sans
> observateur, avec les taux vérifiés. Partie II : les fluctuations et le problème de la
> mesure cosmologique — section où l'agent de vérification a échoué (limite de session) ;
> les valeurs y sont dérivées par le dossier et marquées `[À VÉRIFIER]`.

---

# Partie I — Décohérence

## 1. Le théorème GKLS (Gorini–Kossakowski–Sudarshan ; Lindblad, 1976)

Tout semigroupe dynamique quantique complètement positif, préservant la trace et
continu en norme a un générateur de la forme — et réciproquement :
```
dρ/dt  =  −(i/ħ)[H, ρ]  +  Σ_k γ_k ( L_k ρ L_k†  −  ½{ L_k†L_k, ρ } ),        γ_k ≥ 0
```
`γ_k ≥ 0` est nécessaire et suffisant pour la positivité complète. Dérivation depuis
système + environnement sous : approximation de Born (`ρ_SE ≈ ρ_S ⊗ ρ_E`), Markov
(`τ_E ≪ τ_R`), approximation séculaire. Sans elles : équations non markoviennes
(Nakajima–Zwanzig, TCL). **Lindblad est une description effective après trace partielle,
pas une modification de la mécanique quantique.**

Ordre de grandeur structurant (Zurek, Physics Today 1991) :
```
γ_deco / γ_diss  ~  (Δx / λ_dB)²    ≈  10⁴⁰     pour  m = 1 g,  Δx = 1 cm,  T = 300 K
```
La cohérence disparaît `10⁴⁰` fois plus vite que l'énergie ne se dissipe.

## 2. Joos–Zeh (Z. Phys. B 59, 223, 1985) — décohérence spatiale par diffusion

Limite grande longueur d'onde (`λ ≫ Δx`, objet lourd sans recul) :
```
∂ρ(x,x′,t)/∂t |_diff  =  −Λ (x − x′)² ρ(x,x′)         ⇒      ρ(x,x′,t) = ρ(x,x′,0) · e^{−Λ(Δx)² t}

τ_D  =  1 / ( Λ (Δx)² )
```
Limite opposée (`λ ≪ Δx`) : chaque diffusion emporte l'information complète,
`ρ ∝ e^{−Γ_tot t}` (saturation). Photons thermiques (Rayleigh) : `Λ ∝ a⁶ T⁹`.
Préfacteur photonique corrigé d'un facteur `O(1)` par Hornberger–Sipe (PRA 68, 012105,
2003) ; ordres de grandeur inchangés. **Confirmé expérimentalement** en interférométrie
de molécules C₇₀ (Hornberger et al., PRL 90, 160401, 2003).

### 2.1 Taux de localisation Λ (cm⁻² s⁻¹) — Joos–Zeh, repris par Schlosshauer

| Environnement | a = 10⁻³ cm | a = 10⁻⁵ cm | a = 10⁻⁶ cm |
|---|---|---|---|
| Rayonnement fossile (CMB) | 10⁶ | 10⁻⁶ | 10⁻¹² |
| Photons à 300 K | 10¹⁹ | 10¹² | 10⁶ |
| Lumière solaire (au sol) | 10²¹ | 10¹⁷ | 10¹³ |
| Vide de laboratoire (10³ part./cm³) | 10²³ | 10¹⁹ | 10¹⁷ |
| Air, pression normale | 10³⁶ | 10³² | 10³⁰ |

### 2.2 Temps de décohérence τ_D (s), Δx = a — Schlosshauer, arXiv:1404.2635, Table I

| Environnement | Grain de poussière, a = 10⁻³ cm | Grosse molécule, a = 10⁻⁶ cm |
|---|---|---|
| CMB seul | **1 s** | 10²⁴ s |
| Photons à 300 K | 10⁻¹⁸ s | 10⁶ s |
| Meilleur vide de laboratoire | 10⁻¹⁴ s | 10⁻² s |
| Air, pression normale | **10⁻³¹ s** | 10⁻¹⁹ s |

⚠️ Le libellé courant « grain de 10⁻⁵ cm, τ ~ 10⁻³¹ s » **mélange deux lignes** : le
`10⁻³¹ s` canonique est le grain `a = Δx = 10⁻³ cm` dans l'air. Pour `a = 10⁻⁵ cm` dans
l'air, régime `Λ` : `τ_D ≈ 1/(10³² × 10⁻¹⁰) ≈ 10⁻²² s` (la saturation `Γ_tot` peut le
modifier de quelques ordres, jamais assez pour devenir perceptible).

**Le fait qui compte :** un grain de 10 μm **dans l'espace intergalactique**, exposé au
seul CMB, est décohéré en position en **1 seconde**. Aucun observateur, aucun photon
solaire, aucune atmosphère.

## 3. Einselection (Zurek 1981, 1982 ; RMP 75, 715, 2003)

Limite de mesure quantique (`H_int` domine) : les états stables — **états pointeurs** —
sont les états propres de toute observable commutant avec l'interaction :
```
[O_S, H_int]  =  0
```
`H_int` dépendant typiquement de la position, les états pointeurs macroscopiques sont
des paquets **localisés** : d'où l'absence de superpositions de position. Cas général :
**crible de prédictibilité** (minimiser la production d'entropie). Environnement lent :
états propres d'énergie (Paz–Zurek, PRL 82, 5181, 1999).

**Pour le dossier :** la « base affichable » du monde classique est **dérivée** de
`[O_S, H_int] = 0`, pas stipulée par un observateur ni par un choix de rendu. Un
simulateur qui définit `H_int` obtient l'einselection gratuitement — elle montre seulement
que le niveau de rendu ne peut pas être « ce que voit la conscience ».

## 4. Darwinisme quantique — l'environnement comme témoin

L'environnement n'est pas qu'un puits de cohérence : c'est un **canal de communication**
qui enregistre l'observable pointeur de façon **redondante**.
```
I(S:F)  =  H_S + H_F − H_SF                       (information mutuelle, von Neumann)
Plateau classique :  I(S:F_f) ≈ H_S    pour  f_δ ≤ f ≤ 1 − f_δ
Redondance :         R_δ = 1/f_δ,   f_δ = min{ f : I(S:F_f) ≥ (1−δ) H_S }
État de branchement : |Ψ_SE⟩ = Σ_i c_i |s_i⟩ ⊗ |ε_i^(1)⟩ ⊗ … ⊗ |ε_i^(N)⟩ ;  I(S:E) = 2H_S (pur)
```
Un fragment minuscule de l'environnement suffit à connaître l'état pointeur ; seul l'accès
à la quasi-totalité révèle les corrélations quantiques (montée vers `2H_S`, discorde).

**Le chiffre :** Riedel–Zurek (PRL 105, 020404, 2010) — un grain de 1 μm au soleil voit
sa position dupliquée dans les photons diffusés avec **`R_δ ~ 10⁸` après 1 μs**,
croissance linéaire en `t`.

**Théorème d'objectivité générique** (Brandão–Piani–Horodecki, Nat. Commun. 6, 7908, 2015) :
pour tout état et toute dynamique `S → E` à sorties multiples, quand le nombre de fragments
croît, ils ne peuvent porter d'information que sur **une seule et même observable** —
l'objectivité de l'*observable* est générique (monogamie / de Finetti quantique).
L'objectivité des *résultats* n'est pas couverte.

**Vérifications expérimentales :** clusters photoniques (Ciampini et al., PRA 98, 2018) ;
simulateur photonique (Chen et al., Sci. Bull. 2019) ; centre NV, spins nucléaires ¹³C
comme fragments (Unden et al., PRL 123, 140402, 2019) ; et **2025 : 9 qubits
supraconducteurs** (1 système + 4 environnement + 4 auxiliaires, `T₁ ≈ 130 μs`),
plateau de `I(S:F)`, annulation de la discorde, structure de branchement
(Science Advances 11, eadx6857 ; arXiv:2504.00781).

**Nuance 2024 :** Ferté & Cao (PRL 132, 110201) — modèle exactement soluble avec des
**transitions de phase** entre une phase darwinienne (information lisible localement) et
une phase *encodante* (brouillée, type scrambling). La redondance est une **phase** de la
dynamique, pas un fait générique. Le résultat est ainsi rendu falsifiable.

## 5. Ce que la décohérence ne résout pas

Après décohérence :
```
|Ψ_SE⟩ = Σ_i c_i |s_i⟩|E_i⟩   reste une superposition,   ⟨E_i|E_j⟩ ≈ δ_ij en τ_D
ρ_S  =  Tr_E |Ψ⟩⟨Ψ|  ≈  Σ_i |c_i|² |s_i⟩⟨s_i|          — mixture IMPROPRE
Aucune équation ne sélectionne un i unique.
```
Consensus technique (Joos, Zeh, Zurek, Schlosshauer ; Adler 2003 ; Schlosshauer RMP 76,
1267, 2005) : la décohérence explique **(i)** la suppression des interférences (facteur
`e^{−Λ(Δx)²t}`, soit `e^{−10³⁰}` et au-delà en 1 s pour un objet macroscopique),
**(ii)** la base préférée, **(iii)** l'objectivité par redondance — le tout par évolution
unitaire globale. Elle **n'explique pas** la sélection d'un résultat unique : le problème
est déplacé (« pourquoi cette branche ? »), pas résolu ; la réponse dépend de
l'interprétation (Everett, GRW/CSL, Bohm, QBism). Dérivation de la règle de Born par
envariance (Zurek, PRL 90, 120404, 2003) : `[DÉBATTU]` (circularité alléguée).
Synthèse de référence : Zurek, *Decoherence and Quantum Darwinism*, CUP, 2025.

## 6. La chaîne quantitative contre « la conscience cause l'effondrement »

Chaque maillon sourcé :
```
(1) Tout objet macroscopique visible :   τ_D ≤ 10⁻¹⁴ s (meilleur vide),  10⁻³¹–10⁻¹⁹ s (air)
(2) Information pointeur répliquée :     ~10⁸ copies / μs  AVANT tout système sensoriel
(3) Le cerveau lui-même est classique :  Tegmark, PRE 61, 4194 (2000) —
        superpositions neuronales (ions Na⁺, N ~ 10⁶) :  τ_deco ~ 10⁻²⁰ s
        microtubules :                                  τ_deco ~ 10⁻¹³ s
        contre des échelles neuronales de 10⁻³–10⁻¹ s :  rapport ≥ 10¹⁰
        (réfutation quantitative d'Orch-OR dans sa forme originale)
(4) Échelle de la perception consciente : ~10⁻¹ s

τ_perception / τ_D  :   10¹³ (vide de labo)   →   10³⁰ (air)
Copies environnementales avant perception :   10⁸/μs × 10⁵ μs  ~  10¹³
```

**Conclusion.** Au moment où une conscience « observe », l'effondrement apparent est
achevé depuis **13 à 30 ordres de grandeur de temps**, et l'information est déjà
**publique** en `~10¹³` exemplaires. **La conscience arrive dernière dans la chaîne
causale ; elle ne peut rien y déclencher.** Rien ne distingue un observateur conscient
d'un grain de poussière. Wigner lui-même a abandonné la thèse en fin de vie ; elle n'a
plus de défense technique.

**Ce que cela ne fait pas :** réfuter la simulation — un simulateur simulant fidèlement
la décohérence produit exactement ces nombres. L'argument tue une **famille** d'arguments
pro-simulation (ceux fondés sur « l'effet observateur »). Et il y a une lecture inverse,
`[SPÉCULATIF]` et symétrique : la structure en branches décohérées désigne précisément
**l'endroit où un simulateur économe couperait** — ne suivre qu'une branche coûte
exponentiellement moins que la fonction d'onde complète. Aucune prédiction discriminante
n'en découle. `BF = 1`.

---

# Partie II — Cerveaux de Boltzmann et mesure cosmologique

> ⚠️ L'agent de vérification dédié à cette partie a échoué (limite de session).
> Les dérivations ci-dessous sont celles du dossier ; les références aux valeurs publiées
> (Page 2008 en particulier) sont marquées `[À VÉRIFIER]`.

## 7. Température et entropie de de Sitter
```
T_dS  =  ħ H₀ / (2π k_B)     ≈   2,8 × 10⁻³⁰ K        (H₀ ≈ 2,2 × 10⁻¹⁸ s⁻¹)
S_dS  =  3π k_B c³ / (Λ G ħ)  ≈   3 × 10¹²² k_B         (voir [08](08-holographie-et-emergence.md) §3)
t_rec ~  e^{S_dS}  ~  e^{10¹²²}   (temps de récurrence de Poincaré, ordre de grandeur)
```

## 8. Le taux de nucléation d'un cerveau de Boltzmann
Une fluctuation thermique produisant une structure d'énergie `E` dans un bain à `T_dS`
est supprimée comme `e^{−E/(k_B T_dS)}`. Pour `E = m c²` avec `m = 1 kg` :
```
E / (k_B T_dS)  =  9 × 10¹⁶ J  /  3,8 × 10⁻⁵³ J   ≈   2,4 × 10⁶⁹

Γ_BB  ~  exp( −2 × 10⁶⁹ )        par unité de 4-volume de Hubble     [dérivation du dossier]
```
Ordre de grandeur cohérent avec les estimations publiées (Page, PRD 78, 063535, 2008,
*Is our universe likely to decay within 20 billion years?*) `[À VÉRIFIER]`.

## 9. La condition de domination
Dans un vide de de Sitter **éternel**, `Γ_BB > 0` intégré sur un temps infini produit une
infinité de cerveaux de Boltzmann, qui finissent par dominer numériquement les
observateurs ordinaires (produits en nombre fini pendant l'ère stellifère). Condition
pour l'éviter :
```
le vide doit se désintégrer avant que les BB ne dominent :     Γ_decay  ≳  Γ_BB
```
soit une durée de vie du vide `τ_vac ≲ 1/Γ_BB ~ e^{10⁶⁹}` en unités de Hubble — condition
extraordinairement faible en apparence, mais qui dépend entièrement de la **mesure**
choisie (§10). La borne « 20 milliards d'années » de Page provient d'une mesure
particulière (patch causal) `[À VÉRIFIER]`.

**Contre-argument important :** Boddy, Carroll, Pollack (*De Sitter Space Without
Dynamical Quantum Fluctuations*, Found. Phys. 2016, arXiv:1405.0298) — dans un espace de
de Sitter **exact**, en état quantique stationnaire, **rien ne fluctue** : les
fluctuations exigent une dynamique (décohérence, mesure). Sans dynamique, pas de BB.
Et Carroll (*Why Boltzmann Brains Are Bad*, arXiv:1702.00850, 2017) : un modèle
prédisant la domination des BB est **cognitivement instable** — il rend improbable que
les raisonnements ayant conduit à l'adopter soient fiables — donc à rejeter pour cette
raison, pas parce qu'il serait réfuté.

## 10. Le problème de la mesure = le problème de la classe de référence

En inflation éternelle, observateurs ordinaires et BB sont **tous deux infinis**.
Le rapport `∞/∞` exige un **régulateur** — une prescription de coupure — et différents
régulateurs donnent des réponses différentes :

| Mesure | Prescription | Pathologie connue |
|---|---|---|
| Temps propre | couper à `t = const` le long des géodésiques | **Paradoxe de la jeunesse** : les observateurs les plus récents dominent exponentiellement |
| Facteur d'échelle | couper à `a = const` | Adoucit la jeunesse ; dépendance au choix de `a` |
| Patch causal (Bousso) | ne compter qu'à l'intérieur d'un horizon | Dépend du vide terminal ; c'est la mesure de Page |
| Stationnaire | attractif à temps tardif | Sensibilité aux taux de transition entre vides |

**L'identité formelle avec Bostrom, écrite :**
```
Bostrom   :   P(je suis simulé)   ≈   μ(R_sim) / μ(R)
Boltzmann :   P(je suis une BB)   ≈   μ(R_BB)  / μ(R)

dans les deux cas :  μ est une mesure sur un ensemble infini d'observateurs,
                     le rapport est ∞/∞ régularisé,
                     et la réponse DÉPEND DU RÉGULATEUR.
```
Le problème de la classe de référence ([01](01-formalisme-anthropique.md) §3) et le
problème de la mesure cosmologique sont **le même objet mathématique**. En cosmologie,
une mesure prédisant la domination des BB est rejetée comme **pathologique** ; en
philosophie, la mesure prédisant la domination des simulés est acceptée comme
**résultat**. Cette asymétrie n'est justifiée par rien.

## 11. La dissolution algorithmique
Müller (2020, 2026 — [07](07-probabilite-algorithmique.md) §5) : la probabilité d'être
une fluctuation ne se calcule pas en **comptant** des cerveaux, mais par la probabilité
algorithmique des continuations d'état — `K(continuation régulière) ≪ K(continuation
chaotique)`, donc les BB ont une mesure minuscule **quelle que soit leur abondance
cosmologique**. Même mouvement pour la simulation. C'est la seule proposition qui
résout les deux problèmes d'un coup — au prix d'un postulat métaphysique.

## 12. Bilan de la partie II

| Énoncé | Statut |
|---|---|
| `T_dS ≈ 10⁻³⁰ K`, `S_dS ≈ 10¹²² k_B` | `[ÉTABLI]` |
| `Γ_BB ~ e^{−10⁶⁹}` (ordre de grandeur) | `[DÉRIVÉ, À VÉRIFIER contre Page 2008]` |
| Les BB dominent en dS éternel sous certaines mesures | `[ÉTABLI sous ces mesures]` |
| Pas de fluctuations en dS exact stationnaire | `[DÉBATTU]` — Boddy–Carroll–Pollack |
| Problème de la mesure non résolu | `[ÉTABLI]` — ouvert depuis vingt ans |
| Identité formelle mesure cosmologique ≡ classe de référence | Argument du dossier, structurellement exact |

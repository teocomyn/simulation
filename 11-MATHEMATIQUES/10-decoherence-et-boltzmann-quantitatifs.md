# Décohérence et cerveaux de Boltzmann — les nombres

> Deux dossiers que la vulgarisation traite qualitativement et qui sont, en réalité,
> **quantitatifs à vingt ordres de grandeur près**. Partie I : l'observation sans
> observateur, avec les taux vérifiés. Partie II : les fluctuations et le problème de la
> mesure cosmologique — section confrontée aux sources primaires le 25 octobre 2026 ;
> les recalculs propres au dossier y sont marqués `[DÉRIVÉ]`.

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

> **Vérifiée le 25 octobre 2026** contre les sources primaires : Page (2007, 2008),
> Bousso et Freivogel (2007), Dyson, Kleban et Susskind (2002), Boddy, Carroll et
> Pollack (2016), Carroll (2017). La vérification a corrigé trois points de la version
> précédente. La température de de Sitter se calcule avec la constante de Hubble
> asymptotique, pas avec celle d'aujourd'hui. L'exposant d'environ 10⁶⁹ vient de Page
> 2007, pas de Page 2008. La borne des « 20 milliards d'années » relève d'une mesure
> globale, pas du patch causal. Les recalculs propres au dossier sont marqués `[DÉRIVÉ]`.

## 7. Température et entropie de de Sitter
```
H_Λ   =  H₀ √Ω_Λ               ≈  1,8 × 10⁻¹⁸ s⁻¹       (1/H_Λ ≈ 17,5 Gyr ; Planck 2018 : H₀ = 67,4 km/s/Mpc, Ω_Λ ≈ 0,685)
T_dS  =  ħ H_Λ / (2π k_B)      ≈  2,2 × 10⁻³⁰ K         (avec H₀ on trouverait 2,7 × 10⁻³⁰ K : température de l'horizon actuel)
S_dS  =  3π k_B c³ / (Λ G ħ)  =  π k_B c⁵ / (G ħ H_Λ²)  ≈  3,3 × 10¹²² k_B
t_rec ~  e^{S_dS/k_B}  ~  e^{3 × 10¹²²}   (récurrence de Poincaré ; suppose un espace de Hilbert de dimension finie)
```
Valeurs recalculées par le dossier avec les paramètres Planck 2018 `[DÉRIVÉ]`. Page
(2008, éq. 14) obtient `S_dS ≈ 3,7 × 10¹²²` avec les paramètres de 2006 ; Dyson, Kleban
et Susskind (*Disturbing Implications of a Cosmological Constant*, JHEP 0210:011, 2002)
placent les récurrences à des intervalles `~ e^S`, avec `S` de l'ordre
de 10¹²⁰. Entropie et aire d'horizon : voir [08](08-holographie-et-emergence.md) §3.

## 8. Le taux de nucléation d'un cerveau de Boltzmann
Une fluctuation thermique produisant une structure d'énergie `E` dans un bain à `T_dS`
est supprimée comme `e^{−E/(k_B T_dS)}`. Pour `E = m c²` avec `m = 1 kg` :
```
E / (k_B T_dS)  =  9,0 × 10¹⁶ J  /  3,0 × 10⁻⁵³ J   ≈   3 × 10⁶⁹

Γ_BB  ~  exp( −3 × 10⁶⁹ )        par unité de 4-volume de Hubble (préfacteur négligeable)
```
C'est l'estimation publiée par Page pour un cerveau de 1 kg formé par fluctuation
thermique à la température de de Sitter : facteur `exp(−2 S_E)` avec `S_E ≈ 1,4 × 10⁶⁹`,
soit `2 S_E ≈ 2,8 × 10⁶⁹` avec les paramètres de 2006 (D. N. Page, *Susskind's Challenge
to the Hartle-Hawking No-Boundary Proposal and Possible Resolutions*, JCAP 0701:004, 2007,
arXiv:hep-th/0610199, éq. 4) `[ÉTABLI]`. Bousso et Freivogel (2007) utilisent la même
échelle pour le temps d'apparition d'un cerveau de Boltzmann dans le patch causal.

**L'exposant dépend du modèle de cerveau.** Page juge plus réaliste un « cerveau bref »,
fluctuation quantique du vide, avec un exposant de l'ordre de 10⁴², et considère aussi
un cerveau « moyen » à 10⁵⁰ (même article, éq. 2 et 3). La version précédente de ce
fichier attribuait l'estimation à Page 2008 : cet article ne la contient pas.

## 9. La condition de domination
Dans un vide de de Sitter **éternel**, `Γ_BB > 0` intégré sur un temps infini produit une
infinité de cerveaux de Boltzmann, qui finissent par dominer numériquement les
observateurs ordinaires (produits en nombre fini pendant l'ère stellifère). Condition
pour l'éviter :
```
patch causal (Bousso et Freivogel 2007) : le vide doit se désintégrer
avant l'apparition du premier BB :                 Γ_decay  ≳  Γ_BB
```
Soit une durée de vie du vide `τ_vac ≲ 1/Γ_BB ~ e^{3 × 10⁶⁹}` en unités de Hubble :
condition extraordinairement faible, propre à la description locale.

**La borne de Page vient d'une autre mesure.** Dans *Is Our Universe Likely to Decay
within 20 Billion Years?* (Phys. Rev. D 78, 063535, 2008 ; arXiv:hep-th/0610079), Page
compte les observations par 3-volume comobile, une pondération **globale**, et exige que
l'espérance du 4-volume survivant reste finie. Il en tire un taux de désintégration par
unité de 4-volume supérieur à `A_min = 9 H_Λ⁴ / (4π) = Λ² / (4π)` en unités de Planck :
l'univers doit se désintégrer plus vite que son volume ne croît, et cela **quelle que
soit la valeur de `Γ_BB`**, pourvu qu'elle soit non nulle. Avec les paramètres de 2006,
la demi-vie future du vide serait inférieure à 19 milliards d'années (15,7 avec les
valeurs centrales) `[ÉTABLI sous cette mesure]`. Recalcul du dossier avec Planck 2018 :
environ 18 milliards d'années `[DÉRIVÉ]`. Bousso et Freivogel (*A Paradox in the Global
Description of the Multiverse*, JHEP 0706:018, 2007 ; arXiv:hep-th/0610132) montrent que
ce paradoxe disparaît dans la description locale.

**Contre-argument important :** Boddy, Carroll, Pollack (*De Sitter Space Without
Dynamical Quantum Fluctuations*, Found. Phys. 46, 702-735, 2016, arXiv:1405.0298) — dans
un espace de de Sitter **exact**, en état quantique stationnaire, **rien ne fluctue** : les
fluctuations exigent une dynamique (décohérence, mesure). Sans dynamique, pas de BB.
Les auteurs posent eux-mêmes la limite : si le patch de de Sitter est un système fermé à
espace de Hilbert de dimension finie, les récurrences de Poincaré et les fluctuations de
Boltzmann ont bien lieu. L'échappatoire suppose donc une dimension infinie, ce qui est
incompatible avec le `t_rec ~ e^{S_dS}` du §7.
Et Carroll (*Why Boltzmann Brains Are Bad*, arXiv:1702.00850, 2017 ; repris dans
Dasgupta, Dotan et Weslake (dir.), *Current Controversies in Philosophy of Science*,
Routledge, 2020) : un modèle
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
| Patch causal (Bousso, PRL 97, 191302, 2006 ; Bousso et Freivogel 2007) | ne compter qu'à l'intérieur d'un horizon | Dépend du vide terminal ; les BB sont évités si `τ_vac < t_BB ~ e^{3 × 10⁶⁹}` |
| Volume comobile pondéré par la survie (Page, arXiv 2006 ; Phys. Rev. D 2008) | compter par 3-volume comobile | Exige une désintégration plus rapide que la croissance du volume : demi-vie de moins de 19 milliards d'années |
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
| `T_dS ≈ 2,2 × 10⁻³⁰ K`, `S_dS ≈ 3,3 × 10¹²² k_B` | `[ÉTABLI]` — ordres de grandeur ; valeurs Planck 2018 recalculées par le dossier |
| `Γ_BB ~ e^{−3 × 10⁶⁹}` pour un cerveau thermique de 1 kg ; exposant de 10⁴² à 10⁶⁹ selon le modèle de cerveau | `[ÉTABLI]` — Page 2007, éq. 2 à 4 |
| Borne de Page : demi-vie du vide de moins de 19 milliards d'années | `[ÉTABLI sous cette mesure]` — mesure globale par volume comobile, Page 2008 |
| Les BB dominent en dS éternel sous certaines mesures | `[ÉTABLI sous ces mesures]` |
| Pas de fluctuations en dS exact stationnaire | `[DÉBATTU]` — Boddy–Carroll–Pollack |
| Problème de la mesure non résolu | `[ÉTABLI]` — ouvert depuis vingt ans |
| Identité formelle mesure cosmologique ≡ classe de référence | Argument du dossier, structurellement exact |

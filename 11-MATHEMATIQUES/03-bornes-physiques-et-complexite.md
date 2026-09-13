# Bornes physiques et classes de complexité

> Objet : donner les inégalités exactes, et montrer précisément où les arguments
> « c'est trop cher » et « c'est impossible à simuler » cassent — dans les deux sens.

---

## 1. Les cinq bornes physiques du calcul

### 1.1 Landauer (1961) — coût de l'effacement
```
E_min  =  k_B T ln 2       par bit effacé
```
À 300 K : ≈ 2,87 × 10⁻²¹ J ≈ 0,018 eV. **Vérifié expérimentalement** (Bérut et al., 2012).

Portée : borne le calcul **irréversible**. Le calcul réversible n'y est pas soumis,
ce qui affaiblit tout argument de coût qui l'ignore.

### 1.2 Bekenstein (1981) — borne d'information
```
S  ≤  2π k_B R E / (ħ c)          →  en bits :   I  ≤  2π R E / (ħ c ln 2)
```
L'information contenue dans une région de rayon `R` et d'énergie `E` est bornée.
Une région finie ne peut pas contenir une information infinie.

### 1.3 Margolus–Levitin (1998) — vitesse maximale d'opération
```
ν  ≤  2E / h        ≈  6 × 10³³ opérations par seconde et par joule
```

### 1.4 Lloyd (2002) — capacité de l'univers observable
```
opérations depuis le Big Bang  ≤ ~10¹²⁰          bits stockables  ≤ ~10⁹⁰
```

### 1.5 Krauss–Starkman (2000) — la borne qui compte ici
En espace de de Sitter, l'horizon des événements borne l'information totale
manipulable par un observateur :
```
I_total  ≲  10¹²⁰ bits
```

**Conséquence sur l'argument de Bostrom, presque jamais tirée.**
`N̄` est borné par les ressources de l'univers hôte. Si l'hôte ressemble au nôtre :

```
N̄  ≤  10¹²⁰ / C_sim        et     κ = f_p · f_I · N̄ ,     f_sim = κ/(κ+1)
```

Une borne dure sur `N̄` **plafonne `κ`**, donc `f_sim`. Ce n'est pas une réfutation —
l'hôte peut avoir d'autres bornes — mais cela retire à la prémisse P2 son appui
intuitif (« ressources illimitées »), qui est toujours avancé sans chiffre.

---

## 2. Ce que « simulable » veut dire, formellement

La confusion la plus coûteuse du domaine tient en une distinction :

| Énoncé | Signification | Vrai pour la mécanique quantique ? |
|---|---|---|
| **Calculable** | Une machine de Turing peut le calculer | ✅ Oui |
| **Efficacement calculable** | En temps polynomial | ❌ Non, classiquement |

```
P  ⊆  BPP  ⊆  BQP  ⊆  PSPACE  ⊆  EXPTIME
```

**`BQP ⊆ PSPACE` est le point décisif.** Un ordinateur classique **peut** simuler la
mécanique quantique — surcoût exponentiel en temps, espace polynomial. La simulabilité
n'est pas en cause ; l'efficacité l'est.

### 2.1 Ce que fait réellement Ringel & Kovrizhin (2017)
Certains systèmes à réponses gravitationnelles quantifiées (conductance thermique de
Hall) ont un **problème de signe** qu'aucun changement de base local n'élimine.

Le problème de signe, écrit : en Monte-Carlo quantique on échantillonne des poids
`w(c)` sur des configurations. Quand les `w(c)` changent de signe :
```
⟨O⟩  =  ⟨O · sign⟩ / ⟨sign⟩          et     rapport signal/bruit  ∼  e^(−βN)
```
Le coût devient exponentiel.

**Établi :** ces systèmes ne sont pas simulables **efficacement** sur un calculateur
**classique**.
**Non établi :** qu'ils soient non simulables. Rien sur un substrat quantique, rien sur
une physique de niveau supérieur.

Le titre « des physiciens prouvent que nous ne vivons pas dans une simulation » confond
`∉ BPP` avec `non calculable`. C'est une erreur de classe de complexité, pas une nuance.

---

## 3. L'immunité aux arguments de coût, formalisée

Tout argument de la forme `Coût(simuler notre univers) > Ressources(hôte)` suppose que
`Ressources(hôte)` obéit à **nos** bornes.

```
L'argument requiert :   Physique(hôte)  =  Physique(nous)
L'hypothèse affirme :   Physique(hôte)  ≠  nécessairement  Physique(nous)
⇒ l'argument est inapplicable
```

C'est exactement la conclusion de **Vazza (2025)**, souvent mal citée : il montre qu'un
univers ayant **nos** propriétés ne peut pas simuler cet univers. Sa conclusion correcte
n'est donc pas « nous ne sommes pas simulés » mais « **si nous le sommes, l'hôte a
d'autres lois** ».

**Le prix de cette immunité est le statut scientifique.** Une hypothèse qu'aucun argument
physique interne ne peut atteindre n'est pas une hypothèse physique.

---

## 4. La réplique Edge & Brown (2026) et son coût formel

Edge & Brown répondent que Bostrom n'exige pas de simuler toute la physique, seulement
de maintenir une expérience subjective cohérente.

```
Vazza :        C_sim  =  C(univers complet, toutes échelles)
Bostrom/E&B :  C_sim  =  C(expériences subjectives)  +  C(cohérence observationnelle)
             =  n_obs × C(une conscience)  +  …
```

**`C(une conscience)` est inconnu** — pas difficile à estimer : inconnu, faute de théorie
de la conscience.

**Résultat formel :** la défense par le rendu paresseux déplace tout le coût dans un
terme non calculable. Elle rend l'hypothèse plus difficile à réfuter **et** non chiffrable.
Edge & Brown le concèdent en concluant que les critiques efficaces doivent porter sur le
coût de simuler l'expérience elle-même.

Même mouvement qu'au §3 : l'hypothèse survit en devenant moins prédictive.

---

## 5. Le test de Beane et al., formalisé

**Hypothèse restreinte :** univers simulé sur un **réseau cubique** de pas `b`, action de
Wilson **non améliorée** (`r = 1`), référentiel du réseau = référentiel du CMB.

**Dispersion sur réseau** (BDS éqs. 16-17, exactes pour des particules libres) :
```
boson :   sinh²(bE/2)  =  Σ_j sin²(bk_j/2) + (bm/2)²
          ⇒  E² = |k|² + m² − (b²/12)[ (|k|²+m²)² + Σ_j k_j⁴ ] + O(b⁴)
fermion de Wilson :  E = √(|k|²+m²) − r b m³ / (2√(|k|²+m²)) + O(b²)     (correction O(b), isotrope)
```
Le terme `Σ_j k_j⁴` est invariant sous le groupe octaédrique **mais pas sous SO(3)** —
opérateur effectif de dimension 6, `L^RV = C^RV (b²/6) Σ_μ ψ̄ γ_μ D_μ³ ψ`.

**Pourquoi ℓ = 4** (harmoniques cubiques, von der Lage–Bethe 1947) : en restreignant
`D^(ℓ)` de SO(3) à `O_h` (48 éléments), la représentation triviale `A₁g` apparaît pour
`ℓ = 0, 4, 6, 8, …` et **jamais** pour `ℓ = 1, 2, 3`. Le premier invariant cubique
non trivial est `x⁴ + y⁴ + z⁴` :
```
x⁴ + y⁴ + z⁴ − (3/5) r⁴   ∝   r⁴ [ Y₄⁰ + √(5/14) ( Y₄⁴ + Y₄⁻⁴ ) ]        =  K₄
D^(4) → A₁g ⊕ E_g ⊕ T₁g ⊕ T₂g       (9 = 1 + 2 + 3 + 3)
```

**Seuil GZK** (Greisen 1966 ; Zatsepin–Kuzmin 1966), `p + γ_CMB → Δ⁺ → N + π` :
```
s = m_p² + 2 E_p E_γ (1 − cos θ)
seuil photopion frontal :  E_th = m_π (m_p + m_π/2) / (2 E_γ)  ≈ 1,1 × 10²⁰ eV   (⟨E_γ⟩ ≈ 6,3 × 10⁻⁴ eV)
pic Δ frontal :            E_th^Δ = (m_Δ² − m_p²) / (4 E_γ)    ≈ 2,5 × 10²⁰ eV
suppression effective observée :  ≈ 5 × 10¹⁹ eV   (Auger : E_½ ≈ 2,3 × 10¹⁹ eV, PRL 125, 121106, 2020)
```
Sur réseau (BDS éq. 18, `|p| ≪ 1/b`) :
```
ω = (m_Δ² − m_N²)/(4|p|) · [ 1 + (√π b²|p|²/9)( Y₄⁰ + √(5/14)(Y₄⁴ + Y₄⁻⁴) ) ]  −  (m_Δ³ − m_N³)/(4|p|) · b r + …
```
modulation angulaire cubique `O(b²)` + décalage isotrope `O(b·r)`. Coupure du réseau
`E^max ~ 1/b` ; en l'égalant à la coupure GZK : **`b ≲ 10⁻¹² fm`, `b⁻¹ ≳ 10¹¹ GeV`**
(≈ 10⁸ fois la longueur de Planck).

**Ce que serait une signature positive :** non un dipôle (Auger en observe un, corrélé à
la structure locale — ce n'est pas le réseau), mais le motif `K₄` **avec la phase relative
exacte** entre `m = 0` et `m = ±4`, et l'alignement des trois axes dans le référentiel CMB.
**Personne n'a publié de recherche dédiée de ce motif dans les données Auger / TA**
(vérifié 2026) : les analyses standard ne sont pas paramétrées dans la base cubique.

**Caveats vérifiés :** (1) la composition Auger devient **lourde** au-dessus de
`~10^19,6 eV` (photodésintégration de noyaux) — la lecture « protons + résonance Δ » est
affaiblie ; (2) le transfert de la dispersion de particule fondamentale aux hadrons
composites est une **hypothèse** de BDS ; (3) le PDF de BDS affiche « ∼6 × 10²⁰ eV » pour
la coupure, probablement une coquille pour 10¹⁹ — la borne n'en dépend qu'au facteur 5 ;
(4) `p → p + γ` (Tcherenkov du vide) reste cinématiquement **interdit** sur réseau — le
réseau n'est pas contraint par Coleman–Glashow, point souvent mal cité ; (5) la symétrie
hypercubique **protège** les opérateurs de dimension 4 : la brisure ne commence qu'en
dimension 6, supprimée par `b²` — les bornes SME spectaculaires (§6bis) ne mordent
quasiment pas sur le réseau.

**Limite structurelle :** ne contraint que les discrétisations **régulières** ; un maillage
adaptatif y échappe. Illustration concrète de Rice ([02](02-computabilite-et-auto-simulation.md) §4).

## 6. Contraintes expérimentales sur la dispersion du vide — et le point qui change tout

Relation de dispersion modifiée, `n = 1` (linéaire) ou `n = 2` (quadratique) :
```
v(E) = c [ 1 − s_± ((n+1)/2) (E/E_QG,n)ⁿ ]
Δt = s_± ((1+n)/2) (E_hⁿ − E_lⁿ)/(H₀ E_QG,nⁿ) · ∫₀^z (1+z′)ⁿ dz′ / √(Ω_m(1+z′)³ + Ω_Λ)      (Jacob–Piran 2008)
```

| Source | Modèle | Borne (95 %) | Référence |
|---|---|---|---|
| GRB 090510, Fermi-LAT (z = 0,903, photon à 31 GeV) | déterministe, n = 1 | `E_QG,1 > 7,6 E_Pl ≈ 9,3 × 10¹⁹ GeV` | Vasileiou et al., PRD 87, 122001 (2013) — 3 méthodes : PairView, sharpness-maximization, vraisemblance |
| idem | déterministe, n = 2 | `E_QG,2 > 1,3 × 10¹¹ GeV` | idem |
| idem | **stochastique** (« mousse », `σ_v = c·E/E_fuzz`, sans retard moyen) | `E_fuzz > 3,4 × 10¹⁹ GeV = 2,8 E_Pl` | Vasileiou, Granot, Piran, Amelino-Camelia, Nat. Phys. 11, 344 (2015) |
| **GRB 221009A, LHAASO** (z = 0,151, photons jusqu'à ~13 TeV) | n = 1 | **`E_QG,1 > 10 E_Pl`** | Cao et al., PRL 133, 071501 (2024) ; Piran–Ofengeim, PRD 109, L081501 |
| idem | n = 2 | **`E_QG,2 > 6 × 10⁻⁸ E_Pl ≈ 7 × 10¹¹ GeV`** | idem |

**Le point qui change tout, et que la version initiale de ce fichier manquait :**
la dispersion sur réseau est en `(bE)²` — c'est le cas **quadratique, n = 2**. Or la
meilleure borne `n = 2` (LHAASO 2024) n'atteint que `~7 × 10¹¹ GeV`, soit **à peine
au-dessus de la borne GZK de Beane et ~7 ordres de grandeur SOUS l'échelle de Planck**.

```
« Lorentz est vérifiée au-delà de l'échelle de Planck »   ⇒   vrai pour n = 1 seulement
l'espace des scénarios n = 2 — précisément celui du réseau — reste largement OUVERT
```
De plus, aucune de ces analyses ne teste la **modulation directionnelle** cubique (elles
supposent une dispersion isotrope). La phrase « Planck = pixel est exclu au-delà de
Planck » est donc exacte contre les modèles **linéaires** naïfs, et sans effet sur le
réseau cubique.

### 6bis. Contraintes SME (Standard Model Extension) — pour mémoire
Colladay–Kostelecký (1997-98) ; tables Kostelecký–Russell (RMP 83, 11, 2011 ; édition
annuelle 2025). Meilleures bornes : `|k_AF| ≲ 10⁻⁴³ GeV` (biréfringence CMB), `(k_F)`
biréfringent `≲ 10⁻³⁷-10⁻³⁸`, `b̃_e ≲ 10⁻³¹ GeV`, `b̃_n ≲ 10⁻³³-10⁻³⁴ GeV`. Ces bornes
excluent depuis longtemps tout substrat engendrant des opérateurs de dimension 3-5 à
direction privilégiée (type champ de fond `u_μ`). **Elles ne touchent pas le réseau
cubique**, dont la brisure commence en dimension 6.

### 6ter. Mise à jour 2025 — le muon g−2 : l'observable de Beane s'est évaporée
BDS (2012) attribuaient l'écart expérience-théorie de l'époque (~3,6σ) à un terme de
réseau `O(b)` via l'opérateur de Pauli :
```
g^(μ)(b)/2 = g^(μ)(0)/2 + (m_μ − m_e) · b · C_p + O(α²b)        ⇒   b⁻¹ = (3,6 ± 1,1) × 10⁷ GeV   (BDS éq. 10)
```
**État 2025, vérifié :**
```
Fermilab, résultat final (2 juin 2025, 127 ppb) :   a_μ(FNAL) = 116 592 070,5 (14,8) × 10⁻¹¹
moyenne mondiale (avec BNL) :                        a_μ(exp)  = 116 592 071,5 (14,5) × 10⁻¹¹
Theory Initiative WP2025 (QCD sur réseau pour HVP) : a_μ(SM)   = 116 592 033 (62) × 10⁻¹¹

Δa_μ = +38,5 ± 63,7 × 10⁻¹¹      ⇒     ≈ 0,6 σ          (contre 4,2σ en 2021 et 5,1σ en 2023 vs WP2020)
```
**L'anomalie a disparu.** La tension s'est déplacée : entre les données `e⁺e⁻ → hadrons`
(KLOE/BaBar vs CMD-3, ~3σ) et le réseau — pas entre expérience et théorie.

Réinterprétation (même logique que BDS, chiffres 2025 — **dérivation du dossier**) :
`|Δa_μ| < 1,6 × 10⁻⁹` (95 %) ⇒ `b < |Δa_μ|/m_μ ≈ 1,5 × 10⁻⁸ GeV⁻¹` ⇒ **`b⁻¹ ≳ 6 × 10⁷ GeV`**,
toujours 3-4 ordres de grandeur sous la borne GZK.

**Ironie à consigner :** c'est la **QCD sur réseau** (BMW 2021, puis consensus WP2025) qui
a tué l'anomalie. L'outil du « simulateur » hypothétique est celui qui a fermé la fenêtre.
Cas d'école de prudence : un écart attribuable à un artefact de discrétisation s'est
résorbé quand la théorie s'est améliorée.

## 7. Tableau de synthèse

| Argument | Forme formelle | Verdict |
|---|---|---|
| « Trop cher à simuler » | `C_sim > R_hôte`, `R_hôte` évalué avec nos lois | ❌ Inapplicable |
| « Non simulable » (Ringel) | `∉ BPP` ⇒ non calculable | ❌ `BQP ⊆ PSPACE` |
| « Une simulation est plus pauvre » | Confond puissance et ressources | ❌ Faux (universalité, Wolpert) |
| « Planck = pixel » | Granularité mesurée | ❌ Faux ; modèles linéaires exclus > 10 E_Pl ; **le cas quadratique (réseau) reste ouvert ~7 ordres sous Planck** |
| « Anisotropie de réseau » | Brisure `SO(3) → O_h`, motif `K₄` (ℓ=4) | ✅ **Testable ; la recherche dédiée du motif cubique n'a jamais été faite** |
| « g−2 comme signal de réseau » | terme `O(b)` de Pauli | ❌ **Anomalie disparue en 2025** ; borne `b⁻¹ ≳ 6 × 10⁷ GeV` |
| « `N̄` illimité » | Ignore Krauss–Starkman | ⚠️ Plafonné si l'hôte nous ressemble |
| « Rendu paresseux » | Coût déplacé dans `C(conscience)`, inconnu | ⚠️ Non réfutable, non chiffrable |

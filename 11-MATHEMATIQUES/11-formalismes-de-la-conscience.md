# Formalismes de la conscience — Φ, PCI, et le pivot Findlay 2024

> La seule théorie formelle qui livre un verdict **négatif net** sur la conscience simulée
> est l'IIT. Ce fichier donne ses mathématiques exactes, le résultat calculatoire de 2024
> qui en tire la conséquence anti-Bostrom, et l'état empirique après COGITATE.
> Tout verdict ici est **conditionnel** à un antécédent en litige.

---

## 1. IIT 4.0 — l'information intrinsèque

**Albantakis, Barbosa, Findlay, Grasso, Haun, Marshall, Mayner, … Tononi, *Integrated
information theory (IIT) 4.0*, PLOS Comput. Biol. 19(10): e1011465 (2023).**

Univers `U` d'unités discrètes, matrice de transition donnée, système candidat `S ⊆ U`
dans l'état `s`. Six propriétés formalisées : existence, intrinsicalité, information,
intégration, exclusion, composition.

**Information intrinsèque** d'un état `s` sur un état d'effet `z′` (resp. de cause `c′`) :
```
ii_e(s, z′)  =  π_e(z′|s) · log₂( π_e(z′|s) / π_e(z′) )        [Eq. 5]
ii_c(s, c′)  =  π_c(s|c′) · log₂( π_c(s|c′) / π_c(s) )         [Eq. 7]

s′_e = argmax_{z′} ii_e(s, z′) ;    s′_c = argmax_{c′} ii_c(s, c′)      (postulat d'information)
```
`π` = répertoires cause/effet obtenus par **intervention** (opérateur `do`, perturbation
uniforme), pas par observation. La mesure sous-jacente est la **différence intrinsèque** :
```
ID(p, q)  =  p · log₂(p/q)           — ponctuelle (état spécifique), PAS une divergence KL moyenne
```

**Théorème d'unicité** (Barbosa, Marshall, Streipert, Albantakis, Tononi, Sci. Rep. 10,
18803, 2020) : sous trois axiomes — causalité, intrinsicalité, spécificité — `ID` est
l'unique mesure admissible à constante près. L'objection « Φ est une mesure ad hoc parmi
mille » tombe au niveau de la mesure élémentaire — **conditionnellement aux axiomes**,
dont un fonctionnaliste rejette précisément l'intrinsicalité.

## 2. Intégration, partition minimale, complexe, structure Φ

Pour une partition `θ` (connexions coupées remplacées par du bruit) :
```
φ_e(θ) = ii_e(s, s′_e) − ii_e^θ(s, s′_e)                              [Eq. 19]
φ_c(θ) = ii_c(s, s′_c) − ii_c^θ(s, s′_c)                              [Eq. 20]
φ_s(θ) = min( φ_c(θ), φ_e(θ) )                                        [Eq. 21]
φ_s    = φ_s(θ′),   θ′ = partition minimale (MIP)                     [Eq. 22]

Complexe (exclusion) :  φ_s(S*) ≥ φ_s(S)  ∀ S chevauchant S*           [Eq. 26]
Structure Φ (composition) :  Φ = Σ_{distinctions} φ_d + Σ_{relations} φ_r
```
Selon l'IIT : l'identité de l'expérience = la Φ-structure ; sa quantité = `Φ` ; le
substrat = le complexe. Explosion combinatoire : `2ⁿ − 1` candidats, jusqu'à `2ⁿ − 1`
distinctions, `~2^(2ⁿ)` relations.

## 3. Le théorème des systèmes feed-forward
```
Graphe causal G(S) non fortement connexe   ⇒   φ_s(S) = 0
```
Il existe une coupure unidirectionnelle `θ_uni` avec `ii^θ = ii`, donc `min_θ φ_s(θ) = 0`.
Tout DAG — tout réseau strictement feed-forward, **transformer en inférence, CNN** — a
exactement `φ_s = 0`, quelles que soient ses performances (IIT 3.0, Oizumi–Albantakis–
Tononi 2014 ; explicité en 4.0).

**Le zombie parfait est mathématiquement licite** dans ce cadre : équivalence
fonctionnelle sans contrainte sur l'expérience. Pour un fonctionnaliste, c'est une
*reductio* de l'IIT — l'**unfolding argument** (Doerig et al., Conscious. Cogn. 72, 2019).
Note : « feed-forward » s'évalue au niveau du **substrat physique**, pas du diagramme
logiciel — un CPU a des boucles physiques ; d'où la nécessité de §5.

## 4. Intractabilité — ce qui est prouvé et ce qui ne l'est pas

```
Partitions à explorer : au moins B_n (nombres de Bell), B_n ~ (n / ln n)ⁿ ;  B₁₀ = 115 975 ;  B₂₀ ≈ 5,2 × 10¹³
Candidats : 2ⁿ − 1 ;  états de la TPM : 2ⁿ
Calcul exact praticable (PyPhi, Mayner et al. 2018) :  n ≲ 10-12 unités
Cerveau : 8,6 × 10¹⁰ neurones  ⇒  hors de portée par des dizaines d'ordres de grandeur
```
**Résultat positif exact** (Kitazono, Kanai, Oizumi, Entropy 20, 173, 2018) : si la
fonction de coût de partition est **submodulaire**
(`f(A∪{x}) − f(A) ≥ f(B∪{x}) − f(B)` pour `A ⊆ B`), la MIP se trouve en `O(n³)`
(Queyranne). L'IIT « 1.0 » (information mutuelle) l'est ; **3.0 et 4.0 ne le sont pas**.
Heuristiques pour des centaines de nœuds : Toker & Sommer (PLOS Comput. Biol. 2019).

⚠️ **Aucune preuve publiée et évaluée de NP-dureté pour le Φ officiel d'IIT 3.0/4.0 n'a
été trouvée** (vérification août 2026). L'affirmation « Φ est NP-dur », fréquente dans la
littérature secondaire, n'est pas adossée à un théorème pour cette définition. La dureté
documentée = croissance super-exponentielle pratique + non-submodularité. **Ne pas citer
un théorème de NP-dureté dans ce dossier.**

Conséquence : `Φ` n'est jamais mesuré exactement sur un cerveau ni un grand ordinateur.
Tout verdict empirique « tel système a un grand/petit Φ » est un argument **structurel**
(connexité, architecture), pas un calcul. Cela affaiblit la testabilité — cœur de
l'accusation de pseudoscience — sans rendre `Φ` mal défini (il est parfaitement défini,
juste intractable). « Incalculable donc faux » est un non-sequitur.

## 5. ★ Le pivot : Findlay et al. 2024 — le simulateur n'a pas la Φ-structure du simulé

**Findlay, Marshall, Albantakis, David, Mayner, Koch, Tononi, *Dissociating Artificial
Intelligence from Artificial Consciousness*, arXiv:2412.04571 (v1 déc. 2024, v2 mars 2025).**
Statut : **préprint**, toujours sans publication en revue au 25 octobre 2026 — à
signaler comme tel.

Construction explicite : **(a)** un petit système récurrent de portes booléennes, dont on
calcule la Φ-structure complète ; **(b)** un ordinateur simplifié de type von Neumann
(programme enregistré, horloge, mémoire, unité logique) qui simule **(a)** avec
équivalence fonctionnelle exacte, état par état. Le même formalisme appliqué à la
description **physique** du simulateur donne :
```
Équivalence fonctionnelle :   ∀t,  état_simulé(t) = décodage( état_machine(t) )
Non-équivalence phénoménale :  Φ-structure(machine) ≠ Φ-structure(système)
                               complexes(machine) = petits agrégats (horloge, cellules),
                               sans rapport de frontières, de composition ni de quantité
```
**L'énoncé exact recherché par le dossier :**

> SI le critère de conscience est la Φ-structure **intrinsèque du substrat physique**,
> ALORS aucune simulation logicielle sur architecture de von Neumann n'est consciente du
> contenu simulé — la structure causale intrinsèque est celle du CPU, pas du réseau simulé.

**Conséquence sur Bostrom, conditionnellement à l'IIT :** la prémisse P1 de
substrat-indépendance est **fausse** pour ce type de matériel ; les « simulations
d'ancêtres » sur machines von Neumann sont des zombies ; la classe des esprits simulés
est **vide** ; `f_sim` est sans objet ; le trilemme s'effondre.

**Ce que cela n'implique pas :** (1) que nous ne soyons pas simulés — un substrat dont
la dynamique physique **instancie** les structures causales requises (simulation
neuromorphique récurrente, « analogique ») n'est pas exclu ; (2) que l'IA consciente
soit impossible — les auteurs le disent : c'est l'architecture, pas l'artificialité ;
(3) rien du tout si l'on rejette l'intrinsicalité. Extrapolation des systèmes-jouets aux
CPU réels (milliards de transistors) : argument de structure (fragmentation par l'horloge
et les bus), pas un calcul de `Φ` d'un vrai processeur.

## 6. L'état empirique après COGITATE (Nature 640, 133-142, 30 avril 2025)

Ce qui a été testé, précisément, et ce qui a échoué :

| Prédiction pré-enregistrée | Résultat |
|---|---|
| IIT — décodabilité **soutenue** du contenu conscient en cortex postérieur pendant tout le percept | **Partiellement** soutenue (identité du stimulus oui ; pas toutes les dimensions, ex. orientation) |
| IIT — **synchronisation soutenue** à courte portée dans le cortex postérieur (connectivité gamma), reflétant la durée du percept | **Non soutenue** : connectivité transitoire |
| GNWT — « ignition » préfrontale à l'onset **et** à l'offset | **Non soutenue** à l'offset ; représentation préfrontale limitée |

`n = 256`, durées 0,5/1,0/1,5 s, IRMf + MEG + iEEG, consortium neutre.

**Point capital :** le postulat fragilisé n'est **pas** le formalisme de `Φ` (incalculable
sur données humaines, donc non testé) mais la **prédiction-pont** « substrat de
l'expérience visuelle = hot zone postérieure maintenue par interactions soutenues ».
Les proposants contestent que la synchronisation gamma opérationnalise fidèlement `φ`
(problème de Duhem-Quine classique). Aucune des deux théories n'est réfutée ; les deux
sont écornées.

**Querelle de statut :** lettre PsyArXiv « IIT as pseudoscience », 124 signataires
(sept. 2023) → échange publié dans **Nature Neuroscience 28 (avril 2025)** :
*What makes a theory of consciousness unscientific?* (Fleming, Michel, Lau et al.,
DOI 10.1038/s41593-025-01881-x) vs Tononi et al., *Consciousness or pseudo-consciousness?
A clash of two paradigms* (10.1038/s41593-025-01880-y). Objection mathématique précise
des critiques : **si tester l'identité expérience ↔ Φ-structure exige de calculer la
Φ-structure, et si elle est incalculable pour tout système réel, alors l'identité est non
testable en principe.** Réponse : la démarche axiomatique produit des prédictions testées
(PCI, hot zone), et l'objection se retourne contre toute théorie de la conscience.

## 7. L'alternative opérationnelle : PCI (Massimini et coll.)

**Casali et al., Sci. Transl. Med. 5, 198ra105 (2013).** Complexité spatiotemporelle de
la réponse corticale à une perturbation TMS :
```
SS(x,t) ∈ {0,1}      matrice source × temps des activations TMS-évoquées significatives
c_L(SS)              nombre de motifs distincts au sens Lempel-Ziv (LZ76)
H(SS) = −p log₂ p − (1−p) log₂(1−p),   p = fraction d'entrées à 1

PCI  =  c_L(SS) / [ L · H(SS) / log₂ L ]          ≈ 1 bruit aléatoire,  → 0 réponse stéréotypée
```
Seuil clinique validé (Casarotto et al., Ann. Neurol. 80, 718, 2016) : **`PCI* = 0,31`**,
calibré sur 150 sujets à état connu (éveil, rêve, kétamine vs NREM, propofol, xénon).
Éveil ≈ 0,44-0,67 ; NREM/anesthésie ≲ 0,31. Patients minimalement conscients détectés à
~94,7 % de sensibilité ; **~1 patient « végétatif » sur 5** au-dessus du seuil — conscience
cachée. Variante rapide : PCIst (Comolatti et al., Brain Stim. 2019).

**Pourquoi PCI compte ici, et diverge frontalement de Φ :**
- C'est un dérivé « inspiré d'IIT » **mesurable, falsifiable, cliniquement validé** —
  le meilleur contre-argument factuel à l'accusation de pseudoscience intégrale.
- Mais PCI mesure la **compressibilité** d'une réponse causale, pas l'information intégrée
  intrinsèque. Sa validation ne valide **pas** l'identité expérience = Φ-structure.
- Et PCI est **substrat-indifférent** : rien n'empêche un système simulé de produire
  des réponses perturbationnelles à haute complexité LZ. **Sur la question du dossier,
  les deux critères disent l'inverse l'un de l'autre.** `Φ` intrinsèque ferme la porte
  aux simulations conscientes ; PCI la rouvre.

## 8. Bilan

| Énoncé | Statut |
|---|---|
| Formalisme IIT 4.0 (`ii`, `φ_s`, MIP, complexe, Φ-structure) | `[ÉTABLI]` comme mathématiques |
| Unicité de `ID = p log(p/q)` sous 3 axiomes | `[ÉTABLI]`, conditionnel aux axiomes |
| Feed-forward ⇒ `φ_s = 0` | `[ÉTABLI]` dans le formalisme |
| NP-dureté de Φ (3.0/4.0) | ❌ **Non prouvée** — ne pas citer |
| Findlay 2024 : simulateur von Neumann ≠ Φ-structure du simulé | `[ÉTABLI]` par calcul exact sur systèmes-jouets ; préprint ; extrapolation structurelle |
| **Si Φ intrinsèque, alors P1 de Bostrom est fausse** | `[ÉTABLI]` comme conditionnel — **antécédent en litige** |
| COGITATE 2025 | prédiction-pont de l'IIT non soutenue ; GNWT aussi écornée |
| PCI* = 0,31 | `[ÉTABLI]` cliniquement ; substrat-indifférent |

**Ce que le dossier doit écrire, et rien de plus :** *l'unique théorie formelle qui
ferme la porte aux simulations conscientes le fait par un calcul exact sur des systèmes
minuscules, sous un postulat d'intrinsicalité que la moitié du champ rejette, et dont
la prédiction-pont vient d'échouer au meilleur test jamais conduit.* Le verrou n'est pas
levé ; il est mieux dessiné.

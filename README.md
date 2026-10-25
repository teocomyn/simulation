# Dossier Simulation

Dossier de référence sur **l'hypothèse de simulation** et, plus largement, sur la question
du niveau fondamental de la réalité.

Constitué le 29 août 2026. Le dossier part d'un **corpus de départ**, l'ensemble des
documents et échanges qui ont lancé le travail : analyse de la vidéo « La fin de
l'univers », discussion sur les niveaux d'ontologie, question de l'univers sans
souffrance, argument du calcul paresseux, projet SIMULATION PROTOCOL, interview de
Loïc Hecht sur Silicon Carne, objection probabiliste finale, fact-check de la vidéo sur
le biocomputing et fil de commentaires qui l'a suivie. Chaque fois que les textes
parlent du « corpus de départ », c'est de cet ensemble qu'il s'agit : le dossier
l'intègre, le vérifie affirmation par affirmation et le corrige.

---

## La thèse du dossier, en un paragraphe

L'hypothèse de simulation n'est pas une question, c'en est **quatre**, indépendantes,
avec des statuts épistémiques opposés — et presque toute la littérature grand public
les confond. Une fois séparées, l'argument de Bostrom apparaît pour ce qu'il est :
un calcul de probabilité **conditionnelle** rigoureux, dont aucune des conditions n'est
établie. Ce n'est pas une réfutation. C'est un déplacement du problème, du registre
« probablement vrai » vers le registre « indéterminé, et voici exactement pourquoi ».

Formulation retenue dans tout le dossier :

> ❌ « Sommes-nous dans une simulation ? »
> ✅ « Quel est le niveau le plus fondamental de la réalité, et cette question a-t-elle une réponse ? »

---

## Site

En ligne : **https://simulation42.vercel.app**. Le site rend le corpus tel quel, sans
résumé substitué : 38 textes, 14 sections, recherche plein texte, et 10 instruments
(trilemme, H1–H8, BF = 1, décohérence, 51 fact-checks, Règle 0…).

En local :

```bash
cd web && npm install && npm run dev
```

Chaque modification d'un texte se publie en poussant sur `main`. Avant de commiter un
texte modifié, lancez `npm run dates` dans `web/` pour mettre à jour sa date affichée.

---

## Comment lire ce dossier

| Vous voulez… | Lisez |
|---|---|
| La position d'ensemble et les verdicts | [00-SYNTHESE.md](00-SYNTHESE.md) |
| L'argument de Bostrom et sa faille | [01-ARGUMENT/](01-ARGUMENT/) |
| Ce que la physique dit et ne dit pas | [02-PHYSIQUE/](02-PHYSIQUE/) |
| Le nœud réel : la conscience | [03-CONSCIENCE/](03-CONSCIENCE/) |
| La carte des ontologies possibles | [04-ONTOLOGIE/](04-ONTOLOGIE/) |
| Les échelles cosmiques et la fin | [05-COSMOLOGIE/](05-COSMOLOGIE/) |
| Souffrance, sens, conséquences | [06-ETHIQUE/](06-ETHIQUE/) |
| Pourquoi ce milieu, pourquoi maintenant | [07-SOCIOLOGIE/](07-SOCIOLOGIE/) |
| Comment en faire de la recherche | [08-PROTOCOLE/](08-PROTOCOLE/) |
| Sources et fact-check du corpus | [09-SOURCES/](09-SOURCES/) |
| Ce que la recherche 2025-2026 a changé | [10-ACTUALISATION/](10-ACTUALISATION/01-etat-de-l-art-2026.md) |
| Les résultats formels, équation par équation | [11-MATHEMATIQUES/](11-MATHEMATIQUES/), en commençant par [l'échelle de profondeur](11-MATHEMATIQUES/12-les-equations-les-plus-profondes.md) |
| Le seul terrain expérimental du verrou | [12-BIOCOMPUTING/](12-BIOCOMPUTING/) |
| Ce que le public a corrigé | [13-RECEPTION/](13-RECEPTION/01-fil-de-commentaires.md) |

## Arborescence

```
SIMULATIONS/
├── 00-SYNTHESE.md
├── 01-ARGUMENT/          L'argument de Bostrom et sa faille
├── 02-PHYSIQUE/          Ce que la physique dit, et les 12 arguments populaires testés
├── 03-CONSCIENCE/        Le verrou réel — problème difficile, effondrement, réalisme
├── 04-ONTOLOGIE/         Les 8 hypothèses de niveau fondamental
├── 05-COSMOLOGIE/        Les cinq ères, Boltzmann, fact-check du doc « fin de l'univers »
├── 06-ETHIQUE/           Univers sans souffrance, et le jour d'après
├── 07-SOCIOLOGIE/        Pourquoi la Silicon Valley, le livre de Loïc Hecht
├── 08-PROTOCOLE/         Programme de recherche durci, 14 pièges nommés
├── 09-SOURCES/           Bibliographie et fact-check du corpus (51 affirmations)
│
├── 10-ACTUALISATION/     ★ Balayage du 29 août 2026 — état de l'art
│   └── 01-etat-de-l-art-2026.md
│
├── 11-MATHEMATIQUES/     ★ Le formalisme — colonne vertébrale du dossier
│   ├── 01-formalisme-anthropique.md            SSA/SIA, classe de référence, la faille écrite
│   ├── 02-computabilite-et-auto-simulation.md  Wolpert 2025 : Kleene, Rice, auto-simulation
│   ├── 03-bornes-physiques-et-complexite.md    Landauer→Lloyd, BQP⊆PSPACE, K₄, GZK, g−2 2025, LHAASO
│   ├── 04-sous-determination.md                ★★ Le théorème central : BF = 1
│   ├── 05-perception-fitness-beats-truth.md    Hoffman & Prakash, théorème FBT
│   ├── 06-preuves-interactives-et-nonlocalite.md  IP=PSPACE, MIP*=RE (et son effondrement sous bruit), Bell/Tsirelson/KS/PBR
│   ├── 07-probabilite-algorithmique.md         Solomonoff, Chaitin, Leike–Hutter, Müller (dissolution)
│   ├── 08-holographie-et-emergence.md          Bekenstein→Bousso→RT→FLM→QES→îlots, codes, magie, Λ>0
│   ├── 09-indecidabilite-physique.md           Löb, Chaitin, Cubitt (+ instabilité 2026), Rice, Wolpert
│   ├── 10-decoherence-et-boltzmann-quantitatifs.md  GKLS, Joos–Zeh (les tables), darwinisme, T_dS, Γ_BB, mesure
│   ├── 11-formalismes-de-la-conscience.md      IIT 4.0 (Φ exact), Findlay 2024, COGITATE, PCI
│   └── 12-les-equations-les-plus-profondes.md  ★★★ L'échelle de profondeur — synthèse
│
├── 12-BIOCOMPUTING/      ★ Le seul terrain expérimental du verrou
│   ├── 01-dishbrain-cl1.md                    DishBrain, CL1, Doom, ablations, consentement
│   └── 02-energie-libre-et-inference-active.md Friston : le formalisme derrière le protocole
│
└── 13-RECEPTION/         ★ Le fil de commentaires comme second fact-check
    └── 01-fil-de-commentaires.md
```

## Les quatre résultats à retenir

**1. `BF = 1`.** Presque tous les arguments du domaine ont un facteur de Bayes égal à 1 :
ils sont également probables que l'hypothèse soit vraie ou fausse. Ils ne sont pas faux,
ils sont **informationnellement vides**. Un seul observable de toute la littérature y
échappe (l'anisotropie `ℓ = 4` des rayons cosmiques UHE), et il est négatif.
→ [11-MATHEMATIQUES/04](11-MATHEMATIQUES/04-sous-determination.md)

**2. Trois débats, un seul théorème.** « Sommes-nous simulés ? », « le tissu neuronal
souffre-t-il ? », « le modèle de langage ressent-il ? » ont **exactement la même
structure formelle**, et la même sous-détermination. Dans les trois cas, exiger plus de
données est une erreur de stratégie.

**3. Aucune observation ne peut fixer la probabilité — et c'est un théorème.** Le seul
prior principiel (Solomonoff–Levin) est indécis à constante près, la constante peut
dépasser l'écart (Leike–Hutter 2015), et `K` est incomputable. Le problème de la classe de
référence de Bostrom est le problème de la mesure cosmologique des cerveaux de Boltzmann —
même objet, traité comme pathologie d'un côté et comme résultat de l'autre.
→ [11-MATHEMATIQUES/12](11-MATHEMATIQUES/12-les-equations-les-plus-profondes.md)

**4. La hiérarchie des niveaux n'existe peut-être pas.** Wolpert (décembre 2025) démontre
qu'aucune dégradation n'est requise entre simulateur et simulé, que la simulation mutuelle
est possible, et qu'un univers peut se simuler lui-même. L'objection la plus répandue
(« une simulation est plus pauvre que ce qu'elle simule ») est fausse.
→ [11-MATHEMATIQUES/02](11-MATHEMATIQUES/02-computabilite-et-auto-simulation.md)

## Règles appliquées dans tout le dossier

1. **Séparer science, philosophie et spéculation.** Chaque affirmation porte un statut.
   Les quatre familles de base sont `[ÉTABLI]`, `[DÉBATTU]`, `[SPÉCULATIF]` et
   `[NON SCIENTIFIQUE]`. S'y ajoutent des statuts de méthode ou de travail :
   `[TESTABLE]`, `[À VÉRIFIER]`, `[DÉRIVÉ]`, `[MÉTHODE VALIDE]`, `[PROBLÈME OUVERT]`,
   `[PHILOSOPHIQUE]`, `[PRÉDICTION PROBABLEMENT FAUSSE]`. Un statut peut porter une
   précision après une virgule, par exemple `[ÉTABLI en AdS/CFT et modèles-jouets]` :
   la précision fait partie du statut et ne doit pas être retirée.
2. **Nommer les inférences invalides.** Une grande partie du domaine repose sur des
   glissements logiques répétés. Ils sont listés et nommés en
   [02-PHYSIQUE/04](02-PHYSIQUE/04-fact-check-arguments-populaires.md).
3. **Vérifier en source primaire.** Recherches menées le 29 août 2026. Toute source
   secondaire est identifiée comme telle.
4. **Ne pas conclure à la place des données.** Le dossier ne tranche pas la question,
   il établit ce qu'il faudrait pour la trancher.

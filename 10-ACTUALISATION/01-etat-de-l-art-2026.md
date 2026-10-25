# État de l'art — balayage du 29 août 2026

> **Avertissement de méthode.** Mon entraînement s'arrête en **mai 2026**. Ce fichier
> résulte d'un balayage web mené le 29 août 2026 pour couvrir la période récente
> et combler les angles morts. Il n'est **pas exhaustif** : les limites sont listées
> au §9. Chaque élément porte sa source et sa date.

---

## 1. Le développement le plus important : Wolpert (2025)

**David H. Wolpert (Santa Fe Institute), *What computer science has to say about the
simulation hypothesis*, Journal of Physics: Complexity 6(4), 045010, 1er décembre 2025.**
Préprint arXiv:2404.16050, sous le titre *Implications of computer science theory for the
simulation hypothesis*, v5 révisée le 19 mars 2026 : 47 pages de texte, 5 de références et
13 d'annexes.

C'est **le premier cadre mathématiquement précis** de ce que signifie « un univers en
simule un autre ». Exactement ce que le reste du dossier signalait comme manquant.

### Appareil formel
- Thèse de Church-Turing **physique** (couplage informatique/physique)
- **Deuxième théorème de récursion de Kleene**
- **Théorème de Rice** pour les résultats d'impossibilité
- Chiffrement totalement homomorphe (conséquences si la simulation est chiffrée)
- Structures de graphes d'univers simulants

### Les trois résultats qui changent la discussion

| Résultat | Ce qu'il détruit |
|---|---|
| **Simulation mutuelle possible.** Si A simule B, rien n'empêche B de simuler A. Les deux deviennent **mathématiquement indiscernables** | La hiérarchie « niveau supérieur / niveau inférieur ». Il n'y a pas nécessairement de haut et de bas |
| **Aucune dégradation requise.** Une simulation n'est pas forcément computationnellement plus faible que son hôte. Les chaînes infinies restent **mathématiquement cohérentes** | L'argument intuitif « chaque niveau est plus pauvre, donc la pile a un fond » |
| **Boucles fermées possibles.** Des univers peuvent former un cycle où chacun simule les autres ; plusieurs versions de « vous » peuvent exister tout en étant mathématiquement identiques | L'unicité de l'instance, et l'idée d'un original |

Et, par Kleene : **nous pourrions être dans une simulation exécutée par nous-mêmes** —
deux instances identiques et également réelles.

### Portée exacte
Wolpert établit des **possibilités et impossibilités logiques** sous la thèse de
Church-Turing physique. Il n'apporte **aucune évidence empirique** que nous soyons
simulés. Les résultats débordent largement le sujet et relèvent de la théorie du calcul
en général.

### Effet sur le dossier
- **Renforce fortement H4** (pas de niveau fondamental) : la régression infinie n'est
  plus seulement « sans contradiction logique », elle est **formellement traitée**.
- **Réhabilite H3** (emboîtement) : l'objection de dégradation tombe.
- **Confirme la reformulation ontologique** retenue par le dossier : la question
  « quel niveau ? » est peut-être mal posée s'il n'y a pas d'ordre.
- **Ne touche pas** à l'objection probabiliste : Wolpert formalise la *structure*,
  pas la *mesure* sur les observateurs.

Voir [04-ONTOLOGIE/01](../04-ONTOLOGIE/01-carte-des-niveaux.md) et
[04-ONTOLOGIE/02](../04-ONTOLOGIE/02-information-mathematiques-regression.md).

---

## 2. La controverse Vazza ↔ Bostrom ↔ Edge & Brown (2025-2026)

### 2.1 Vazza (2025) — l'argument par les ressources
**F. Vazza, *Astrophysical constraints on the simulation hypothesis for this Universe:
why it is (nearly) impossible that we live in a simulation*, arXiv:2504.08461,
11 avril 2025, Frontiers in Physics.**

Trois scénarios examinés : simuler l'univers visible entier, simuler la Terre seule,
simuler une Terre basse résolution calée sur les données de neutrinos de haute énergie.
Conclusion : les besoins en énergie ou en puissance de toute version de l'hypothèse
sont « entièrement incompatibles avec la physique, ou (littéralement) astronomiquement
grands ».

Point clé : **un univers ayant nos propriétés physiques ne peut pas produire une
simulation de cet univers**, quel que soit le progrès technique. Seuls des univers aux
lois différentes le pourraient.

### 2.2 Edge & Brown (2026) — la réplique
**Eliott Edge et Chad Ashton Brown, commentaire, Frontiers in Physics, 21 avril 2026.**

Ils **critiquent** Vazza : il attaque une version plus forte que celle de Bostrom.
Bostrom n'exige pas de calculer « toute la physique à toutes les échelles », seulement
de maintenir une **expérience subjective cohérente** — « seulement ce qui est requis
pour que les humains simulés ne remarquent aucune irrégularité ».

Vazza vise une simulation « monde partagé, niveau planétaire », plus large que les
engagements minimaux de Bostrom. La simulation peut omettre les détails astronomiques
lointains et les structures microscopiques sans effet sur l'observation.

### 2.3 Bostrom (FAQ v2.0, 2025)
Bostrom a mis à jour sa FAQ en 2025 (19 questions). Il y répond explicitement que les
critiques fondées sur l'hypothèse d'une simulation exhaustive — **Vazza (2025) est cité
nommément** — « passent à côté ».

### 2.4 Ce que cela change pour le dossier

**C'est une correction importante du traitement initial du dossier.** Le dossier classait l'argument
du « calcul paresseux » (A7) comme « cohérent en informatique, sans support empirique ».
Il faut nuancer : cet argument est désormais **au cœur d'un échange publié**, et c'est
la ligne de défense officielle de Bostrom.

Mais l'objection de fond du dossier tient, et elle est même renforcée :

> L'économie porte sur le décor, **pas sur les esprits**. Ce qui coûte dans une
> simulation d'ancêtres, ce sont les consciences — et elles doivent être calculées
> intégralement, par hypothèse.

Edge & Brown le concèdent implicitement en concluant que les critiques efficaces doivent
porter sur la question de savoir si **simuler l'expérience elle-même** dépasse la
faisabilité computationnelle. C'est exactement le bon terrain, et personne ne l'a
encore chiffré — parce que personne ne sait ce que coûte une conscience.

**Note :** cet échange illustre parfaitement le §3 de
[02-PHYSIQUE/03](../02-PHYSIQUE/03-arguments-contre.md) — l'hypothèse est immunisée
contre les arguments de coût, au prix de son statut scientifique. Vazza attaque,
Bostrom réduit le périmètre, et l'hypothèse survit en devenant moins prédictive.

---

## 3. Conscience : le résultat le plus important depuis dix ans

### 3.1 COGITATE — collaboration adverse IIT vs GNWT
**Nature, 30 avril 2025.** *Adversarial testing of global neuronal workspace and
integrated information theories of consciousness.*

Protocole exemplaire, et rare :
- Consortium **théoriquement neutre**, avec les promoteurs des deux théories
- Design expérimental, **prédictions divergentes**, résultats attendus et interprétation
  **pré-enregistrés**
- n = 256 participants
- Trois modalités : IRMf, MEG, **iEEG** (intracrânien)

**Résultat : aucune des deux théories n'est validée.** Les données s'accordent avec
certaines prédictions de chacune et **remettent substantiellement en cause des points
centraux des deux**.

### 3.2 La querelle « pseudoscience »
- Septembre 2023 : lettre ouverte de **124 chercheurs** qualifiant l'IIT de pseudoscience.
- 2025 : version actualisée publiée dans **Nature Neuroscience**, avec réponse de
  Tononi et collègues, et commentaires d'Alex Gomez-Marin et Anil Seth.
- Une enquête auprès des chercheurs du champ montre qu'**une petite minorité seulement**
  souscrit pleinement au label.

### 3.3 Effet sur le dossier
Le dossier affirmait :

> L'IIT implique la dépendance au substrat. Si l'IIT est vraie, l'argument de Bostrom
> est faux.

**Cela reste logiquement exact, mais doit être qualifié.** L'IIT vient d'être
substantiellement mise en difficulté par le meilleur test jamais conduit — et sa
concurrente principale aussi. Il faut donc écrire :

> Nous n'avons pas de théorie de la conscience validée. Le meilleur test adverse jamais
> mené, pré-enregistré et multimodal, a mis en difficulté **les deux** principales
> théories candidates. Le verrou identifié par le dossier n'est pas seulement ouvert :
> il vient de s'élargir.

C'est une **confirmation renforcée** de la thèse centrale — le sujet est bloqué sur la
conscience — mais par une mauvaise nouvelle, pas par une bonne.

Voir [03-CONSCIENCE/01](../03-CONSCIENCE/01-probleme-difficile-et-substrat.md).

---

## 4. Philosophie : la branche (2) reprend du poids

**Keith R. Harris, *The simulation argument reconsidered*, Analysis, janvier 2024.**

Thèse : des civilisations rationnelles **éviteraient** de créer des simulations, en
raison des **risques de terminaison** qu'elles s'attireraient. Conclusion : le
**deuxième disjoint** de l'argument original (convergence forte vers l'abstinence
simulatoire) serait vrai.

**Pourquoi c'est important pour le dossier.** Le dossier soutenait que la branche (2)
est systématiquement négligée et qu'elle peut être contrainte par des considérations
éthiques (voir [06-ETHIQUE/01](../06-ETHIQUE/01-univers-sans-souffrance.md) §6.3).
Harris apporte un **second mécanisme, prudentiel plutôt que moral**, allant dans le
même sens. Deux raisons indépendantes de réduire `f_I`, ce qui est notable pour un
paramètre qu'on disait inaccessible.

À signaler aussi : **Bostrom, *AI Creation and the Cosmic Host* (2024)**, qui explore
un cadre normatif dans lequel les simulateurs opéreraient — donc un traitement, par
Bostrom lui-même, du versant éthique de la branche (2).

---

## 5. Physique fondamentale : où il se passe réellement quelque chose

C'est le programme H6, et il progresse pendant que le reste stagne.

### 5.1 Espace-temps émergent — passage à l'expérience
- **Codes correcteurs holographiques HaPPY implémentés sur un ordinateur quantique à
  ions piégés** (2026), émulant une dualité bord/volume de type AdS/CFT. Les entropies
  d'intrication mesurées obéissent à la relation **Faulkner–Lewkowycz–Maldacena** en
  régime discret.
- **« Magie » et gravité** (Quanta, juin 2026) : les ressources non-Clifford
  (« magie », au sens de la théorie de la calculabilité quantique) sont reliées à la
  capacité de l'espace à se courber — donc à la gravitation.

**Limite honnête à conserver :** ces modèles sont en régime « N = 1 », avec une poignée
de qubits, et **ne possèdent pas de véritable espace-temps semi-classique lisse**,
lequel n'émergerait qu'avec des millions de degrés de liberté. Étendre le principe
holographique à une constante cosmologique **positive** — celle de notre univers —
reste un des grands problèmes ouverts.

### 5.2 Gravité quantique de paillasse (QGEM)
Domaine très actif en 2025-2026 : propositions pour détecter une **intrication induite
gravitationnellement** entre deux masses, ce qui indiquerait que la gravité est
quantique. Développements récents : amplification par résonance paramétrique, modèles
en théorie quantique des champs, schémas ne nécessitant qu'**une seule** masse en
superposition (allègement décisif de la contrainte expérimentale).

**Pourquoi cela compte ici :** c'est le premier test réaliste de la nature quantique du
substrat. Bien plus informatif, pour Q1, que n'importe quel argument sur la simulation.

### 5.3 Discrétisation de l'espace-temps — les bornes tiennent
Référence dure à citer : **Vasileiou et al., Nature Physics 11, 344 (2015)**, à partir
du sursaut gamma **GRB 090510** observé par Fermi-LAT. L'échelle caractéristique d'un
modèle de « flou » de l'espace-temps est contrainte **au-delà de l'échelle de Planck** :
`> 2,8 E_Planck` à 95 % de confiance, `> 1,6 E_Planck` à 99 %.

C'est le chiffre à opposer à l'argument « l'échelle de Planck est le pixel de l'univers »
(fact-check A3). Non seulement ce n'est pas une granularité mesurée, mais certains
modèles de granularité sont **exclus au-delà de l'échelle de Planck elle-même**.

---

## 6. Cosmologie : DESI, état au 29 août 2026

- **DR2 (mars 2025)** : 14 millions de mesures ; les indices d'une équation d'état
  `w` variant avec le temps se sont **renforcés** par rapport à l'année 1.
  Contraintes BAO au niveau du pour-cent de 0 à z ≈ 2,5, avec ancrage Lyman-α à z ≈ 2,33.
- **Lyman-α (30 juillet 2026)** : les mesures **s'accordent avec le modèle standard**.
  Deux lectures possibles, et la collaboration ne tranche pas : soit les indices
  s'évaporent, soit il faut un modèle plus complexe rendant compte de tout à la fois.
- **Robustesse contestée** : plusieurs analyses soutiennent que la revendication d'une
  énergie noire dynamique **n'est pas robuste**, en raison de tensions entre les jeux de
  données combinés (CMB + supernovae + BAO). Voir aussi les critiques de la
  paramétrisation CPL.

**Statut : ouvert et actif.** Rien n'a été tranché entre mars 2025 et août 2026.

---

## 7. Fondements quantiques : les faits relatifs

Point à ajouter au dossier, absent de la version initiale.

La ligne **Wigner's friend étendu** (Brukner ; Frauchiger-Renner ; puis les tests
expérimentaux) est le traitement moderne sérieux de « l'observateur ».

- **Théorème no-go pour les faits indépendants de l'observateur** (Brukner).
- **Test à six photons** réalisant un scénario de Wigner's friend étendu avec quatre
  observateurs : violation d'une inégalité de type Bell à **5 écarts-types**.
- Interprétation : si l'on conserve la localité et le libre choix, la théorie quantique
  doit être interprétée de façon **dépendante de l'observateur**. Les faits sont relatifs.

**Ce que cela ne dit pas, et c'est capital.** « Dépendant de l'observateur » ne signifie
pas « dépendant d'une conscience ». Un observateur, dans ces protocoles, est un système
physique qui enregistre — un photon-détecteur, un dispositif. Ces résultats soutiennent
une lecture **relationnelle** de la mécanique quantique, pas la thèse von Neumann–Wigner
que la conscience provoque l'effondrement.

C'est même l'argument le plus fort **contre** Campbell : la physique a produit un cadre
rigoureux pour la relativité des faits, et il n'y a aucune conscience dedans.

---

## 8. Les deux dossiers qui n'ont pas bougé

### 8.1 Campbell — toujours aucun résultat
Précision à ajouter, à son crédit : le protocole **est** publié et évalué —
**T. Campbell, H. Owhadi, J. Sauvageau, D. Watkinson, *On Testing the Simulation Theory*,
International Journal of Quantum Foundations 3(3), 2017.** Houman Owhadi est professeur
à Caltech, ce qui n'est pas rien.

Les expériences sont conduites à **California State Polytechnic University, Pomona**.
Au 29 août 2026 : **aucune publication de résultats évaluée par les pairs identifiée**.
Des présentations en symposium, des communiqués, pas de résultats.

Le verdict du dossier est inchangé, mais il faut créditer le protocole publié.

### 8.2 Vopson — l'écart s'est creusé
- *Is gravity evidence of a computational universe?*, **AIP Advances 15, 045035 (2025)**.
- Critique de **Sabine Hossenfelder** : erreurs mathématiques, contradiction avec le
  second principe, contresens sur la notion d'information ; conclusion qu'il n'aurait
  pas dû être publié.
- **Réponse de Vopson dans IPI Letters.**

⚠️ **Point de vigilance à ajouter :** *IPI Letters* est publié par l'**Information
Physics Institute**, fondé par Vopson. Une réponse à une critique publiée dans une revue
qu'on dirige n'a pas le même statut qu'une réplication indépendante. C'est le même
critère que celui appliqué au goulot génétique de 900 000 ans dans le document
cosmologique : **ce qui compte, c'est l'indépendance du réplicateur.**

Travaux annexes : « pixelisation de l'espace », cellules élémentaires comme unités de
stockage. Aucun ne change le statut.

---

## 9. Ce que ce balayage ne couvre pas

Honnêteté sur les limites, pour que le dossier ne soit pas surestimé.

| Zone | État |
|---|---|
| Littérature philosophique 2025-2026 sur SSA/SIA et classes de référence | **Non balayée systématiquement.** C'est le point le plus important du dossier et sa littérature récente n'a pas été passée en revue |
| Actes de conférences 2026 (quantum foundations, FQXi, conscience) | Non couverts |
| Publications non anglophones | Non couvertes |
| Préprints des trois derniers mois non indexés | Probablement manquants |
| Théorie de l'assemblage (Cronin, Walker) et autres programmes sur le fondamental | Non traitée |
| Développements sur le superdéterminisme et 't Hooft depuis 2016 | Non balayés |
| Réception de Wolpert (2025) par la communauté | **Trop récent, pas de recul disponible** |
| Réponse de la communauté aux résultats COGITATE | Partiellement couverte |

**La lacune la plus gênante est la première.** L'objection de classe de référence est
la colonne vertébrale du dossier, et ce balayage n'a pas vérifié si la littérature 2024-2026
l'a fait avancer. À traiter en priorité.

---

## 10. Ce que ce balayage change au dossier — bilan

| Élément | Effet |
|---|---|
| **Wolpert 2025** | **Ajout majeur.** Formalise H3 et H4, détruit la hiérarchie des niveaux |
| **Vazza / Edge & Brown / Bostrom FAQ** | Nuance l'argument du calcul paresseux : c'est désormais un débat publié, et la ligne de défense officielle |
| **COGITATE 2025** | **Renforce la thèse centrale** : le verrou de la conscience s'est élargi, pas refermé |
| **Harris 2024** | Deuxième mécanisme indépendant réduisant `f_I` — la branche (2) se consolide |
| **Wigner's friend étendu** | Nouvel argument, fort, **contre** la thèse conscience-effondrement |
| **Vasileiou 2015** | Chiffre dur contre « Planck = pixel » |
| **Espace-temps émergent 2026** | Confirme que H6 est le seul programme qui avance |
| **QGEM** | Premier test réaliste de la nature quantique du substrat |
| **Bostrom FAQ v2.0** | À lire en primaire — non obtenue en texte, voir §9 |

**Ce qui n'est pas modifié :** l'objection probabiliste centrale, la reformulation
ontologique, la Règle 0, et le constat que la physique n'apporte aucune indication
positive en faveur de l'hypothèse.

**Ce qui est renforcé :** la thèse selon laquelle le verrou est la conscience.
COGITATE l'a confirmé de la pire façon possible.

---

## 11. Addendum — balayage mathématique du 29 août 2026 (10 domaines, 9 vérifiés)

Résultats intégrés dans [11-MATHEMATIQUES/](../11-MATHEMATIQUES/) et
[12-BIOCOMPUTING/02](../12-BIOCOMPUTING/02-energie-libre-et-inference-active.md).
Les cinq changements de statut les plus importants :

| Résultat | Effet sur le dossier |
|---|---|
| **Castilla-Castellano & Lucia, arXiv:2607.08686 (juillet 2026)** — l'indécidabilité du gap spectral 1D est **instable** : une perturbation `O(ε)` de rang 1 la rend décidable | Aucun substrat à précision finie ne contient d'instance indécidable. Le mur « même le simulateur ne sait pas » ne tient qu'à précision exacte |
| **Dong et al., CCC 2024** — `MIP* = RE` s'effondre dans `⊆ NEXP` sous bruit constant | Le « télescope vers l'indécidable » exige une intrication idéale, non physique |
| **Muon g−2, juin 2025** — `Δa_μ ≈ 0,6σ` (Fermilab final + WP2025 sur réseau) | L'observable citée par Beane et al. ne montre aucun signal ; borne `b⁻¹ ≳ 6 × 10⁷ GeV` (dérivée) |
| **LHAASO 2024** — `E_QG,1 > 10 E_Pl` mais `E_QG,2 ≈ 7 × 10¹¹ GeV` | Le cas **quadratique** (celui du réseau) reste ouvert ~7 ordres sous Planck ; correction de la version initiale du fichier 03 |
| **Findlay et al., arXiv:2412.04571** — calcul exact : un simulateur von Neumann n'a pas la Φ-structure du système simulé | Si IIT, P1 de Bostrom est fausse — conditionnel, antécédent en litige (COGITATE) |

Autres vérifications : deux implémentations de codes holographiques HaPPY sur ions
piégés (juillet 2026) ; « la back-reaction gravitationnelle est magique » (PRX Quantum 2025) ;
Müller, *Algorithmic idealism* (Found. Phys. 2026) ; darwinisme quantique sur 9 qubits
supraconducteurs (Sci. Adv. 2025) ; **aucune preuve publiée de NP-dureté de Φ** ;
**aucune recherche dédiée du motif cubique K₄** dans les données Auger/TA ; CURBy (Nature,
juin 2025), premier service public d'aléa certifié par Bell.

**Non couvert lors de ce balayage :** le domaine « cerveaux de Boltzmann / mesure
cosmologique ». Il a été vérifié ensuite, le 25 octobre 2026, contre Page (2007, 2008),
Bousso et Freivogel (2007) et Boddy, Carroll et Pollack (2016). Trois corrections en ont
résulté, détaillées dans la partie II du fichier
[10](../11-MATHEMATIQUES/10-decoherence-et-boltzmann-quantitatifs.md).

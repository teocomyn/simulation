# AI_HANDOFF — Dossier Simulation

## Current work

- Branche `main`, dépôt GitHub public `teocomyn/simulation`, en phase avec le local.
- Production : https://simulation42.vercel.app (Vercel, projet `simulation`, équipe `t4c2s-projects`, root directory `web`). Chaque push sur `main` redéploie. L'alias simulation-gamma-seven.vercel.app et `/d/synthese` redirigent vers les URL canoniques.
- Synthèse publiée aussi en artefact claude.ai (« Hypothèse de Simulation »), alignée sur le corpus au 25 octobre 2026.

### Fait le 25 octobre 2026 (audit du 14 septembre soldé)

Site :
- Mobile réparé : les 38 textes débordaient sous 1024 px (grille sans colonne bornée). 69 pages contrôlées à 375 et 320 px.
- Les 94 étiquettes de statut (écrites en code inline dans le corpus) s'affichent en badges ; tous les mots de tête reconnus (`web/lib/status.ts`) ; « NON ÉTABLI » ne prend plus la couleur d'« ÉTABLI ».
- Filtre des tirets cadratins corrigé (`web/lib/copy.ts`) : « · » dans les cellules vides, alignement des blocs de code conservé.
- Image de partage par texte (`web/app/og/[...slug]/route.tsx`, police Geist OFL dans `web/assets/fonts`).
- Dates réelles par texte depuis git : `web/lib/data/doc-dates.json`, régénéré par `npm run dates` (à lancer avant chaque commit qui modifie un texte), vérifié en CI.
- Bibliothèque d'animation retirée (effet de survol en CSS), palette ⌘K chargée à l'ouverture, index de recherche servi par `/search-index.json`, llms-full.txt contient le corpus complet.
- Next.js 16.4.3 (alerte de sécurité), lint à zéro, 22 tests, CI GitHub Actions (lint, tests, dates, build, contrôle mobile Playwright).
- Légende des statuts sur /methode, « Mis à jour récemment » sur /explorer.

Corpus :
- Synthèse : nouvelle §9 (apports des sections 10 à 13), bandeau corrigé (« non calculable » était faux), réplique de Thomas 2026 intégrée au verdict.
- Résidus Struzik, mentions de processus interne, « corpus fourni » remplacé par « corpus de départ » (défini dans le README).
- Partie Boltzmann (11-MATHEMATIQUES/10) vérifiée contre Page 2007 et 2008, Bousso et Freivogel 2007 : T_dS avec H_Λ (2,2e-30 K), exposant 1e69 attribué à Page 2007, borne des 20 Gyr rattachée à la mesure globale.
- Statuts de publication vérifiés (MIP* = RE accepté aux Annals, Müller, Pilatowsky-Cameo et Choi publiés ; Findlay, Castilla-Castellano et Lucia, Biswas, Steiner encore préprints).
- Bibliographie : 214 références des sections 10 à 13 (§10), plus la littérature 2024-2026 sur la classe de référence.
- Revue de la littérature 2024-2026 sur la classe de référence (10-ACTUALISATION §12) : FAQ v2.0 de Bostrom lue, Thomas 2026 (réplique), Adlam 2024 (renfort), Chalmers, Godfrey-Smith, Elga sur l'asymétrie Boltzmann, Azhar, Guth et Namjoo 2026.

## Validation

- Dans `web/` : `npm run check` (lint, tests, dates) et `npm run build`.
- Contrôle mobile : `PW_CHANNEL=chrome node scripts/check-mobile.mjs http://localhost:3000` après `npm run start`.
- 25 octobre 2026 : CI verte, production vérifiée (69 pages sans débordement à 375 px, badges, images de partage, redirections).

## Next action

Décisions qui reviennent à l'utilisateur :
- Domaine propre (payant) et mesure d'audience (Vercel Web Analytics : vérifier le coût sur le plan Pro avant activation).
- Mode clair : le site est volontairement sombre.
- Équations de 11-MATHEMATIQUES/12 en LaTeX : non fait, risque d'erreur dans les blocs alignés commentés.
- Lien « signaler une erreur » vers les issues GitHub du dépôt public.

Recherche encore ouverte : texte intégral de Pittard (Phil. Review 2026) et de Dogramaci et Schoenfield (Phil. Review 2025) ; réception de Wolpert 2025 ; 4 alertes npm de faible gravité sur KaTeX (correctif proposé = régression de version).

## Do not

- Créer une ressource payante, un domaine ou une base de données sans confirmation explicite.
- Changer d'hébergeur, d'équipe Vercel ou de visibilité du dépôt sans confirmation.
- Retirer un statut d'une affirmation du corpus, ou ajouter une référence non ouverte en source primaire.
- Commiter un texte modifié sans `npm run dates`.

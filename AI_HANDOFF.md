# AI_HANDOFF — Dossier Simulation

## Current work

- Branche `main`. Dépôt GitHub public `teocomyn/simulation`, en phase avec le local.
- Site déployé sur Vercel depuis le 13 septembre 2026. Production : https://simulation42.vercel.app (alias simulation-gamma-seven.vercel.app). Projet `simulation`, équipe `t4c2s-projects`, root directory `web`, déploiement automatique à chaque push sur `main`.
- Corpus : 39 fichiers, 14 sections, environ 60 000 mots.
- Audit global du 14 septembre 2026 : une trentaine de points relevés, aucun appliqué à ce jour. Principaux : résidus de l'attribution Struzik (02-PHYSIQUE/03 l.151, bibliographie l.201), phrases de processus interne (« agent de vérification », « corpus fourni »), date « 29 août 2026 » répétée 22 fois, 107 références citées absentes de la bibliographie, 40 étiquettes de statut pour 4 annoncées, synthèse et README sans les sections 10 à 13, `stripEmDashes` qui altère cellules vides et blocs de code sur le site, 14 erreurs ESLint.

## Validation

- `npm test` dans `web/` : 11/11 (liens uniquement).
- `npm run build` dans `web/` : OK, 0 avertissement (7 octobre 2026).
- `npm run lint` dans `web/` : 14 erreurs react-hooks, non bloquantes pour le build.
- Production vérifiée le 7 octobre 2026 : accueil, /d/synthese, /outils/trilemme, /sitemap.xml, /robots.txt, /llms.txt répondent 200 sans authentification.

## Next action

Appliquer les points de l'audit du 14 septembre sur validation de l'utilisateur, dans l'ordre : résidus et fuites de processus, dates, bibliographie, étiquettes, synthèse et README, correctifs du site. Chaque push sur `main` redéploie automatiquement.

## Do not

- Créer une ressource payante supplémentaire, un domaine ou une base de données sans confirmation explicite.
- Changer d'hébergeur, d'équipe Vercel ou de visibilité du dépôt sans confirmation.
- Retirer un statut d'une affirmation du corpus.

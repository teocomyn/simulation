# AI_CONTEXT — Dossier Simulation

Classification: **content-only site**. No hosted database. No auth. No billable infrastructure.

## What this is

A research dossier on the simulation hypothesis, constituted 29 August 2026. The public site in `web/` renders the entire markdown corpus and adds interactive instruments derived from it.

## Source of truth

- Numbered markdown folders at the repository root are the corpus.
- `web/` is a Next.js App Router site that reads those files from disk.
- Do not invent claims. Status labels stay on every assertion.

## Site

- Run: `cd web && npm run dev`
- Brand: Dossier Simulation
- Constitutional line: « Nous cherchons la vérité, pas la simulation. »
- Reformulated question: « Quel est le niveau le plus fondamental de la réalité, et cette question a-t-elle une réponse ? »

## Architecture

- Content-only. Déployé sur Vercel depuis GitHub (`teocomyn/simulation`, branche `main`, root directory `web`), déploiement automatique à chaque push sur `main`.
- Production : https://simulation42.vercel.app (alias simulation-gamma-seven.vercel.app). Projet Vercel `simulation`, équipe `t4c2s-projects` (plan Pro préexistant ; ce projet n'a créé aucun coût fixe supplémentaire). Aucune autre ressource payante.
- No Supabase, no Vertical Network tenancy, no Resend.
- Related product-network rules do not apply.

import type { Metadata } from "next";

export const SITE_NAME = "Dossier Simulation";
export const SITE_TAGLINE = "Nous cherchons la vérité, pas la simulation.";
export const DATE_PUBLISHED = "2026-08-29";
export const IN_LANGUAGE = "fr";

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export function formatDateFr(iso = DATE_PUBLISHED) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS_FR[(month || 1) - 1]} ${year}`;
}

export const SITE_DESCRIPTION =
  "Revue de référence sur l'hypothèse de simulation. Quatre questions séparées, un argument conditionnel, un verrou : la conscience. Nous cherchons la vérité, pas la simulation.";

export const SITE_KEYWORDS = [
  "hypothèse de simulation",
  "Bostrom",
  "trilemme",
  "facteur de Bayes",
  "Wolpert",
  "conscience",
  "Q1 Q2 Q3 Q4",
  "Règle 0",
  "réalisme de simulation",
  "sous-détermination",
];

export const KNOWS_ABOUT = [
  "hypothèse de simulation",
  "argument de Bostrom",
  "facteur de Bayes",
  "sous-détermination",
  "problème difficile de la conscience",
  "computabilité et auto-simulation",
  "ontologie H1–H8",
  "Règle 0",
];

export function siteOrigin() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export function absoluteUrl(path = "/") {
  const base = siteOrigin();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url,
      type,
      locale: "fr_FR",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

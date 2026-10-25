/**
 * Étiquettes de statut épistémique du corpus.
 *
 * Le corpus écrit ses statuts entre crochets, en tête de qualification :
 * `[ÉTABLI]`, `[SPÉCULATIF, mais bien fondé]`, `[DÉRIVÉ, À VÉRIFIER contre Page 2008]`.
 * Une étiquette est reconnue si elle commence par l'un des mots de tête ci-dessous ;
 * la suite libre est conservée telle quelle dans le badge.
 */
const HEADS = [
  "NON ÉTABLI",
  "NON ETABLI",
  "NON SCIENTIFIQUE",
  "ÉTABLI",
  "ETABLI",
  "DÉBATTU",
  "DEBATTU",
  "SPÉCULATIF",
  "SPECULATIF",
  "TESTABLE",
  "À VÉRIFIER",
  "A VERIFIER",
  "DÉRIVÉ",
  "CONTESTÉ",
  "PUBLIÉ",
  "LE PLUS SOLIDE",
  "SOLIDE",
  "INTÉRESSANT",
  "PHILOSOPHIQUE",
  "PROBLÈME OUVERT",
  "PROBLÉMATIQUE",
  "OUVERT",
  "SOURCE DE CONFUSION",
  "PRÉDICTION",
  "PROBABLEMENT FAUSSE",
  "MÉTHODE VALIDE",
  "VALIDE COMME MÉTHODE",
  "PROGRAMME",
  "HYPOTHÈSE PAR DÉFAUT",
  "FORMALISÉ",
  "MÉTA-HYPOTHÈSE",
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
const HEAD_GROUP = `(?:${HEADS.map(escape).join("|")})(?=[\\s,\\]])[^\\]\\n]*`;

/** Une étiquette seule, par exemple le contenu d'un `code` inline. */
export const STATUS_LABEL_RE = new RegExp(`^\\[${HEAD_GROUP}\\]$`);

/** Toutes les étiquettes présentes dans un texte courant. */
export function statusPattern() {
  return new RegExp(`\\[${HEAD_GROUP}\\]`, "g");
}

export function isStatusLabel(value: string) {
  return STATUS_LABEL_RE.test(value.trim());
}

export type StatusColor = "good" | "warn" | "bad" | "info" | "spec" | "muted";

/**
 * Couleur d'une étiquette, décidée par son mot de tête.
 * L'ordre compte : « NON ÉTABLI » ne doit jamais être lu comme « ÉTABLI ».
 */
export function statusColor(label: string): StatusColor {
  const s = label.replace(/^\[|\]$/g, "").trim().toUpperCase();
  if (/^(ÉTABLI|ETABLI)/.test(s)) return /NON (ÉTABLI|ETABLI)/.test(s) ? "warn" : "good";
  if (/^(LE PLUS SOLIDE|HYPOTHÈSE PAR DÉFAUT|EXACT)/.test(s)) return "good";
  if (/^(NON ÉTABLI|NON ETABLI|NON SCIENTIFIQUE|SOURCE DE CONFUSION)/.test(s)) return "bad";
  if (/^(SPÉCULATIF|SPECULATIF|FORMALIS)/.test(s)) return "spec";
  if (/FAUSSE|FAUX/.test(s)) return "bad";
  if (/^(TESTABLE|MÉTHODE|METHODE|VALIDE|PROGRAMME|OUVERT|PROBLÈME OUVERT)/.test(s)) return "info";
  if (/^(DÉBATTU|DEBATTU|CONTESTÉ|PUBLIÉ|À VÉRIFIER|A VERIFIER|DÉRIVÉ|SOLIDE|INTÉRESSANT|PROBLÉMATIQUE)/.test(s)) {
    return "warn";
  }
  return "muted";
}

export const statusClass: Record<StatusColor, string> = {
  good: "text-good border-good/40 bg-good/10",
  warn: "text-warn border-warn/40 bg-warn/10",
  bad: "text-bad border-bad/40 bg-bad/10",
  info: "text-info border-info/40 bg-info/10",
  spec: "text-spec border-spec/40 bg-spec/10",
  muted: "text-muted border-line-2 bg-bg-3",
};

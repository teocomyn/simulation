export type StatusKind =
  | "etabli"
  | "debattu"
  | "speculatif"
  | "non-etabli"
  | "non-scientifique"
  | "testable"
  | "a-verifier"
  | "probablement-fausse"
  | "methode"
  | "programme"
  | "default"
  | "formel"
  | "meta"
  | "other";

const MAP: { match: RegExp; kind: StatusKind; color: string }[] = [
  { match: /ÉTABLI|ETABLI|exact/i, kind: "etabli", color: "good" },
  { match: /DÉBATTU|DEBATTU|contesté|CONTESTÉ/i, kind: "debattu", color: "warn" },
  { match: /SPÉCULATIF|SPECULATIF/i, kind: "speculatif", color: "spec" },
  { match: /NON ÉTABLI|NON ETABLI|NON SCIENTIFIQUE/i, kind: "non-scientifique", color: "bad" },
  { match: /TESTABLE/i, kind: "testable", color: "info" },
  { match: /À VÉRIFIER|A VERIFIER/i, kind: "a-verifier", color: "warn" },
  { match: /FAUSSE|FAUX/i, kind: "probablement-fausse", color: "bad" },
  { match: /MÉTHODE|METHODE|VALIDE/i, kind: "methode", color: "info" },
  { match: /PROGRAMME|ACTIF/i, kind: "programme", color: "info" },
  { match: /DÉFAUT|DEFAUT/i, kind: "default", color: "good" },
  { match: /FORMALIS/i, kind: "formel", color: "spec" },
  { match: /MÉTA|META/i, kind: "meta", color: "muted" },
];

export function statusColor(label: string) {
  const hit = MAP.find((m) => m.match.test(label));
  return hit?.color ?? "muted";
}

export const statusClass: Record<string, string> = {
  good: "text-good border-good/40 bg-good/10",
  warn: "text-warn border-warn/40 bg-warn/10",
  bad: "text-bad border-bad/40 bg-bad/10",
  info: "text-info border-info/40 bg-info/10",
  spec: "text-spec border-spec/40 bg-spec/10",
  muted: "text-muted border-line-2 bg-bg-3",
};

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "51 affirmations",
  description: "Fact-check du corpus : 27 exactes, 12 à nuancer, 6 fausses, 6 non vérifiables. Arrêté au 29 août 2026.",
  path: "/outils/fact-check",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

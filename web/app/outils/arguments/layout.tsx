import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "12 arguments populaires",
  description: "Aucun des 12 arguments populaires ne résiste. Verdict, piège nommé, et lien vers le corpus.",
  path: "/outils/arguments",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

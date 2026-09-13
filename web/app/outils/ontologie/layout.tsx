import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Carte H1–H8",
  description: "Huit hypothèses de niveau fondamental, compatibilité et classement. H5 exclut H2.",
  path: "/outils/ontologie",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

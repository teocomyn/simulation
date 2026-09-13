import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { CommandPalette } from "@/components/CommandPalette";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteGraph } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, siteOrigin } from "@/lib/seo";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${SITE_NAME}, le niveau fondamental`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: siteOrigin() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Science",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: `${SITE_NAME}, le niveau fondamental`,
    description: SITE_DESCRIPTION,
    locale: "fr_FR",
    type: "website",
    siteName: SITE_NAME,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport = {
  themeColor: "#031c26",
  colorScheme: "dark" as const,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={siteGraph()} />
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteHeader />
        <CommandPalette />
        <div id="contenu" className="flex-1">
          {children}
        </div>
        <BackToTop />
        <SiteFooter />
      </body>
    </html>
  );
}

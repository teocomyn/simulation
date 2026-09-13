import type { Doc, Section } from "@/lib/catalog";
import { questions } from "@/lib/data/questions";
import {
  DATE_PUBLISHED,
  IN_LANGUAGE,
  KNOWS_ABOUT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
} from "@/lib/seo";

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
    foundingDate: DATE_PUBLISHED,
    slogan: SITE_TAGLINE,
    inLanguage: IN_LANGUAGE,
    knowsAbout: KNOWS_ABOUT,
    publishingPrinciples: absoluteUrl("/methode"),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
    inLanguage: IN_LANGUAGE,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/recherche")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function scholarlyArticleJsonLd({
  title,
  description,
  path,
  section,
}: {
  title: string;
  description: string;
  path: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    name: title,
    abstract: description,
    description,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_PUBLISHED,
    inLanguage: IN_LANGUAGE,
    isPartOf: { "@id": absoluteUrl("/#website") },
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(path),
    articleSection: section,
    citation: SITE_NAME,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-block", "h1"],
    },
  };
}

export function collectionJsonLd(section: Section, itemCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${section.number} ${section.title}`,
    description: section.blurb,
    url: absoluteUrl(`/s/${section.id}`),
    inLanguage: IN_LANGUAGE,
    isPartOf: { "@id": absoluteUrl("/#website") },
    numberOfItems: itemCount,
  };
}

export function faqFromQuestions() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: `${q.id}. ${q.title}`,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.body,
      },
    })),
  };
}

export function definedTermsJsonLd(
  terms: { id: string; title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: `Glossaire · ${SITE_NAME}`,
    url: absoluteUrl("/glossaire"),
    inLanguage: IN_LANGUAGE,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.title,
      termCode: t.id,
      description: t.body,
      url: absoluteUrl(`/glossaire#${t.id}`),
    })),
  };
}

export function docToArticleInput(doc: Doc) {
  return {
    title: doc.title,
    description: doc.thesis,
    path: `/d/${doc.slug}`,
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: IN_LANGUAGE,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_PUBLISHED,
    isPartOf: { "@id": absoluteUrl("/#website") },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-block", "h1"],
    },
  };
}

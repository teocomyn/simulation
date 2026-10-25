import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import { flattenText, prettyLinkLabel, rewriteCorpusHref, slugifyHeading, uniqueHeadingId } from "@/lib/links";
import { isStatusLabel, statusPattern } from "@/lib/status";
import { StatusBadge } from "./StatusBadge";
import { stripEmDashes } from "@/lib/copy";

function decorate(text: string) {
  const parts: ReactNode[] = [];
  let last = 0;
  const re = statusPattern();
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<StatusBadge key={`${m.index}-${m[0]}`}>{m[0]}</StatusBadge>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Text({ children }: { children?: ReactNode }) {
  if (typeof children === "string") return <>{decorate(children)}</>;
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, i) =>
          typeof child === "string" ? <span key={i}>{decorate(child)}</span> : child,
        )}
      </>
    );
  }
  return <>{children}</>;
}

function makeComponents(): Components {
  const used = new Map<string, number>();
  const heading = (Tag: "h1" | "h2" | "h3" | "h4") =>
    function Heading({ children }: { children?: ReactNode }) {
      const Node = Tag;
      const text = flattenText(children);
      const id = Tag === "h1" ? slugifyHeading(text) || undefined : uniqueHeadingId(text, used);
      return (
        <Node id={id}>
          <Text>{children}</Text>
          {id ? (
            <a href={`#${id}`} className="heading-anchor" aria-label={`Lien vers ${text}`}>
              #
            </a>
          ) : null}
        </Node>
      );
    };

  return {
    a({ href, children }) {
      const next = href ? rewriteCorpusHref(href) : href;
      const raw = flattenText(children);
      const pretty = prettyLinkLabel(href, raw || null);
      const label = pretty ?? children;
      if (next && next.startsWith("/")) {
        return <Link href={next}>{label}</Link>;
      }
      const external = Boolean(next?.startsWith("http"));
      return (
        <a href={next ?? href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {label}
          {external ? <span className="sr-only"> (nouvel onglet)</span> : null}
          {external ? (
            <span aria-hidden="true" className="ml-1 text-[0.75em] text-dim">
              ↗
            </span>
          ) : null}
        </a>
      );
    },
    p({ children }) {
      return (
        <p>
          <Text>{children}</Text>
        </p>
      );
    },
    li({ children }) {
      return (
        <li>
          <Text>{children}</Text>
        </li>
      );
    },
    td({ children }) {
      return (
        <td>
          <Text>{children}</Text>
        </td>
      );
    },
    th({ children }) {
      return (
        <th>
          <Text>{children}</Text>
        </th>
      );
    },
    h1: heading("h1"),
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    code({ className, children }) {
      if (typeof children === "string" && !className && isStatusLabel(children)) {
        return <StatusBadge>{children.trim()}</StatusBadge>;
      }
      return <code className={className}>{children}</code>;
    },
    table({ children }) {
      return (
        <div className="table-scroll">
          <table>{children}</table>
        </div>
      );
    },
  };
}

export function MarkdownBody({
  markdown,
  skipFirstH1 = false,
}: {
  markdown: string;
  skipFirstH1?: boolean;
}) {
  return (
    <div className="prose-dossier">
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={makeComponents()}
      >
        {stripEmDashes(skipFirstH1 ? markdown.replace(/^#\s.+\n+/, "") : markdown)}
      </Markdown>
    </div>
  );
}

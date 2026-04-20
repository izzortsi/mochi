"use client";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import type { Components } from "react-markdown";

function buildComponents(compact: boolean): Components {
  // Spacing scales: compact for the chat panel, roomy for standalone notes.
  const s = compact
    ? {
        h1: "font-display text-base mt-3 mb-1",
        h2: "font-display text-sm mt-2 mb-1",
        h3: "font-display text-sm mt-2 mb-0.5",
        p: "mb-1.5 leading-snug",
        ul: "list-disc list-inside mb-1.5 space-y-0.5",
        ol: "list-decimal list-inside mb-1.5 space-y-0.5",
        li: "leading-snug",
        blockquote: "border-l-2 border-neutral-700 pl-2 my-1.5 opacity-80 italic",
        preBlock: "bg-[#050505] border border-[#1a1a1a] p-2 my-1.5 overflow-x-auto font-mono text-xs",
      }
    : {
        h1: "font-display text-2xl mt-6 mb-2",
        h2: "font-display text-xl mt-5 mb-2",
        h3: "font-display text-lg mt-4 mb-1",
        p: "mb-3 leading-relaxed",
        ul: "list-disc list-inside mb-3 space-y-1",
        ol: "list-decimal list-inside mb-3 space-y-1",
        li: "leading-relaxed",
        blockquote: "border-l-2 border-neutral-700 pl-4 my-3 opacity-80 italic",
        preBlock: "bg-[#050505] border border-[#1a1a1a] p-3 my-3 overflow-x-auto font-mono text-sm",
      };

  return {
    h1: ({ children }) => <h2 className={s.h1}>{children}</h2>,
    h2: ({ children }) => <h3 className={s.h2}>{children}</h3>,
    h3: ({ children }) => <h4 className={s.h3}>{children}</h4>,
    p: ({ children }) => <p className={s.p}>{children}</p>,
    ul: ({ children }) => <ul className={s.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={s.ol}>{children}</ol>,
    li: ({ children }) => <li className={s.li}>{children}</li>,
    blockquote: ({ children }) => <blockquote className={s.blockquote}>{children}</blockquote>,
    code: ({ className, children }) => {
      const isBlock = className?.startsWith("language-");
      if (isBlock) {
        return (
          <pre className={s.preBlock}>
            <code>{children}</code>
          </pre>
        );
      }
      return <code className="bg-[#1a1a1a] px-1 py-px text-[0.9em] font-mono">{children}</code>;
    },
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-neutral-100 underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-neutral-100">{children}</strong>,
    em: ({ children }) => <em className="italic opacity-90">{children}</em>,
    hr: () => <hr className="my-3 border-[#1a1a1a]" />,
  };
}

const roomyComponents = buildComponents(false);
const compactComponents = buildComponents(true);

interface Props {
  content: string;
  compact?: boolean;
}

export function MarkdownContent({ content, compact = false }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={compact ? compactComponents : roomyComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

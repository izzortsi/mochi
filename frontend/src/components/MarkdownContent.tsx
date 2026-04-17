"use client";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => <h2 className="font-display text-2xl mt-6 mb-2">{children}</h2>,
  h2: ({ children }) => <h3 className="font-display text-xl mt-5 mb-2">{children}</h3>,
  h3: ({ children }) => <h4 className="font-display text-lg mt-4 mb-1">{children}</h4>,
  p: ({ children }) => <p className="mb-3 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-phase1/40 pl-4 my-3 opacity-80 italic">{children}</blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.startsWith("language-");
    if (isBlock) {
      return (
        <pre className="bg-[#0a0a14] p-3 rounded-lg my-3 overflow-x-auto font-mono text-sm">
          <code>{children}</code>
        </pre>
      );
    }
    return <code className="bg-[#1a1a2a] px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
  },
  a: ({ href, children }) => (
    <a href={href} className="text-phase1 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-[#f5f0e8]">{children}</strong>,
  em: ({ children }) => <em className="italic opacity-90">{children}</em>,
};

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

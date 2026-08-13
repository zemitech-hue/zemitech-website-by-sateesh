import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CaptionedImage from "@/components/ui/CaptionedImage";

function slugify(text: string) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogContent({ content }: { content: string }) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-blue-950 !mt-12 mb-1 scroll-mt-24" id={slugify(String(children))}>
              {children}
            </h2>
          ),
          h3: ({ children }) => <h3 className="text-lg font-semibold text-blue-950 !mt-8 mb-1">{children}</h3>,
          p: ({ children }) => <p className="text-ink leading-relaxed">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 hover:text-blue-900">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="space-y-2 pl-1">{children}</ul>,
          ol: ({ children }) => <ol className="space-y-2.5 pl-1 list-decimal list-inside">{children}</ol>,
          li: ({ children }) => (
            <li className="flex items-start gap-2.5 text-ink leading-relaxed">
              <span className="text-green-600 mt-1 shrink-0" aria-hidden="true">—</span>
              <span>{children}</span>
            </li>
          ),
          table: ({ children }) => (
            <div className="!mt-6 overflow-x-auto rounded-xl border border-line">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-bg-tint text-blue-950 font-semibold">{children}</thead>,
          th: ({ children }) => <th className="px-4 py-3 text-left">{children}</th>,
          td: ({ children }) => <td className="px-4 py-3 border-t border-line text-ink-soft">{children}</td>,
          img: ({ src, alt }) => (
            <div className="!mt-6 !mb-6">
              <CaptionedImage src={typeof src === "string" ? src : ""} alt={alt ?? ""} aspect="aspect-[16/10]" />
            </div>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-green-400 pl-4 italic text-ink-soft">{children}</blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

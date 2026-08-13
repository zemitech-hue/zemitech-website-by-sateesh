import CaptionedImage from "@/components/ui/CaptionedImage";
import SpecTable from "@/components/ui/SpecTable";
import { renderRichText } from "@/lib/richText";
import type { ContentBlock } from "@/lib/data/blog";

export default function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl font-semibold text-blue-950 !mt-12 mb-1 scroll-mt-24" id={slugify(block.text)}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-semibold text-blue-950 !mt-8 mb-1">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-ink leading-relaxed">
                {renderRichText(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink leading-relaxed">
                    <span className="text-green-600 mt-1" aria-hidden="true">—</span>
                    <span>{renderRichText(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed">
                    <span className="font-mono-label text-sm text-green-600 shrink-0 pt-0.5">{String(j + 1).padStart(2, "0")}</span>
                    <span>{renderRichText(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="!mt-6">
                <SpecTable title={block.title} columns={block.columns} rows={block.rows.map((r) => ({ label: r[0], values: r.slice(1) }))} />
              </div>
            );
          case "image":
            return (
              <div key={i} className="!mt-6 !mb-6">
                <CaptionedImage src={block.src} alt={block.alt} caption={block.caption} aspect="aspect-[16/10]" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

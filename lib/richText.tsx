import Link from "next/link";
import { Fragment, type ReactNode } from "react";

// Lets plain-string content (FAQ answers, long-form copy, blog paragraphs) carry
// real inline links — write "[label](/href)" in the data file and it renders as
// a Next <Link>. Keeps lib/data/*.ts as plain strings instead of JSX/MDX.
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderRichText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  LINK_PATTERN.lastIndex = 0;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const [, label, href] = match;
    parts.push(
      <Link key={key++} href={href} className="text-blue-700 font-medium hover:underline">
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return <Fragment>{parts}</Fragment>;
}

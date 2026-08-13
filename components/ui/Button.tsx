import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

/**
 * Variant styles — rectangular pill with rounded-lg (border-radius ~10px).
 * Primary  : solid green fill  (brand CTA)
 * Secondary: solid blue fill   (alt CTA)
 * Outline  : transparent with stroke border, text matches context
 * Ghost    : text-only
 */
const styles: Record<Variant, string> = {
  primary:
    "bg-green-500 hover:bg-green-600 text-white border border-green-400 shadow-md shadow-green-500/30 hover:shadow-lg hover:shadow-green-500/40",
  secondary:
    "bg-blue-700 hover:bg-blue-800 text-white border border-blue-600 shadow-md shadow-blue-800/30 hover:shadow-lg hover:shadow-blue-800/40",
  outline:
    "bg-transparent border-2 border-current text-current hover:bg-white/10",
  ghost:
    "bg-transparent text-blue-700 hover:bg-blue-50/80",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  showArrow = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
}) {
  const classes = [
    "group",
    "inline-flex items-center justify-center gap-2",
    "rounded-lg",           // rectangular with comfortable border radius
    "px-6 py-3",
    "text-sm font-bold tracking-wide",
    "transition-all duration-200",
    "cursor-pointer",
    "active:scale-[0.97]",
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.2}
          aria-hidden="true"
          className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

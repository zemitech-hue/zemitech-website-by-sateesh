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
    "bg-amber-400 hover:bg-amber-500 text-slate-950 border border-amber-300 font-extrabold shadow-md shadow-amber-400/30 hover:shadow-lg hover:shadow-amber-400/40",
  secondary:
    "bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-md shadow-slate-950/30 hover:shadow-lg hover:shadow-slate-950/40",
  outline:
    "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold",
  ghost:
    "bg-transparent text-amber-700 hover:bg-amber-50/80",
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

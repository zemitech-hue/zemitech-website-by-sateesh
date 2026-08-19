export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className = "",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
}) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border font-mono-label text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-xs ${
            dark
              ? "bg-slate-900 text-amber-400 border-amber-400/40"
              : "bg-amber-100 text-amber-950 border-amber-300 font-extrabold"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${
          dark ? "text-white" : "text-blue-950"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          } ${dark ? "text-slate-300" : "text-slate-600"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

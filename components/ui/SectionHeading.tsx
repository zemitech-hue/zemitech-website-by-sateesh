export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono-label text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight tracking-tight">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {sub}
        </p>
      )}
    </div>
  );
}

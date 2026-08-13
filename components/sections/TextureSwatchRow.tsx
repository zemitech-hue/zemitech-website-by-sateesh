import Image from "next/image";

export type Swatch = { src: string; label: string; tier?: "₹" | "₹₹" | "₹₹₹" };

export default function TextureSwatchRow({ title, swatches }: { title?: string; swatches: Swatch[] }) {
  return (
    <div>
      {title && <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-4">{title}</p>}
      <div className="flex flex-wrap gap-4">
        {swatches.map((s) => (
          <div key={s.src + s.label} className="w-28 sm:w-32">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-line reg-corners">
              <Image src={s.src} alt={`${s.label} texture swatch`} fill className="object-cover" sizes="128px" />
            </div>
            <p className="mt-2 text-xs font-medium text-blue-950">{s.label}</p>
            {s.tier && <p className="text-[11px] font-mono-label text-green-700">{s.tier}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

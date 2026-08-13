import CaptionedImage from "@/components/ui/CaptionedImage";

export type VisualStep = { title: string; description: string; image: string; alt: string };

export default function StepsWithImages({ steps }: { steps: VisualStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col h-full relative overflow-hidden group border border-slate-200 shadow-md hover:border-blue-700/60 hover:shadow-2xl transition-all duration-300"
        >
          {/* Large Aspect Image Container */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200">
            <CaptionedImage src={step.image} alt={step.alt} aspect="aspect-[16/10]" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-4 left-4 w-10 h-10 rounded-full bg-blue-950/90 text-green-400 font-mono-label font-bold text-base flex items-center justify-center border border-white/20 shadow-md">
              0{i + 1}
            </span>
          </div>

          {/* Process Heading & Description Below Image */}
          <div className="mt-6 flex flex-col flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
              {step.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed flex-1">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

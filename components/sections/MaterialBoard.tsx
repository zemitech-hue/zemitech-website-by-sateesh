import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";

interface MaterialBoardProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  materials: { name: string; image?: string; description?: string }[];
}

export default function MaterialBoard({ eyebrow, title, sub, materials }: MaterialBoardProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {materials.slice(0, 4).map((mat) => (
            <div key={mat.name} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
              <div className="relative aspect-square w-full">
                <GracefulImage
                  src={mat.image}
                  alt={mat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                <p className="font-bold text-slate-900 text-sm sm:text-base text-center group-hover:text-blue-700 transition-colors">{mat.name}</p>
                {mat.description && (
                  <p className="text-xs text-slate-500 mt-1 text-center line-clamp-2">{mat.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

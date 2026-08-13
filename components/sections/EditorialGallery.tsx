import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";

interface EditorialGalleryProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  images: { src?: string; caption?: string }[];
}

export default function EditorialGallery({ eyebrow, title, sub, images }: EditorialGalleryProps) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        
        {/* 2x2 Grid for editorial feel */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {images.slice(0, 4).map((img, idx) => {
            return (
              <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:min-h-[400px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
                <GracefulImage
                  src={img.src}
                  alt={img.caption || `Editorial image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {img.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                    <p className="text-white text-base font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

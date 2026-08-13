import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceProblemCardsProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  cards: { title: string; image?: string; description?: string }[];
}

export default function ServiceProblemCards({ eyebrow, title, sub, cards }: ServiceProblemCardsProps) {
  const isFourCards = cards.length === 4;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        <div
          className={`mt-14 grid gap-6 lg:gap-8 ${
            isFourCards
              ? "grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto"
              : cards.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
              : cards.length === 3
              ? "grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-blue-300 transition-all duration-300">
                {card.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <GracefulImage
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="group-hover:scale-105 transition-transform duration-500 ease-out object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed flex-1">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

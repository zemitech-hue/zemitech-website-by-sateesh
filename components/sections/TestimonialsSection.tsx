import SectionHeading from "@/components/ui/SectionHeading";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="py-20 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 mb-14 text-center">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What clients across Pune say after handover"
          sub="Real experiences from homeowners, villa builders, and office managers who hired Zemitech Urban."
          align="center"
        />
      </div>

      {/* Row 1: Scrolling Left */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="flex w-max gap-6 animate-marquee">
          {row1.concat(row1).concat(row1).map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right (Opposite Direction) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee-reverse">
          {row2.concat(row2).concat(row2).map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[360px] sm:w-[420px] shrink-0 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md flex flex-col justify-between group hover:border-blue-700/50 hover:shadow-xl transition-all duration-300">
      <div>
        {/* Star Rating */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1 text-amber-400 text-sm" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < testimonial.rating ? "" : "text-slate-200"}>★</span>
            ))}
          </div>
          <span className="text-[10px] font-mono-label uppercase tracking-widest text-blue-700 font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
            {testimonial.project}
          </span>
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
          “{testimonial.quote}”
        </p>
      </div>

      {/* Client details */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3.5">
        <InitialsAvatar name={testimonial.name} className="w-11 h-11 text-sm border-2 border-blue-700/60" />
        <div>
          <h4 className="text-sm font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500 font-mono-label">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

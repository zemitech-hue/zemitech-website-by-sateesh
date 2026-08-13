import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  serviceTag: string;
  image: string;
};

const row1Testimonials: Testimonial[] = [
  {
    quote: "Zemitech Urban completed our 4BHK bungalow construction in Narhe 2 weeks ahead of our Griha Pravesh. The fixed BOQ saved us from cost overruns.",
    name: "Prashant Deshmukh",
    location: "Narhe, Pune",
    serviceTag: "Residential Villa Construction",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    quote: "Our parallel modular kitchen in Kondhwa turned out exactly like the 3D render. Marine-grade ply and soft-close hinges were top quality.",
    name: "Ritika Shah",
    location: "Kondhwa, Pune",
    serviceTag: "Modular Kitchen Interior",
    image: "/images/testimonials/avatar-2.jpg",
  },
  {
    quote: "Our office fit-out in Hinjewadi IT Park had a tight 45-day deadline before lease start. Zemitech handled HVAC, fire, and carpentry seamlessly.",
    name: "Aniket Rane",
    location: "Hinjewadi, Pune",
    serviceTag: "Commercial Office Fit-Out",
    image: "/images/testimonials/avatar-3.jpg",
  },
];

const row2Testimonials: Testimonial[] = [
  {
    quote: "We hired Zemitech Urban for living room false ceiling and TV unit joinery in Viman Nagar. Clean finishing and daily site photo updates!",
    name: "Sunita Patil",
    location: "Viman Nagar, Pune",
    serviceTag: "Living Room Interior",
    image: "/images/testimonials/avatar-4.jpg",
  },
  {
    quote: "Building twin independent villas in Wagholi was smooth. Their site engineer was on location every single day, keeping civil quality top-notch.",
    name: "Vikram Oswal",
    location: "Wagholi, Pune",
    serviceTag: "Independent Villa Construction",
    image: "/images/testimonials/avatar-5.jpg",
  },
  {
    quote: "Master bedroom wardrobes and storage bed joinery delivered in Baner with zero dust issues. Transparent pricing from day one.",
    name: "Dr. Meera Kulkarni",
    location: "Baner, Pune",
    serviceTag: "Bedroom Joinery & Interior",
    image: "/images/testimonials/avatar-6.jpg",
  },
];

export default function TestimonialsSection() {
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
          {row1Testimonials.concat(row1Testimonials).concat(row1Testimonials).map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right (Opposite Direction) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee-reverse">
          {row2Testimonials.concat(row2Testimonials).concat(row2Testimonials).map((t, i) => (
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
          <div className="flex items-center gap-1 text-amber-400 text-sm">
            {"★★★★★".split("").map((star, idx) => (
              <span key={idx}>{star}</span>
            ))}
          </div>
          <span className="text-[10px] font-mono-label uppercase tracking-widest text-blue-700 font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
            {testimonial.serviceTag}
          </span>
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
          “{testimonial.quote}”
        </p>
      </div>

      {/* Client Avatar & Details */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3.5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-700/60 shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
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

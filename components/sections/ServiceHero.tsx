import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GracefulImage from "@/components/ui/GracefulImage";

interface ServiceHeroProps {
  headline: string;
  copy: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  /** @deprecated breadcrumbs are no longer shown in the hero */
  breadcrumbs?: { name: string; href: string }[];
}

export default function ServiceHero({
  headline,
  copy,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
}: ServiceHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200"
      style={{ height: '100dvh', minHeight: '100svh' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <GracefulImage
          src={image}
          alt={headline}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed border-l-4 border-green-400 pl-4 max-w-2xl">
            {copy}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryCtaLink} variant="primary">
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button
                href={secondaryCtaLink}
                variant="outline"
                className="text-white border-white/60 hover:border-white"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import { leadership, departments, widerTeam } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet Zemitech Urban's leadership team and the site engineers, designers and coordinators who deliver every construction & interior project.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        headline="The people behind every handover"
        sub="Zemitech Urban is led by a small team of engineers and advisers who stay close to every active project — backed by the site, design and coordination teams who actually build it."
        image="/images/team/hero-team.png"
        breadcrumbs={[{ name: "Team", href: "/team" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Leadership" title="Directors & advisers" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <div key={member.name} className="rounded-2xl border border-line bg-white overflow-hidden p-6">
                <InitialsAvatar name={member.name} className="w-16 h-16 text-lg" />
                <p className="font-semibold text-blue-950 mt-4">{member.name}</p>
                <p className="text-sm text-green-700 font-mono-label uppercase tracking-wide text-xs mt-0.5">{member.role}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="How We're Organized" title="Departments" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {departments.map((d) => (
              <div key={d.name} className="rounded-2xl bg-white border border-line p-6">
                <p className="font-semibold text-blue-950">{d.name}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Meet the wider team */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Beyond Leadership"
            title="Meet the wider team"
            sub="The people on site and in the studio every day. We list these as functions and indicative headcounts rather than individual profiles, since these are working teams with some rotation project to project."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {widerTeam.map((t, i) => (
              <ScrollReveal key={t.role} delay={i * 60}>
                <div className="rounded-2xl border border-line bg-white p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-mono-label text-xs font-semibold">
                    {t.role.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <p className="font-semibold text-blue-950 mt-4">{t.role}</p>
                  <p className="text-xs font-mono-label text-green-700 uppercase tracking-wide mt-1">{t.count}</p>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{t.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Want to talk to the team directly?" />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { getTeamMembers } from "@/lib/supabase/queries";
import { departments, widerTeam } from "@/lib/data/team";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team — Zemitech Urban Engineers & Designers",
  description: "Meet Zemitech Urban's leadership team and the site engineers, designers and coordinators who deliver every construction & interior project.",
  alternates: { canonical: "/team" },
};

export const revalidate = 60;

export default async function TeamPage() {
  const dbMembers = await getTeamMembers();
  const siteUrl = `https://${company.domain}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Team", url: `${siteUrl}/team` },
        ])}
      />
      <PageHero
        eyebrow="Our Team"
        headline="The people behind every handover"
        sub="Zemitech Urban is led by a dedicated team of site engineers, architects, and project managers who stay close to every active site across Pune."
        image="/images/about/hero.png"
        breadcrumbs={[{ name: "Team", href: "/team" }]}
      />

      {/* Dynamic Team Members Section from Supabase */}
      {dbMembers.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <SectionHeading
              eyebrow="Key Team Members"
              title="Engineers, Architects & Project Heads"
              sub="Our in-house leadership team responsible for site execution, quality compliance, and 3D interior design."
              align="center"
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dbMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {member.image_url ? (
                        <Image
                          src={member.image_url}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <InitialsAvatar name={member.name} className="w-full h-full text-xl" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono-label font-bold text-amber-600 uppercase tracking-wide mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>{member.experience} Experience</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">In-House Staff</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Departments */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionHeading eyebrow="Structure" title="Engineering & Design Departments" align="center" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {departments.map((d) => (
              <div key={d.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <p className="font-bold text-blue-950 text-lg">{d.name}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Meet the wider team */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="On-Site Personnel"
            title="Site Supervisors & Trade Specialists"
            sub="Our site engineers, master carpenters, RCC supervisors, and quality auditors working on-site daily."
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {widerTeam.map((t, i) => (
              <ScrollReveal key={t.role} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-mono-label text-xs font-bold">
                    {t.role.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <p className="font-bold text-blue-950 mt-4">{t.role}</p>
                  <p className="text-xs font-mono-label text-emerald-600 uppercase tracking-wide font-bold mt-1">{t.count}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{t.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Want to talk to our site engineering team directly?" />
    </>
  );
}

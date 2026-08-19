import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContinuousTeamCarousel from "@/components/sections/ContinuousTeamCarousel";
import { getTeamMembers } from "@/lib/supabase/queries";

export default async function AboutTeamSection() {
  const members = await getTeamMembers();

  if (members.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Our Leadership & Engineers"
          title="Meet Our Professional Team"
          sub="Our in-house leadership team responsible for site execution, structural quality compliance, and 3D interior design."
          align="center"
        />
      </Container>

      {/* Infinite Continuous Scrolling Team Cards */}
      <div className="mt-12">
        <ContinuousTeamCarousel members={members} />
      </div>
    </section>
  );
}

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCarousel from "@/components/sections/TeamCarousel";
import { getTeamMembers } from "@/lib/supabase/queries";

export default async function AboutTeamSection() {
  const members = await getTeamMembers();

  if (members.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Our Leadership & Engineers"
          title="Meet Our Professional Team"
          sub="Our in-house leadership team responsible for site execution, structural quality compliance, and 3D interior design."
          align="center"
        />

        <div className="mt-12">
          <TeamCarousel members={members} />
        </div>
      </Container>
    </section>
  );
}

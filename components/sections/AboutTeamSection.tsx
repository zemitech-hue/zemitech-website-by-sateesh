import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { getTeamMembers } from "@/lib/supabase/queries";

export default async function AboutTeamSection() {
  const members = await getTeamMembers();

  if (members.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Our Leadership & Engineers"
          title="Meet Our Professional Team"
          sub="Our in-house leadership team responsible for site execution, structural quality compliance, and 3D interior design."
          align="center"
        />

        {/* Elegant Modern Portrait Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

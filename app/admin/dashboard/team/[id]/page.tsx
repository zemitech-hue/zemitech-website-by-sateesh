import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, UserCog } from "lucide-react";
import AddTeamMemberForm from "../new/AddTeamMemberForm";
import { getTeamMemberByIdForAdmin } from "@/lib/supabase/queries";
import { updateTeamMember } from "@/lib/supabase/actions";

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = await getTeamMemberByIdForAdmin(id);
  if (!member) return notFound();

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link
          href="/admin/dashboard/team"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-700 mb-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Team Members</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight flex items-center gap-2">
          <UserCog className="w-6 h-6 text-blue-700" />
          <span>Edit Employee</span>
        </h1>
      </div>

      <AddTeamMemberForm member={member} action={updateTeamMember.bind(null, id)} />
    </div>
  );
}

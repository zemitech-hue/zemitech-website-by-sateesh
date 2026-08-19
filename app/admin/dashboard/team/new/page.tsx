import Link from "next/link";
import AddTeamMemberForm from "./AddTeamMemberForm";
import { ArrowLeft, UserPlus } from "lucide-react";

export default function AddNewTeamMemberPage() {
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
          <UserPlus className="w-6 h-6 text-blue-700" />
          <span>Add New Employee</span>
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Enter basic employee information to add a team member profile.
        </p>
      </div>

      <AddTeamMemberForm />
    </div>
  );
}

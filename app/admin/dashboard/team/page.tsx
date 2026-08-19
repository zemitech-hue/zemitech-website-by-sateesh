import Link from "next/link";
import Image from "next/image";
import { getTeamMembers } from "@/lib/supabase/queries";
import { deleteTeamMember } from "@/lib/supabase/actions";
import { Users, Plus, Trash2, Award, UserCheck, AlertCircle } from "lucide-react";
import InitialsAvatar from "@/components/ui/InitialsAvatar";

export default async function TeamMembersPage() {
  const members = await getTeamMembers();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 font-mono-label text-xs font-bold uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Employee Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Team Members
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Add and manage engineers, designers, and site project managers displayed on website team pages.
          </p>
        </div>

        <Link
          href="/admin/dashboard/team/new"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-5 py-3 rounded-xl shadow-md transition-all shrink-0 border border-amber-300"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Employee</span>
        </Link>
      </div>

      {/* Empty State when no real employees exist */}
      {members.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center max-w-xl mx-auto my-12 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
            <UserCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-slate-950">No Real Employees Added Yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              All fake sample data has been removed. Upload real employee photos and details to display your active team.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/admin/dashboard/team/new"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-md border border-amber-300 hover:scale-105 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add First Employee</span>
            </Link>
          </div>
        </div>
      ) : (
        /* Real Employee Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200 shadow-xs">
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

                <h3 className="text-lg font-extrabold text-slate-950">{member.name}</h3>
                <p className="text-xs font-mono-label font-bold text-amber-600 uppercase tracking-wide mt-0.5">{member.role}</p>

                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{member.experience} Experience</span>
                </div>
              </div>

              <form
                action={async () => {
                  "use server";
                  await deleteTeamMember(member.id);
                }}
                className="mt-6 pt-4 border-t border-slate-100 flex justify-end"
              >
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Employee</span>
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

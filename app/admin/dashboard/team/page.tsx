import Link from "next/link";
import Image from "next/image";
import { getTeamMembersForAdmin } from "@/lib/supabase/queries";
import { deleteTeamMember } from "@/lib/supabase/actions";
import { Users, Plus, Award, UserCheck, Pencil, Info, AlertCircle } from "lucide-react";
import DeleteButton from "@/components/admin/DeleteButton";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import { formatTeamMember } from "@/components/ui/TeamMemberCard";
import ImportDefaultTeamButton from "@/components/admin/ImportDefaultTeamButton";
import { needsUnoptimizedImage } from "@/lib/utils";

export default async function TeamMembersPage() {
  const { members, source, error } = await getTeamMembersForAdmin();
  const editable = source !== "defaults";

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

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-bold flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <span>Couldn&apos;t load team members from Supabase: {error}</span>
        </div>
      )}

      {source === "defaults" && !error && (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-extrabold text-slate-950">The website is showing the built-in team</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Your database has no team members yet. Import these to edit or remove them, or add a new employee —
                once the database has members, only those are shown on the website.
              </p>
            </div>
          </div>
          <ImportDefaultTeamButton />
        </div>
      )}

      {source === "local" && (
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <span>Local mode — no Supabase project connected, so changes are saved to lib/data/team-members.json on this machine only.</span>
        </div>
      )}

      {/* Empty State when no real employees exist */}
      {members.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center max-w-xl mx-auto my-12 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
            <UserCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-slate-950">No Employees Added Yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Add employee photos and details to show your team on the website.
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
          {members.map((rawMember) => {
            const member = formatTeamMember(rawMember);
            return (
              <div
                key={member.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200 shadow-xs">
                    {member.image_url ? (
                      <Image
                        src={member.image_url}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                        unoptimized={needsUnoptimizedImage(member.image_url)}
                      />
                    ) : (
                      <InitialsAvatar name={member.name} className="w-full h-full text-xl" />
                    )}
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-950">{member.name}</h3>
                  <p className="text-xs font-mono-label font-bold text-amber-600 uppercase tracking-wide mt-0.5">{member.role}</p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{member.experienceBadge}</span>
                  </div>
                </div>

              {editable && (
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <Link
                  href={`/admin/dashboard/team/${member.id}`}
                  className="inline-flex items-center gap-1.5 h-10 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  Edit
                </Link>
                <DeleteButton id={member.id} action={deleteTeamMember} label="employee" />
              </div>
              )}
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}

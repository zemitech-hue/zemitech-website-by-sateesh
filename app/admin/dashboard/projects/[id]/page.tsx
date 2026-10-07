import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import { getProjectByIdForAdmin } from "@/lib/supabase/queries";
import { updateProject } from "@/lib/supabase/actions";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectByIdForAdmin(id);
  if (!project) return notFound();

  return <ProjectForm project={project} action={updateProject.bind(null, id)} />;
}

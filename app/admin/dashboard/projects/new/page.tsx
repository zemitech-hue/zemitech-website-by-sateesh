import ProjectForm from "@/components/admin/ProjectForm";
import { createProject } from "@/lib/supabase/actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-950 mb-6">New project</h1>
      <ProjectForm action={createProject} />
    </div>
  );
}

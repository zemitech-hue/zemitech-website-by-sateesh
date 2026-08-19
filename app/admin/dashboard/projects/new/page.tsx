import PhotoProjectForm from "@/components/admin/PhotoProjectForm";
import { createProject } from "@/lib/supabase/actions";

export default function NewPhotoProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-blue-950 mb-6">Upload Property Photo</h1>
      <PhotoProjectForm action={createProject} />
    </div>
  );
}

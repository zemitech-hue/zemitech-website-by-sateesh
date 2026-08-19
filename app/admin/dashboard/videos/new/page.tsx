import VideoProjectForm from "@/components/admin/VideoProjectForm";
import { createProject } from "@/lib/supabase/actions";

export default function NewVideoPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-blue-950 mb-6">Upload YouTube Video Reel</h1>
      <VideoProjectForm action={createProject} />
    </div>
  );
}

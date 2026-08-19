import CompanySettingsForm from "./CompanySettingsForm";
import { getCompanySettings } from "@/lib/supabase/queries";
import { MapPin } from "lucide-react";

export default async function CompanySettingsPage() {
  const settings = await getCompanySettings();

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-blue-700 font-mono-label text-xs font-bold uppercase tracking-wider mb-1">
          <MapPin className="w-4 h-4" />
          <span>Contact &amp; Location Profile</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
          Company Settings
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Update official office address, contact email, and phone number synced across the website.
        </p>
      </div>

      <CompanySettingsForm initialSettings={settings} />
    </div>
  );
}

import AdminDashboardLayoutClient from "@/components/admin/AdminDashboardLayoutClient";
import { signOut } from "@/lib/supabase/actions";

// The dashboard must always show the live database, never a build-time snapshot.
export const dynamic = "force-dynamic";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return <AdminDashboardLayoutClient signOutAction={signOut}>{children}</AdminDashboardLayoutClient>;
}

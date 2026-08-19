import AdminDashboardLayoutClient from "@/components/admin/AdminDashboardLayoutClient";
import { signOut } from "@/lib/supabase/actions";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return <AdminDashboardLayoutClient signOutAction={signOut}>{children}</AdminDashboardLayoutClient>;
}

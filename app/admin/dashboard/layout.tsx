import AdminSidebar from "@/components/admin/AdminSidebar";
import RequireAdminAuth from "@/components/admin/RequireAdminAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAdminAuth>
      <div className="flex flex-col lg:flex-row">
        <AdminSidebar />
        <main className="flex-1 p-5 sm:p-8 max-w-6xl">{children}</main>
      </div>
    </RequireAdminAuth>
  );
}

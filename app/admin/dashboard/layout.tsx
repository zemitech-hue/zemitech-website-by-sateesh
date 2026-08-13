import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Building2, Newspaper, LogOut, ExternalLink } from "lucide-react";
import { signOut } from "@/lib/supabase/actions";

const navItems = [
  { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/dashboard/projects", label: "Projects", icon: Building2 },
  { href: "/admin/dashboard/blog", label: "Blog", icon: Newspaper },
];

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-bg-tint">
      <aside className="w-64 shrink-0 bg-blue-950 text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Image src="/images/brand/zemitech-urban-logo-white.png" alt="Zemitech Urban" width={150} height={38} />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View site
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8 max-w-5xl">{children}</main>
    </div>
  );
}

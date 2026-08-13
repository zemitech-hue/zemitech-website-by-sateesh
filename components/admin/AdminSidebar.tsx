"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "Overview", href: "/admin/dashboard" },
  { label: "Projects", href: "/admin/dashboard/projects" },
  { label: "Gallery / Photos", href: "/admin/dashboard/media" },
  { label: "YouTube & Instagram", href: "/admin/dashboard/videos" },
  { label: "Site Settings", href: "/admin/dashboard/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    document.cookie = "zu_admin_session=; Max-Age=0; path=/";
    router.push("/admin");
  }

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-blue-950 text-blue-50 lg:min-h-screen">
      <div className="p-5 border-b border-white/10 flex items-center gap-2">
        <div className="inline-block bg-white rounded-lg px-2.5 py-1.5">
          <Image src="/images/brand/zemitech-urban-logo.png" alt="Zemitech Urban" width={140} height={36} className="h-7 w-auto" />
        </div>
      </div>
      <nav className="p-3 flex lg:flex-col gap-1 overflow-x-auto">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? "bg-green-500 text-blue-950" : "text-blue-100/80 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 mt-auto border-t border-white/10 hidden lg:block">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100/70 hover:bg-white/10 transition-colors"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
}

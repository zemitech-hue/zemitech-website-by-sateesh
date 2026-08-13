"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RequireAdminAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasSession = document.cookie.includes("zu_admin_session=");
    if (!hasSession) {
      router.replace("/admin");
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-ink-soft text-sm">
        Checking session...
      </div>
    );
  }

  return <>{children}</>;
}

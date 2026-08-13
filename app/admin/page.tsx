"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // DEMO-ONLY AUTH. Before launch, replace this with real authentication —
    // e.g. Supabase Auth email/password or magic link — and verify the
    // session server-side (middleware.ts) rather than trusting a client cookie.
    if (email.trim() && password.trim()) {
      document.cookie = "zu_admin_session=demo; path=/; max-age=86400";
      router.push("/admin/dashboard");
    } else {
      setError("Enter an email and password to continue.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 blueprint-grid-dark px-4">
      <Container className="max-w-sm">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <Image src="/images/brand/zemitech-urban-logo.png" alt="Zemitech Urban" width={160} height={42} className="h-10 w-auto" />
          </div>
          <p className="text-center font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">
            Admin Panel
          </p>
          <h1 className="text-center text-xl font-semibold text-blue-950 mb-6">Sign in to manage your site</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-950 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@zemitechurban.com"
                className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-950 mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-ink-soft text-center mt-5">
            Demo login — any email/password combination works. Wire real authentication before launch.
          </p>
        </div>
      </Container>
    </div>
  );
}

"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { signIn } from "@/lib/supabase/actions";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-tint px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-line p-8 shadow-sm">
        <div className="flex justify-center mb-6">
          <Image src="/images/brand/zemitech-urban-logo.png" alt="Zemitech Urban" width={160} height={40} />
        </div>
        <h1 className="text-xl font-semibold text-blue-950 text-center mb-1">Admin sign in</h1>
        <p className="text-sm text-ink-soft text-center mb-6">Projects &amp; blog management</p>

        <form
          action={(formData) => {
            setError(null);
            startTransition(async () => {
              const result = await signIn(formData);
              if (result?.error) setError(result.error);
            });
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold disabled:opacity-60"
          >
            {isPending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

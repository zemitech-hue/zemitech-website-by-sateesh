import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

// True once NEXT_PUBLIC_SUPABASE_URL/ANON_KEY are set in .env.local — until
// then, callers should skip hitting Supabase entirely rather than crash the
// page (see lib/supabase/queries.ts), since this repo ships with no backend
// wired up by default.
export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// Client for public data reads (projects, blogs, team, settings).
// Does not call cookies(), allowing Next.js to statically prerender public pages (ISR).
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Server Component / Server Action / Route Handler client — reads and
// writes the auth session via cookies. Server Components can't set cookies,
// so the setAll() call there is wrapped in a try/catch and relies on
// proxy.ts to keep the session refreshed instead.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component — proxy.ts refreshes instead.
          }
        },
      },
    }
  );
}


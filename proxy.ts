import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Next.js 16 renamed middleware.ts -> proxy.ts (same mechanics, new file/
// export name). This refreshes the Supabase auth session on every request
// and gates /admin/dashboard behind a signed-in session.
export async function proxy(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/dashboard");

  // No Supabase project connected yet (see .env.local.example) — there's no
  // way to have a session, so just bounce straight to the login page (which
  // explains what's missing) instead of crashing on client creation below.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    if (isAdminRoute) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isAdminRoute && !user) {
    const loginUrl = new URL("/admin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};

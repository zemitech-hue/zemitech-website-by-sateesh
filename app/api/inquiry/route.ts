import { NextRequest, NextResponse } from "next/server";

// TODO before launch: persist this to Supabase (an `inquiries` table) and/or
// forward via email (e.g. Resend) and a WhatsApp Business API notification.
// For now this validates the payload and logs it server-side so the form is
// fully functional end-to-end during development and demo.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email } = body ?? {};

    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Name, phone and email are required." },
        { status: 400 }
      );
    }

    console.log("[inquiry] New enquiry received:", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX_LEN = 500;

type Body = {
  fullName?: string;
  email?: string;
  /** City / town and country — stored in `location` */
  location?: string;
  /** Nearest beach / coastline — stored in `beach` */
  beach?: string;
};

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = trim(body.fullName, MAX_LEN);
  const email = trim(body.email, MAX_LEN).toLowerCase();
  const location = trim(body.location, MAX_LEN);
  const beach = trim(body.beach, MAX_LEN);

  if (!fullName || !email || !location || !beach) {
    return NextResponse.json(
      {
        error:
          "Please add your name, email, your beach, and where you're based.",
      },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("registrations").insert({
      full_name: fullName,
      email,
      location,
      beach,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json(
        { error: "Could not save registration. Try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Registration is not configured. Check server environment." },
      { status: 503 }
    );
  }
}

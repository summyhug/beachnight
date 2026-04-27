import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

/**
 * Visitor country hint from the edge (no GPS). Vercel: x-vercel-ip-country.
 * Cloudflare: cf-ipcountry. Local dev usually returns null — client falls back to default order.
 */
export async function GET() {
  try {
    const h = headers();
    const raw =
      h.get("x-vercel-ip-country") ??
      h.get("cf-ipcountry") ??
      h.get("cloudfront-viewer-country") ??
      null;

    const country = raw ? raw.trim().toUpperCase() : null;
    return NextResponse.json({
      country: country && country.length === 2 ? country : null,
    });
  } catch {
    return NextResponse.json({ country: null });
  }
}

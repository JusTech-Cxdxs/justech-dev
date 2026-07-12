// Contact form endpoint.
// Security notes for the real implementation (next steps):
//  - validate + sanitize all fields server-side (never trust client input)
//  - rate-limit by IP to prevent abuse/spam
//  - use an env-configured mail provider (no secrets committed to the repo)
//  - return generic error messages (don't leak stack traces or internals)
import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
  // TODO: implement in the contact-form build step.
  return NextResponse.json({ ok: true });
}

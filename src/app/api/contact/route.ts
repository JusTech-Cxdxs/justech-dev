import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter — fine for a single-instance deploy. On serverless
// platforms with multiple instances, swap this for a shared store (e.g.
// Upstash Redis) if abuse becomes a real concern.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Strips characters with no legitimate place in a plain-text field,
// as a defense-in-depth measure alongside proper output encoding
// wherever this data is ever rendered.
function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, email, subject, message, company } = body as Record<string, unknown>;

    // Honeypot: a hidden field real users never fill in. If it's populated,
    // silently accept without processing — don't tip off the bot.
    if (typeof company === "string" && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const cleanName = sanitize(name).slice(0, 120);
    const cleanEmail = sanitize(email).slice(0, 200);
    const cleanSubject = sanitize(subject).slice(0, 150);
    const cleanMessage = sanitize(message).slice(0, 4000);

    if (!cleanName || !cleanEmail || !cleanSubject || cleanMessage.length < 10) {
      return NextResponse.json({ error: "Please fill in every field with a valid message." }, { status: 400 });
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Wire up a real provider here (e.g. Resend, SendGrid, SMTP) using
    // credentials from environment variables — never hard-code API keys.
    // Example:
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${process.env.CONTACT_EMAIL_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       from: "portfolio@yourdomain.com",
    //       to: process.env.CONTACT_EMAIL_TO,
    //       subject: `Portfolio contact: ${cleanSubject}`,
    //       text: `From: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
    //     }),
    //   });
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] new message", { name: cleanName, email: cleanEmail, subject: cleanSubject });
    }

    return NextResponse.json({ ok: true });
  } catch {
    // Never leak internals (stack traces, error details) to the client.
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

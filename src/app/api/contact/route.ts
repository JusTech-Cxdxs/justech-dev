import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const timestamps =
    (hits.get(ip) ?? []).filter(
      (t) => now - t < RATE_LIMIT_WINDOW_MS
    );

  timestamps.push(now);

  hits.set(ip, timestamps);

  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers
        .get("x-forwarded-for")
        ?.split(",")[0]
        ?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
        }
      );
    }

    const body = await req.json();

    const {
      name,
      email,
      subject,
      message,
      company,
    } = body;

    // Honeypot
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        {
          error: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Justice Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL_TO,
        reply_to: cleanEmail,
        subject: `Portfolio Contact: ${cleanSubject}`,
        html: `
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${cleanName}</p>

          <p><strong>Email:</strong> ${cleanEmail}</p>

          <p><strong>Subject:</strong> ${cleanSubject}</p>

          <hr/>

          <p>${cleanMessage.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!resend.ok) {
      const error = await resend.text();

      console.error(error);

      return NextResponse.json(
        {
          error: "Unable to send email.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}

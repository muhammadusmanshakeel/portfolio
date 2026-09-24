import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact-validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = body as Record<string, unknown>;

  // Honeypot: pretend success to bots
  if (typeof payload.company === "string" && payload.company.trim()) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const result = validateContactPayload({
    name: typeof payload.name === "string" ? payload.name : "",
    email: typeof payload.email === "string" ? payload.email : "",
    message: typeof payload.message === "string" ? payload.message : "",
    projectType:
      typeof payload.projectType === "string" ? payload.projectType : "",
    budget: typeof payload.budget === "string" ? payload.budget : "",
    company: "",
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          source: "portfolio-contact",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: "Delivery failed. Please try again later.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true, delivered: true });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "Delivery failed. Please try again later.",
        },
        { status: 502 },
      );
    }
  }

  // Validated but no delivery configured — honest response for setup
  return NextResponse.json({
    ok: true,
    delivered: false,
    message:
      "Message validated. Configure CONTACT_WEBHOOK_URL to enable delivery.",
  });
}

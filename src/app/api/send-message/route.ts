import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { validateEnquiry, enquiryText } from "@/lib/enquiry";
export const runtime = "nodejs";
const unavailable = () =>
  NextResponse.json(
    {
      success: false,
      message:
        "The enquiry form is temporarily unavailable. Please email kavnish1245@gmail.com.",
    },
    { status: 503 },
  );
// Atomic shared limits: each key expires with its first increment, across all server instances.
const limitScript = `local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]); end; return count`;
async function rateLimit(key: string, maximum: number) {
  const response = await fetch(process.env.UPSTASH_REDIS_REST_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", limitScript, "1", key, "3600"]),
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error("Rate limit unavailable");
  const result = await response.json();
  if (result.error || typeof result.result !== "number")
    throw new Error("Invalid rate limit response");
  return result.result <= maximum;
}
export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { success: false, message: "Expected JSON." },
      { status: 415 },
    );
  const origin = request.headers.get("origin");
  if (
    origin &&
    origin !== new URL(request.url).origin &&
    origin !== "https://www.avnishgupta.dev" &&
    origin !== "https://avnishgupta.dev"
  )
    return NextResponse.json(
      { success: false, message: "Invalid request origin." },
      { status: 403 },
    );
  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 20000) {
        await reader.cancel();
        return NextResponse.json(
          { success: false, message: "Request is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json(
      { success: false, message: "Please provide valid project details." },
      { status: 400 },
    );
  }
  const validation = validateEnquiry(raw);
  if (!validation.ok)
    return NextResponse.json(
      { success: false, message: validation.message },
      { status: 400 },
    );
  const { data } = validation;
  if (data.website)
    return NextResponse.json(
      {
        success: false,
        message:
          "This submission could not be accepted. Please email directly.",
      },
      { status: 400 },
    );
  const required = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "CONTACT_TO_EMAIL",
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
    "CONTACT_RATE_LIMIT_SECRET",
  ];
  if (required.some((key) => !process.env[key])) return unavailable();
  try {
    const hash = (value: string) =>
      createHmac("sha256", process.env.CONTACT_RATE_LIMIT_SECRET!)
        .update(value)
        .digest("hex");
    // Vercel overwrites this header. Outside Vercel, rely on the shared global and email limits.
    const ip = process.env.VERCEL
      ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim()
      : undefined;
    const limits = await Promise.all([
      rateLimit("portfolio:contact:global", 50),
      rateLimit(`portfolio:contact:email:${hash(data.email.toLowerCase())}`, 3),
      ...(ip ? [rateLimit(`portfolio:contact:ip:${hash(ip)}`, 5)] : []),
    ]);
    if (limits.some((allowed) => !allowed))
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many enquiries. Please try again in an hour or email directly.",
        },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    const port = Number(process.env.SMTP_PORT);
    if (!Number.isInteger(port) || port < 1 || port > 65535)
      return unavailable();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
      connectionTimeout: 10000,
      socketTimeout: 15000,
    });
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `Portfolio enquiry: ${data.service || "New project"}`,
      text: enquiryText(data),
    });
    if (!info.accepted?.length) return unavailable();
    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been sent. Thank you for sharing your project.",
    });
  } catch {
    console.error(
      "Contact submission failed: check SMTP and shared rate-limit configuration.",
    );
    return unavailable();
  }
}

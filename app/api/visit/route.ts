import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { url, path, referrer, userAgent, timestamp } = await req.json();

    if (!url || !path) {
      return NextResponse.json({ success: false, error: "missing payload" }, { status: 400 });
    }

    // Load environment variables from Vercel
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_SECURE = process.env.SMTP_SECURE === "true";
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ success: false, error: "SMTP environment variables missing" }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Optional: log for debugging
    console.log("Sending email to:", RECEIVER_EMAIL);

    // Ensure timestamp is string
    const timeString = timestamp ? String(timestamp) : new Date().toISOString();

    await transporter.sendMail({
      from: `"Website Tracker" <${SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      subject: "🚀 New Visitor on Loopera.tech",
      text: [
        "Someone just visited your website!",
        `- URL: ${url}`,
        `- Path: ${path}`,
        `- Referrer: ${referrer || "none"}`,
        `- User Agent: ${userAgent || "unknown"}`,
        `- Time: ${timeString}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: String(error?.message ?? error) }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.EMAIL_API_KEY);

  try {
    const { firstName, lastName, email, message } = await req.json();

    await resend.emails.send({
      from: `EctoEcology Contact Submission <${process.env.NO_REPLY_EMAIL}>`,
      to: [process.env.MY_EMAIL_ADDRESS],
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `<p>hi this is an email from ${firstName} ${lastName} i want ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`booooooo: `, error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}

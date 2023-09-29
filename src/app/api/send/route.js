import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <hugo.martineu@gmail.com>",
      to: ["hugo.martineu@gmail.com"],
      subject: "Contact Form Portfolio",
      react: EmailTemplate({ name: "Hugo" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
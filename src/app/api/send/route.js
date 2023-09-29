import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { email, subject, message } = req.body;
    
    try {
      const data = await resend.emails.send({
        from: "Portfolio Contact <hugo.martineu@gmail.com>",
        to: ["hugo.martineu@gmail.com"],
        subject: subject,
        react: EmailTemplate({ name: "Hugo", message: message }),
      });
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
  }
  
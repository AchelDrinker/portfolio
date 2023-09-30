import { NextApiResponse, NextApiRequest, NextApiHandler } from "next";
import { Resend } from "resend";
import { EmailTemplate } from '../../src/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, subject, message } = req.body;
  
  try {
    const data = await resend.emails.send({
      from: `Portfolio Contact <${email}>`,
      to: ["hugo.martineu@gmail.com"],
      subject: subject,
      text: message,
      react: EmailTemplate({
        name: '',
        message: message,
      }),
    });

    return res.json(data);
  } catch (error) {
    console.error("Erreur d'envoi de l'email: ", error);
    return res.status(500).json({ error });
  }
};

export default emailHandler;
import { EmailTemplate } from '../../src/app/components/EmailTemplate';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const {fullname, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: `Portfolio : ${fullname} <${email}>`,
      to: ['hugo.martineu@gmail.com'],
      subject: subject,
      text: message,
      react: EmailTemplate({ name: fullname, subject:subject, message: message }),
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error("Erreur d'envoi de l'email: ", error);
    return res.status(500).json({ error });
  }
};

export default emailHandler;

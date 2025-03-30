'use server';

import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function SendEmail({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  await transport.sendMail({
    subject: 'Contact from jameystock.dev',
    from: email,
    to: 'jameystock.dev@gmail.com',
    text: message,
  });
}

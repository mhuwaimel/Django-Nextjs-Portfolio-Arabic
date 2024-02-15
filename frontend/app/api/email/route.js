import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const body = request.body;
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
           subject: ${body.subject}\r\n
            Message: ${body.message}\r\n
  `;
  const { data, error } = await resend.emails.send({
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_GOOGLE_TO_EMAIL,
    subject: "التواصل معي - موقعي الشخصي",
    html: message.replace(/\r\n/g, "<br>"),
  });


  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
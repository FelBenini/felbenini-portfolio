import { NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(req: Request) {
  const {name, lastName, email, message} = await req.json();

  const regexp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  const emailIsValid = regexp.test(email);

  if (!emailIsValid) {
    return NextResponse.json({message: "E-mail is not valid"}, {status: 400})
  }

  const resend = new Resend(process.env.RESEND);

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'felbenini@gmail.com',
    subject: 'E-mail sent on portfolio website by ' + email,
    html: `<h3>E-mail sent by ${name} ${lastName} with ${email}</h3>
      <p>${message}</p>`
  });

  return new NextResponse;
}

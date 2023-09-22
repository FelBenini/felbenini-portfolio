import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export function GET() {
  return NextResponse.json({'message': 'this should be my mailer'});
}

const transport = nodemailer.createTransport({
  port: 465,
   host: "smtp.gmail.com",
   auth: {
     user: process.env.EMAIL_USERNAME,
     pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
})

export async function POST(req: Request) {
  const {name, lastName, email, message} = await req.json();
  const mailData = {
    from: {
        name: `${name} ${lastName}`,
        address: "myEmail@gmail.com",
    },
    replyTo: email,
    to: "felipe.benini.02@gmail.com",
    subject: `felbenini app`,
    text: message,
    html: `${message}`,
  };
  try {
    await transport.sendMail(mailData); 
  } catch (error) {
    console.log(error);
    return NextResponse.json({}, {status: 400})
  }
  return NextResponse.json({});
}

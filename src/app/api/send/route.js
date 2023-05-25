import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer")

export async function POST(request) {
  const req = await request.json()
  const transporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 100,
    maxMessages: 200,
    service: "gmail",
    auth: {
      tpye: "OAuth2",
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
    secure: true,
    port: 587,
    host: "smtp.gmail.com",
  })
  const send = async (emailid,tomailid ,sub ,message) => {
    const msg = {
      from: emailid,
      to: tomailid,
      subject: sub,
      text: message,
    };
    transporter.sendMail(msg, (err) => {
      if (err) {
        return  NextResponse.json({message: "Message not sent\n"+err})
      } else {
        return NextResponse.json({message: "Message sent successfully"})
      }
    })
  }
  try {
    await send( req.email,process.env.NEXT_PUBLIC_EMAIL, `Message from ${req.name} email from ${req.email}`, req.msg).then(()=>{
      send(process.env.NEXT_PUBLIC_EMAIL, req.email, "From Tushar" ,"Thank you for contacting me I will get back to you shortly")
    })
    return NextResponse.json({ msg: "Success" });
  } catch (error) {
    return NextResponse.error(error)
  }
}
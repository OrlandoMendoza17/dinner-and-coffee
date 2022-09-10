// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

type Data = {
  message: string,
}

const password = process.env.GOOGLE_APP_PASSWORD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "ommv.17@gmail.com",
      pass: password,
    },
  });
  
  try {
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "ommv.17@gmail.com", // list of receivers
      subject: "Notificación de Dinner and Coffee ☕", // Subject line
      html: `
        <div>
          <h2><strong>Leomarby eligió que NO!!!</strong></h2>
          <p>😭😭😭😭😭</p>
        </div>
      `, // html body
    });
    
    console.log("Sent Email!")
    
    res.status(200).json({ 
      message: "mensaje enviado!"
    })
    
  } catch (error) {
    console.log("Ha habido un error")
    console.log(error)
    res.status(500).json({ 
      message: "H habido un error con el envío del mensaje!"
    })
  }
}

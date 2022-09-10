// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import createError from 'http-errors'
import type { NextApiRequest, NextApiResponse } from 'next'
import transporter from 'utils/transporter'

type Body = {
  message: string,
}

type Data = {
  message: string,
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  const { method } = request

  if (method === "GET") {
    try {
      await transporter.sendMail({
        from: '☕ <coffee@example.com>', // sender address
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

      response.status(200).json({ message: "mensaje enviado!" })

    } catch (error) {
      const { statusCode, message } = new createError.InternalServerError()
      console.log(error)
      response.status(statusCode).json({
        message: `Ha habido un error con el envío del mensaje!\n ${message}`
      })
    }

  } else if (method === "POST") {
    try {
      console.log(request.body)

      const { coffee, dinner, date } = request.body.state

      await transporter.sendMail({
        from: '☕ <coffee@example.com>', // sender address
        to: "ommv.17@gmail.com", // list of receivers
        subject: "Notificación de Dinner and Coffee ☕", // Subject line
        html: `
          <div>
            <h2 style="padding: 0 0 20px 0; font-size: 30px;">
              <strong>Salida a Cenar 🥂</strong>
            </h2>
            
            <span style="display: block; font-weight: bold; font-size: 20px;">
              Fecha: ${date}
            </span>
            
            <span style="display: block; font-weight: bold; font-size: 20px;">
              Café: ${coffee ? "SÍ" : "NO"}
            </span>
            
            <span style="display: block; font-weight: bold; font-size: 20px;">
              Comida: ${dinner.name} ${dinner.emoji}
            </span>
            
            <img style="width: 100%; padding: 20px 0 0 0;" src="${dinner.image}">
          </div>
        `, // html body
      });

      console.log("Sent Email!")

    } catch (error) {
      const { statusCode, message } = new createError.InternalServerError()
      response.status(statusCode).json({ message })
    }

  } else {
    const { statusCode, message } = new createError.MethodNotAllowed()
    response.status(statusCode).json({ message })
  }
}

import createHttpError from "http-errors";
import { NextApiRequest, NextApiResponse } from "next";
import transporter from "utils/transporter";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request

  if(method === "POST"){
    
    try {
      await transporter.sendMail({
        from: '☕ <coffee@example.com>', // sender address
        to: "ommv.17@gmail.com", // list of receivers
        subject: "Notificación de Dinner and Coffee ☕", // Subject line
        html: `
          <div>
            <h2><strong>Leo acaba de ver la APP!!!!</strong></h2>
            <p>😳😳😳😳😳😳😳😳😳😳</p>
          </div>
        `, // html body
      });

      console.log("Sent Notification!")

      response.status(200).json({ message: "Notificación enviada!" })

    } catch (error) {
      console.log(error)
      const { statusCode, message } = new createHttpError.InternalServerError()
      response.status(statusCode).json({
        message: `Ha habido un error con la Notificación!\n ${message}`
      })
    }
    
  }else{
    const { statusCode, message } = new createHttpError.MethodNotAllowed()
    response.status(statusCode).json({ message })
  }
  
}
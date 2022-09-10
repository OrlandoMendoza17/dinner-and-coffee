import nodemailer from "nodemailer"

const password = process.env.GOOGLE_APP_PASSWORD

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

export default transporter;
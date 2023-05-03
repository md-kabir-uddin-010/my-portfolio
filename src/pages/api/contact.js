// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// require('dotenv').config()
const nodemailer = require("nodemailer");
const Yup = require("yup");

const emailRegex = /^([a-z0-9_\-\.]+)@([a-z0-9_\-]+)(\.[a-z]{2,5}){1,2}$/;

const schema = Yup.object().shape({
  name: Yup.string().required().trim().min(2).max(30),
  email: Yup.string()
    .required()
    .trim()
    .email()
    .matches(emailRegex, "email must be a valid email"),
  message: Yup.string().required().trim().min(10).max(200),
});

export default async function handler(req, res) {
  try {
    const { name, email, message } = await schema.validate(req.body);
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      service: process.env.SERVICE,
      auth: {
        user: process.env.SENDER_EMAIL_ADD,
        pass: process.env.SENDER_APP_PASS,
      },
      // secure: true,
    });
    const mailData = {
      from: process.env.SENDER_EMAIL_ADD,
      to: process.env.RECEIVER_EMAIL_ADD,
      subject: `Message From ${name}`,
      text: message.toString() + " | Sent from: " + email,
      html: `<div>${message.toString()}</div><p>Sent from:
      ${email}</p>`,
    };
    await transporter.sendMail(mailData);

    res.status(200).json({ message: "message send succesfull" });
  } catch (error) {
    res.status(400).json({ message: "server side error" });
  }
}

import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send', async (req, res) => {
  let { firstName, email, phoneNumber, message, recaptchaToken } = req.body;

  const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
  const response = await axios.post(googleVerifyURL);

  const { success } = response.data;
  if (success) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${firstName} (${email})`,
      text: `
        From: ${firstName}
        Contact: ${phoneNumber}
        Message: ${message}
      `,
    };

    let info = await transporter.sendMail(mailOptions);

    res.send(info);
  } else {
    res.status(400).send('reCAPTCHA failed.');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

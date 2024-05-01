const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const serverless = require('serverless-http');
const express = require('express');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  let { name, email, message, recaptchaToken } = req.body;

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
      subject: `Message from ${name} (${email})`,
      text: `
        From: ${name}
        Message: ${message}
      `,
      html: `
      <h1>Message from ${name} (${email})</h1>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    let info = await transporter.sendMail(mailOptions);

    res.send(info);
  } else {
    res.status(400).send('reCAPTCHA failed.');
  }
});

exports.handler = serverless(app);

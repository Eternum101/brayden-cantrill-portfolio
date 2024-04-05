import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send', async (req, res) => {
  let { firstName, email, phoneNumber, message } = req.body;

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
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

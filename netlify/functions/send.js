const nodemailer = require("nodemailer");
const axios = require('axios');

function createMailClient() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_EMAIL_ADDRESS,
      clientId: process.env.GMAIL_API_CLIENT_ID,
      clientSecret: process.env.GMAIL_API_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_API_REFRESH_TOKEN,
    }
  });
}

const mailClient = createMailClient();

export async function handler(event, context) {
  try {
    const json = JSON.parse(event.body);

    // Verify reCAPTCHA
    const recaptchaToken = json.recaptchaToken;
    const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const response = await axios.post(googleVerifyURL);
    const { success } = response.data;

    if (!success) {
      return { statusCode: 400, body: 'reCAPTCHA failed.' };
    }

    const gmailResponse = await mailClient.sendMail({
      from: json.email, // sender address
      to: process.env.GMAIL_EMAIL_ADDRESS, // your email address
      subject: `Message from ${json.name} (${json.email})`,
      text: json.message, // plain text body
      html: `<p><strong>From:</strong> ${json.name}</p>
             <p><strong>Email:</strong> ${json.email}</p>
             <p><strong>Message:</strong> ${json.message}</p>`
    });

    return {
      statusCode: 200,
      body: "Message sent!" + gmailResponse.messageId
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

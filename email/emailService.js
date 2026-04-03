const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendNotificationEmail(to, subject, message) {
  try {
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      text: message,
    };

    await sgMail.send(msg);
    console.log("Notification email sent to:", to);

    return true;
  } catch (error) {
    console.error("SendGrid email failed:", error.response?.body || error.message);
    return false;
  }
}

module.exports = { sendNotificationEmail };
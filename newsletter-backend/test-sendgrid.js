require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: "salma.zouiten@iu-study.org", // Replace with your email
    from: "salmazouiten@outlook.de", // Must be a verified sender in SendGrid
    subject: "Test Email",
    text: "This is a test email from SendGrid.",
    html: "<strong>This is a test email from SendGrid.</strong>",
};

sgMail.send(msg)
    .then(() => console.log("✅ Test email sent successfully"))
    .catch((error) => console.error("❌ Error sending test email:", error.response ? error.response.body : error));

import express from "express";  // Import Express.js
import bodyParser from "body-parser";  // Import body-parser
import cors from "cors";  // Import CORS
import sgMail from "@sendgrid/mail";  // Import SendGrid
import nodemailer from 'nodemailer';  // Import Nodemailer
import dotenv from "dotenv";  // Load environment variables from .env file
import PocketBase from "pocketbase";  // Use default import for PocketBase

dotenv.config();  // Load environment variables from .env file

const app = express();  // Create an Express app
app.use(bodyParser.json());  // Enable JSON body parsing
app.use(cors());  // Enable CORS

// Create a transporter object using Gmail settings
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Use Gmail as the email service
  auth: {
    user: 'salmazouiten0222@gmail.com',  // Your Gmail address
    pass: process.env.EMAIL_PASS,  // app password
  },
});

// Contact form API endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Check if the fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: email,   // User's email address (this is dynamic)
    to: 'salmazouiten@outlook.de',  // Your Gmail address to receive messages
    subject: `Message from ${name}`, 
    text: message,  // Text content
    html: `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>`,  // HTML content
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '✅ Message sent successfully!' });  // Send a success response
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: '❌ Failed to send message.' });  // Send an error response
  }
});

// Initialize PocketBase client
const pb = new PocketBase("http://127.0.0.1:8090");

// Configure SendGrid
const SENDGRID_API_KEY = "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";
sgMail.setApiKey(SENDGRID_API_KEY);  // Set the SendGrid API key
console.log("SendGrid API Key:", SENDGRID_API_KEY ? "Loaded" : "Missing");  // Log the API key status

// API Endpoint to Handle Signups
app.post("/signup", async (req, res) => { 
    console.log("Request received at /signup:", req.body); 

    const { email, first_name, last_name } = req.body; 

    // Validate request body
    if (!email || !first_name || !last_name) {
        console.error("Missing required fields:", { email, first_name, last_name });
        return res.status(400).json({ message: "Missing required fields." });
    }

    try {
        // Create record in PocketBase
        console.log("Saving record to PocketBase...");
        const record = await pb.collection("newsletter_signups").create({
            email,
            first_name,
            last_name,
        });
        console.log("Record created successfully:", record);

        // Prepare the email
        console.log("Preparing email to:", email);
        const msg = {
            to: email,  // Recipient email
            from: "salmazouiten@outlook.de",  // Verified sender email
            templateId: "d-0998648212604f40b7789e09b97f2aaa",  // Your SendGrid template ID
            dynamicTemplateData: {
                first_name: first_name,
                last_name: last_name,
            },
        };

        // Send the email
        console.log("🚀 Sending email...");
        await sgMail.send(msg);
        console.log("✅ Email sent successfully to:", email);  // Log success

        res.status(200).json({ message: "Sign-up successful and email sent.", record });  // Send a success response
    } catch (error) {
        console.error("❌ Error during signup process:", error);  // Log the error
 
        if (error.response) {
            console.error("Error details:", error.response.body);  // Log the error details
        }

        res.status(500).json({
            message: "Error signing up or sending email.",  // Send an error response
            error: error.message,
        });
    }
});

// Start the Server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

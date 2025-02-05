import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Track form submission status

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully! ");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus(data.message || "Something went wrong. ❌");
      }
    } catch (error) {
      setStatus("Failed to send message. ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-header">Have any Questions?</h1>
      <p className="contact-text">
        Feel free to send any questions or inquiries directly to our email or contact us via Instagram below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}

      <p className="contact-social">
        Or reach out to us via Instagram:{" "}
        <a
          href="https://www.instagram.com/salma_s_kitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Salma's Kitchen Instagram
        </a>
      </p>
    </div>
  );
}

export default Contact;

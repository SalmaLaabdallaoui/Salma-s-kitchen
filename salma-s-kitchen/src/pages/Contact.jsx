import React, { useState } from 'react'; 

function Contact() { // Create the Contact component
  const [formData, setFormData] = useState({ // Initialize the form data
    name: '', 
    email: '',
    message: '',
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
      const response = await fetch("http://localhost:5001/contact", { // Send a POST request to the backend
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Send the form data
      });

      const data = await response.json(); // Parse the JSON response
      if (response.ok) { 
        setStatus(" Message sent successfully!"); // Set success message
        setFormData({ name: "", email: "", message: "" }); // Clear form data
      } else {
        setStatus(data.message || "Something went wrong. ❌"); // Set error message
      }
    } catch (error) { // Handle any errors that occur during the process
      setStatus("Failed to send message. ❌");
      console.error("Error:", error);
    }
  };

  // Render the Contact component
  return ( 
    <div className="contact-page"> 
      <h1 className="contact-header">Have any Questions?</h1> 
      <p className="contact-text"> 
        Feel free to send any questions or inquiries directly to our email or contact us via Instagram below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}> 
        <label htmlFor="name">Your Name:</label>
        <input
          type="text" // Set the input type to text
          id="name" // Set the input id to name
          name="name" // Set the input name to name
          placeholder="Enter your name" 
          required 
          value={formData.name} 
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label> 
        <input
          type="email" // Set the input type to email
          id="email" // Set the input id to email
          name="email" // Set the input name to email
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Your Message:</label> 
        <textarea
          id="message" // Set the input id to message
          name="message" // Set the input name to message
          placeholder="Type your message here" // Add a placeholder
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

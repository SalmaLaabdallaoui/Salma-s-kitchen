import { useState } from "react";
import PocketBase from "pocketbase";
import "../index.css"; // Import external CSS file

const pb = new PocketBase("http://127.0.0.1:8090"); // Change this to your PocketBase URL

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", firstName: "", lastName: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Step 1: Create record in PocketBase
          console.log("Attempting to create record...");
          await pb.collection("newsletter_signups").create({
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
          });
          console.log("Record created successfully");
          setMessage("Sign-up successful!");
        
      
        // Step 2: Send confirmation email
        const response = await fetch("http://localhost:5001/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
          }),
        });
  
        if (response.ok) {
          setMessage("Sign-up successful and email sent!");
        } else {
          const error = await response.json();
          console.error("Error sending email:", error);
          setMessage("Sign-up successful, but failed to send email.");
        }
      } catch (error) {
        console.error("Error creating record:", error);
        setMessage("Error: " + error.message);
      }
      } else {
        setErrors(validationErrors);
      }
    }
  
  

  return (
    <div className="signup-container">
      <img src="/images/Logo.jpg" alt="Logo" className="signup-logo" />
      <h2 className="signup-title">Join our newsletter!</h2>
      {message && <p className="message-success">{message}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
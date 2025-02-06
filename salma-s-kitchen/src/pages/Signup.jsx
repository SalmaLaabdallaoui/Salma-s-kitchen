import { useState } from "react"; // Import the useState hook
import PocketBase from "pocketbase"; // Import PocketBase
import "../index.css"; // Import CSS file

// Create a new instance of PocketBase
const pb = new PocketBase("http://127.0.0.1:8090"); // 

// Create the Signup component
const Signup = () => {
  const [formData, setFormData] = useState({ email: "", firstName: "", lastName: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form fields
  const validateForm = () => {
    let errors = {};
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    return errors;
  };
  
  // Handle form submission
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
        const response = await fetch("http://localhost:5001/signup", { // Send a POST request to the backend
          method: "POST", // 
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({
            email: formData.email, 
            first_name: formData.firstName, 
            last_name: formData.lastName,
          }),
        });
        
        // Check if the email was sent successfully
        if (response.ok) {
          setMessage("Sign-up successful and email sent!");
        } else {
          const error = await response.json();
          console.error("Error sending email:", error);
          setMessage("Sign-up successful, but failed to send email.");
        }
      } catch (error) { // Handle any errors that occur during the process
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
            type="email" // Set the input type to email
            name="email" // Set the input name to email
            value={formData.email} // Set the input value to the email field in the form data
            onChange={handleChange} // Call the handleChange function when the input changes
            className="input-field" 
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group"> 
          <label>First Name:</label> 
          <input
            type="text" // Set the input type to text
            name="firstName" // Set the input name to firstName
            value={formData.firstName} // Set the input value to the firstName field in the form data
            onChange={handleChange}
            className="input-field" 
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>} 
        </div>

        <div className="form-group"> 
          <label>Last Name:</label> 
          <input
            type="text" // Set the input type to text
            name="lastName" // Set the input name to lastName
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
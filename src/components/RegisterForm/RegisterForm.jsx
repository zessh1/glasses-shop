import React, { useState } from "react";
import "./RegisterForm.css"; // Import your CSS file for styling

const RegisterForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., sending data to the server)
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register-form-container">
      <h2 className="register-heading">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

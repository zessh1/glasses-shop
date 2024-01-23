import React, { useState } from "react";
import "./LoginForm.css"; // Import your CSS file for styling
import Header from "../Header/Header";

const LoginForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    username: "",
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
      password: "",
    });
  };

  return (
    <div className="login-form-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

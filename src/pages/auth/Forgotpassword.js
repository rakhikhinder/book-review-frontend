import React, { useState } from "react";
import { API_BASE_URL } from "../api";

function ForgotPassword() {
  const [formData, setFormData] = useState({ email: "", new_password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/users/reset_password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(
          data.message || `Password reset successful for ${formData.email}`
        );
      } else {
        setError(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            name="new_password"
            className="form-control"
            value={formData.new_password}
            required
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;

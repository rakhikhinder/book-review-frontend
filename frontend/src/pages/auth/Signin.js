import React, { useState } from "react";

function SignIn({ onSuccess, onForgotPassword }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store all necessary authentication data
        localStorage.setItem("token", data.token); // Make sure your API returns a token
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (onSuccess) onSuccess();
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("Error connecting to the server.");
    }
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
        <div className="text-end mt-2">
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

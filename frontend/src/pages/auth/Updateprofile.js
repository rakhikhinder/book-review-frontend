import React, { useState } from 'react';

function UpdateProfile() {
  const [formData, setFormData] = useState({
    username: 'User123',
    email: 'user123@example.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    // Handle profile update logic here
  };

  return (
    <div className="card p-4" style={{ maxWidth: '500px', margin: 'auto', marginTop: '50px' , marginBottom: '100px'}}>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Update Profile</button>
      </form>
    </div>
  );
}

export default UpdateProfile;

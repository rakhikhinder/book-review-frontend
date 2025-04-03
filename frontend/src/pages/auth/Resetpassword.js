import React, { useState } from 'react';

function ResetPassword() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resetting password to:', password);
    // Handle password reset logic here
  };

  return (
    <div className="card p-4"style={{ maxWidth: '500px', margin: 'auto', marginTop: '50px' , marginBottom: '100px'}}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;

import React from 'react';

function Logout() {
  const handleLogout = () => {
    console.log('User logged out');
    // Handle logout logic here
  };

  return (
    <div className="card p-4"style={{ maxWidth: '500px', margin: 'auto', marginTop: '50px' , marginBottom: '100px'}}>
      <h2>Logout</h2>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

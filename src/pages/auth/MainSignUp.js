import React, { useState } from 'react';

const MainSignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Open Dropdown
      </button>

      {isOpen && (
        <select className="form-select" size="3" aria-label="Size 3 select example" style={{ display: 'block', margin: '20px auto' }}>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      )}
    </div>
  );
};

export default MainSignUp;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
    padding: '8px',
  };

   const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };


  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li>
          <Link to="/favorites" style={linkStyle}>Favorite</Link>
        </li>
      </ul>
      
      <button onClick={handleSignIn} style={{ padding: '8px 16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>
          Real Estate
        </Link>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Sign In Button */}
      <button className="sign-in-button" onClick={() => navigate('/login')}>
        Sign In
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  logoText: {
    color: '#333',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: 'relative',
  },
};

export default Navbar;

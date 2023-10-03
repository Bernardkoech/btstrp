import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Add your custom styling for the Footer component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <h3>BKM</h3>

            <p>Software Engineer</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contacts">Contact</Link>
          </div>

        </div>
        <p className="footer-text">© {new Date().getFullYear()} Bernard Koech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

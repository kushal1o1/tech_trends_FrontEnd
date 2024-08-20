import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Kushal Baral. All rights reserved.</p>
        <ul className="footer-menu">
          <li><a href="#privacy" className="footer-item">Privacy Policy</a></li>
          <li><a href="#terms" className="footer-item">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

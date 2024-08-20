import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>TechTrends is your go-to source for the latest technology news and trends.</p>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#nepali">Nepali Tech</a></li>
              <li><a href="#global">Global tech</a></li>
              <li><a href="#Trending">Trending News</a></li>
              <li><a href="#global">All</a></li>
              

            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:ishare.kushal@gmail.com">share.kushal@gmail.com</a></li>
              <li><a href="tel:+1234567890">+977 123 456 7890</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-media">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 TechTrends. All rights reserved. Data sourced from <a href="https://XYZ.com" target="_blank" rel="noopener noreferrer">XYZ</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

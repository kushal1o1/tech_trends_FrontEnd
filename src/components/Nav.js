import React from 'react';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">TechTrends</a>
        <ul className="navbar-menu">
          <li><a href="#nepali" className="navbar-item">Nepali Trends</a></li>
          <li><a href="#global" className="navbar-item">Global Trends</a></li>
          <li><a href="#about" className="navbar-item">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

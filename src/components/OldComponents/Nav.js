import React from 'react';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">TechTrends</a>
        <div className="navbar-bio">Your source for the latest tech trends</div>
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react';
import './TechTrendCard.css';

const TechTrendCard = ({ title, link, category, imgUrl }) => {
  return (
    <div className="tech-trend-card">
      <img src={imgUrl} alt={title} className="trend-image" />
      <div className="card-content">
        <h3 className="trend-title">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="trend-link">Read More</a>
        <span className={`trend-category ${category}`}>{category}</span>
      </div>
    </div>
  );
};

export default TechTrendCard;
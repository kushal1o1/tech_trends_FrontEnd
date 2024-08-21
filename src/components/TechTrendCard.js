import React, { useState } from 'react';
import './TechTrendCard.css';

const TechTrendCard = ({ title, link, category, imgUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const titleLength = 300;
  const isLongTitle = title.length > titleLength;

  const toggleExpand = () => setIsExpanded(!isExpanded);


  const imageSrc = imgUrl || '/default.png'; 

  return (
    <div className="tech-trend-card">
      <img src={imageSrc} alt={title} className="trend-image" />
      <div className="card-content">
        <h3 className={`trend-title ${isLongTitle && !isExpanded ? 'collapsed' : ''}`}>
          {isLongTitle && !isExpanded ? `${title.slice(0, titleLength)}...` : title}
        </h3>
        {isLongTitle && (
          <span className="see-more" onClick={toggleExpand}>
            {isExpanded ? 'See Less' : 'See More'}
          </span>
        )}
        <a href={link} target="_blank" rel="noopener noreferrer" className="trend-link">Read More</a>
        <span className={`trend-category ${category.toLowerCase()}`}>{category}</span>
      </div>
    </div>
  );
};

export default TechTrendCard;

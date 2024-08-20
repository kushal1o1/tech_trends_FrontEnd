import React, { useEffect, useState } from 'react';
import TechTrendCard from './TechTrendCard';
import './TechTrends.css'; 

const  TechTrends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
  
    fetch(process.env.REACT_APP_API_TECH_TRENDS) 
      .then(response => response.json())
      .then(data => setTrends(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="tech-trends-container">
      {trends.map(trend => (
        <TechTrendCard
          key={trend.id}
          title={trend.title}
          link={trend.link}
          category={trend.category}
          imgUrl={trend.img_url}
        />
      ))}
    </div>
  );
};

export default  TechTrends;
import React, { useEffect, useState } from 'react';
import TechTrendCard from './TechTrendCard';
import './TechTrends.css'; 

const TechTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetch(process.env.REACT_APP_API_TECH_TRENDS) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTrends(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message); // Set error message
        setLoading(false); // Ensure loading is set to false
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Display loading indicator
  }

  if (error) {
    return <div className="error">Something went wrong: {error}</div>; // Display error message
  }

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

export default TechTrends;

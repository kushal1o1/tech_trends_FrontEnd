import React, { useEffect, useState } from 'react';
import TechTrendCard from './TechTrendCard';
import './TechTrends.css';

const TechTrends = () => {
  const [trends, setTrends] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fade, setFade] = useState(false);

  // Function to fetch data based on the selected category
  const fetchTrends = (category) => {
    setLoading(true);
    setError(null);
    setFade(true); // Start fade-out animation
    setTimeout(() => {
      fetch(`${process.env.REACT_APP_API_TECH_TRENDS}?category=${category}`)
        .then(response => response.json())
        .then(data => {
          setTrends(data);
          setLoading(false);
          setFade(false); // Start fade-in animation
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Something went wrong!');
          setLoading(false);
          setFade(false);
        });
    }, 500); // Delay to allow fade-out animation
  };

  // Effect to fetch data when the category changes
  useEffect(() => {
    fetchTrends(category);
  }, [category]);

  return (
    <div>
      {/* Buttons to filter by category */}
      <div className="button-container">
        <button onClick={() => setCategory('')}>All</button>
        <button onClick={() => setCategory('trending')}>Trending</button>
        <button onClick={() => setCategory('nepali')}>Nepali</button>
        <button onClick={() => setCategory('global')}>Global</button>
      </div>

      {/* Conditional rendering for loading, error, and data */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className={`tech-trends-container ${fade ? 'fade-out' : 'fade-in'}`}>
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
      )}
    </div>
  );
};

export default TechTrends;

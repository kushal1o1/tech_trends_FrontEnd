// import React, { useEffect, useState } from 'react';
// import TechTrendCard from './TechTrendCard';
// import './TechTrends.css'; 

// const TechTrends = () => {
//   const [trends, setTrends] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     fetch(process.env.REACT_APP_API_TECH_TRENDS) 
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setTrends(data);
//         setLoading(false); 
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError(error.message); 
//         setLoading(false); 
//       });
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>; 
//   }

//   if (error) {
//     return <div className="error">Something went wrong: {error}</div>; 
//   }

//   return (
//     <div className="tech-trends-container">
//       {trends.map(trend => (
//         <TechTrendCard
//           key={trend.id}
//           title={trend.title}
//           link={trend.link}
//           category={trend.category}
//           imgUrl={trend.img_url}
//         />
//       ))}
//     </div>
//   );
// };

// export default TechTrends;

import React, { useEffect, useState } from 'react';
import TechTrendCard from './TechTrendCard';
import './TechTrends.css'; 

const TechTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchInterval = 10000; 

  const fetchTrends = async () => {
    try {
     
      if (trends.length === 0) {
        setLoading(true);
      }
      
      const response = await fetch(process.env.REACT_APP_API_TECH_TRENDS);  

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTrends(data);
      setError(null); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Unable to fetch data. Please try again later.');
    } finally {
      setLoading(false); 
      setTimeout(fetchTrends, fetchInterval);
    }
  };

  useEffect(() => {
    fetchTrends(); 

    return () => {
      
    };
  }, []);

  return (
    <div className="tech-trends-container">
      {loading && trends.length === 0 && <div className="loading">Loading...</div>}
      {error && <div className="error">Something went wrong: {error}</div>}
      {trends.length > 0 && trends.map(trend => (
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


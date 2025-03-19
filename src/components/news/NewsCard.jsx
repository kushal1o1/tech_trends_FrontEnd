import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`}>
      <Card hoverable className="h-full flex flex-col">
        {news.img_url ? (
          <div className="relative h-48 mb-4 -mx-4 -mt-4">
            <img 
              src={news.img_url} 
              alt={news.title} 
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x200?text=Tech+Trends";
              }}
            />
          </div>
        ) : (
          <div className="relative h-48 mb-4 -mx-4 -mt-4 bg-gray-200 flex items-center justify-center rounded-t-lg">
            <span className="text-gray-500 text-lg">Tech Trends</span>
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <span className={`
              text-xs font-medium px-2 py-1 rounded-full
              ${news.category === 'nepali' ? 'bg-blue-100 text-blue-800 ' : 
                news.category === 'global' ? 'bg-green-100 text-green-800' : 
                news.category === 'trending' ? 'bg-purple-100 text-purple-800' : 
                'bg-red-100 text-red-800'}
            `}>
              {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{news.title}</h3>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Read More
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
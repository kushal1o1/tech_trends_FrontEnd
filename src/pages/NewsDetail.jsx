import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import { useApi } from '../hooks/useApi';
import apiService from '../api/apiService';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: news, isLoading, error } = useApi(() => apiService.getTrendById(id), [id]);
  
  if (isLoading) {
    return (
      <div className="py-12 text-center">
        <Loader size="lg" />
      </div>
    );
  }
  
  if (error || !news) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">News Not Found</h2>
        <p className="text-gray-600 mb-6">The news article you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Button>
      </div>
      
      <Card>
        <div className="mb-4">
          <span className={`
            text-xs font-medium px-2 py-1 rounded-full
            ${news.category === 'nepali' ? 'bg-blue-100 text-blue-800' : 
              news.category === 'global' ? 'bg-green-100 text-green-800' : 
              news.category === 'trending' ? 'bg-purple-100 text-purple-800' : 
              'bg-red-100 text-red-800'}
          `}>
            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
          </span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{news.title}</h1>
        
        {news.img_url && (
          <div className="relative h-64 md:h-80 mb-6 -mx-4 overflow-hidden">
            <img 
              src={news.img_url} 
              alt={news.title} 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x400?text=Tech+Trends";
              }}
            />
          </div>
        )}
        
        <div className="mb-6">
          <p className="text-gray-700">
            This article is originally from an external source. Click the link below to read the full article.
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={news.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Read Full Article
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          <Link 
            to="/subscribe" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Subscribe for updates
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NewsDetail;
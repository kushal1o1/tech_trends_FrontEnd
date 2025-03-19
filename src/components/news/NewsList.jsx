import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import Loader from '../common/Loader';
import Button from '../common/Button';
import { useApi } from '../../hooks/useApi';
import apiService from '../../api/apiService';

const NewsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';
  const [filteredNews, setFilteredNews] = useState([]);
  
  const { data: categories } = useApi(apiService.getCategories);
  const { data: news, isLoading, error } = useApi(apiService.getTrends);
  
  useEffect(() => {
    if (news) {
      setFilteredNews(
        categoryFilter
          ? news.filter((item) => item.category === categoryFilter)
          : news
      );
    }
  }, [news, categoryFilter]);

  const handleFilterChange = (category) => {
    if (category === categoryFilter) {
      // Clear filter if clicking active category
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  if (isLoading) {
    return (
      <div className="py-12">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">Failed to load news: {error.message}</p>
        <Button onClick={() => window.location.reload()}>Refresh</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={!categoryFilter ? 'primary' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange('')}
        >
          All
        </Button>
        {categories?.map((category) => (
          <Button
            key={category.id}
            variant={categoryFilter === category.name ? 'primary' : 'outline'}
            size="sm"
            onClick={() => handleFilterChange(category.name)}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </Button>
        ))}
      </div>

      {filteredNews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No news found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
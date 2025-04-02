
import React from 'react';
import { useApi } from '../../hooks/useApi';
import apiService from '../../api/apiService';
import Loader from '../common/Loader';

const CategorySelector = ({ selectedCategories = [], onChange }) => {
  const { data: categories, isLoading, error } = useApi(apiService.getCategories);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Failed to load categories</p>;
  }

  // Toggle selected category
  const handleToggleCategory = (category) => {
    const isSelected = selectedCategories.some(
      (selected) => selected.id === category.id || selected.name === category.name
    );
    const updatedCategories = isSelected
      ? selectedCategories.filter((c) => c.id !== category.id && c.name !== category.name)
      : [...selectedCategories, category];
    
    onChange(updatedCategories);
  };

  return (
    <div className="space-y-4">
      <p className="font-semibold mb-4 text-lg text-gray-800">
        Select categories you're interested in:
      </p>
      
      <div className="flex flex-wrap space-x-2">
        {categories?.map((category) => {
          const isSelected = selectedCategories.some(
            (selected) => selected.id === category.id || selected.name === category.name
          );
          
          return (
            <a
              key={category.id}
              onClick={() => handleToggleCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer
                ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-100'}`}
            >
              <span className="flex items-center space-x-2">
                {/* Font Awesome Icons */}
                {isSelected ? (
                  <i className="fas fa-check text-white" />
                ) : (
                  <i className="fas fa-times text-gray-500" />
                )}
                <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
              </span>
            </a>
          );
        })}
      </div>
      
      {selectedCategories.length === 0 && (
        <p className="text-sm text-red-500 mt-2">
          Please select at least one category
        </p>
      )}
    </div>
  );
};

export default CategorySelector;


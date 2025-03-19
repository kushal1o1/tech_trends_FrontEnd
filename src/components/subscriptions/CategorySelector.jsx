import React from 'react';
import { useApi } from '../../hooks/useApi';
import apiService from '../../api/apiService';
import Loader from '../common/Loader';

const CategorySelector = ({ selectedCategories = [], onChange }) => {  // ✅ Default selectedCategories to an empty array
  const { data: categories, isLoading, error } = useApi(apiService.getCategories);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Failed to load categories</p>;
  }

  return (
    <div className="space-y-4">
      <p className="font-medium mb-2">Select categories you're interested in:</p>
      
      <div className="space-y-2">
        {categories?.map((category) => {
          // ✅ Ensure selectedCategories is an array and check if the category is selected
          const isSelected = Array.isArray(selectedCategories) && selectedCategories.some(
            (selected) => selected.id === category.id || selected.name === category.name
          );
          
          return (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={isSelected}
                onChange={() => {
                  const updatedCategories = isSelected
                    ? selectedCategories.filter((c) => 
                        c.id !== category.id && c.name !== category.name
                      )
                    : [...selectedCategories, category];
                  
                  onChange(updatedCategories);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`category-${category.id}`}
                className="ml-2 block text-gray-700"
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </label>
            </div>
          );
        })}
      </div>
      
      {selectedCategories.length === 0 && (
        <p className="text-sm text-red-500 mt-1">
          Please select at least one category
        </p>
      )}
    </div>
  );
};

export default CategorySelector;

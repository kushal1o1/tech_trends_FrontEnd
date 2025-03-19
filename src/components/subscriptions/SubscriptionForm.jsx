import React, { useState } from 'react';
import { useApiMutation } from '../../hooks/useApi';
import apiService from '../../api/apiService';
import CategorySelector from './CategorySelector';
import Loader from '../common/Loader';
import { useToast } from '../../context/ToastContext';

const SubscribeForm = () => {
  // State for email and selected categories
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { addToast } = useToast();

  // API Mutation hook to create a new subscriber
  const { mutate, isLoading, error, isSuccess } = useApiMutation(apiService.createSubscriber);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one category is selected
    if (selectedCategories.length === 0) {
      addToast('Please select at least one category', 'error');
      return;
    }

    // Prepare subscriber data
    const subscriberData = {
      email,
      category: selectedCategories.map((category) => ({ name: category.name })),
    };

    // Call the API
    const result = await mutate(subscriberData);

    if (!result) {
      addToast('Subscription failed!', 'error');
      return;
    }  
  };

  return (
    <form onSubmit={handleSubmit} className="">
 
    {/* Email Input */}
    <div className="space-y-2 ">
      <label htmlFor="email" className="block text-lg font-medium ">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="transparent w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
        placeholder="Enter your email"
      />
    
    
    </div>
  
    {/* Category Selector Component */}
    <CategorySelector
      selectedCategories={selectedCategories}
      onChange={setSelectedCategories}
      className="border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 "
    />
  
    {/* Error Message */}
    {error && (
      <div className="bg-red-600 border-l-4 border-red-500 text-red-700 p-4 rounded-lg animate-fade-in">
        <p>{error}</p>
      </div>
    )}
  
    {/* Submit Button */}
    <div>
      {isLoading ? (
        <Loader className="flex justify-center items-center" />
      ) : (
        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Subscribe
        </button>
      )}
    </div>
  
    {/* Success Message */}
    {isSuccess && (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg animate-fade-in">
        <p>Successfully subscribed!</p>
      </div>
    )}
  </form>
  );
};

export default SubscribeForm;


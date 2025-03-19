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
    <form onSubmit={handleSubmit} className="space-y-6 p-6 border rounded-lg shadow-md bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center">Subscribe to News</h2>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Selector Component */}
      <CategorySelector
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
      />

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Submit Button */}
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        )}
      </div>

      {/* Success Message */}
      {isSuccess && <p className="text-green-500 text-center">Successfully subscribed!</p>}
    </form>
  );
};

export default SubscribeForm;

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
    <form onSubmit={handleSubmit}>
    

   
   <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
            <p className="text-lg mb-8 opacity-80">Get weekly updates on the most significant tech developments delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
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
            </div>
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
            <p className="text-sm mt-4 opacity-60">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}



      {/* Success Message */}
      {isSuccess && <p className="text-green-500 text-center">Successfully subscribed!</p>}
        
    </form>
  );
};

export default SubscribeForm;

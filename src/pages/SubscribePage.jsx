import React from 'react';
import SubscribeForm from '../components/subscriptions/SubscriptionForm';

const SubscriptionPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      {/* Card Wrapper */}
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Subscribe to <span className="text-blue-500">TechTrends</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Stay ahead with the latest tech news, AI updates, and more!
        </p>

        {/* Subscription Form */}
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscriptionPage;

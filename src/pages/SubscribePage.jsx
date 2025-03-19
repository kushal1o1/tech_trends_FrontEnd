import React from 'react';
import SubscribeForm from '../components/subscriptions/SubscriptionForm';


const SubscriptionPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Subscribe to TechTrends</h1>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">New Subscription</h2>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;

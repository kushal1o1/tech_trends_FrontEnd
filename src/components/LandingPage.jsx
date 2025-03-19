import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribed with Email: ${email} and Category: ${category}`);
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-4 md:px-10 py-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Stay Ahead with the Latest Tech Trends
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Subscribe to receive daily trending news directly to your inbox
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="AI">AI</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Cloud">Cloud</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-gray-800 py-20 w-full"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Why Subscribe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bell text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p>Get the latest tech news and trends delivered to your inbox every morning.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Categories</h3>
              <p>Select your preferred tech categories and receive relevant news.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
              <p>Your data stays secure and your email is only used for daily updates.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-4 mt-10 w-full">
        <div className="text-center text-gray-400">
          <p>© 2025 TechTrends - All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

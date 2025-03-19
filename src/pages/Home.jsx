import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import Button from '../components/common/Button';
import Logo from '../images/TechTrendsLogo.png';
import HeroSection from '../components/common/HeroSection';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">

    <HeroSection/>
      



      {/* Latest News Section */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="inline-block w-8 h-1 bg-blue-600 mr-3"></span>
            Latest News
          </h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50  rounded-xl shadow-inner">
          <NewsList />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
            <p className="text-lg mb-8 opacity-80">Get weekly updates on the most significant tech developments delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full md:w-auto" 
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-60">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
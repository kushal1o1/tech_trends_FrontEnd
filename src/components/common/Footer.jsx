import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold">Tech Trends</Link>
            <p className="mt-2 text-gray-300 text-sm">
              Stay updated with the latest technology news
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <div className="mt-4 space-y-2">
                <Link to="/" className="text-gray-300 hover:text-white block text-sm">Home</Link>
                <Link to="/subscribe" className="text-gray-300 hover:text-white block text-sm">Subscribe</Link>
                <Link to="/manage-subscription" className="text-gray-300 hover:text-white block text-sm">Manage Subscription</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Categories</h3>
              <div className="mt-4 space-y-2">
                <Link to="/?category=nepali" className="text-gray-300 hover:text-white block text-sm">Nepali</Link>
                <Link to="/?category=global" className="text-gray-300 hover:text-white block text-sm">Global</Link>
                <Link to="/?category=trending" className="text-gray-300 hover:text-white block text-sm">Trending</Link>
                <Link to="/?category=ronb" className="text-gray-300 hover:text-white block text-sm">RONB</Link>
              </div>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <div className="mt-4 space-y-2">
                <a href="#" className="text-gray-300 hover:text-white block text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white block text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-300 text-center">
            &copy; {currentYear} Tech Trends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
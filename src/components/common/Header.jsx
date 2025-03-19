import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Tech Trends</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"  
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link to="/subscribe" className={`${isActive('/subscribe')} transition-colors`}>
              Subscribe
            </Link>
            <Link to="/manage-subscription" className={`${isActive('/manage-subscription')} transition-colors`}>
              Manage Subscription
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${isActive('/')} block transition-colors px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/subscribe"
                className={`${isActive('/subscribe')} block transition-colors px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </Link>
              <Link
                to="/manage-subscription"
                className={`${isActive('/manage-subscription')} block transition-colors px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Manage Subscription
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
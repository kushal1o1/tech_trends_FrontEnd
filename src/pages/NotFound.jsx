import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation
import { useToast } from '../context/ToastContext';

const NotFound = () => {
  const { addToast } = useToast();
  useEffect(()=>{
    addToast('The Page You Are Finding does not exist', 'info');
  },[])
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block text-lg text-blue-500 hover:text-blue-700 font-semibold">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

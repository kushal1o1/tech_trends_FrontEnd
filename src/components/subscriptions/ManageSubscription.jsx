import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import CategorySelector from './CategorySelector';
import { useApiMutation } from '../../hooks/useApi';
import apiService from '../../api/apiService';
import { useToast } from '../../context/ToastContext';
import Logo from '../../images/TechTrendsLogo.png'

const ManageSubscription = () => {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [step, setStep] = useState(1); // 1: Email verification, 2: Update categories
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const { mutate: updateSubscription, isLoading: isUpdating } = useApiMutation(apiService.updateCategories);
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const handleVerifyEmail = (e) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    
    // Validation
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Move to step 2
    setStep(2);
  };
  
  const handleUpdateCategories = async (e) => {
    e.preventDefault();
    
    if (selectedCategories.length === 0) {
      addToast('Please select at least one category', 'error');
      return;
    }
    
    try {
      await updateSubscription({
        email,
        category: selectedCategories
      });
      
      addToast('Subscription preferences updated successfully!', 'success');
      navigate('/');
    } catch (error) {
      addToast(
        error.response?.data?.email || 'Failed to update subscription. Please try again.',
        'error'
      );
    }
  };
  
  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    
    try {
      await apiService.unsubscribe({ email });
      addToast('You have been unsubscribed successfully', 'success');
      navigate('/');
    } catch (error) {
      addToast(
        error.response?.data?.email || 'Failed to unsubscribe. Please try again.',
        'error'
      );
    }
  };
  
  return (
    <>
   <section className="py-12 md:py-20 px-4 sm:px-8 lg:px-12">
  <div className="rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden bg-gradient-to-r from-purple-900 to-teal-900">
    {/* Abstract geometric shapes for modern feel */}
    <div className="absolute -right-16 -top-16 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-xl animate-float"></div>
    <div className="absolute -left-8 -bottom-8 w-32 h-32 sm:w-40 sm:h-40 bg-purple-300/20 rounded-full blur-lg animate-float-reverse"></div>
    <div className="absolute right-1/4 bottom-0 w-20 h-20 sm:w-24 sm:h-24 bg-teal-400/20 rounded-full blur-md animate-float"></div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
      {/* Left Column: Heading and Logo */}
      <div className="text-center md:text-left">
        <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Stay Ahead with <span className="text-teal-400">Tech Trends</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
          Discover the latest innovations and insights to keep your business competitive in the digital age.
        </p>
        <div className="flex justify-center md:justify-start">
          <img src={Logo} className="w-48 sm:w-60" alt="TechTrends" />
        </div>
      </div>

      {/* Right Column: Interactive Card */}
      <div className="mt-8 md:mt-0">
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-sm rounded-xl transform rotate-6 animate-rotate"></div>
          <div className="relative bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl">
            {/* Card Header (Dots) */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400 mr-2"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-400 mr-2"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/70"></div>
            </div>

            {/* Placeholder Content */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="h-4 sm:h-6 bg-white/20 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 sm:h-6 bg-white/20 rounded w-4/6 animate-pulse"></div>
              <div className="h-4 sm:h-6 bg-white/20 rounded w-full animate-pulse"></div>
              <div className="h-4 sm:h-6 bg-white/20 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 sm:h-6 bg-white/20 rounded w-3/6 animate-pulse"></div>
            </div>
           <Card  className="max-w-lg mx-auto">
       <h2 className="text-2xl font-bold mb-6">Manage Your Subscription</h2>
      
      {step === 1 ? (
        <form onSubmit={handleVerifyEmail}>
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                emailError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          
          <Button
            type="submit"
            fullWidth
          >
            Continue
          </Button>
        </form>
      ) : (
        <form onSubmit={handleUpdateCategories}>
          <div className="mb-6">
            <CategorySelector
              selectedCategories={selectedCategories}
              onChange={setSelectedCategories}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              disabled={isUpdating}
              fullWidth
            >
              {isUpdating ? 'Updating...' : 'Update Preferences'}
            </Button>
            
            <Button
              type="button"
              variant="danger"
              onClick={handleUnsubscribe}
              fullWidth
            >
              Unsubscribe
            </Button>
          </div>
        </form>
      )}
    </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  );
};

export default ManageSubscription;
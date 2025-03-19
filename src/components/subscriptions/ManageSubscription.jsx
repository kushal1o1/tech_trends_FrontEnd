import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import CategorySelector from './CategorySelector';
import { useApiMutation } from '../../hooks/useApi';
import apiService from '../../api/apiService';
import { useToast } from '../../context/ToastContext';

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
    <Card  className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Your Subscription</h2>
      
      {step === 1 ? (
        <form onSubmit={handleVerifyEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Enter your email address
            </label>
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
  );
};

export default ManageSubscription;
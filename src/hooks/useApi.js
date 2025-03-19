import { useState, useEffect } from 'react';

export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiCall();
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data || err.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, isLoading, error };
};

export const useApiMutation = (apiCall) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const mutate = async (payload) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);
    try {
      const response = await apiCall(payload);
      setData(response.data.data);  // ✅ Extract `data` correctly
      setIsSuccess(true);
      return response.data;
    } catch (err) {
      console.error("API Error:", err.response?.data);  // ✅ Debugging log
    
      // ✅ Extract error message from `error.message`
      const errorMessage = err.response?.data?.error?.message || err.message || 'An error occurred';
    
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
    // try {
    //   const response = await apiCall(payload);
    //   setData(response.data);
    //   setIsSuccess(true);
    //   return response.data;
    // } catch (err) {
    //   const errorMessage = err.response?.data || err.message || 'An error occurred';
    //   setError(errorMessage);
    //   throw errorMessage;
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return { mutate, data, isLoading, error, isSuccess };
};

export default useApi;
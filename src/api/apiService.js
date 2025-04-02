import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

// Create an axios instance with basic auth
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add basic auth to requests if credentials are available
api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Basic ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiService = {
  // News endpoints
  getTrends: () => api.get('/api/trends/'),
  getTrendById: (id) => api.get(`/api/trends/${id}/`),
  
  // Categories endpoints
  getCategories: () => api.get('/api/categories/'),
  getCategoryById: (id) => api.get(`/api/categories/${id}/`),
  
  // sources endpoints
  getSources: () => api.get('/api/sources/'),
  
  // Subscribers endpoints
  getSubscribers: () => api.get('/api/subscribers/'),
  getSubscriberById: (id) => api.get(`/api/subscribers/${id}/`),
  createSubscriber: (data) => api.post('/api/subscribers/', data),
  updateSubscriber: (id, data) => api.put(`/api/subscribers/${id}/`, data),
  partialUpdateSubscriber: (id, data) => api.patch(`/api/subscribers/${id}/`, data),
  deleteSubscriber: (id) => api.delete(`/api/subscribers/${id}/`),
  
  // Special subscriber endpoints
  unsubscribe: (data) => api.patch('/api/subscribers/unsubscribe/', data),
  updateCategories: (data) => api.patch('/api/subscribers/update/', data),
  
  // Email verification
  verifyEmail: (token) => api.get(`/verify-email/${token}/`),
};

export default apiService;
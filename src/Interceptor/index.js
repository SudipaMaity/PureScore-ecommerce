import axios from 'axios';

// Access environment variables
const baseURL = import.meta.env.VITE_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

if (!baseURL || !apiVersion) {
  throw new Error('Environment variables VITE_BASE_URL and VITE_API_VERSION must be defined');
}

// Create an Axios instance
export const api = axios.create({
  baseURL: `${baseURL}/api/${apiVersion}`, 
//   timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before the request is sent

    
    // For example, add a token to the headers
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ4NTBmNjU4ZDMwODhiZGVmYmI0MWYiLCJpYXQiOjE3MTY3MTU3MTEsImV4cCI6MTcxNzMyMDUxMX0.KkyLuh9otz1aAqVHtfe4t9YeMCIRvK3fidEi0EThcbk';
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log('Response:', response);
    return response;
  },
  function (error) {
    // Do something with response error
    console.log('Error response:', error.response);
    
    // For example, handle 401 unauthorized errors
    if (error.response && error.response.status === 401) {
      // Redirect to login or refresh token
      // You can use window.location or a React Router method to redirect
      console.error('Unauthorized access - redirecting to login');
    }
    
    return Promise.reject(error);
  }
);

// Example usage of the Axios instance with interceptors

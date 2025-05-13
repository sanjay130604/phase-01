import axios from "axios";
import { LoadingContext } from "../context/LoadingContext";
import { useContext } from "react";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Add Axios interceptors inside a function
export const useAxiosInterceptors = () => {
  const { setLoading } = useContext(LoadingContext);

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      setLoading(true); // Set loading to true before request
      config.headers.Authorization = `Bearer your-token`; // Add Authorization header
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      setLoading(false); // Reset loading on response
      console.log("Response Data:", response.data); // Log response
      return response;
    },
    (error) => {
      setLoading(false);
      // Handle common errors
      if (error.response) {
        if (error.response.status === 401) {
          alert("Unauthorized! Please log in again.");
        } else if (error.response.status === 404) {
          alert("Resource not found.");
        } else if (error.response.status === 500) {
          alert("Server error. Please try again later.");
        }
      }
      return Promise.reject(error);
    }
  );
};

export default api;

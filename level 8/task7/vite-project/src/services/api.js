
import axios from "axios";
import { LoadingContext } from "../context/LoadingContext";
import { useContext } from "react";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Sample API endpoint
});

export const useAxiosInterceptors = () => {
  const { setLoading } = useContext(LoadingContext); 
  api.interceptors.request.use(
    (config) => {
      setLoading(true); 
      config.headers.Authorization = `Bearer your-token`;
      return config;
    },
    (error) => {
      setLoading(false); 
      return Promise.reject(error); 
    }
  );


  api.interceptors.response.use(
    (response) => {
      setLoading(false); 
      console.log("Response Data:", response.data); 
      return response; 
    },
    (error) => {
      setLoading(false); // Stop loading on error


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
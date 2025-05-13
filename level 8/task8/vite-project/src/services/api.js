import axios from "axios";

// Create a reusable Axios instance with a base URL
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Base API URL
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

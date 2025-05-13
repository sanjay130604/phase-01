import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace with your API
  timeout: 5000, // 5 seconds timeout
});

export default api;

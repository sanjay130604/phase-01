import { useState, useEffect } from "react";
import api from "../services/api"; // Import Axios instance

const ParallelRequests = () => {
  const [data, setData] = useState({ users: [], posts: [] }); // Store API responses
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Define API endpoints
    const usersAPI = "/users"; // Base URL is already set in api.js
    const postsAPI = "/posts";

    // Use Promise.all() to make multiple API requests in parallel
    Promise.all([api.get(usersAPI), api.get(postsAPI)])
      .then(([usersResponse, postsResponse]) => {
        setData({
          users: usersResponse.data, // Store users data
          posts: postsResponse.data, // Store posts data
        });
        setError(null); // Reset errors if successful
      })
      .catch((err) => {
        console.error("API request failed:", err);
        setError("Failed to load data. Please try again."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Stop loading after request completion
      });
  }, []);

  // Show loading indicator while fetching data
  if (loading) return <div>Loading...</div>;

  // Show error message if request fails
  if (error) return <div style={{ color: "red" }}>⚠️ Error: {error}</div>;

  return (
    <div>
      <h2>Users and Posts</h2>

      <h3>Users</h3>
      <ul>
        {data.users.length > 0 ? (
          data.users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>No users found.</p>
        )}
      </ul>

      <h3>Posts</h3>
      <ul>
        {data.posts.length > 0 ? (
          data.posts.slice(0, 10).map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>
  );
};

export default ParallelRequests;

import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const ParallelFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMultiple = async () => {
      setLoading(true);
      try {
        // Fetch posts and users in parallel
        const [postsResponse, usersResponse] = await Promise.all([
          api.get("/posts"),
          api.get("/users")
        ]);

        // Store responses in state
        setPosts(postsResponse.data.slice(0, 5)); // Limit to 5
        setUsers(usersResponse.data.slice(0, 5)); // Limit to 5
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMultiple();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParallelFetcher;

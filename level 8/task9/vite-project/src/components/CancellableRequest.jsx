import { useState, useEffect } from "react";
import api from "../services/api";

const CancellableRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await api.get("/posts", { signal });
        setData(response.data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request was cancelled:", err.message);
        } else {
          setError("Failed to fetch data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup: cancel request on unmount
      console.log("Request cancelled on unmount");
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>⚠️ Error: {error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data && data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CancellableRequest;

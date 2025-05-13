import { useState, useEffect, useRef } from "react";
import axios from "axios";

const cache = new Map();

const useAxios = (url, config = {}, forceRefresh = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cacheKey = JSON.stringify({ url, config });
  const refreshRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (!forceRefresh && cache.has(cacheKey)) {
        setData(cache.get(cacheKey));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(url, config);
        cache.set(cacheKey, response.data);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config, forceRefresh, refreshRef.current]);

  const refresh = () => {
    refreshRef.current += 1;
    cache.delete(cacheKey);
  };

  return { data, loading, error, refresh };
};

const DataDisplay = () => {
  const { data, loading, error, refresh } = useAxios("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={refresh}>Refresh Data</button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;

import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  // Step 1: Initialize state for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Fetch data using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array -> runs only once on mount

  return (
    <div style={styles.container}>
      <h2>Data Fetching with useEffect</h2>
      {/* Step 3: Display loading, error, or fetched data */}
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {data && (
        <div style={styles.dataBox}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

// CSS Styles as an object
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    width: "350px",
    marginLeft: "550px",
    marginRight: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  loading: {
    fontSize: "18px",
    color: "#f39c12",
  },
  error: {
    fontSize: "18px",
    color: "#e74c3c",
  },
  dataBox: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "lightblue",
    borderRadius: "5px",
    color:"black",
    textAlign: "left",
  },
};

export default DataFetcher;

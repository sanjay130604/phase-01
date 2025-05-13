import React, { useState } from "react";

const Counter = () => {
  // Step 1: Initialize state with useState
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Counter: {count}</h2>
      {/* Step 2: Create buttons to update state */}
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={{ ...styles.button, backgroundColor: "#e74c3c" }} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
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
    width: "300px",
    marginLeft: "550px",
    marginRight: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#2ecc71",
    color: "white",
  },
};

export default Counter;

import React, { useState } from "react";

const Toggle = () => {
  // Step 1: Initialize state with useState
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {/* Step 2: Conditionally render content */}
      {isVisible && <p style={styles.content}>This is the toggled content!</p>}
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
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "white",
  },
  content: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "green",
    borderRadius: "5px",
  },
};

export default Toggle;

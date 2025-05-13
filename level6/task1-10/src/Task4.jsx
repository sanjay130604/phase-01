import React, { useState } from "react";

const UserForm = () => {
  // Step 1: Initialize state with an object
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  // Step 2: Update object properties
  const handleChange = (e) => {
    setUser({
      ...user, // Spread previous state
      [e.target.name]: e.target.value, // Update specific property
    });
  };

  return (
    <div style={styles.container}>
      <h2>User Information</h2>
      {/* Input field for Name */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
        style={styles.input}
      />
      {/* Input field for Age */}
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
        style={styles.input}
      />
      {/* Display the updated state */}
      <p style={styles.output}>Name: {user.name || "N/A"}</p>
      <p style={styles.output}>Age: {user.age || "N/A"}</p>
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
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  output: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#333",
  },
};

export default UserForm;

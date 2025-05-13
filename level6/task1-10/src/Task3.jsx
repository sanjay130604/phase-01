import React, { useState } from "react";

const InputField = () => {
  // Step 1: Initialize state with useState
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <h2>Controlled Input</h2>
      {/* Step 2: Bind input value and onChange */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={styles.input}
      />
      {/* Step 3: Display real-time input value */}
      <p style={styles.output}>You typed: {text}</p>
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

export default InputField;

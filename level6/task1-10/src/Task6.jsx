import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (!showTimer) return;

    // Set up the interval when showTimer is true
    const intervalId = setInterval(() => {
      console.log("Message logged every second...");
    }, 1000);

    // Cleanup function to clear the interval when unmounted or toggled off
    return () => {
      console.log("Cleaning up the timer...");
      clearInterval(intervalId);
    };
  }, [showTimer]); // Runs when showTimer changes

  return (
    <div style={styles.container}>
      <h2>useEffect Cleanup Example</h2>
      <button
        onClick={() => setShowTimer(!showTimer)}
        style={styles.button}
      >
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <p>Check the console for log messages every second.</p>}
    </div>
  );
};

// CSS Styles
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
    color:"brown",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "white",
    marginTop: "10px",
  },
};

export default TimerComponent;

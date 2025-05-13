import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          ...styles.container,
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h2>useContext Theme Switcher</h2>
        <p>The current theme is: <strong>{theme}</strong></p>
        <button onClick={toggleTheme} style={styles.button}>
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
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
    transition: "all 0.3s ease-in-out",
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

export default ThemeSwitcher;

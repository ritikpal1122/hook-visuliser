// src/components/UseContextVisualizer.js
import React, { createContext, useContext, useState } from "react";
import "./Visualizer.css";

const ThemeContext = createContext();

const UseContextVisualizer = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-container ${theme}`}>
        <h3>useContext Hook Live Visualization</h3>
        <p className="definition-popup">useContext provides access to context values across component hierarchies without passing props manually. It’s useful for global data like themes, user info, or settings.</p>

        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
};

const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <p className="child-text">Child component theme: {theme}</p>;
};

export default UseContextVisualizer;

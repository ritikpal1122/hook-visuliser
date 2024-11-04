// src/components/UseCallbackVisualizer.js
import React, { useState, useCallback } from "react";
import "./Visualizer.css";

const UseCallbackVisualizer = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="hook-visualizer">
      <h3>useCallback Hook Live Visualization</h3>
      <p className="definition-popup">
        useCallback: Memoizes a function to avoid re-creation unless
        dependencies change.
      </p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallbackVisualizer;

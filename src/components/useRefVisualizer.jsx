// src/components/UseRefVisualizer.js
import React, { useRef, useState, useEffect } from "react";
import "./Visualizer.css";

const UseRefVisualizer = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(1);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    renderCount.current += 1;
  }, []);

  return (
    <div className="hook-visualizer">
      <h3>useRef Hook Live Visualization</h3>

      <p className="definition-popup">
        useRef: Stores a mutable value that persists across renders without
        causing re-renders.
      </p>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Render count: {renderCount.current}</p>
    </div>
  );
};

export default UseRefVisualizer;

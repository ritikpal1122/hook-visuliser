// src/components/UseStateVisualizer.js
import React, { useState } from 'react';
import './Visualizer.css'; // Add some CSS animations for live feedback

const UseStateVisualizer = () => {
  const [count, setCount] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
    setIsUpdated(true);
    setTimeout(() => setIsUpdated(false), 300); // Trigger color change for 300ms
  };

  return (
    <div className="hook-visualizer">
      <h3>useState Hook Live Visualization</h3>
      <p className='definition-popup'>useState initializes and manages state in functional components. It returns the current state and a function to update it. The component re-renders when the state updates.</p>
      <div className={`counter ${isUpdated ? 'updated' : ''}`}>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default UseStateVisualizer;

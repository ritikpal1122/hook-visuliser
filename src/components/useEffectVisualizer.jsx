// src/components/UseEffectVisualizer.js
import React, { useState, useEffect } from 'react';
import './Visualizer.css';

const UseEffectVisualizer = () => {
  const [count, setCount] = useState(0);
  const [effectTriggered, setEffectTriggered] = useState(false);

  useEffect(() => {
    setEffectTriggered(true);
    setTimeout(() => setEffectTriggered(false), 500); // Visual feedback for 500ms
  }, [count]);

  return (
    <div className="hook-visualizer">
      <h3>useEffect Hook Live Visualization</h3>
      <p className='definition-popup'>useEffect allows you to perform side effects in functional components, such as data fetching, subscriptions, or manual DOM updates. It runs after every render by default but can be controlled by specifying dependencies.</p>
      <div className={`effect-box ${effectTriggered ? 'triggered' : ''}`}>
        Effect triggered by count change
      </div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseEffectVisualizer;

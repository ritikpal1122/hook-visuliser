// src/components/UseMemoVisualizer.js
import React, { useState, useMemo } from 'react';
import './Visualizer.css';

const UseMemoVisualizer = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {} 
    return num * 2;
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div className="hook-visualizer">
      <h3>useMemo Hook Live Visualization</h3>
      <p className="definition-popup">useMemo: Memoizes a value to avoid expensive recalculations unless dependencies change.</p>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
};

export default UseMemoVisualizer;

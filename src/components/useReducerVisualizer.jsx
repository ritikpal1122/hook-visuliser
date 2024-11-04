// src/components/useReducerVisualizer.js
import React, { useReducer, useEffect, useState } from 'react';
import './Visualizer.css'; // Assuming you have a CSS file for styling

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducerVisualizer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [actionDefinition, setActionDefinition] = useState('');
  
  const handleIncrement = () => {
    dispatch({ type: 'increment' });
    setActionDefinition('Increment: Increases the count by 1.');
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
    setActionDefinition('Decrement: Decreases the count by 1.');
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    setActionDefinition('Reset: Resets the count to 0.');
  };

  useEffect(() => {
    const timer = setTimeout(() => setActionDefinition(''), 2000); 
    return () => clearTimeout(timer);
  }, [actionDefinition]);

  return (
    <div className="hook-visualizer">
      <h3>useReducer Hook Live Visualization</h3>
      <p className='definition-popup'>useReducer is a powerful hook for managing state in functional components, offering a clear and predictable way to handle state transitions, especially in scenarios with complex state management requirements.  </p>
      <p>Count: {state.count}</p>
      <div >
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {actionDefinition && (
        <p className="definition-popup">{actionDefinition}</p>
      )}
    </div>
  );
};

export default UseReducerVisualizer;

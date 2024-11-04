// src/components/HookDashboard.js
import { useState } from 'react';
import UseStateVisualizer from './useStateVisualizer';
import UseEffectVisualizer from './useEffectVisualizer';
import UseContextVisualizer from './useContextVisualizer';
import UseRefVisualizer from './useRefVisualizer';
import UseReducerVisualizer from './useReducerVisualizer';
import UseMemoVisualizer from './useMemoUseCallbackVisualizer';
import UseCallbackVisualizer from './UseCallbackVisualizer';
import LinkedInIcon from '../assets/linkedinIcon.svg'

const HookDashboard = () => {
  const [selectedHook, setSelectedHook] = useState(null);

  return (
    <div className="hook-dashboard">
      <h2>Select a Hook to Visualize</h2>
      <div className="hook-buttons">
        <button className='buttons' onClick={() => setSelectedHook('useState')}>useState</button>
        <button className='buttons' onClick={() => setSelectedHook('useEffect')}>useEffect</button>
        <button className='buttons'onClick={() => setSelectedHook('useContext')}>useContext</button>
        <button className='buttons' onClick={() => setSelectedHook('useReducer')}>useReducer</button>
        <button className='buttons' onClick={() => setSelectedHook('useRef')}>useRef</button>
        <button className='buttons'onClick={() => setSelectedHook('useMemo')}>useMemo/useCallback</button>
        <button className='buttons'onClick={() => setSelectedHook('useCallback')}>useCallback</button>
      </div>

      <div className="hook-visualizer">
        {selectedHook === 'useState' && <UseStateVisualizer />}
        {selectedHook === 'useEffect' && <UseEffectVisualizer />}
        {selectedHook === 'useContext' && <UseContextVisualizer />}
        {selectedHook === 'useReducer' && <UseReducerVisualizer />}
        {selectedHook === 'useRef' && <UseRefVisualizer />}
        {selectedHook === 'useMemo' && <UseMemoVisualizer />}
        {selectedHook === 'useCallback' && <UseCallbackVisualizer />}
      </div>

  <h2> By - Ritik Pal</h2>
  <h4 className='icon-main'> Follow  -- <a href='https://www.linkedin.com/in/ritikpal/'> <img src={LinkedInIcon} className='icon-linkedin'/></a></h4>
      
    </div>
  );
};

export default HookDashboard;

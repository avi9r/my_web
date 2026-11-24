import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import './SpeedControls.css';

export const SpeedControls: React.FC = () => {
  const { speed, setSpeed } = useAnimation();

  const speeds = [
    { value: 0.5, label: '🐌 Slow' },
    { value: 1, label: '▶️ Normal' },
    { value: 2, label: '⚡ Fast' },
  ];

  return (
    <div className="speed-controls">
      <label>Animation Speed:</label>
      {speeds.map((s) => (
        <button
          key={s.value}
          className={`speed-btn ${speed === s.value ? 'active' : ''}`}
          onClick={() => setSpeed(s.value)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
};



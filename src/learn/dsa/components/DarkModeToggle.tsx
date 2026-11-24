import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import './DarkModeToggle.css';

export const DarkModeToggle: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};



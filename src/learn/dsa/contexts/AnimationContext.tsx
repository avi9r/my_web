import React, { createContext, useContext, useState } from 'react';

interface AnimationContextType {
  speed: number;
  setSpeed: (speed: number) => void;
  getSpeedDelay: (baseDelay: number) => number;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [speed, setSpeed] = useState(1);

  const getSpeedDelay = (baseDelay: number) => {
    return baseDelay / speed;
  };

  return (
    <AnimationContext.Provider value={{ speed, setSpeed, getSpeedDelay }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};



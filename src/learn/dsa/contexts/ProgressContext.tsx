import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TopicProgress {
  topicId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: number;
  timeSpent: number; // in minutes
  conceptsMastered: string[];
}

interface ProgressContextType {
  progress: Record<string, TopicProgress>;
  updateProgress: (topicId: string, updates: Partial<TopicProgress>) => void;
  getTopicProgress: (topicId: string) => TopicProgress | undefined;
  getOverallProgress: () => { completed: number; total: number; percentage: number };
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'dsa_master_progress';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Record<string, TopicProgress>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (topicId: string, updates: Partial<TopicProgress>) => {
    setProgress((prev) => {
      const existing = prev[topicId] || {
        topicId,
        completed: false,
        lastAccessed: Date.now(),
        timeSpent: 0,
        conceptsMastered: [],
      };

      return {
        ...prev,
        [topicId]: {
          ...existing,
          ...updates,
          lastAccessed: Date.now(),
        },
      };
    });
  };

  const getTopicProgress = (topicId: string) => {
    return progress[topicId];
  };

  const getOverallProgress = () => {
    const topics = Object.keys(progress);
    const completed = topics.filter((id) => progress[id].completed).length;
    const total = topics.length;
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateProgress,
        getTopicProgress,
        getOverallProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};


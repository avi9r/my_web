import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAnimation } from '../contexts/AnimationContext';

export interface VisualizerFrame {
  arraySnapshot?: number[];
  highlights?: number[];
  message?: string;
  codeLine?: number;
}

export const useVisualizer = (frames: VisualizerFrame[]) => {
  const { getSpeedDelay } = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const boundedIndex = useCallback(
    (index: number) => Math.max(0, Math.min(frames.length - 1, index)),
    [frames.length],
  );

  const play = useCallback(() => {
    if (frames.length <= 1) return;
    setIsPlaying(true);
  }, [frames.length]);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => boundedIndex(prev + 1));
  }, [boundedIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => boundedIndex(prev - 1));
  }, [boundedIndex]);

  const reset = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentIndex >= frames.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, getSpeedDelay(900));

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, frames.length, getSpeedDelay]);

  const currentFrame = useMemo(
    () => frames[currentIndex] ?? frames[0],
    [frames, currentIndex],
  );

  return {
    currentFrame,
    currentIndex,
    totalFrames: frames.length,
    controls: {
      play,
      pause,
      next,
      prev,
      reset,
    },
    isPlaying,
  };
};



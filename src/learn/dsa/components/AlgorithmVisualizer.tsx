import React from 'react';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import { useVisualizer } from '../hooks/useVisualizer';
import './AlgorithmVisualizer.css';

interface AlgorithmVisualizerProps {
  title: string;
  frames: VisualizerFrame[];
  renderFrame: (frame: VisualizerFrame) => React.ReactNode;
  codeSample: string;
  description?: string;
}

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerProps> = ({
  title,
  frames,
  renderFrame,
  codeSample,
  description,
}) => {
  const { currentFrame, currentIndex, totalFrames, controls, isPlaying } =
    useVisualizer(frames);

  const codeLines = codeSample.split('\n');

  return (
    <div className="visualizer-wrapper">
      <div className="visualizer-panel">
        <div className="visualizer-header">
          <div>
            <h3>{title}</h3>
            {description && <p className="visualizer-description">{description}</p>}
          </div>
          <div className="visualizer-controls">
            <button onClick={controls.prev} disabled={currentIndex === 0}>
              ◀ Prev
            </button>
            {isPlaying ? (
              <button onClick={controls.pause}>⏸ Pause</button>
            ) : (
              <button onClick={controls.play}>▶ Play</button>
            )}
            <button
              onClick={controls.next}
              disabled={currentIndex >= totalFrames - 1}
            >
              Next ▶
            </button>
            <button onClick={controls.reset}>Reset</button>
          </div>
        </div>

        <div className="visualizer-stage">{renderFrame(currentFrame)}</div>

        <div className="visualizer-meta">
          <span>
            Step {currentIndex + 1} / {totalFrames}
          </span>
          {currentFrame?.message && (
            <span className="visualizer-message">{currentFrame.message}</span>
          )}
        </div>
      </div>

      <div className="visualizer-code">
        <pre>
          {codeLines.map((line, index) => {
            const lineNumber = index + 1;
            const isActive = currentFrame?.codeLine === lineNumber;
            return (
              <code
                key={`code-line-${lineNumber}`}
                className={isActive ? 'active-line' : undefined}
              >
                <span className="code-line-number">{lineNumber.toString().padStart(2, '0')}.</span>{' '}
                {line || ' '}
              </code>
            );
          })}
        </pre>
      </div>
    </div>
  );
};



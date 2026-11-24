import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import './ProgressTracker.css';

interface ProgressTrackerProps {
  topicId: string;
  compact?: boolean;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ topicId, compact = false }) => {
  const { getTopicProgress, getOverallProgress } = useProgress();
  const topicProgress = getTopicProgress(topicId);
  const overall = getOverallProgress();

  if (compact) {
    return (
      <div className="progress-tracker-compact">
        {topicProgress?.completed ? (
          <span className="progress-badge completed">✓ Completed</span>
        ) : (
          <span className="progress-badge in-progress">In Progress</span>
        )}
      </div>
    );
  }

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>📊 Your Progress</h3>
      </div>
      
      <div className="progress-stats">
        <div className="stat-item">
          <div className="stat-label">Overall Completion</div>
          <div className="stat-value">{overall.percentage}%</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${overall.percentage}%` }}
            />
          </div>
          <div className="stat-detail">
            {overall.completed} of {overall.total} topics completed
          </div>
        </div>

        {topicProgress && (
          <div className="stat-item">
            <div className="stat-label">This Topic</div>
            <div className="stat-value">
              {topicProgress.completed ? '✓ Completed' : 'In Progress'}
            </div>
            {topicProgress.quizScore !== undefined && (
              <div className="stat-detail">
                Quiz Score: {topicProgress.quizScore}%
              </div>
            )}
            {topicProgress.conceptsMastered.length > 0 && (
              <div className="stat-detail">
                Concepts Mastered: {topicProgress.conceptsMastered.length}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


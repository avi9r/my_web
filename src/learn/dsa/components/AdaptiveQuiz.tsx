import React, { useState } from 'react';
import './AdaptiveQuiz.css';

export interface QuizOption {
  text: string;
  correct: boolean;
  explanation?: string;
}

export interface AdaptiveQuizProps {
  question: string;
  options: QuizOption[];
  topicId: string;
  conceptId: string;
  onResult?: (correct: boolean, conceptId: string) => void;
  showExplanation?: boolean;
}

export const AdaptiveQuiz: React.FC<AdaptiveQuizProps> = ({
  question,
  options,
  conceptId,
  onResult,
  showExplanation = true,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    setAttempts((prev) => prev + 1);

    const isCorrect = options[index].correct;
    if (onResult) {
      onResult(isCorrect, conceptId);
    }

    // Show hint if incorrect on first attempt
    if (!isCorrect && attempts === 0) {
      setTimeout(() => {
        setShowHint(true);
      }, 1000);
    }
  };

  const isCorrect = selected !== null && options[selected].correct;
  const selectedOption = selected !== null ? options[selected] : null;

  return (
    <div className="adaptive-quiz-container">
      <div className="quiz-question">{question}</div>
      
      {showHint && !isCorrect && (
        <div className="quiz-hint">
          💡 <strong>Hint:</strong> {selectedOption?.explanation || 'Think about the time complexity and requirements of each algorithm.'}
        </div>
      )}

      {options.map((option, index) => (
        <div
          key={index}
          className={`quiz-option ${
            selected === index
              ? isCorrect
                ? 'correct'
                : 'incorrect'
              : showResult && option.correct
              ? 'correct-hint'
              : ''
          } ${selected === index ? 'selected' : ''}`}
          onClick={() => handleSelect(index)}
        >
          {option.text}
        </div>
      ))}

      {showResult && (
        <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? (
            <>
              ✓ <strong>Correct!</strong> Great job! {attempts > 1 && `(Found it in ${attempts} attempts)`}
            </>
          ) : (
            <>
              ✗ <strong>Incorrect.</strong> {selectedOption?.explanation || 'Try again or review the concept!'}
              {attempts < 2 && (
                <button
                  className="try-again-btn"
                  onClick={() => {
                    setShowResult(false);
                    setSelected(null);
                  }}
                >
                  Try Again
                </button>
              )}
            </>
          )}
        </div>
      )}

      {showResult && isCorrect && showExplanation && selectedOption?.explanation && (
        <div className="quiz-explanation">
          <strong>💡 Explanation:</strong> {selectedOption.explanation}
        </div>
      )}
    </div>
  );
};


import React, { useState } from 'react';
import './Quiz.css';

interface QuizOption {
  text: string;
  correct: boolean;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
}

export const Quiz: React.FC<QuizProps> = ({ question, options }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  const isCorrect = selected !== null && options[selected].correct;

  return (
    <div className="quiz-container">
      <div className="quiz-question">{question}</div>
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
          {isCorrect ? '✓ Correct! Great job!' : '✗ Incorrect. Try again!'}
        </div>
      )}
    </div>
  );
};



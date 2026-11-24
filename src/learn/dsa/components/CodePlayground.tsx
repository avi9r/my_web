import React, { useState } from 'react';
import { executeCode } from '../utils/codeExecutor';
import './CodePlayground.css';

interface CodePlaygroundProps {
  defaultCode?: string;
  title?: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  defaultCode = '',
  title = 'Code Playground',
}) => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(false);

  const handleRun = () => {
    try {
      setError(false);
      const result = executeCode(code);
      setOutput(result);
    } catch (err: any) {
      setError(true);
      setOutput(`Error: ${err.message}`);
    }
  };

  const handleClear = () => {
    setCode('');
    setOutput('');
    setError(false);
  };

  return (
    <div className="code-playground">
      <h3>{title}</h3>
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />
      <div className="code-playground-controls">
        <button className="code-run-btn" onClick={handleRun}>
          ▶️ Run Code
        </button>
        <button onClick={handleClear}>🗑️ Clear</button>
      </div>
      {output && (
        <div className={`code-output ${error ? 'code-error' : ''}`}>
          {output}
        </div>
      )}
    </div>
  );
};



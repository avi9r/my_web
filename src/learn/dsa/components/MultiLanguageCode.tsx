import React, { useState } from 'react';
import './MultiLanguageCode.css';

export type Language = 'python' | 'cpp' | 'c' | 'java';

interface CodeExample {
  python?: string;
  cpp?: string;
  c?: string;
  java?: string;
}

interface MultiLanguageCodeProps {
  examples: CodeExample;
  title?: string;
}

export const MultiLanguageCode: React.FC<MultiLanguageCodeProps> = ({ examples, title }) => {
  const [selectedLang, setSelectedLang] = useState<Language>('python');
  const [copied, setCopied] = useState(false);

  // Determine which languages are available
  const availableLangs: Language[] = [];
  if (examples.python) availableLangs.push('python');
  if (examples.cpp) availableLangs.push('cpp');
  if (examples.c) availableLangs.push('c');
  if (examples.java) availableLangs.push('java');

  // Set default to first available language
  React.useEffect(() => {
    if (availableLangs.length > 0 && !availableLangs.includes(selectedLang)) {
      setSelectedLang(availableLangs[0]);
    }
  }, [availableLangs, selectedLang]);

  const getLanguageName = (lang: Language): string => {
    switch (lang) {
      case 'python': return 'Python';
      case 'cpp': return 'C++';
      case 'c': return 'C';
      case 'java': return 'Java';
    }
  };

  const getCurrentCode = (): string => {
    switch (selectedLang) {
      case 'python': return examples.python || '';
      case 'cpp': return examples.cpp || '';
      case 'c': return examples.c || '';
      case 'java': return examples.java || '';
    }
  };

  const handleCopy = async () => {
    const code = getCurrentCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  if (availableLangs.length === 0) {
    return null;
  }

  return (
    <div className="multi-language-code">
      {title && <h4 className="code-title">{title}</h4>}
      <div className="language-tabs">
        {availableLangs.map((lang) => (
          <button
            key={lang}
            className={`language-tab ${selectedLang === lang ? 'active' : ''}`}
            onClick={() => setSelectedLang(lang)}
          >
            {getLanguageName(lang)}
          </button>
        ))}
      </div>
      <div className="code-container">
        <button className="copy-button" onClick={handleCopy} title="Copy code">
          {copied ? (
            <>
              <span className="copy-icon">✓</span>
              <span className="copy-text">Copied!</span>
            </>
          ) : (
            <>
              <span className="copy-icon">📋</span>
              <span className="copy-text">Copy</span>
            </>
          )}
        </button>
        <pre className="code-block">
          <code className={`language-${selectedLang}`}>{getCurrentCode()}</code>
        </pre>
      </div>
    </div>
  );
};


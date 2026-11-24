import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateKMPFrames, generateRabinKarpFrames } from '../utils/stringMatchingVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './StringMatching.css';

const KMP_CODE = `def kmp_search(text, pattern):
    """KMP string matching - O(n + m)"""
    n, m = len(text), len(pattern)
    
    # Build failure function (LPS)
    lps = [0] * m
    length = 0
    i = 1
    
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    # Search
    i = j = 0
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            return i - j  # Found!
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return -1  # Not found

# Time: O(n + m), Space: O(m)
# Avoids redundant comparisons!`;

const RABIN_KARP_CODE = `def rabin_karp(text, pattern):
    """Rabin-Karp string matching - O(n + m) average"""
    n, m = len(text), len(pattern)
    base = 256
    mod = 101  # Prime
    
    # Calculate pattern hash
    pattern_hash = 0
    for i in range(m):
        pattern_hash = (pattern_hash * base + ord(pattern[i])) % mod
    
    # Calculate hash of first window
    text_hash = 0
    h = pow(base, m - 1, mod)
    
    for i in range(m):
        text_hash = (text_hash * base + ord(text[i])) % mod
    
    # Slide window
    for i in range(n - m + 1):
        if text_hash == pattern_hash:
            # Verify (check for spurious hit)
            if text[i:i+m] == pattern:
                return i
        
        # Calculate hash of next window
        if i < n - m:
            text_hash = (base * (text_hash - ord(text[i]) * h) + ord(text[i + m])) % mod
            if text_hash < 0:
                text_hash += mod
    
    return -1  # Not found

# Time: O(n + m) average, O(nm) worst case
# Uses rolling hash for efficiency!`;

export const StringMatching: React.FC = () => {
  const { updateProgress } = useProgress();
  const [text, setText] = useState('ABABDABACDAB');
  const [pattern, setPattern] = useState('ABA');
  const [currentAlgorithm, setCurrentAlgorithm] = useState<'kmp' | 'rabin-karp'>('kmp');

  const kmpFrames = useMemo(
    () => generateKMPFrames(text, pattern),
    [text, pattern]
  );

  const rabinKarpFrames = useMemo(
    () => generateRabinKarpFrames(text, pattern),
    [text, pattern]
  );

  const currentFrames = currentAlgorithm === 'kmp' ? kmpFrames : rabinKarpFrames;
  const currentCode = currentAlgorithm === 'kmp' ? KMP_CODE : RABIN_KARP_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('string_matching', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderStringFrame = (frame: VisualizerFrame) => {
    const highlights = frame.highlights ?? [];
    const chars = text.split('');

    return (
      <div className="string-matching-visual">
        <div className="text-display">
          <div className="text-label">Text:</div>
          <div className="text-chars">
            {chars.map((char, idx) => {
              const isHighlighted = highlights.includes(idx);
              return (
                <span
                  key={idx}
                  className={`char-cell ${isHighlighted ? 'highlight' : ''}`}
                >
                  {char}
                  <span className="char-index">{idx}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="pattern-display">
          <div className="pattern-label">Pattern:</div>
          <div className="pattern-chars">
            {pattern.split('').map((char, idx) => (
              <span key={idx} className="char-cell pattern-char">
                {char}
                <span className="char-index">{idx}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="string-matching-page">
      <div className="page-header">
        <h1>🔎 String Matching</h1>
        <p>Reference: CLRS Chapter 32 - Find patterns in text efficiently!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="string_matching" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          The <strong>string matching problem</strong> finds all occurrences of a pattern string 
          within a text string. Essential for text search, DNA sequencing, and pattern recognition!
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Text Search:</strong> Find words in documents, search engines</li>
            <li><strong>DNA Sequencing:</strong> Find genetic patterns in DNA strings</li>
            <li><strong>Plagiarism Detection:</strong> Find similar text patterns</li>
            <li><strong>Code Analysis:</strong> Find code patterns, syntax highlighting</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Interactive String Matching Visualizer</h2>
        <p>
          Watch how <strong>KMP</strong> and <strong>Rabin-Karp</strong> algorithms find patterns 
          in text step-by-step.
        </p>

        <div className="string-controls">
          <div className="control-group">
            <label>Text:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="string-input"
              placeholder="Enter text"
            />
          </div>
          <div className="control-group">
            <label>Pattern:</label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="string-input"
              placeholder="Enter pattern"
            />
          </div>
        </div>

        <div className="algorithm-selector">
          <button
            className={currentAlgorithm === 'kmp' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('kmp')}
          >
            KMP Algorithm
          </button>
          <button
            className={currentAlgorithm === 'rabin-karp' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('rabin-karp')}
          >
            Rabin-Karp Algorithm
          </button>
        </div>

        <AlgorithmVisualizer
          title={currentAlgorithm === 'kmp' ? "KMP Algorithm" : "Rabin-Karp Algorithm"}
          frames={currentFrames}
          renderFrame={renderStringFrame}
          codeSample={currentCode}
          description={
            currentAlgorithm === 'kmp'
              ? 'Uses failure function to avoid redundant comparisons. O(n + m) time.'
              : 'Uses rolling hash for efficient pattern matching. O(n + m) average time.'
          }
        />
      </div>

      <div className="content-section">
        <h2>KMP (Knuth-Morris-Pratt) Algorithm</h2>
        <p>
          <strong>KMP</strong> algorithm uses a failure function (LPS - Longest Proper Prefix which is also Suffix) 
          to avoid redundant comparisons when a mismatch occurs.
        </p>

        <h3>Key Insight:</h3>
        <p>
          When a mismatch occurs, we don't need to restart from the beginning. The failure function 
          tells us how many characters we can skip.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Build failure function (LPS array) for the pattern</li>
          <li>LPS[i] = length of longest proper prefix that is also a suffix in pattern[0..i]</li>
          <li>Search text using pattern and LPS array</li>
          <li>On mismatch, shift pattern by j - LPS[j-1] positions</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(n + m) - each character examined at most twice<br />
          <strong>Space Complexity:</strong> O(m) - for LPS array<br />
          <strong>Advantage:</strong> Never goes backwards in text!
        </div>
      </div>

      <div className="content-section">
        <h2>Rabin-Karp Algorithm</h2>
        <p>
          <strong>Rabin-Karp</strong> algorithm uses hashing to quickly compare pattern with text windows. 
          Uses rolling hash for efficiency.
        </p>

        <h3>Key Insight:</h3>
        <p>
          Instead of comparing characters one by one, compare hash values. If hashes match, 
          verify the actual strings (to handle spurious hits).
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Calculate hash of pattern</li>
          <li>Calculate hash of first window of text</li>
          <li>Slide window through text:</li>
          <li>  - If hashes match, verify characters (spurious hit check)</li>
          <li>  - Update hash using rolling hash technique</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(n + m) average, O(nm) worst case<br />
          <strong>Space Complexity:</strong> O(1)<br />
          <strong>Advantage:</strong> Can find multiple patterns efficiently!
        </div>
      </div>

      <div className="content-section">
        <h2>Algorithm Comparison</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Naive</td>
              <td>O(nm)</td>
              <td>O(1)</td>
              <td>Simple cases</td>
            </tr>
            <tr>
              <td>KMP</td>
              <td>O(n + m)</td>
              <td>O(m)</td>
              <td>Single pattern, worst-case guarantee</td>
            </tr>
            <tr>
              <td>Rabin-Karp</td>
              <td>O(n + m) avg</td>
              <td>O(1)</td>
              <td>Multiple patterns, average case</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# String Matching - KMP Algorithm
def kmp_search(text, pattern):
    n, m = len(text), len(pattern)
    
    # Build LPS array
    lps = [0] * m
    length = 0
    i = 1
    
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    # Search
    i = j = 0
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            return i - j
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return -1

# Test
text = "ABABDABACDAB"
pattern = "ABA"
result = kmp_search(text, pattern)
print(f"Pattern found at index: {result}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of KMP algorithm?"
          options={[
            {
              text: 'O(nm)',
              correct: false,
              explanation: 'That would be naive algorithm. KMP is much faster!',
            },
            {
              text: 'O(n + m)',
              correct: true,
              explanation: 'Correct! KMP examines each character of text and pattern at most twice, giving O(n + m) time complexity.',
            },
            {
              text: 'O(n log m)',
              correct: false,
              explanation: 'KMP doesn\'t use binary search. It\'s linear time.',
            },
            {
              text: 'O(m²)',
              correct: false,
              explanation: 'That would be just building the LPS array, but the whole algorithm is O(n + m).',
            },
          ]}
          topicId="string_matching"
          conceptId="kmp-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. What does the failure function (LPS) in KMP store?"
          options={[
            {
              text: 'The longest prefix that matches the suffix',
              correct: true,
              explanation: 'Correct! LPS[i] stores the length of the longest proper prefix of pattern[0..i] that is also a suffix. This helps skip redundant comparisons.',
            },
            {
              text: 'The number of mismatches found so far',
              correct: false,
              explanation: 'LPS is about pattern structure, not mismatches.',
            },
            {
              text: 'The hash value of the pattern',
              correct: false,
              explanation: 'That\'s Rabin-Karp, not KMP.',
            },
            {
              text: 'The position of the last match',
              correct: false,
              explanation: 'LPS is precomputed from the pattern structure, not from matches.',
            },
          ]}
          topicId="string_matching"
          conceptId="kmp-lps"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is a spurious hit in Rabin-Karp algorithm?"
          options={[
            {
              text: 'When the pattern is found',
              correct: false,
              explanation: 'A spurious hit is when hashes match but strings don\'t.',
            },
            {
              text: 'When hashes match but strings don\'t',
              correct: true,
              explanation: 'Correct! Spurious hits occur when different strings have the same hash. Rabin-Karp must verify to handle this.',
            },
            {
              text: 'When the hash doesn\'t match',
              correct: false,
              explanation: 'That\'s just a normal mismatch, not a spurious hit.',
            },
            {
              text: 'When the algorithm fails',
              correct: false,
              explanation: 'Spurious hits are expected and handled by verification.',
            },
          ]}
          topicId="string_matching"
          conceptId="rabin-karp-spurious"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>KMP:</strong> O(n + m) time, uses failure function to avoid redundant comparisons</li>
          <li>✅ <strong>Rabin-Karp:</strong> O(n + m) average, uses rolling hash for efficiency</li>
          <li>✅ <strong>LPS Array:</strong> Precomputed from pattern, helps skip characters on mismatch</li>
          <li>✅ <strong>Rolling Hash:</strong> Update hash in O(1) when sliding window</li>
          <li>✅ <strong>Spurious Hits:</strong> Rabin-Karp must verify hash matches to avoid false positives</li>
          <li>✅ <strong>Applications:</strong> Text search, DNA sequencing, pattern recognition</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Wrong LPS Calculation:</strong> Must handle case when length != 0 correctly</li>
          <li>❌ <strong>Not Verifying Spurious Hits:</strong> Rabin-Karp must check actual strings when hashes match</li>
          <li>❌ <strong>Hash Overflow:</strong> Must use modulo to prevent integer overflow</li>
          <li>❌ <strong>Off-by-One Errors:</strong> Careful with indices when building LPS and searching</li>
          <li>❌ <strong>Negative Hash:</strong> Must handle negative hash values in Rabin-Karp</li>
        </ul>
      </div>
    </div>
  );
};


import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateLinearSearchFrames, generateBinarySearchFrames } from '../utils/searchingVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './Searching.css';

const LINEAR_SEARCH_CODE = `def linear_search(arr, target):
    """Search for target in array - O(n) time"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Found at index i
    return -1  # Not found

# Time: O(n), Space: O(1)
# Works on any array (sorted or unsorted)`;

const BINARY_SEARCH_CODE = `def binary_search(arr, target):
    """Binary search on sorted array - O(log n) time"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid  # Found!
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Not found

# Time: O(log n), Space: O(1)
# Requires sorted array!`;

function generateArray(): number[] {
  const arr: number[] = [];
  const seen = new Set<number>();
  while (arr.length < 10) {
    const num = Math.floor(Math.random() * 50) + 10;
    if (!seen.has(num)) {
      seen.add(num);
      arr.push(num);
    }
  }
  return arr.sort((a, b) => a - b);
}

export const Searching: React.FC = () => {
  const { updateProgress } = useProgress();
  const [baseArray, setBaseArray] = useState<number[]>(() => generateArray());
  const [target, setTarget] = useState<number>(() => {
    const arr = generateArray();
    return arr[Math.floor(arr.length / 2)];
  });
  const [currentAlgorithm, setCurrentAlgorithm] = useState<'linear' | 'binary'>('linear');

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('searching', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const linearFrames = useMemo(
    () => generateLinearSearchFrames(baseArray, target),
    [baseArray, target],
  );

  const binaryFrames = useMemo(
    () => generateBinarySearchFrames(baseArray, target),
    [baseArray, target],
  );

  const currentFrames = currentAlgorithm === 'linear' ? linearFrames : binaryFrames;
  const currentCode = currentAlgorithm === 'linear' ? LINEAR_SEARCH_CODE : BINARY_SEARCH_CODE;

  const renderSearchFrame = (frame: VisualizerFrame) => {
    const array = frame.arraySnapshot ?? baseArray;
    const highlights = frame.highlights ?? [];

    return (
      <div className="search-visual">
        {array.map((value, index) => {
          const isHighlighted = highlights.includes(index);
          const isTarget = value === target;
          return (
            <div
              key={index}
              className={`search-cell ${isHighlighted ? 'highlight' : ''} ${isTarget ? 'target' : ''}`}
            >
              {value}
              <div className="cell-index">[{index}]</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="searching-page">
      <div className="page-header">
        <h1>🔍 Searching Algorithms</h1>
        <p>Find elements efficiently - Learn when to use linear vs binary search!</p>
      </div>

      <div className="content-section">
        <h2>Interactive Search Visualizer</h2>
        <p>
          Watch how <strong>Linear Search</strong> and <strong>Binary Search</strong> work step-by-step. 
          The code highlights as the algorithm executes, helping you understand each operation.
        </p>

        <div className="algorithm-selector">
          <button
            className={currentAlgorithm === 'linear' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('linear')}
          >
            Linear Search
          </button>
          <button
            className={currentAlgorithm === 'binary' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('binary')}
          >
            Binary Search
          </button>
        </div>

        <div className="search-controls">
          <div className="control-group">
            <label>Target Value:</label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(parseInt(e.target.value) || 0)}
              className="search-input"
              min={Math.min(...baseArray)}
              max={Math.max(...baseArray)}
            />
          </div>
          <button onClick={() => {
            const newArray = generateArray();
            setBaseArray(newArray);
            setTarget(newArray[Math.floor(newArray.length / 2)]);
          }}>
            Generate New Array
          </button>
        </div>

        <AlgorithmVisualizer
          title={currentAlgorithm === 'linear' ? 'Linear Search' : 'Binary Search'}
          frames={currentFrames}
          renderFrame={renderSearchFrame}
          codeSample={currentCode}
          description={
            currentAlgorithm === 'linear'
              ? 'Checks each element sequentially until target is found or array ends.'
              : 'Divides search space in half each step. Requires sorted array.'
          }
        />
      </div>

      <div className="content-section">
        <h2>Linear Search</h2>
        <p>
          <strong>Linear Search</strong> checks each element one by one until the target is found or 
          the end is reached. Simple but slow for large arrays.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of <strong>Linear Search</strong> like looking for a book in an unsorted library:
          </p>
          <ul>
            <li>You check each shelf one by one</li>
            <li>You might find it on the first shelf, or you might check all shelves</li>
            <li>Worst case: You check every single shelf (O(n))</li>
            <li>Best case: You find it immediately (O(1))</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Binary Search</h2>
        <p>
          <strong>Binary Search</strong> works on sorted arrays. It repeatedly divides the search 
          space in half by comparing the target with the middle element.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of <strong>Binary Search</strong> like finding a word in a dictionary:
          </p>
          <ul>
            <li>Open dictionary to middle page</li>
            <li>Is your word before or after this page?</li>
            <li>Eliminate half the pages and repeat</li>
            <li>Much faster than checking every page!</li>
          </ul>
        </div>

        <h3>How It Works:</h3>
        <ol className="step-list">
          <li>Compare target with middle element</li>
          <li>If equal, found! Return index</li>
          <li>If target &lt; middle, search left half</li>
          <li>If target &gt; middle, search right half</li>
          <li>Repeat until found or search space is empty</li>
        </ol>

        <div className="info-box">
          <strong>💡 Key Insight:</strong> Binary search eliminates half the search space each step - that's why it's O(log n)!
        </div>
      </div>

      <div className="content-section">
        <h2>Recursive Binary Search</h2>
        <pre className="code-block">{`def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    
    if left > right:
        return -1  # Not found
    
    mid = (left + right) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Same time complexity: O(log n)
# Space: O(log n) due to recursion stack`}</pre>
      </div>

      <div className="content-section">
        <h2>Comparison</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Requires Sorted?</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Linear Search</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(1)</td>
              <td>No</td>
              <td>Small arrays, unsorted data</td>
            </tr>
            <tr>
              <td>Binary Search</td>
              <td><span className="badge badge-good">O(log n)</span></td>
              <td>O(1) iterative<br />O(log n) recursive</td>
              <td>Yes</td>
              <td>Large sorted arrays</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Common Variations</h2>
        
        <h3>1. Find First Occurrence</h3>
        <pre className="code-block">{`def find_first(arr, target):
    """Find first occurrence of target in sorted array"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result`}</pre>

        <h3>2. Find Insertion Position</h3>
        <pre className="code-block">{`def search_insert(arr, target):
    """Find position to insert target in sorted array"""
    left, right = 0, len(arr)
    
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    
    return left`}</pre>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Searching Algorithms
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Test
arr = [2, 5, 8, 12, 16, 23, 38, 45, 67, 78, 89, 99]
target = 23

print(f"Array: {arr}")
print(f"Target: {target}")
print(f"Linear Search: {linear_search(arr, target)}")
print(f"Binary Search: {binary_search(arr, target)}")`}
        />
      </div>

      <div className="content-section">
        <ProgressTracker topicId="searching" />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <p>Test your understanding! Get hints if you're stuck, and track your progress.</p>
        <AdaptiveQuiz
          question="1. What is the time complexity of binary search?"
          options={[
            {
              text: 'O(n)',
              correct: false,
              explanation: 'Linear search is O(n). Binary search is much faster!',
            },
            {
              text: 'O(log n)',
              correct: true,
              explanation: 'Correct! Binary search eliminates half the search space each step, giving us O(log n) time complexity.',
            },
            {
              text: 'O(n log n)',
              correct: false,
              explanation: 'That would be slower than linear search. Binary search is O(log n).',
            },
            {
              text: 'O(1)',
              correct: false,
              explanation: 'Constant time would be ideal, but binary search requires log n comparisons.',
            },
          ]}
          topicId="searching"
          conceptId="binary-search-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. Can binary search work on an unsorted array?"
          options={[
            {
              text: 'Yes, it will still work correctly',
              correct: false,
              explanation: 'Binary search relies on the sorted property to eliminate half the search space.',
            },
            {
              text: 'No, binary search requires a sorted array',
              correct: true,
              explanation: 'Correct! Binary search needs the array to be sorted to correctly eliminate half the search space each step.',
            },
            {
              text: 'Yes, but it will be slower',
              correct: false,
              explanation: 'It won\'t work correctly at all - you might miss the target even if it exists!',
            },
            {
              text: 'Only if the array is small',
              correct: false,
              explanation: 'Size doesn\'t matter - binary search requires sorted order regardless of array size.',
            },
          ]}
          topicId="searching"
          conceptId="binary-search-requirements"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. When should you use linear search instead of binary search?"
          options={[
            {
              text: 'When the array is very large',
              correct: false,
              explanation: 'Large arrays benefit more from binary search\'s O(log n) performance.',
            },
            {
              text: 'When the array is unsorted or very small',
              correct: true,
              explanation: 'Correct! Use linear search when the array is unsorted (binary search won\'t work) or when the array is so small that the overhead isn\'t worth it.',
            },
            {
              text: 'When you need O(log n) performance',
              correct: false,
              explanation: 'That\'s when you should use binary search, not linear search!',
            },
            {
              text: 'Never, binary search is always better',
              correct: false,
              explanation: 'Binary search requires a sorted array, so linear search is necessary for unsorted data.',
            },
          ]}
          topicId="searching"
          conceptId="when-to-use-linear"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. How many comparisons does binary search need for an array of 1024 elements?"
          options={[
            {
              text: '1024 comparisons',
              correct: false,
              explanation: 'That would be linear search! Binary search is much more efficient.',
            },
            {
              text: '10 comparisons (log₂(1024) = 10)',
              correct: true,
              explanation: 'Correct! log₂(1024) = 10, so binary search needs at most 10 comparisons to find any element in a 1024-element array.',
            },
            {
              text: '512 comparisons',
              correct: false,
              explanation: 'That\'s half the array - binary search eliminates half each step, not checks half.',
            },
            {
              text: '32 comparisons',
              correct: false,
              explanation: 'That\'s log₂(4,294,967,296). For 1024 elements, it\'s log₂(1024) = 10.',
            },
          ]}
          topicId="searching"
          conceptId="binary-search-efficiency"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Linear Search:</strong> O(n) - works on any array, simple but slow for large data</li>
          <li>✅ <strong>Binary Search:</strong> O(log n) - much faster but requires sorted array</li>
          <li>✅ <strong>Choose Wisely:</strong> Use binary search when array is sorted and large</li>
          <li>✅ <strong>Divide and Conquer:</strong> Binary search eliminates half the search space each step</li>
          <li>✅ <strong>Edge Cases:</strong> Always handle empty arrays, single element, target not found</li>
          <li>✅ <strong>Off-by-One:</strong> Be careful with left &lt;= right vs left &lt; right in binary search</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Using Binary Search on Unsorted Array:</strong> Results will be incorrect!</li>
          <li>❌ <strong>Off-by-One Errors:</strong> Wrong loop condition (left &lt; right vs left &lt;= right)</li>
          <li>❌ <strong>Integer Overflow:</strong> Use (left + right) // 2, not (left + right) / 2</li>
          <li>❌ <strong>Forgetting Edge Cases:</strong> Empty array, single element, target not found</li>
          <li>❌ <strong>Not Updating Bounds Correctly:</strong> mid + 1 and mid - 1, not just mid</li>
        </ul>
      </div>
    </div>
  );
};

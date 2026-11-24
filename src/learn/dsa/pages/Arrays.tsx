import React, { useState, useMemo } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { generateArrayAccessFrames, generateArraySearchFrames, generateArrayInsertFrames, generateArrayDeleteFrames } from '../utils/arrayVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './Arrays.css';

const ARRAY_ACCESS_CODE = `# Array Access - O(1)
arr = [10, 20, 30, 40, 50]
value = arr[2]  # Direct access
print(value)    # Output: 30

# Time: O(1) - Constant time!`;

const ARRAY_SEARCH_CODE = `# Array Search - O(n)
def search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Time: O(n) - May need to check all elements`;

const ARRAY_INSERT_CODE = `# Array Insertion - O(n)
def insert(arr, value, index):
    # Shift elements to the right
    arr.append(0)  # Add space
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]
    arr[index] = value
    return arr

# Time: O(n) - Need to shift elements`;

const ARRAY_DELETE_CODE = `# Array Deletion - O(n)
def delete(arr, index):
    # Shift elements to the left
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()  # Remove last element
    return arr

# Time: O(n) - Need to shift elements`;

export const Arrays: React.FC = () => {
  const { updateProgress } = useProgress();
  const [baseArray] = useState([10, 20, 30, 40, 50]);
  const [currentOperation, setCurrentOperation] = useState<'access' | 'search' | 'insert' | 'delete'>('access');
  const [operationParams, setOperationParams] = useState({ index: 2, value: 25, target: 30 });

  const accessFrames = useMemo(
    () => generateArrayAccessFrames(baseArray, operationParams.index),
    [baseArray, operationParams.index]
  );

  const searchFrames = useMemo(
    () => generateArraySearchFrames(baseArray, operationParams.target),
    [baseArray, operationParams.target]
  );

  const insertFrames = useMemo(
    () => generateArrayInsertFrames(baseArray, operationParams.value, operationParams.index),
    [baseArray, operationParams.value, operationParams.index]
  );

  const deleteFrames = useMemo(
    () => generateArrayDeleteFrames(baseArray, operationParams.index),
    [baseArray, operationParams.index]
  );

  const currentFrames = 
    currentOperation === 'access' ? accessFrames :
    currentOperation === 'search' ? searchFrames :
    currentOperation === 'insert' ? insertFrames :
    deleteFrames;

  const currentCode = 
    currentOperation === 'access' ? ARRAY_ACCESS_CODE :
    currentOperation === 'search' ? ARRAY_SEARCH_CODE :
    currentOperation === 'insert' ? ARRAY_INSERT_CODE :
    ARRAY_DELETE_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('arrays', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderArrayFrame = (frame: VisualizerFrame) => {
    const array = frame.arraySnapshot ?? baseArray;
    const highlights = frame.highlights ?? [];

    return (
      <div className="array-visualization">
        {array.map((value, index) => {
          const isHighlighted = highlights.includes(index);
          return (
            <div key={index} className="array-cell-container">
              <div className={`array-cell ${isHighlighted ? 'highlight' : ''}`}>
                {value}
              </div>
              <div className="array-index">[{index}]</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="arrays-page">
      <div className="page-header">
        <h1>📊 Arrays & Lists</h1>
        <p>Master the foundation of data structures with interactive examples and visualizations</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="arrays" />
      </div>

      <div className="content-section">
        <h2>What is an Array?</h2>
        <p>An <strong>array</strong> is a collection of elements stored in contiguous memory locations. Each element can be accessed directly using its index, starting from 0.</p>
        
        <div className="interactive-demo">
          <h3>Interactive Array Operations</h3>
          <p>Watch how array operations work step-by-step with synchronized code highlighting.</p>

          <div className="array-operation-selector">
            <button
              className={currentOperation === 'access' ? 'active' : ''}
              onClick={() => setCurrentOperation('access')}
            >
              Access
            </button>
            <button
              className={currentOperation === 'search' ? 'active' : ''}
              onClick={() => setCurrentOperation('search')}
            >
              Search
            </button>
            <button
              className={currentOperation === 'insert' ? 'active' : ''}
              onClick={() => setCurrentOperation('insert')}
            >
              Insert
            </button>
            <button
              className={currentOperation === 'delete' ? 'active' : ''}
              onClick={() => setCurrentOperation('delete')}
            >
              Delete
            </button>
          </div>

          {currentOperation === 'access' && (
            <div className="operation-controls">
              <label>Index:</label>
              <input
                type="number"
                value={operationParams.index}
                onChange={(e) => setOperationParams({ ...operationParams, index: Math.max(0, Math.min(baseArray.length - 1, parseInt(e.target.value) || 0)) })}
                min={0}
                max={baseArray.length - 1}
                className="param-input"
              />
            </div>
          )}

          {currentOperation === 'search' && (
            <div className="operation-controls">
              <label>Target:</label>
              <input
                type="number"
                value={operationParams.target}
                onChange={(e) => setOperationParams({ ...operationParams, target: parseInt(e.target.value) || 0 })}
                className="param-input"
              />
            </div>
          )}

          {currentOperation === 'insert' && (
            <div className="operation-controls">
              <label>Value:</label>
              <input
                type="number"
                value={operationParams.value}
                onChange={(e) => setOperationParams({ ...operationParams, value: parseInt(e.target.value) || 0 })}
                className="param-input"
              />
              <label>Index:</label>
              <input
                type="number"
                value={operationParams.index}
                onChange={(e) => setOperationParams({ ...operationParams, index: Math.max(0, Math.min(baseArray.length, parseInt(e.target.value) || 0)) })}
                min={0}
                max={baseArray.length}
                className="param-input"
              />
            </div>
          )}

          {currentOperation === 'delete' && (
            <div className="operation-controls">
              <label>Index:</label>
              <input
                type="number"
                value={operationParams.index}
                onChange={(e) => setOperationParams({ ...operationParams, index: Math.max(0, Math.min(baseArray.length - 1, parseInt(e.target.value) || 0)) })}
                min={0}
                max={baseArray.length - 1}
                className="param-input"
              />
            </div>
          )}

          <AlgorithmVisualizer
            title={
              currentOperation === 'access' ? 'Array Access' :
              currentOperation === 'search' ? 'Array Search' :
              currentOperation === 'insert' ? 'Array Insertion' :
              'Array Deletion'
            }
            frames={currentFrames}
            renderFrame={renderArrayFrame}
            codeSample={currentCode}
            description={
              currentOperation === 'access'
                ? 'Direct access by index. O(1) time complexity.'
                : currentOperation === 'search'
                ? 'Linear search through array. O(n) time complexity.'
                : currentOperation === 'insert'
                ? 'Insert element at index, shifting others. O(n) time complexity.'
                : 'Delete element at index, shifting others. O(n) time complexity.'
            }
          />
        </div>

        <div className="memory-diagram">
          <h3>💾 Memory Layout Visualization</h3>
          <p>Arrays are stored in contiguous memory locations:</p>
          <div className="memory-layout">
            <div className="memory-cell address">0x1000<br /><small>Address</small></div>
            <div className="memory-cell value">arr[0]<br /><small>10</small></div>
            <div className="memory-cell address">0x1004<br /><small>Address</small></div>
            <div className="memory-cell value">arr[1]<br /><small>20</small></div>
            <div className="memory-cell address">0x1008<br /><small>Address</small></div>
            <div className="memory-cell value">arr[2]<br /><small>30</small></div>
            <div className="memory-cell address">0x100C<br /><small>Address</small></div>
            <div className="memory-cell value">arr[3]<br /><small>40</small></div>
            <div className="memory-cell address">0x1010<br /><small>Address</small></div>
            <div className="memory-cell value">arr[4]<br /><small>50</small></div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>O(1)</td>
              <td>Direct index access</td>
            </tr>
            <tr>
              <td>Search</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(1)</td>
              <td>May need to check all elements</td>
            </tr>
            <tr>
              <td>Insertion (end)</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>O(1)</td>
              <td>Amortized for dynamic arrays</td>
            </tr>
            <tr>
              <td>Insertion (middle)</td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(1)</td>
              <td>Need to shift elements</td>
            </tr>
            <tr>
              <td>Deletion</td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(1)</td>
              <td>Need to shift elements</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>📝 Code Examples</h2>
        <p>See how array operations are implemented in different programming languages:</p>

        <h3>1. Array Access</h3>
        <MultiLanguageCode
          examples={{
            python: `# Array Access - O(1)
arr = [10, 20, 30, 40, 50]
value = arr[2]  # Direct access
print(value)    # Output: 30

# Time: O(1) - Constant time!`,
            cpp: `// Array Access - O(1)
#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int value = arr[2];  // Direct access
    cout << value << endl;  // Output: 30
    
    // Time: O(1) - Constant time!
    return 0;
}`,
            c: `/* Array Access - O(1) */
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int value = arr[2];  // Direct access
    printf("%d\\n", value);  // Output: 30
    
    /* Time: O(1) - Constant time! */
    return 0;
}`,
            java: `// Array Access - O(1)
public class ArrayAccess {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int value = arr[2];  // Direct access
        System.out.println(value);  // Output: 30
        
        // Time: O(1) - Constant time!
    }
}`
          }}
        />

        <h3>2. Array Search</h3>
        <MultiLanguageCode
          examples={{
            python: `# Array Search - O(n)
def search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Time: O(n) - May need to check all elements`,
            cpp: `// Array Search - O(n)
#include <iostream>
using namespace std;

int search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Time: O(n) - May need to check all elements`,
            c: `/* Array Search - O(n) */
#include <stdio.h>

int search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

/* Time: O(n) - May need to check all elements */`,
            java: `// Array Search - O(n)
public class ArraySearch {
    public static int search(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    
    // Time: O(n) - May need to check all elements
}`
          }}
        />

        <h3>3. Array Insertion</h3>
        <MultiLanguageCode
          examples={{
            python: `# Array Insertion - O(n)
def insert(arr, value, index):
    # Shift elements to the right
    arr.append(0)  # Add space
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]
    arr[index] = value
    return arr

# Time: O(n) - Need to shift elements`,
            cpp: `// Array Insertion - O(n)
#include <iostream>
using namespace std;

void insert(int arr[], int& n, int value, int index) {
    // Shift elements to the right
    for (int i = n; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    n++;
}

// Time: O(n) - Need to shift elements`,
            c: `/* Array Insertion - O(n) */
#include <stdio.h>

void insert(int arr[], int* n, int value, int index) {
    /* Shift elements to the right */
    for (int i = *n; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    (*n)++;
}

/* Time: O(n) - Need to shift elements */`,
            java: `// Array Insertion - O(n)
import java.util.Arrays;

public class ArrayInsertion {
    public static int[] insert(int[] arr, int value, int index) {
        int[] newArr = new int[arr.length + 1];
        System.arraycopy(arr, 0, newArr, 0, index);
        newArr[index] = value;
        System.arraycopy(arr, index, newArr, index + 1, arr.length - index);
        return newArr;
    }
    
    // Time: O(n) - Need to shift elements
}`
          }}
        />

        <h3>4. Array Deletion</h3>
        <MultiLanguageCode
          examples={{
            python: `# Array Deletion - O(n)
def delete(arr, index):
    # Shift elements to the left
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()  # Remove last element
    return arr

# Time: O(n) - Need to shift elements`,
            cpp: `// Array Deletion - O(n)
#include <iostream>
using namespace std;

void deleteElement(int arr[], int& n, int index) {
    // Shift elements to the left
    for (int i = index; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

// Time: O(n) - Need to shift elements`,
            c: `/* Array Deletion - O(n) */
#include <stdio.h>

void deleteElement(int arr[], int* n, int index) {
    /* Shift elements to the left */
    for (int i = index; i < *n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    (*n)--;
}

/* Time: O(n) - Need to shift elements */`,
            java: `// Array Deletion - O(n)
import java.util.Arrays;

public class ArrayDeletion {
    public static int[] delete(int[] arr, int index) {
        int[] newArr = new int[arr.length - 1];
        System.arraycopy(arr, 0, newArr, 0, index);
        System.arraycopy(arr, index + 1, newArr, index, arr.length - index - 1);
        return newArr;
    }
    
    // Time: O(n) - Need to shift elements
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Arrays - Create and manipulate
arr = [10, 20, 30, 40, 50]
print(f"Array: {arr}")
print(f"First element: {arr[0]}")
print(f"Length: {len(arr)}")
print(f"Sum: {sum(arr)}")

# Access elements
for i in range(len(arr)):
    print(f"arr[{i}] = {arr[i]}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of accessing an element at index i in an array?"
          options={[
            {
              text: 'O(1) - Constant time',
              correct: true,
              explanation: 'Correct! Arrays provide direct access by index using pointer arithmetic, giving O(1) time complexity.',
            },
            {
              text: 'O(n) - Linear time',
              correct: false,
              explanation: 'That would be for search. Access is direct, so it\'s O(1).',
            },
            {
              text: 'O(log n) - Logarithmic time',
              correct: false,
              explanation: 'That would be for binary search. Direct access is O(1).',
            },
            {
              text: 'O(n²) - Quadratic time',
              correct: false,
              explanation: 'That would be extremely slow. Array access is O(1).',
            },
          ]}
          topicId="arrays"
          conceptId="array-access"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. Why does insertion in the middle of an array take O(n) time?"
          options={[
            {
              text: 'Because we need to search for the position',
              correct: false,
              explanation: 'Search is separate. The O(n) comes from shifting elements.',
            },
            {
              text: 'Because we need to shift all elements after the insertion point',
              correct: true,
              explanation: 'Correct! When inserting at index i, we must shift all elements from index i to the end one position to the right, which takes O(n) time.',
            },
            {
              text: 'Because arrays are stored in memory',
              correct: false,
              explanation: 'Memory storage is O(1) access. The issue is shifting elements.',
            },
            {
              text: 'Because we need to resize the array',
              correct: false,
              explanation: 'Resizing is separate. The O(n) is from shifting elements.',
            },
          ]}
          topicId="arrays"
          conceptId="array-insertion"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ Arrays provide O(1) access but O(n) for search/insertion/deletion</li>
          <li>✅ Use two pointers for sorted array problems</li>
          <li>✅ Sliding window is efficient for subarray problems</li>
          <li>✅ Dynamic arrays resize automatically (amortized O(1) append)</li>
          <li>✅ Index starts at 0 - remember this to avoid off-by-one errors!</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Index Out of Bounds:</strong> Always check array bounds before accessing</li>
          <li>❌ <strong>Off-by-One Errors:</strong> Remember indices start at 0, not 1</li>
          <li>❌ <strong>Modifying During Iteration:</strong> Be careful when modifying arrays while iterating</li>
          <li>❌ <strong>Forgetting Array Sorted:</strong> Two pointers only work on sorted arrays</li>
        </ul>
      </div>
    </div>
  );
};

import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateHeapPushFrames, generateHeapPopFrames, generateHeapifyFrames } from '../utils/heapVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './HeapsPriority.css';

const HEAP_PUSH_CODE = `def heap_push(heap, value):
    """Push value into min-heap - O(log n)"""
    heap.append(value)  # Add at end
    i = len(heap) - 1
    
    # Bubble up (swim)
    while i > 0:
        parent = (i - 1) // 2
        if heap[i] >= heap[parent]:
            break  # Heap property satisfied
        heap[i], heap[parent] = heap[parent], heap[i]
        i = parent
    
    return heap

# Time: O(log n), Space: O(1)`;

const HEAP_POP_CODE = `def heap_pop(heap):
    """Pop minimum from min-heap - O(log n)"""
    if not heap:
        return None
    
    min_val = heap[0]
    heap[0] = heap[-1]  # Move last to root
    heap.pop()
    
    # Bubble down (sink)
    i = 0
    while True:
        left = 2 * i + 1
        right = 2 * i + 2
        smallest = i
        
        if left < len(heap) and heap[left] < heap[smallest]:
            smallest = left
        if right < len(heap) and heap[right] < heap[smallest]:
            smallest = right
        
        if smallest == i:
            break  # Heap property satisfied
        
        heap[i], heap[smallest] = heap[smallest], heap[i]
        i = smallest
    
    return min_val

# Time: O(log n), Space: O(1)`;

const HEAPIFY_CODE = `def heapify(arr):
    """Build heap from array - O(n) time!"""
    n = len(arr)
    # Start from last non-leaf node
    for i in range(n // 2 - 1, -1, -1):
        # Bubble down from node i
        current = i
        while True:
            left = 2 * current + 1
            right = 2 * current + 2
            smallest = current
            
            if left < n and arr[left] < arr[smallest]:
                smallest = left
            if right < n and arr[right] < arr[smallest]:
                smallest = right
            
            if smallest == current:
                break
            
            arr[current], arr[smallest] = arr[smallest], arr[current]
            current = smallest
    
    return arr

# Time: O(n), Space: O(1)
# Note: O(n) is better than O(n log n)!`;

export const HeapsPriority: React.FC = () => {
  const { updateProgress } = useProgress();
  const [heap] = useState<number[]>([10, 20, 15, 30, 25]);
  const [pushValue, setPushValue] = useState(12);
  const [currentOperation, setCurrentOperation] = useState<'push' | 'pop' | 'heapify'>('push');

  const pushFrames = useMemo(() => generateHeapPushFrames(heap, pushValue), [heap, pushValue]);
  const popFrames = useMemo(() => generateHeapPopFrames(heap), [heap]);
  const heapifyFrames = useMemo(() => {
    const testArray = [35, 40, 15, 50, 60, 45, 20];
    return generateHeapifyFrames(testArray);
  }, []);

  const currentFrames = 
    currentOperation === 'push' ? pushFrames :
    currentOperation === 'pop' ? popFrames :
    heapifyFrames;

  const currentCode = 
    currentOperation === 'push' ? HEAP_PUSH_CODE :
    currentOperation === 'pop' ? HEAP_POP_CODE :
    HEAPIFY_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('heaps_priority', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderHeapFrame = (frame: VisualizerFrame) => {
    const array = frame.arraySnapshot ?? heap;
    const highlights = frame.highlights ?? [];

    return (
      <div className="heap-visual">
        <div className="heap-array">
          {array.map((value, index) => {
            const isHighlighted = highlights.includes(index);
            return (
              <div
                key={index}
                className={`heap-cell ${isHighlighted ? 'highlight' : ''}`}
              >
                <div className="heap-value">{value}</div>
                <div className="heap-index">[{index}]</div>
              </div>
            );
          })}
        </div>
        <div className="heap-tree">
          {renderHeapTree(array, highlights)}
        </div>
      </div>
    );
  };

  const renderHeapTree = (arr: number[], highlights: number[]) => {
    if (arr.length === 0) return null;

    const renderNode = (index: number, level: number): React.ReactNode => {
      if (index >= arr.length) return null;
      const isHighlighted = highlights.includes(index);
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;

      return (
        <div key={index} className="tree-node-wrapper">
          <div className={`tree-node ${isHighlighted ? 'highlight' : ''}`}>
            {arr[index]}
          </div>
          {(leftIdx < arr.length || rightIdx < arr.length) && (
            <div className="tree-children">
              {leftIdx < arr.length && renderNode(leftIdx, level + 1)}
              {rightIdx < arr.length && renderNode(rightIdx, level + 1)}
            </div>
          )}
        </div>
      );
    };

    return <div className="tree-root">{renderNode(0, 0)}</div>;
  };

  return (
    <div className="heaps-priority-page">
      <div className="page-header">
        <h1>🛗 Heaps & Priority Queues</h1>
        <p>Reference: CLRS Chapter 6 - Fast priority selection with O(log n) operations!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="heaps_priority" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          A <strong>heap</strong> is a complete binary tree stored as an array where each parent is 
          less than or equal to its children (min-heap). This gives O(log n) push/pop of the minimum element.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Task Schedulers:</strong> Pick next task with smallest deadline</li>
            <li><strong>Dijkstra's Algorithm:</strong> Uses min-priority queue for shortest paths</li>
            <li><strong>Streaming Top-K:</strong> Maintain k smallest/largest elements</li>
            <li><strong>Event Simulation:</strong> Process events in chronological order</li>
          </ul>
        </div>

        <div className="info-box">
          <strong>Key Operations:</strong>
          <ul>
            <li>Push: O(log n) - Add element and bubble up</li>
            <li>Pop-min: O(log n) - Remove root and bubble down</li>
            <li>Peek: O(1) - Get minimum without removing</li>
            <li>Build-heap: O(n) - Convert array to heap (surprisingly fast!)</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Interactive Heap Visualizer</h2>
        <p>
          Watch how heap operations work step-by-step. The tree view shows the binary tree structure, 
          while the array view shows how it's stored in memory.
        </p>

        <div className="heap-operation-selector">
          <button
            className={currentOperation === 'push' ? 'active' : ''}
            onClick={() => setCurrentOperation('push')}
          >
            Push
          </button>
          <button
            className={currentOperation === 'pop' ? 'active' : ''}
            onClick={() => setCurrentOperation('pop')}
          >
            Pop Min
          </button>
          <button
            className={currentOperation === 'heapify' ? 'active' : ''}
            onClick={() => setCurrentOperation('heapify')}
          >
            Build Heap
          </button>
        </div>

        {currentOperation === 'push' && (
          <div className="heap-controls">
            <label>Value to Push:</label>
            <input
              type="number"
              value={pushValue}
              onChange={(e) => setPushValue(parseInt(e.target.value) || 0)}
              className="heap-input"
            />
          </div>
        )}

        <AlgorithmVisualizer
          title={
            currentOperation === 'push' ? 'Heap Push (Bubble Up)' :
            currentOperation === 'pop' ? 'Heap Pop (Bubble Down)' :
            'Heapify (Build Heap)'
          }
          frames={currentFrames}
          renderFrame={renderHeapFrame}
          codeSample={currentCode}
          description={
            currentOperation === 'push'
              ? 'Add element at end, then bubble up to maintain heap property.'
              : currentOperation === 'pop'
              ? 'Remove root, move last element to root, then bubble down.'
              : 'Build heap from unsorted array in O(n) time by heapifying from bottom up.'
          }
        />
      </div>

      <div className="content-section">
        <h2>Heap Structure</h2>
        <p>
          A heap is a <strong>complete binary tree</strong> stored in an array. For any node at index <code>i</code>:
        </p>
        <ul>
          <li>Parent: <code>parent(i) = (i - 1) // 2</code></li>
          <li>Left child: <code>left(i) = 2 * i + 1</code></li>
          <li>Right child: <code>right(i) = 2 * i + 2</code></li>
        </ul>

        <div className="info-box">
          <strong>Heap Property (Min-Heap):</strong> For every node, its value is less than or equal to its children.
          This ensures the minimum is always at the root!
        </div>
      </div>

      <div className="content-section">
        <h2>Heap Operations</h2>

        <h3>1. Push (Insert)</h3>
        <ol className="step-list">
          <li>Add element at the end of the array</li>
          <li>Compare with parent</li>
          <li>If smaller, swap with parent</li>
          <li>Repeat until heap property is satisfied</li>
        </ol>

        <h3>2. Pop (Extract Min)</h3>
        <ol className="step-list">
          <li>Remove root (minimum element)</li>
          <li>Move last element to root</li>
          <li>Compare with children</li>
          <li>Swap with smaller child if needed</li>
          <li>Repeat until heap property is satisfied</li>
        </ol>

        <h3>3. Heapify (Build Heap)</h3>
        <p>
          Surprisingly, building a heap from an unsorted array takes <strong>O(n)</strong> time, not O(n log n)!
          This is because most nodes are near the bottom, so they don't need to bubble down far.
        </p>
      </div>

      <div className="content-section">
        <h2>Heapsort</h2>
        <p>
          Heapsort uses a heap to sort an array in O(n log n) time with O(1) extra space.
        </p>
        <pre className="code-block">{`def heapsort(arr):
    """Sort array using heap - O(n log n) time, O(1) space"""
    n = len(arr)
    
    # Build max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify_down(arr, n, i)
    
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]  # Move max to end
        heapify_down(arr, i, 0)  # Heapify reduced heap
    
    return arr

# Time: O(n log n), Space: O(1)
# Not stable, but in-place!`}</pre>
      </div>

      <div className="content-section">
        <h2>Priority Queue Implementation</h2>
        <pre className="code-block">{`class PriorityQueue:
    def __init__(self):
        self.heap = []
    
    def push(self, value):
        """Add element - O(log n)"""
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)
    
    def pop(self):
        """Remove minimum - O(log n)"""
        if not self.heap:
            return None
        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        if self.heap:
            self._bubble_down(0)
        return min_val
    
    def peek(self):
        """Get minimum without removing - O(1)"""
        return self.heap[0] if self.heap else None
    
    def _bubble_up(self, i):
        while i > 0:
            parent = (i - 1) // 2
            if self.heap[i] >= self.heap[parent]:
                break
            self.heap[i], self.heap[parent] = self.heap[parent], self.heap[i]
            i = parent
    
    def _bubble_down(self, i):
        while True:
            left = 2 * i + 1
            right = 2 * i + 2
            smallest = i
            
            if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
                smallest = right
            
            if smallest == i:
                break
            
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            i = smallest`}</pre>
      </div>

          <div className="content-section">
            <h2>📝 Code Examples</h2>
            <p>See how heap operations are implemented in different programming languages:</p>

            <h3>1. Heap Push (Insert)</h3>
            <MultiLanguageCode
              examples={{
                python: HEAP_PUSH_CODE,
                cpp: `#include <vector>
#include <algorithm>

void heapPush(std::vector<int>& heap, int value) {
    heap.push_back(value);  // Add at end
    int i = heap.size() - 1;
    
    // Bubble up (swim)
    while (i > 0) {
        int parent = (i - 1) / 2;
        if (heap[i] >= heap[parent]) {
            break;  // Heap property satisfied
        }
        std::swap(heap[i], heap[parent]);
        i = parent;
    }
}

// Time: O(log n), Space: O(1)`,
                c: `#include <stdio.h>

void heapPush(int heap[], int* size, int value) {
    heap[(*size)++] = value;  // Add at end
    int i = *size - 1;
    
    // Bubble up (swim)
    while (i > 0) {
        int parent = (i - 1) / 2;
        if (heap[i] >= heap[parent]) {
            break;  // Heap property satisfied
        }
        int temp = heap[i];
        heap[i] = heap[parent];
        heap[parent] = temp;
        i = parent;
    }
}

/* Time: O(log n), Space: O(1) */`,
                java: `import java.util.ArrayList;

public class MinHeap {
    private ArrayList<Integer> heap;
    
    public void heapPush(int value) {
        heap.add(value);  // Add at end
        int i = heap.size() - 1;
        
        // Bubble up (swim)
        while (i > 0) {
            int parent = (i - 1) / 2;
            if (heap.get(i) >= heap.get(parent)) {
                break;  // Heap property satisfied
            }
            int temp = heap.get(i);
            heap.set(i, heap.get(parent));
            heap.set(parent, temp);
            i = parent;
        }
    }
    
    // Time: O(log n), Space: O(1)
}`
              }}
            />

            <h3>2. Heap Pop (Extract Min)</h3>
            <MultiLanguageCode
              examples={{
                python: HEAP_POP_CODE,
                cpp: `int heapPop(std::vector<int>& heap) {
    if (heap.empty()) return -1;
    
    int minVal = heap[0];
    heap[0] = heap.back();  // Move last to root
    heap.pop_back();
    
    // Bubble down (sink)
    int i = 0;
    while (true) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;
        
        if (left < heap.size() && heap[left] < heap[smallest]) {
            smallest = left;
        }
        if (right < heap.size() && heap[right] < heap[smallest]) {
            smallest = right;
        }
        
        if (smallest == i) break;  // Heap property satisfied
        
        std::swap(heap[i], heap[smallest]);
        i = smallest;
    }
    
    return minVal;
}

// Time: O(log n), Space: O(1)`,
                c: `int heapPop(int heap[], int* size) {
    if (*size == 0) return -1;
    
    int minVal = heap[0];
    heap[0] = heap[--(*size)];  // Move last to root
    
    // Bubble down (sink)
    int i = 0;
    while (1) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;
        
        if (left < *size && heap[left] < heap[smallest]) {
            smallest = left;
        }
        if (right < *size && heap[right] < heap[smallest]) {
            smallest = right;
        }
        
        if (smallest == i) break;  // Heap property satisfied
        
        int temp = heap[i];
        heap[i] = heap[smallest];
        heap[smallest] = temp;
        i = smallest;
    }
    
    return minVal;
}

/* Time: O(log n), Space: O(1) */`,
                java: `public int heapPop() {
    if (heap.isEmpty()) return -1;
    
    int minVal = heap.get(0);
    heap.set(0, heap.get(heap.size() - 1));  // Move last to root
    heap.remove(heap.size() - 1);
    
    // Bubble down (sink)
    int i = 0;
    while (true) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;
        
        if (left < heap.size() && heap.get(left) < heap.get(smallest)) {
            smallest = left;
        }
        if (right < heap.size() && heap.get(right) < heap.get(smallest)) {
            smallest = right;
        }
        
        if (smallest == i) break;  // Heap property satisfied
        
        int temp = heap.get(i);
        heap.set(i, heap.get(smallest));
        heap.set(smallest, temp);
        i = smallest;
    }
    
    return minVal;
}

// Time: O(log n), Space: O(1)`
              }}
            />
          </div>

          <div className="content-section">
            <h2>💻 Code Playground</h2>
            <CodePlayground
          defaultCode={`# Heaps & Priority Queues
class MinHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        self.heap.append(val)
        i = len(self.heap) - 1
        while i > 0:
            parent = (i - 1) // 2
            if self.heap[i] >= self.heap[parent]:
                break
            self.heap[i], self.heap[parent] = self.heap[parent], self.heap[i]
            i = parent
    
    def pop(self):
        if not self.heap:
            return None
        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        i = 0
        while True:
            left = 2 * i + 1
            right = 2 * i + 2
            smallest = i
            if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
                smallest = right
            if smallest == i:
                break
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            i = smallest
        return min_val

# Test
pq = MinHeap()
pq.push(10)
pq.push(5)
pq.push(15)
pq.push(3)
print(f"Heap: {pq.heap}")
print(f"Pop: {pq.pop()}")
print(f"Heap: {pq.heap}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of building a heap from an unsorted array?"
          options={[
            {
              text: 'O(n log n)',
              correct: false,
              explanation: 'That would be if we inserted each element one by one. But heapify is smarter!',
            },
            {
              text: 'O(n)',
              correct: true,
              explanation: 'Correct! Heapify works bottom-up, and most nodes are near the bottom, so they don\'t need to bubble down far. This gives us O(n) time complexity.',
            },
            {
              text: 'O(n²)',
              correct: false,
              explanation: 'That would be very slow! Heapify is much more efficient.',
            },
            {
              text: 'O(log n)',
              correct: false,
              explanation: 'That\'s the time for a single push/pop, not building the entire heap.',
            },
          ]}
          topicId="heaps_priority"
          conceptId="heapify-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. In a min-heap, where is the minimum element always located?"
          options={[
            {
              text: 'At the last index',
              correct: false,
              explanation: 'The last element is just the last element added, not necessarily the minimum.',
            },
            {
              text: 'At the root (index 0)',
              correct: true,
              explanation: 'Correct! The heap property ensures the minimum is always at the root, making peek O(1).',
            },
            {
              text: 'At a random position',
              correct: false,
              explanation: 'The heap property guarantees the minimum is at a specific location.',
            },
            {
              text: 'At index n/2',
              correct: false,
              explanation: 'That\'s roughly the middle, but the minimum is always at the root.',
            },
          ]}
          topicId="heaps_priority"
          conceptId="heap-property"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is the parent index of a node at index i in a heap array?"
          options={[
            {
              text: 'i / 2',
              correct: false,
              explanation: 'Close, but we need integer division and to account for 0-indexing.',
            },
            {
              text: '(i - 1) // 2',
              correct: true,
              explanation: 'Correct! For 0-indexed arrays, parent(i) = (i - 1) // 2.',
            },
            {
              text: 'i - 1',
              correct: false,
              explanation: 'That would only work for specific indices, not all nodes.',
            },
            {
              text: '2 * i',
              correct: false,
              explanation: 'That\'s the left child formula, not the parent.',
            },
          ]}
          topicId="heaps_priority"
          conceptId="heap-indexing"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Heap Structure:</strong> Complete binary tree stored as array with parent/child index math</li>
          <li>✅ <strong>Heap Property:</strong> Parent ≤ children (min-heap) ensures minimum at root</li>
          <li>✅ <strong>Push/Pop:</strong> O(log n) via bubble up/down operations</li>
          <li>✅ <strong>Build Heap:</strong> O(n) time - surprisingly fast!</li>
          <li>✅ <strong>Priority Queue:</strong> Perfect for task scheduling, Dijkstra's algorithm</li>
          <li>✅ <strong>Heapsort:</strong> O(n log n) in-place sorting algorithm</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Wrong Index Math:</strong> Forgetting to use (i-1)//2 for parent, or using 2*i+1 for left child</li>
          <li>❌ <strong>Not Checking Bounds:</strong> Forgetting to check if left/right children exist before comparing</li>
          <li>❌ <strong>Confusing Min/Max:</strong> Using &gt; instead of &lt; in min-heap comparisons</li>
          <li>❌ <strong>Assuming O(n log n) Build:</strong> Heapify is O(n), not O(n log n)!</li>
          <li>❌ <strong>Array vs Tree:</strong> Confusing array representation with tree structure</li>
        </ul>
      </div>
    </div>
  );
};


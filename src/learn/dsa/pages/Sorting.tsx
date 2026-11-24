import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { SpeedControls } from '../components/SpeedControls';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './Sorting.css';

const bubbleSortCode = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`;

const generateArray = () =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10);

const createBubbleSortFrames = (input: number[]): VisualizerFrame[] => {
  const frames: VisualizerFrame[] = [];
  const arr = [...input];
  const n = arr.length;

  frames.push({
    arraySnapshot: [...arr],
    highlights: [],
    message: 'Initial array',
    codeLine: 1,
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      frames.push({
        arraySnapshot: [...arr],
        highlights: [j, j + 1],
        message: `Compare ${arr[j]} and ${arr[j + 1]}`,
        codeLine: 5,
      });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        frames.push({
          arraySnapshot: [...arr],
          highlights: [j, j + 1],
          message: `Swap ${arr[j + 1]} and ${arr[j]}`,
          codeLine: 6,
        });
      }
    }
    frames.push({
      arraySnapshot: [...arr],
      highlights: [n - i - 1],
      message: `Largest element settled at position ${n - i}`,
      codeLine: 4,
    });
  }

  return frames;
};

export const Sorting: React.FC = () => {
  const { updateProgress } = useProgress();
  const [baseArray, setBaseArray] = useState<number[]>(() => generateArray());

  const frames = useMemo(() => createBubbleSortFrames(baseArray), [baseArray]);

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('sorting', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="sorting-page">
      <div className="page-header">
        <h1>🔄 Sorting Algorithms</h1>
        <p>Organize data efficiently - Learn how to sort arrays like a pro!</p>
      </div>

      <div className="content-section">
        <h2>Why Sorting Matters</h2>
        <p>
          Sorting is one of the most fundamental operations in computer science. Many algorithms 
          become much easier when data is sorted. Understanding different sorting algorithms helps you 
          choose the right one for your use case.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of sorting like organizing books on a shelf:
          </p>
          <ul>
            <li><strong>Bubble Sort:</strong> Like checking each pair of books and swapping if out of order - slow but simple</li>
            <li><strong>Quick Sort:</strong> Like dividing books into "smaller" and "larger" piles, then sorting each pile</li>
            <li><strong>Merge Sort:</strong> Like dividing books into small groups, sorting each, then merging them back</li>
            <li><strong>Selection Sort:</strong> Like finding the smallest book, putting it first, then repeating</li>
          </ul>
        </div>

        <div className="interactive-demo">
          <div className="visualizer-toolbar">
            <SpeedControls />
            <button
              className="regenerate-btn"
              onClick={() => setBaseArray(generateArray())}
            >
              🔄 Regenerate Array
            </button>
          </div>

          <AlgorithmVisualizer
            title="Bubble Sort Walkthrough"
            description="Step through bubble sort with synchronized code highlighting. Adjust speed or advance step-by-step to inspect every comparison and swap."
            frames={frames}
            codeSample={bubbleSortCode}
            renderFrame={(frame) => (
              <div className="sorting-visual">
                {(frame.arraySnapshot ?? baseArray).map((value, index) => {
                  const isHighlighted = frame.highlights?.includes(index);
                  return (
                    <div
                      key={`${value}-${index}`}
                      className={`sort-bar ${isHighlighted ? 'highlighted' : ''}`}
                      style={{
                        height: `${value * 2.2}px`,
                        width: `${100 / baseArray.length}%`,
                      }}
                    >
                      <span className="bar-value">{value}</span>
                    </div>
                  );
                })}
              </div>
            )}
          />
        </div>
      </div>

      <div className="content-section">
        <h2>Bubble Sort</h2>
        <p>
          <strong>Bubble Sort</strong> repeatedly steps through the list, compares adjacent elements, 
          and swaps them if they're in the wrong order. The pass through the list is repeated until no swaps are needed.
        </p>

        <h3>How It Works:</h3>
        <ol className="step-list">
          <li>Compare first two elements. If first &gt; second, swap them</li>
          <li>Move to next pair, compare and swap if needed</li>
          <li>Continue until end of array</li>
          <li>Repeat for remaining unsorted portion</li>
          <li>Stop when no swaps occur in a pass</li>
        </ol>

        <MultiLanguageCode
          examples={{
            python: `def bubble_sort(arr):
    n = len(arr)
    # Traverse through all elements
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Swap if element found is greater
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no swapping, array is sorted
        if not swapped:
            break
    return arr

# Time: O(n²), Space: O(1)`,
            cpp: `#include <vector>
#include <algorithm>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            // Swap if element found is greater
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // If no swapping, array is sorted
        if (!swapped) break;
    }
}

// Time: O(n²), Space: O(1)`,
            c: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int swapped = 0;
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            // Swap if element found is greater
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        // If no swapping, array is sorted
        if (!swapped) break;
    }
}

/* Time: O(n²), Space: O(1) */`,
            java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            boolean swapped = false;
            // Last i elements are already in place
            for (int j = 0; j < n - i - 1; j++) {
                // Swap if element found is greater
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no swapping, array is sorted
            if (!swapped) break;
        }
    }
    
    // Time: O(n²), Space: O(1)
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Quick Sort</h2>
        <p>
          <strong>Quick Sort</strong> is a divide-and-conquer algorithm. It picks a pivot element and 
          partitions the array around the pivot, placing smaller elements before and larger after.
        </p>

        <h3>How It Works:</h3>
        <ol className="step-list">
          <li>Choose a pivot element (often last element)</li>
          <li>Partition: Rearrange so elements &lt; pivot are left, &gt; pivot are right</li>
          <li>Recursively sort left and right subarrays</li>
          <li>Combine: Already sorted by partition!</li>
        </ol>

        <MultiLanguageCode
          examples={{
            python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Time: O(n log n) average, O(n²) worst
# Space: O(log n)`,
            cpp: `#include <vector>
#include <algorithm>

std::vector<int> quickSort(std::vector<int> arr) {
    if (arr.size() <= 1) return arr;
    
    int pivot = arr[arr.size() / 2];
    std::vector<int> left, middle, right;
    
    for (int x : arr) {
        if (x < pivot) left.push_back(x);
        else if (x == pivot) middle.push_back(x);
        else right.push_back(x);
    }
    
    left = quickSort(left);
    right = quickSort(right);
    
    left.insert(left.end(), middle.begin(), middle.end());
    left.insert(left.end(), right.begin(), right.end());
    return left;
}

// Time: O(n log n) average, O(n²) worst
// Space: O(log n)`,
            c: `#include <stdio.h>
#include <stdlib.h>

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

/* Time: O(n log n) average, O(n²) worst
   Space: O(log n) */`,
            java: `import java.util.ArrayList;
import java.util.List;

public class QuickSort {
    public static List<Integer> quickSort(List<Integer> arr) {
        if (arr.size() <= 1) return arr;
        
        int pivot = arr.get(arr.size() / 2);
        List<Integer> left = new ArrayList<>();
        List<Integer> middle = new ArrayList<>();
        List<Integer> right = new ArrayList<>();
        
        for (int x : arr) {
            if (x < pivot) left.add(x);
            else if (x == pivot) middle.add(x);
            else right.add(x);
        }
        
        left = quickSort(left);
        right = quickSort(right);
        
        left.addAll(middle);
        left.addAll(right);
        return left;
    }
    
    // Time: O(n log n) average, O(n²) worst
    // Space: O(log n)
}`
          }}
        />

        <div className="info-box">
          <strong>💡 Key Insight:</strong> Quick Sort is usually fastest in practice, but worst case is O(n²)!
        </div>
      </div>

      <div className="content-section">
        <h2>Merge Sort</h2>
        <p>
          <strong>Merge Sort</strong> divides the array into halves, sorts each half, then merges them back together.
        </p>

        <MultiLanguageCode
          examples={{
            python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Divide
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    # Conquer (merge)
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Time: O(n log n) always
# Space: O(n)`,
            cpp: `#include <vector>

std::vector<int> merge(const std::vector<int>& left, const std::vector<int>& right) {
    std::vector<int> result;
    size_t i = 0, j = 0;
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i++]);
        } else {
            result.push_back(right[j++]);
        }
    }
    while (i < left.size()) result.push_back(left[i++]);
    while (j < right.size()) result.push_back(right[j++]);
    return result;
}

std::vector<int> mergeSort(const std::vector<int>& arr) {
    if (arr.size() <= 1) return arr;
    size_t mid = arr.size() / 2;
    std::vector<int> left(arr.begin(), arr.begin() + mid);
    std::vector<int> right(arr.begin() + mid, arr.end());
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

// Time: O(n log n) always
// Space: O(n)`,
            c: `#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void merge_sort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        merge_sort(arr, l, m);
        merge_sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

/* Time: O(n log n) always
   Space: O(n) */`,
            java: `import java.util.Arrays;

public class MergeSort {
    public int[] mergeSort(int[] arr) {
        if (arr.length <= 1) return arr;
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
    
    private int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) result[k++] = left[i++];
            else result[k++] = right[j++];
        }
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        return result;
    }
}

// Time: O(n log n) always
// Space: O(n)`
          }}
        />

        <div className="info-box">
          <strong>💡 Key Insight:</strong> Merge Sort is stable and always O(n log n), but uses O(n) extra space!
        </div>
      </div>

      <div className="content-section">
        <h2>Selection Sort</h2>
        <p>
          <strong>Selection Sort</strong> finds the minimum element and places it at the beginning. 
          Repeat for remaining unsorted portion.
        </p>

        <pre className="code-block">{`def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # Find minimum in unsorted portion
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap with first unsorted element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Time: O(n²), Space: O(1)`}</pre>
      </div>

      <div className="content-section">
        <h2>Insertion Sort</h2>
        <p>
          <strong>Insertion Sort</strong> builds the sorted array one item at a time. It's like sorting playing cards in your hand.
        </p>

        <pre className="code-block">{`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Move elements greater than key one position ahead
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Time: O(n²), Space: O(1)
# Best case: O(n) when array is nearly sorted`}</pre>
      </div>

      <div className="content-section">
        <h2>Comparison Table</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Best Case</th>
              <th>Average</th>
              <th>Worst Case</th>
              <th>Space</th>
              <th>Stable?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bubble Sort</td>
              <td>O(n)</td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td>O(1)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Selection Sort</td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td>O(1)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Insertion Sort</td>
              <td>O(n)</td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td>O(1)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Merge Sort</td>
              <td><span className="badge badge-good">O(n log n)</span></td>
              <td><span className="badge badge-good">O(n log n)</span></td>
              <td><span className="badge badge-good">O(n log n)</span></td>
              <td>O(n)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Quick Sort</td>
              <td><span className="badge badge-good">O(n log n)</span></td>
              <td><span className="badge badge-good">O(n log n)</span></td>
              <td><span className="badge badge-bad">O(n²)</span></td>
              <td>O(log n)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>When to Use Which?</h2>
        <div className="when-to-use">
          <div className="use-case">
            <strong>Bubble Sort:</strong> Never in production! Only for learning.
          </div>
          <div className="use-case">
            <strong>Selection Sort:</strong> When memory is extremely limited and you don't care about performance.
          </div>
          <div className="use-case">
            <strong>Insertion Sort:</strong> Small arrays or nearly sorted data. Used in hybrid algorithms like Timsort.
          </div>
          <div className="use-case">
            <strong>Merge Sort:</strong> When you need stable sort and guaranteed O(n log n). Good for linked lists.
          </div>
          <div className="use-case">
            <strong>Quick Sort:</strong> General-purpose sorting. Fastest in practice, but watch out for worst case!
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Sorting Algorithms Practice
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Test
arr = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {arr}")
print(f"Bubble Sort: {bubble_sort(arr.copy())}")
print(f"Quick Sort: {quick_sort(arr.copy())}")`}
        />
      </div>

      <div className="content-section">
        <ProgressTracker topicId="sorting" />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <p>Test your understanding! Get hints if you're stuck, and track your progress.</p>
        <AdaptiveQuiz
          question="1. What is the time complexity of Bubble Sort in the worst case?"
          options={[
            {
              text: 'O(n)',
              correct: false,
              explanation: 'O(n) would be linear time, but Bubble Sort compares all pairs, making it quadratic.',
            },
            {
              text: 'O(n log n)',
              correct: false,
              explanation: 'That would be efficient algorithms like Merge Sort or Quick Sort.',
            },
            {
              text: 'O(n²)',
              correct: true,
              explanation: 'Correct! Bubble Sort has nested loops comparing all pairs, giving O(n²) worst case time complexity.',
            },
            {
              text: 'O(log n)',
              correct: false,
              explanation: 'That would be even faster, but Bubble Sort is much slower than that.',
            },
          ]}
          topicId="sorting"
          conceptId="bubble-sort-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. Which sorting algorithm has the best average time complexity?"
          options={[
            {
              text: 'Bubble Sort',
              correct: false,
              explanation: 'Bubble Sort is O(n²) on average - one of the slowest!',
            },
            {
              text: 'Quick Sort',
              correct: true,
              explanation: 'Correct! Quick Sort has O(n log n) average time and is usually the fastest in practice.',
            },
            {
              text: 'Selection Sort',
              correct: false,
              explanation: 'Selection Sort is also O(n²) - not efficient for large data.',
            },
            {
              text: 'Insertion Sort',
              correct: false,
              explanation: 'Insertion Sort is O(n²) on average, though it can be O(n) for nearly sorted data.',
            },
          ]}
          topicId="sorting"
          conceptId="best-average-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. Which sorting algorithm is stable and always O(n log n)?"
          options={[
            {
              text: 'Quick Sort',
              correct: false,
              explanation: 'Quick Sort is not stable and can degrade to O(n²) in worst case.',
            },
            {
              text: 'Merge Sort',
              correct: true,
              explanation: 'Correct! Merge Sort is stable and guarantees O(n log n) in all cases, though it uses O(n) extra space.',
            },
            {
              text: 'Heap Sort',
              correct: false,
              explanation: 'Heap Sort is O(n log n) but not stable.',
            },
            {
              text: 'Selection Sort',
              correct: false,
              explanation: 'Selection Sort is O(n²) and not stable.',
            },
          ]}
          topicId="sorting"
          conceptId="stable-sorting"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. What is the space complexity of Merge Sort?"
          options={[
            {
              text: 'O(1)',
              correct: false,
              explanation: 'Merge Sort needs extra space to merge the sorted halves.',
            },
            {
              text: 'O(log n)',
              correct: false,
              explanation: 'That would be the recursion stack, but Merge Sort also needs O(n) for merging.',
            },
            {
              text: 'O(n)',
              correct: true,
              explanation: 'Correct! Merge Sort uses O(n) extra space to store the merged arrays during the merge step.',
            },
            {
              text: 'O(n²)',
              correct: false,
              explanation: 'That would be extremely inefficient - Merge Sort is O(n) space.',
            },
          ]}
          topicId="sorting"
          conceptId="merge-sort-space"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>O(n²) Algorithms:</strong> Bubble, Selection, Insertion - simple but slow for large data</li>
          <li>✅ <strong>O(n log n) Algorithms:</strong> Merge, Quick, Heap - efficient for large datasets</li>
          <li>✅ <strong>Stability Matters:</strong> Stable sorts preserve relative order of equal elements</li>
          <li>✅ <strong>In-place vs Extra Space:</strong> Some algorithms use O(1) space, others need O(n)</li>
          <li>✅ <strong>Best Case Scenarios:</strong> Insertion sort is O(n) for nearly sorted data!</li>
          <li>✅ <strong>Choose Wisely:</strong> Consider data size, stability needs, and memory constraints</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Using O(n²) for Large Data:</strong> Never use Bubble/Selection/Insertion for large arrays!</li>
          <li>❌ <strong>Forgetting Edge Cases:</strong> Empty arrays, single element, already sorted arrays</li>
          <li>❌ <strong>Off-by-One Errors:</strong> Be careful with loop boundaries in sorting algorithms</li>
          <li>❌ <strong>Not Understanding Stability:</strong> Equal elements might change order in unstable sorts</li>
          <li>❌ <strong>Ignoring Worst Case:</strong> Quick Sort can degrade to O(n²) with bad pivot choice</li>
        </ul>
      </div>
    </div>
  );
};


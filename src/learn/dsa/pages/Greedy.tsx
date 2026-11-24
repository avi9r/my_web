import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { useProgress } from '../contexts/ProgressContext';
import './Greedy.css';

export const Greedy: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('greedy', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="greedy-page">
      <div className="page-header">
        <h1>💰 Greedy Algorithms</h1>
        <p>Make locally optimal choices to find global optimum - Sometimes the best strategy is to be greedy!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="greedy" />
      </div>

      <div className="content-section">
        <h2>What is a Greedy Algorithm?</h2>
        <p>
          A <strong>greedy algorithm</strong> makes the best choice at each step, hoping to find a global optimum. 
          It never reconsider previous choices - "greedy" because it takes the best option immediately.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of greedy algorithms like making change:
          </p>
          <ul>
            <li>To make $0.67, you take the largest coin that fits (quarter)</li>
            <li>Then the next largest (another quarter)</li>
            <li>Then a dime, then a nickel, then pennies</li>
            <li>You never reconsider - just take the best option at each step</li>
            <li>This works for US coins, but not for all coin systems!</li>
          </ul>
        </div>

        <div className="key-principles">
          <h3>When Greedy Works:</h3>
          <div className="principle-card">
            <strong>1. Greedy Choice Property</strong>
            <p>A globally optimal solution can be reached by making locally optimal choices</p>
          </div>
          <div className="principle-card">
            <strong>2. Optimal Substructure</strong>
            <p>Optimal solution contains optimal solutions to subproblems</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Classic Greedy Problems</h2>
        
        <h3>1. Activity Selection Problem</h3>
        <p><strong>Problem:</strong> Select maximum number of non-overlapping activities.</p>
        <MultiLanguageCode
          examples={{
            python: `def activity_selection(start, finish):
    # Sort by finish time
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    
    selected = [activities[0]]
    last_finish = activities[0][1]
    
    for s, f in activities[1:]:
        if s >= last_finish:  # No overlap
            selected.append((s, f))
            last_finish = f
    
    return selected

# Greedy choice: Always pick activity that finishes earliest`,
            cpp: `#include <vector>
#include <algorithm>

std::vector<std::pair<int, int>> activitySelection(std::vector<int>& start, std::vector<int>& finish) {
    std::vector<std::pair<int, int>> activities;
    for (size_t i = 0; i < start.size(); i++) {
        activities.push_back({start[i], finish[i]});
    }
    
    // Sort by finish time
    std::sort(activities.begin(), activities.end(), 
              [](const auto& a, const auto& b) { return a.second < b.second; });
    
    std::vector<std::pair<int, int>> selected = {activities[0]};
    int lastFinish = activities[0].second;
    
    for (size_t i = 1; i < activities.size(); i++) {
        if (activities[i].first >= lastFinish) {  // No overlap
            selected.push_back(activities[i]);
            lastFinish = activities[i].second;
        }
    }
    
    return selected;
}

// Greedy choice: Always pick activity that finishes earliest`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int start, finish;
} Activity;

int compare(const void* a, const void* b) {
    return ((Activity*)a)->finish - ((Activity*)b)->finish;
}

void activitySelection(Activity activities[], int n) {
    qsort(activities, n, sizeof(Activity), compare);
    
    printf("Selected: (%d, %d) ", activities[0].start, activities[0].finish);
    int lastFinish = activities[0].finish;
    
    for (int i = 1; i < n; i++) {
        if (activities[i].start >= lastFinish) {  // No overlap
            printf("(%d, %d) ", activities[i].start, activities[i].finish);
            lastFinish = activities[i].finish;
        }
    }
}

/* Greedy choice: Always pick activity that finishes earliest */`,
            java: `import java.util.*;

public class ActivitySelection {
    public static List<int[]> activitySelection(int[] start, int[] finish) {
        int n = start.length;
        int[][] activities = new int[n][2];
        for (int i = 0; i < n; i++) {
            activities[i] = new int[]{start[i], finish[i]};
        }
        
        // Sort by finish time
        Arrays.sort(activities, (a, b) -> a[1] - b[1]);
        
        List<int[]> selected = new ArrayList<>();
        selected.add(activities[0]);
        int lastFinish = activities[0][1];
        
        for (int i = 1; i < n; i++) {
            if (activities[i][0] >= lastFinish) {  // No overlap
                selected.add(activities[i]);
                lastFinish = activities[i][1];
            }
        }
        
        return selected;
    }
    
    // Greedy choice: Always pick activity that finishes earliest
}`
          }}
        />

        <h3>2. Fractional Knapsack</h3>
        <p><strong>Problem:</strong> Maximize value, can take fractions of items.</p>
        <MultiLanguageCode
          examples={{
            python: `def fractional_knapsack(weights, values, capacity):
    # Calculate value per weight ratio
    items = [(v/w, w, v) for w, v in zip(weights, values)]
    items.sort(reverse=True)  # Sort by ratio (greedy!)
    
    total_value = 0
    remaining = capacity
    
    for ratio, weight, value in items:
        if remaining >= weight:
            total_value += value
            remaining -= weight
        else:
            # Take fraction
            total_value += ratio * remaining
            break
    
    return total_value`,
            cpp: `#include <vector>
#include <algorithm>

double fractionalKnapsack(std::vector<int>& weights, std::vector<int>& values, int capacity) {
    std::vector<std::tuple<double, int, int>> items;
    for (size_t i = 0; i < weights.size(); i++) {
        items.push_back({(double)values[i] / weights[i], weights[i], values[i]});
    }
    
    // Sort by ratio (greedy!)
    std::sort(items.rbegin(), items.rend());
    
    double totalValue = 0;
    int remaining = capacity;
    
    for (const auto& [ratio, weight, value] : items) {
        if (remaining >= weight) {
            totalValue += value;
            remaining -= weight;
        } else {
            // Take fraction
            totalValue += ratio * remaining;
            break;
        }
    }
    
    return totalValue;
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    double ratio;
    int weight, value;
} Item;

int compare(const void* a, const void* b) {
    return ((Item*)b)->ratio > ((Item*)a)->ratio ? 1 : -1;
}

double fractionalKnapsack(int weights[], int values[], int n, int capacity) {
    Item items[n];
    for (int i = 0; i < n; i++) {
        items[i] = (Item){(double)values[i] / weights[i], weights[i], values[i]};
    }
    
    qsort(items, n, sizeof(Item), compare);  // Sort by ratio (greedy!)
    
    double totalValue = 0;
    int remaining = capacity;
    
    for (int i = 0; i < n; i++) {
        if (remaining >= items[i].weight) {
            totalValue += items[i].value;
            remaining -= items[i].weight;
        } else {
            totalValue += items[i].ratio * remaining;  // Take fraction
            break;
        }
    }
    
    return totalValue;
}`,
            java: `import java.util.*;

public class FractionalKnapsack {
    public static double fractionalKnapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        double[][] items = new double[n][3];
        for (int i = 0; i < n; i++) {
            items[i] = new double[]{(double)values[i] / weights[i], weights[i], values[i]};
        }
        
        // Sort by ratio (greedy!)
        Arrays.sort(items, (a, b) -> Double.compare(b[0], a[0]));
        
        double totalValue = 0;
        int remaining = capacity;
        
        for (double[] item : items) {
            if (remaining >= item[1]) {
                totalValue += item[2];
                remaining -= item[1];
            } else {
                totalValue += item[0] * remaining;  // Take fraction
                break;
            }
        }
        
        return totalValue;
    }
}`
          }}
        />

        <h3>3. Minimum Spanning Tree (Kruskal's)</h3>
        <p><strong>Problem:</strong> Find minimum cost to connect all nodes.</p>
        <pre className="code-block">{`def kruskal_mst(edges, n):
    # Sort edges by weight (greedy!)
    edges.sort(key=lambda x: x[2])
    
    parent = list(range(n))
    mst = []
    cost = 0
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    for u, v, w in edges:
        if find(u) != find(v):  # No cycle
            mst.append((u, v))
            cost += w
            parent[find(u)] = find(v)
    
    return mst, cost`}</pre>

        <h3>4. Huffman Coding</h3>
        <p><strong>Problem:</strong> Optimal prefix-free encoding for compression.</p>
        <pre className="code-block">{`import heapq

def huffman_coding(freq):
    # Build min heap
    heap = [[f, [char, ""]] for char, f in freq.items()]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        # Greedy: merge two least frequent
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        
        for pair in left[1:]:
            pair[1] = '0' + pair[1]
        for pair in right[1:]:
            pair[1] = '1' + pair[1]
        
        heapq.heappush(heap, [left[0] + right[0]] + left[1:] + right[1:])
    
    return heap[0][1:]`}</pre>
      </div>

      <div className="content-section">
        <h2>Greedy vs Dynamic Programming</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Greedy</th>
              <th>Dynamic Programming</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decision</td>
              <td>Makes one choice, never reconsider</td>
              <td>Considers all possibilities</td>
            </tr>
            <tr>
              <td>Optimality</td>
              <td>May not always be optimal</td>
              <td>Always finds optimal solution</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>Usually faster</td>
              <td>May be slower</td>
            </tr>
            <tr>
              <td>When to Use</td>
              <td>When greedy choice property holds</td>
              <td>When subproblems overlap</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Greedy Algorithm Examples

# Activity Selection
def activity_selection(start, finish):
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    selected = [activities[0]]
    last_finish = activities[0][1]
    
    for s, f in activities[1:]:
        if s >= last_finish:
            selected.append((s, f))
            last_finish = f
    return selected

# Test
start = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]
print(f"Selected activities: {activity_selection(start, finish)}")

# Fractional Knapsack
def fractional_knapsack(weights, values, capacity):
    items = [(v/w, w, v) for w, v in zip(weights, values)]
    items.sort(reverse=True)
    
    total_value = 0
    remaining = capacity
    
    for ratio, weight, value in items:
        if remaining >= weight:
            total_value += value
            remaining -= weight
        else:
            total_value += ratio * remaining
            break
    return total_value

weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50
print(f"Max value: {fractional_knapsack(weights, values, capacity)}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the key characteristic of greedy algorithms?"
          options={[
            {
              text: 'They always find the optimal solution',
              correct: false,
              explanation: 'Greedy algorithms don\'t always find optimal solutions. They need specific properties.',
            },
            {
              text: 'They make locally optimal choices at each step',
              correct: true,
              explanation: 'Correct! Greedy algorithms make the best choice at each step without reconsidering, hoping it leads to a global optimum.',
            },
            {
              text: 'They use recursion',
              correct: false,
              explanation: 'Greedy algorithms can be iterative or recursive. The key is making locally optimal choices.',
            },
            {
              text: 'They are always faster than DP',
              correct: false,
              explanation: 'Speed depends on the problem. Greedy is often faster, but not always applicable.',
            },
          ]}
          topicId="greedy"
          conceptId="greedy-characteristic"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. When does a greedy algorithm guarantee an optimal solution?"
          options={[
            {
              text: 'Always',
              correct: false,
              explanation: 'Greedy doesn\'t always guarantee optimal solutions. It needs specific properties.',
            },
            {
              text: 'When greedy choice property and optimal substructure hold',
              correct: true,
              explanation: 'Correct! Greedy algorithms guarantee optimal solutions when: (1) Greedy choice property - locally optimal choice leads to global optimum, and (2) Optimal substructure - optimal solution contains optimal subproblem solutions.',
            },
            {
              text: 'Only for sorting problems',
              correct: false,
              explanation: 'Greedy works for many problems beyond sorting when properties hold.',
            },
            {
              text: 'Never',
              correct: false,
              explanation: 'Greedy can guarantee optimal solutions when the properties hold (e.g., MST, shortest paths in DAGs).',
            },
          ]}
          topicId="greedy"
          conceptId="greedy-optimality"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is the main difference between greedy and dynamic programming?"
          options={[
            {
              text: 'Greedy is faster',
              correct: false,
              explanation: 'Speed isn\'t the key difference. The difference is in the approach.',
            },
            {
              text: 'Greedy makes one choice and never reconsiders, DP considers all possibilities',
              correct: true,
              explanation: 'Correct! Greedy makes a choice and commits to it. DP explores all possibilities and stores results to avoid recomputation.',
            },
            {
              text: 'DP is always better',
              correct: false,
              explanation: 'Both have their uses. Greedy is simpler and faster when applicable.',
            },
            {
              text: 'There is no difference',
              correct: false,
              explanation: 'They\'re fundamentally different approaches to problem-solving.',
            },
          ]}
          topicId="greedy"
          conceptId="greedy-vs-dp"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. Which problem is typically solved using greedy algorithms?"
          options={[
            {
              text: '0/1 Knapsack',
              correct: false,
              explanation: '0/1 Knapsack requires DP. Greedy doesn\'t work because items can\'t be split.',
            },
            {
              text: 'Fractional Knapsack',
              correct: true,
              explanation: 'Correct! Fractional knapsack allows splitting items, so greedy (take highest value/weight ratio) works perfectly.',
            },
            {
              text: 'Longest Common Subsequence',
              correct: false,
              explanation: 'LCS requires DP to consider all subsequences.',
            },
            {
              text: 'Edit Distance',
              correct: false,
              explanation: 'Edit distance requires DP to consider all edit operations.',
            },
          ]}
          topicId="greedy"
          conceptId="greedy-problems"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Local Optimal:</strong> Make best choice at each step</li>
          <li>✅ <strong>No Backtracking:</strong> Never reconsider previous choices</li>
          <li>✅ <strong>When It Works:</strong> Greedy choice property + optimal substructure</li>
          <li>✅ <strong>Faster:</strong> Usually O(n log n) or O(n) - simpler than DP</li>
          <li>✅ <strong>Not Always Optimal:</strong> May not find global optimum in all cases</li>
          <li>✅ <strong>Common Uses:</strong> Scheduling, MST, Huffman coding, coin change (certain systems)</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Assuming Always Optimal:</strong> Greedy doesn't always give optimal solution!</li>
          <li>❌ <strong>Wrong Greedy Choice:</strong> Must prove greedy choice property holds</li>
          <li>❌ <strong>Using for 0/1 Knapsack:</strong> Greedy doesn't work - use DP instead</li>
          <li>❌ <strong>Not Sorting Correctly:</strong> Sort by the right criteria (finish time, ratio, etc.)</li>
          <li>❌ <strong>Confusing with DP:</strong> Greedy makes one choice, DP considers all</li>
        </ul>
      </div>
    </div>
  );
};



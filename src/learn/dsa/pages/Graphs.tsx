import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { useProgress } from '../contexts/ProgressContext';
import './Graphs.css';

export const Graphs: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('graphs', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="graphs-page">
      <div className="page-header">
        <h1>🕸️ Graphs</h1>
        <p>Represent relationships and connections - Master graph algorithms for real-world problems!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="graphs" />
      </div>

      <div className="content-section">
        <h2>What is a Graph?</h2>
        <p>
          A <strong>graph</strong> is a data structure consisting of nodes (vertices) connected by edges. 
          Graphs can represent relationships, networks, and connections.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of a graph like a social network:
          </p>
          <ul>
            <li><strong>Vertices (Nodes):</strong> People in the network</li>
            <li><strong>Edges:</strong> Friendships/connections between people</li>
            <li><strong>Directed:</strong> One-way relationships (like following on Twitter)</li>
            <li><strong>Undirected:</strong> Two-way relationships (like Facebook friends)</li>
            <li><strong>Weighted:</strong> Strength of relationship (like interaction frequency)</li>
          </ul>
        </div>

        <div className="visual-diagram">
          <h3>Graph Types</h3>
          <div className="graph-types">
            <div className="graph-type">
              <strong>Undirected Graph</strong>
              <div className="simple-graph">
                A — B<br />
                |   |<br />
                C — D
              </div>
            </div>
            <div className="graph-type">
              <strong>Directed Graph</strong>
              <div className="simple-graph">
                A → B<br />
                ↓   ↑<br />
                C ← D
              </div>
            </div>
            <div className="graph-type">
              <strong>Weighted Graph</strong>
              <div className="simple-graph">
                A--5--B<br />
                |     |<br />
                3     2<br />
                |     |<br />
                C--4--D
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Graph Representations</h2>
        
        <h3>1. Adjacency List</h3>
        <p>Each vertex stores list of its neighbors. Space-efficient for sparse graphs.</p>
        <MultiLanguageCode
          examples={{
            python: `# Adjacency List
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}

# Space: O(V + E)
# Good for: Sparse graphs, most algorithms`,
            cpp: `#include <vector>

// Adjacency List
std::vector<std::vector<int>> graph = {
    {1, 2},  // Node 0
    {0, 3},  // Node 1
    {0, 3},  // Node 2
    {1, 2}   // Node 3
};

// Space: O(V + E)
// Good for: Sparse graphs, most algorithms`,
            c: `// Adjacency List
#include <stdio.h>

int graph[4][2] = {
    {1, 2},  // Node 0
    {0, 3},  // Node 1
    {0, 3},  // Node 2
    {1, 2}   // Node 3
};

/* Space: O(V + E)
   Good for: Sparse graphs, most algorithms */`,
            java: `import java.util.*;

// Adjacency List
List<List<Integer>> graph = new ArrayList<>();
graph.add(Arrays.asList(1, 2));  // Node 0
graph.add(Arrays.asList(0, 3));  // Node 1
graph.add(Arrays.asList(0, 3));  // Node 2
graph.add(Arrays.asList(1, 2));  // Node 3

// Space: O(V + E)
// Good for: Sparse graphs, most algorithms`
          }}
        />

        <h3>2. Adjacency Matrix</h3>
        <p>2D array where matrix[i][j] = 1 if edge exists. Space-efficient for dense graphs.</p>
        <MultiLanguageCode
          examples={{
            python: `# Adjacency Matrix
graph = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

# Space: O(V²)
# Good for: Dense graphs, quick edge lookup`,
            cpp: `#include <vector>

// Adjacency Matrix
std::vector<std::vector<int>> graph = {
    {0, 1, 1, 0},
    {1, 0, 0, 1},
    {1, 0, 0, 1},
    {0, 1, 1, 0}
};

// Space: O(V²)
// Good for: Dense graphs, quick edge lookup`,
            c: `// Adjacency Matrix
#include <stdio.h>

int graph[4][4] = {
    {0, 1, 1, 0},
    {1, 0, 0, 1},
    {1, 0, 0, 1},
    {0, 1, 1, 0}
};

/* Space: O(V²)
   Good for: Dense graphs, quick edge lookup */`,
            java: `// Adjacency Matrix
int[][] graph = {
    {0, 1, 1, 0},
    {1, 0, 0, 1},
    {1, 0, 0, 1},
    {0, 1, 1, 0}
};

// Space: O(V²)
// Good for: Dense graphs, quick edge lookup`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Graph Traversals</h2>
        
        <h3>1. Depth-First Search (DFS)</h3>
        <p>Explore as far as possible along each branch before backtracking.</p>
        <MultiLanguageCode
          examples={{
            python: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)  # Process node
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Time: O(V + E), Space: O(V)`,
            cpp: `#include <vector>
#include <unordered_set>

void dfs(const std::vector<std::vector<int>>& graph, int start, std::unordered_set<int>& visited) {
    visited.insert(start);
    std::cout << start << " ";  // Process node
    
    for (int neighbor : graph[start]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Time: O(V + E), Space: O(V)`,
            c: `#include <stdio.h>
#include <stdbool.h>

#define MAX_N 100

bool visited[MAX_N];

void dfs(int graph[][MAX_N], int n, int start) {
    visited[start] = true;
    printf("%d ", start);  // Process node
    
    for (int i = 0; i < n; i++) {
        if (graph[start][i] && !visited[i]) {
            dfs(graph, n, i);
        }
    }
}

/* Time: O(V + E), Space: O(V) */`,
            java: `import java.util.*;

public class DFS {
    public static void dfs(List<List<Integer>> graph, int start, Set<Integer> visited) {
        visited.add(start);
        System.out.print(start + " ");  // Process node
        
        for (int neighbor : graph.get(start)) {
            if (!visited.contains(neighbor)) {
                dfs(graph, neighbor, visited);
            }
        }
    }
    
    // Time: O(V + E), Space: O(V)
}`
          }}
        />

        <h3>2. Breadth-First Search (BFS)</h3>
        <p>Explore all neighbors at current depth before moving to next level.</p>
        <MultiLanguageCode
          examples={{
            python: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node)  # Process node
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Time: O(V + E), Space: O(V)`,
            cpp: `#include <vector>
#include <queue>
#include <unordered_set>

void bfs(const std::vector<std::vector<int>>& graph, int start) {
    std::unordered_set<int> visited;
    std::queue<int> q;
    
    q.push(start);
    visited.insert(start);
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        std::cout << node << " ";  // Process node
        
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
}

// Time: O(V + E), Space: O(V)`,
            c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define MAX_N 100

typedef struct {
    int items[MAX_N];
    int front, rear;
} Queue;

void enqueue(Queue* q, int item) {
    q->items[q->rear++] = item;
}

int dequeue(Queue* q) {
    return q->items[q->front++];
}

bool isEmpty(Queue* q) {
    return q->front >= q->rear;
}

void bfs(int graph[][MAX_N], int n, int start) {
    bool visited[MAX_N] = {false};
    Queue q = {0};
    
    enqueue(&q, start);
    visited[start] = true;
    
    while (!isEmpty(&q)) {
        int node = dequeue(&q);
        printf("%d ", node);  // Process node
        
        for (int i = 0; i < n; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = true;
                enqueue(&q, i);
            }
        }
    }
}

/* Time: O(V + E), Space: O(V) */`,
            java: `import java.util.*;

public class BFS {
    public static void bfs(List<List<Integer>> graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        
        queue.offer(start);
        visited.add(start);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");  // Process node
            
            for (int neighbor : graph.get(node)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
    }
    
    // Time: O(V + E), Space: O(V)
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Common Graph Algorithms</h2>
        
        <h3>1. Shortest Path (Dijkstra's)</h3>
        <p>Find shortest path from source to all nodes in weighted graph.</p>
        <MultiLanguageCode
          examples={{
            python: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    visited = set()
    
    while pq:
        dist, node = heapq.heappop(pq)
        if node in visited:
            continue
        visited.add(node)
        
        for neighbor, weight in graph[node]:
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distances

# Time: O((V + E) log V), Space: O(V)`,
            cpp: `#include <vector>
#include <queue>
#include <climits>
#include <unordered_map>

std::unordered_map<int, int> dijkstra(
    const std::unordered_map<int, std::vector<std::pair<int, int>>>& graph, 
    int start) {
    std::unordered_map<int, int> distances;
    for (const auto& [node, _] : graph) {
        distances[node] = INT_MAX;
    }
    distances[start] = 0;
    
    std::priority_queue<std::pair<int, int>, 
                       std::vector<std::pair<int, int>>, 
                       std::greater<std::pair<int, int>>> pq;
    pq.push({0, start});
    std::unordered_set<int> visited;
    
    while (!pq.empty()) {
        auto [dist, node] = pq.top();
        pq.pop();
        if (visited.count(node)) continue;
        visited.insert(node);
        
        for (const auto& [neighbor, weight] : graph.at(node)) {
            int newDist = dist + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.push({newDist, neighbor});
            }
        }
    }
    
    return distances;
}

// Time: O((V + E) log V), Space: O(V)`,
            c: `#include <stdio.h>
#include <limits.h>

// Simplified version for fixed-size graph
void dijkstra(int graph[][4], int n, int start, int distances[]) {
    bool visited[4] = {false};
    for (int i = 0; i < n; i++) distances[i] = INT_MAX;
    distances[start] = 0;
    
    for (int count = 0; count < n - 1; count++) {
        int u = -1;
        for (int v = 0; v < n; v++) {
            if (!visited[v] && (u == -1 || distances[v] < distances[u])) {
                u = v;
            }
        }
        visited[u] = true;
        
        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && distances[u] != INT_MAX &&
                distances[u] + graph[u][v] < distances[v]) {
                distances[v] = distances[u] + graph[u][v];
            }
        }
    }
}

/* Time: O(V²) with array, O((V + E) log V) with heap
   Space: O(V) */`,
            java: `import java.util.*;

public class Dijkstra {
    public Map<Integer, Integer> dijkstra(
            Map<Integer, List<int[]>> graph, int start) {
        Map<Integer, Integer> distances = new HashMap<>();
        for (int node : graph.keySet()) {
            distances.put(node, Integer.MAX_VALUE);
        }
        distances.put(start, 0);
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        pq.offer(new int[]{start, 0});
        Set<Integer> visited = new HashSet<>();
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0], dist = curr[1];
            if (visited.contains(node)) continue;
            visited.add(node);
            
            for (int[] edge : graph.get(node)) {
                int neighbor = edge[0], weight = edge[1];
                int newDist = dist + weight;
                if (newDist < distances.get(neighbor)) {
                    distances.put(neighbor, newDist);
                    pq.offer(new int[]{neighbor, newDist});
                }
            }
        }
        
        return distances;
    }
    
    // Time: O((V + E) log V), Space: O(V)
}`
          }}
        />

        <h3>2. Cycle Detection</h3>
        <p>Check if graph contains a cycle.</p>
        <MultiLanguageCode
          examples={{
            python: `def has_cycle(graph):
    visited = set()
    rec_stack = set()
    
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        
        rec_stack.remove(node)
        return False
    
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False`,
            cpp: `#include <vector>
#include <unordered_set>

bool hasCycle(const std::vector<std::vector<int>>& graph) {
    std::unordered_set<int> visited, recStack;
    
    std::function<bool(int)> dfs = [&](int node) {
        visited.insert(node);
        recStack.insert(node);
        
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                if (dfs(neighbor)) return true;
            } else if (recStack.find(neighbor) != recStack.end()) {
                return true;
            }
        }
        
        recStack.erase(node);
        return false;
    };
    
    for (int i = 0; i < graph.size(); i++) {
        if (visited.find(i) == visited.end()) {
            if (dfs(i)) return true;
        }
    }
    return false;
}`,
            c: `#include <stdio.h>
#include <stdbool.h>

#define MAX_N 100

bool visited[MAX_N], recStack[MAX_N];

bool dfs(int graph[][MAX_N], int n, int node) {
    visited[node] = true;
    recStack[node] = true;
    
    for (int i = 0; i < n; i++) {
        if (graph[node][i]) {
            if (!visited[i]) {
                if (dfs(graph, n, i)) return true;
            } else if (recStack[i]) {
                return true;
            }
        }
    }
    
    recStack[node] = false;
    return false;
}

bool hasCycle(int graph[][MAX_N], int n) {
    for (int i = 0; i < n; i++) {
        visited[i] = recStack[i] = false;
    }
    for (int i = 0; i < n; i++) {
        if (!visited[i] && dfs(graph, n, i)) {
            return true;
        }
    }
    return false;
}`,
            java: `import java.util.*;

public class CycleDetection {
    public boolean hasCycle(List<List<Integer>> graph) {
        Set<Integer> visited = new HashSet<>();
        Set<Integer> recStack = new HashSet<>();
        
        for (int i = 0; i < graph.size(); i++) {
            if (!visited.contains(i)) {
                if (dfs(graph, i, visited, recStack)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    private boolean dfs(List<List<Integer>> graph, int node,
                       Set<Integer> visited, Set<Integer> recStack) {
        visited.add(node);
        recStack.add(node);
        
        for (int neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                if (dfs(graph, neighbor, visited, recStack)) {
                    return true;
                }
            } else if (recStack.contains(neighbor)) {
                return true;
            }
        }
        
        recStack.remove(node);
        return false;
    }
}`
          }}
        />

        <h3>3. Topological Sort</h3>
        <p>Linear ordering of vertices in directed acyclic graph (DAG).</p>
        <MultiLanguageCode
          examples={{
            python: `def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1
    
    queue = [node for node in graph if in_degree[node] == 0]
    result = []
    
    while queue:
        node = queue.pop(0)
        result.append(node)
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return result if len(result) == len(graph) else []`,
            cpp: `#include <vector>
#include <queue>

std::vector<int> topologicalSort(const std::vector<std::vector<int>>& graph) {
    int n = graph.size();
    std::vector<int> inDegree(n, 0);
    
    for (int i = 0; i < n; i++) {
        for (int neighbor : graph[i]) {
            inDegree[neighbor]++;
        }
    }
    
    std::queue<int> q;
    for (int i = 0; i < n; i++) {
        if (inDegree[i] == 0) q.push(i);
    }
    
    std::vector<int> result;
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        result.push_back(node);
        
        for (int neighbor : graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] == 0) {
                q.push(neighbor);
            }
        }
    }
    
    return result.size() == n ? result : std::vector<int>();
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

#define MAX_N 100

void topologicalSort(int graph[][MAX_N], int n, int result[]) {
    int inDegree[MAX_N] = {0};
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (graph[i][j]) inDegree[j]++;
        }
    }
    
    int queue[MAX_N], front = 0, rear = 0;
    for (int i = 0; i < n; i++) {
        if (inDegree[i] == 0) queue[rear++] = i;
    }
    
    int idx = 0;
    while (front < rear) {
        int node = queue[front++];
        result[idx++] = node;
        
        for (int j = 0; j < n; j++) {
            if (graph[node][j]) {
                inDegree[j]--;
                if (inDegree[j] == 0) queue[rear++] = j;
            }
        }
    }
}`,
            java: `import java.util.*;

public class TopologicalSort {
    public List<Integer> topologicalSort(List<List<Integer>> graph) {
        int n = graph.size();
        int[] inDegree = new int[n];
        
        for (int i = 0; i < n; i++) {
            for (int neighbor : graph.get(i)) {
                inDegree[neighbor]++;
            }
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }
        
        List<Integer> result = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            result.add(node);
            
            for (int neighbor : graph.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        
        return result.size() == n ? result : new ArrayList<>();
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Time</th>
              <th>Space</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DFS</td>
              <td>O(V + E)</td>
              <td>O(V)</td>
              <td>Path finding, cycle detection</td>
            </tr>
            <tr>
              <td>BFS</td>
              <td>O(V + E)</td>
              <td>O(V)</td>
              <td>Shortest path (unweighted), level-order</td>
            </tr>
            <tr>
              <td>Dijkstra's</td>
              <td>O((V + E) log V)</td>
              <td>O(V)</td>
              <td>Shortest path (weighted, no negative edges)</td>
            </tr>
            <tr>
              <td>Topological Sort</td>
              <td>O(V + E)</td>
              <td>O(V)</td>
              <td>DAG ordering, dependency resolution</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Graph Implementation and Algorithms

# Adjacency List Representation
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}

# DFS
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# BFS
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Test
print("DFS:", end=" ")
dfs(graph, 0)
print()
print("BFS:", end=" ")
bfs(graph, 0)`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of DFS and BFS?"
          options={[
            {
              text: 'O(V)',
              correct: false,
              explanation: 'We visit all vertices, but also traverse all edges.',
            },
            {
              text: 'O(V + E)',
              correct: true,
              explanation: 'Correct! We visit each vertex once (O(V)) and traverse each edge once (O(E)), giving O(V + E) total.',
            },
            {
              text: 'O(V²)',
              correct: false,
              explanation: 'That would be for dense graphs with adjacency matrix. Adjacency list is O(V + E).',
            },
            {
              text: 'O(E)',
              correct: false,
              explanation: 'We also need to visit vertices. It\'s O(V + E).',
            },
          ]}
          topicId="graphs"
          conceptId="graph-traversal-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. When should you use adjacency list over adjacency matrix?"
          options={[
            {
              text: 'Always use adjacency list',
              correct: false,
              explanation: 'The choice depends on graph density. Both have their uses.',
            },
            {
              text: 'For sparse graphs (few edges)',
              correct: true,
              explanation: 'Correct! Adjacency list uses O(V + E) space, which is better than O(V²) for sparse graphs.',
            },
            {
              text: 'For dense graphs',
              correct: false,
              explanation: 'Dense graphs benefit from adjacency matrix\'s O(1) edge lookup.',
            },
            {
              text: 'Never',
              correct: false,
              explanation: 'Adjacency list is often better for sparse graphs.',
            },
          ]}
          topicId="graphs"
          conceptId="graph-representation"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What does BFS guarantee for unweighted graphs?"
          options={[
            {
              text: 'Minimum spanning tree',
              correct: false,
              explanation: 'MST requires weighted graphs and specific algorithms (Kruskal, Prim).',
            },
            {
              text: 'Shortest path from source',
              correct: true,
              explanation: 'Correct! BFS visits nodes level by level, guaranteeing the shortest path (fewest edges) from source to any node in unweighted graphs.',
            },
            {
              text: 'Topological order',
              correct: false,
              explanation: 'Topological sort requires DAGs and uses DFS, not BFS.',
            },
            {
              text: 'Cycle detection',
              correct: false,
              explanation: 'Both DFS and BFS can detect cycles, but BFS doesn\'t guarantee shortest path for that.',
            },
          ]}
          topicId="graphs"
          conceptId="bfs-shortest-path"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. What is a DAG?"
          options={[
            {
              text: 'Directed Acyclic Graph',
              correct: true,
              explanation: 'Correct! DAG stands for Directed Acyclic Graph - a directed graph with no cycles.',
            },
            {
              text: 'Directed Adjacent Graph',
              correct: false,
              explanation: 'DAG is about cycles, not adjacency.',
            },
            {
              text: 'Depth Acyclic Graph',
              correct: false,
              explanation: 'DAG stands for Directed Acyclic Graph.',
            },
            {
              text: 'Data Access Graph',
              correct: false,
              explanation: 'DAG is a graph theory term, not about data access.',
            },
          ]}
          topicId="graphs"
          conceptId="dag-definition"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Versatile Structure:</strong> Graphs model many real-world problems</li>
          <li>✅ <strong>Two Representations:</strong> Adjacency list (sparse) vs matrix (dense)</li>
          <li>✅ <strong>Traversal:</strong> DFS (depth-first) vs BFS (breadth-first)</li>
          <li>✅ <strong>Shortest Path:</strong> BFS for unweighted, Dijkstra for weighted</li>
          <li>✅ <strong>Cycle Detection:</strong> Use DFS with recursion stack</li>
          <li>✅ <strong>Topological Sort:</strong> Linear ordering of DAG vertices</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Not Marking Visited:</strong> Forgetting to mark nodes visited causes infinite loops!</li>
          <li>❌ <strong>Wrong Data Structure:</strong> Using stack for BFS or queue for DFS</li>
          <li>❌ <strong>Dijkstra with Negative Weights:</strong> Doesn't work - use Bellman-Ford instead</li>
          <li>❌ <strong>Confusing Directed/Undirected:</strong> Be careful with edge direction</li>
          <li>❌ <strong>Space Complexity:</strong> Adjacency matrix is O(V²), not O(V + E)</li>
        </ul>
      </div>
    </div>
  );
};



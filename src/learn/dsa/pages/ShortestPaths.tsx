import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateDijkstraFrames, generateBellmanFordFrames, generateFloydWarshallFrames } from '../utils/shortestPathsVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './ShortestPaths.css';

const DIJKSTRA_CODE = `def dijkstra(graph, start):
    """Dijkstra's shortest path - O((V + E) log V)"""
    import heapq
    n = len(graph)
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]
    visited = set()
    
    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)
        
        for v, weight in graph[u]:
            new_dist = d + weight
            if new_dist < dist[v]:
                dist[v] = new_dist
                heapq.heappush(pq, (new_dist, v))
    
    return dist

# Time: O((V + E) log V), Space: O(V)
# Works only for non-negative weights!`;

const BELLMAN_FORD_CODE = `def bellman_ford(edges, n, start):
    """Bellman-Ford shortest path - O(VE)"""
    dist = [float('inf')] * n
    dist[start] = 0
    
    # Relax edges V-1 times
    for _ in range(n - 1):
        updated = False
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                updated = True
        if not updated:
            break
    
    # Check for negative cycles
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return None  # Negative cycle detected
    
    return dist

# Time: O(VE), Space: O(V)
# Works with negative weights, detects negative cycles!`;

const FLOYD_WARSHALL_CODE = `def floyd_warshall(n, edges):
    """Floyd-Warshall all-pairs shortest paths - O(V³)"""
    dist = [[float('inf')] * n for _ in range(n)]
    
    # Initialize
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in edges:
        dist[u][v] = w
    
    # Floyd-Warshall
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] != float('inf') and dist[k][j] != float('inf'):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist

# Time: O(V³), Space: O(V²)
# Finds shortest paths between ALL pairs of vertices!`;

const sampleGraph = {
  n: 5,
  edges: [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 2, weight: 2 },
    { from: 1, to: 2, weight: 1 },
    { from: 1, to: 3, weight: 5 },
    { from: 2, to: 3, weight: 8 },
    { from: 2, to: 4, weight: 10 },
    { from: 3, to: 4, weight: 2 },
  ],
};

export const ShortestPaths: React.FC = () => {
  const { updateProgress } = useProgress();
  const [currentAlgorithm, setCurrentAlgorithm] = useState<'dijkstra' | 'bellman-ford' | 'floyd-warshall'>('dijkstra');
  const [startNode, setStartNode] = useState(0);

  const dijkstraFrames = useMemo(
    () => generateDijkstraFrames(sampleGraph.n, sampleGraph.edges, startNode),
    [startNode]
  );

  const bellmanFordFrames = useMemo(
    () => generateBellmanFordFrames(sampleGraph.n, sampleGraph.edges, startNode),
    [startNode]
  );

  const floydWarshallFrames = useMemo(
    () => generateFloydWarshallFrames(sampleGraph.n, sampleGraph.edges),
    []
  );

  const currentFrames = 
    currentAlgorithm === 'dijkstra' ? dijkstraFrames :
    currentAlgorithm === 'bellman-ford' ? bellmanFordFrames :
    floydWarshallFrames;

  const currentCode = 
    currentAlgorithm === 'dijkstra' ? DIJKSTRA_CODE :
    currentAlgorithm === 'bellman-ford' ? BELLMAN_FORD_CODE :
    FLOYD_WARSHALL_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('shortest_paths', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderShortestPathFrame = (frame: VisualizerFrame) => {
    const distances = frame.arraySnapshot ?? [];
    const highlights = frame.highlights ?? [];

    return (
      <div className="shortest-path-visual">
        <div className="distance-array">
          <strong>Distances:</strong>
          <div className="distance-list">
            {distances.map((dist, idx) => {
              const isHighlighted = highlights.includes(idx);
              const displayDist = dist === Infinity ? '∞' : dist;
              return (
                <div
                  key={idx}
                  className={`distance-cell ${isHighlighted ? 'highlight' : ''}`}
                >
                  <div className="node-label">Node {idx}</div>
                  <div className="distance-value">{displayDist}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shortest-paths-page">
      <div className="page-header">
        <h1>🛣️ Shortest Paths</h1>
        <p>Reference: CLRS Chapter 24 - Find shortest paths in weighted graphs!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="shortest_paths" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          The <strong>shortest path problem</strong> finds the path with minimum total weight 
          between vertices in a weighted graph. Different algorithms for different scenarios!
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>GPS Navigation:</strong> Find shortest route between locations</li>
            <li><strong>Network Routing:</strong> Route packets through internet with minimum delay</li>
            <li><strong>Social Networks:</strong> Find degrees of separation</li>
            <li><strong>Game AI:</strong> Pathfinding for characters</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Interactive Shortest Path Visualizer</h2>
        <p>
          Watch how <strong>Dijkstra's</strong>, <strong>Bellman-Ford</strong>, and 
          <strong>Floyd-Warshall</strong> algorithms find shortest paths.
        </p>

        <div className="algorithm-selector">
          <button
            className={currentAlgorithm === 'dijkstra' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('dijkstra')}
          >
            Dijkstra's
          </button>
          <button
            className={currentAlgorithm === 'bellman-ford' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('bellman-ford')}
          >
            Bellman-Ford
          </button>
          <button
            className={currentAlgorithm === 'floyd-warshall' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('floyd-warshall')}
          >
            Floyd-Warshall
          </button>
        </div>

        {(currentAlgorithm === 'dijkstra' || currentAlgorithm === 'bellman-ford') && (
          <div className="start-node-control">
            <label>Start Node:</label>
            <input
              type="number"
              value={startNode}
              onChange={(e) => setStartNode(Math.max(0, Math.min(sampleGraph.n - 1, parseInt(e.target.value) || 0)))}
              min={0}
              max={sampleGraph.n - 1}
              className="node-input"
            />
          </div>
        )}

        <AlgorithmVisualizer
          title={
            currentAlgorithm === 'dijkstra' ? "Dijkstra's Algorithm" :
            currentAlgorithm === 'bellman-ford' ? "Bellman-Ford Algorithm" :
            "Floyd-Warshall Algorithm"
          }
          frames={currentFrames}
          renderFrame={renderShortestPathFrame}
          codeSample={currentCode}
          description={
            currentAlgorithm === 'dijkstra'
              ? 'Greedy algorithm for non-negative weights. O((V + E) log V) with priority queue.'
              : currentAlgorithm === 'bellman-ford'
              ? 'Works with negative weights, detects negative cycles. O(VE) time.'
              : 'Finds all-pairs shortest paths. O(V³) time, O(V²) space.'
          }
        />
      </div>

      <div className="content-section">
        <h2>Dijkstra's Algorithm</h2>
        <p>
          <strong>Dijkstra's</strong> algorithm finds shortest paths from a source vertex to all 
          other vertices in a graph with non-negative edge weights.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Initialize distances: source = 0, all others = ∞</li>
          <li>Use priority queue to track (distance, vertex) pairs</li>
          <li>While queue not empty:</li>
          <li>  - Extract vertex u with minimum distance</li>
          <li>  - Mark u as visited</li>
          <li>  - For each neighbor v of u:</li>
          <li>    - If distance[u] + weight(u,v) &lt; distance[v]:</li>
          <li>      - Update distance[v]</li>
          <li>      - Add (distance[v], v) to queue</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O((V + E) log V) with binary heap<br />
          <strong>Space Complexity:</strong> O(V)<br />
          <strong>Limitation:</strong> Only works with non-negative edge weights!
        </div>
      </div>

      <div className="content-section">
        <h2>Bellman-Ford Algorithm</h2>
        <p>
          <strong>Bellman-Ford</strong> algorithm works with graphs that may have negative edge 
          weights and can detect negative cycles.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Initialize distances: source = 0, all others = ∞</li>
          <li>Relax all edges V-1 times:</li>
          <li>  - For each edge (u, v) with weight w:</li>
          <li>    - If distance[u] + w &lt; distance[v]:</li>
          <li>      - Update distance[v] = distance[u] + w</li>
          <li>Check for negative cycles:</li>
          <li>  - If any edge can still be relaxed, negative cycle exists</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(VE)<br />
          <strong>Space Complexity:</strong> O(V)<br />
          <strong>Advantage:</strong> Works with negative weights, detects negative cycles!
        </div>
      </div>

      <div className="content-section">
        <h2>Floyd-Warshall Algorithm</h2>
        <p>
          <strong>Floyd-Warshall</strong> finds shortest paths between all pairs of vertices 
          in a single run.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Initialize distance matrix: dist[i][i] = 0, dist[i][j] = weight if edge exists, else ∞</li>
          <li>For each intermediate vertex k (0 to V-1):</li>
          <li>  - For each pair (i, j):</li>
          <li>    - dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</li>
          <li>Result: dist[i][j] contains shortest path from i to j</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(V³)<br />
          <strong>Space Complexity:</strong> O(V²)<br />
          <strong>Use Case:</strong> When you need all-pairs shortest paths!
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
              <th>Negative Weights?</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dijkstra's</td>
              <td>O((V + E) log V)</td>
              <td>O(V)</td>
              <td>No</td>
              <td>Single-source, non-negative weights</td>
            </tr>
            <tr>
              <td>Bellman-Ford</td>
              <td>O(VE)</td>
              <td>O(V)</td>
              <td>Yes</td>
              <td>Single-source, negative weights, cycle detection</td>
            </tr>
            <tr>
              <td>Floyd-Warshall</td>
              <td>O(V³)</td>
              <td>O(V²)</td>
              <td>Yes</td>
              <td>All-pairs shortest paths</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>📝 Code Examples</h2>
        <p>See how shortest path algorithms are implemented in different programming languages:</p>

        <h3>1. Dijkstra's Algorithm</h3>
        <MultiLanguageCode
          examples={{
            python: DIJKSTRA_CODE,
            cpp: `#include <vector>
#include <queue>
#include <climits>

std::vector<int> dijkstra(const std::vector<std::vector<std::pair<int, int>>>& graph, int start) {
    int n = graph.size();
    std::vector<int> dist(n, INT_MAX);
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        int d = pq.top().first;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (const auto& [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    
    return dist;
}

// Time: O((V + E) log V)`,
            c: `#include <stdio.h>
#include <limits.h>

#define MAX_N 100

void dijkstra(int graph[MAX_N][MAX_N], int n, int start, int dist[]) {
    bool visited[MAX_N] = {false};
    
    for (int i = 0; i < n; i++) dist[i] = INT_MAX;
    dist[start] = 0;
    
    for (int count = 0; count < n - 1; count++) {
        int u = -1;
        for (int v = 0; v < n; v++) {
            if (!visited[v] && (u == -1 || dist[v] < dist[u])) {
                u = v;
            }
        }
        
        visited[u] = true;
        
        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX && 
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
}

/* Time: O(V²) with array, O((V + E) log V) with heap */`,
            java: `import java.util.*;

public class Dijkstra {
    public static int[] dijkstra(List<List<int[]>> graph, int start) {
        int n = graph.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        
        dist[start] = 0;
        pq.offer(new int[]{start, 0});
        
        while (!pq.isEmpty()) {
            int u = pq.poll()[0];
            int d = pq.peek()[1];
            
            if (d > dist[u]) continue;
            
            for (int[] edge : graph.get(u)) {
                int v = edge[0], w = edge[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{v, dist[v]});
                }
            }
        }
        
        return dist;
    }
    
    // Time: O((V + E) log V)
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Shortest Paths - Dijkstra's Algorithm
import heapq

def dijkstra(graph, start):
    n = len(graph)
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]
    visited = set()
    
    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)
        
        for v, weight in graph[u]:
            new_dist = d + weight
            if new_dist < dist[v]:
                dist[v] = new_dist
                heapq.heappush(pq, (new_dist, v))
    
    return dist

# Example graph: adjacency list
graph = [
    [(1, 4), (2, 2)],      # Node 0
    [(2, 1), (3, 5)],      # Node 1
    [(3, 8), (4, 10)],    # Node 2
    [(4, 2)],              # Node 3
    []                     # Node 4
]

distances = dijkstra(graph, 0)
print(f"Shortest distances from node 0: {distances}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. Why can't Dijkstra's algorithm handle negative edge weights?"
          options={[
            {
              text: 'It would be too slow',
              correct: false,
              explanation: 'Speed isn\'t the issue. The algorithm logic breaks with negative weights.',
            },
            {
              text: 'The greedy choice is no longer optimal with negative weights',
              correct: true,
              explanation: 'Correct! Dijkstra assumes that once a vertex is visited, its shortest distance is found. With negative weights, a shorter path might be found later, breaking this assumption.',
            },
            {
              text: 'It would require too much memory',
              correct: false,
              explanation: 'Memory isn\'t the constraint. The algorithm logic is the issue.',
            },
            {
              text: 'It only works for directed graphs',
              correct: false,
              explanation: 'Dijkstra works for both directed and undirected graphs. The issue is negative weights.',
            },
          ]}
          topicId="shortest_paths"
          conceptId="dijkstra-limitation"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. How many times does Bellman-Ford relax edges?"
          options={[
            {
              text: 'V times',
              correct: false,
              explanation: 'V-1 times is sufficient. V times would be for cycle detection.',
            },
            {
              text: 'V - 1 times',
              correct: true,
              explanation: 'Correct! Bellman-Ford relaxes edges V-1 times. In the worst case, the shortest path has V-1 edges, so V-1 relaxations are sufficient.',
            },
            {
              text: 'E times',
              correct: false,
              explanation: 'E is the number of edges, but we need V-1 iterations of relaxing all edges.',
            },
            {
              text: 'V² times',
              correct: false,
              explanation: 'That would be too many. V-1 is the correct number.',
            },
          ]}
          topicId="shortest_paths"
          conceptId="bellman-ford-iterations"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. When should you use Floyd-Warshall instead of running Dijkstra from each vertex?"
          options={[
            {
              text: 'When the graph is sparse',
              correct: false,
              explanation: 'For sparse graphs, running Dijkstra V times is usually better.',
            },
            {
              text: 'When you need all-pairs shortest paths and the graph is dense',
              correct: true,
              explanation: 'Correct! Floyd-Warshall\'s O(V³) is better than V × O((V + E) log V) when the graph is dense (E ≈ V²).',
            },
            {
              text: 'When you only need single-source shortest paths',
              correct: false,
              explanation: 'For single-source, Dijkstra or Bellman-Ford is better.',
            },
            {
              text: 'When the graph has negative cycles',
              correct: false,
              explanation: 'Floyd-Warshall also has issues with negative cycles. Bellman-Ford is better for cycle detection.',
            },
          ]}
          topicId="shortest_paths"
          conceptId="floyd-warshall-use-case"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Dijkstra:</strong> Greedy, O((V+E) log V), only non-negative weights</li>
          <li>✅ <strong>Bellman-Ford:</strong> O(VE), works with negative weights, detects cycles</li>
          <li>✅ <strong>Floyd-Warshall:</strong> O(V³), all-pairs shortest paths in one run</li>
          <li>✅ <strong>Relaxation:</strong> Core operation - update distance if shorter path found</li>
          <li>✅ <strong>Priority Queue:</strong> Dijkstra uses it to always process closest vertex first</li>
          <li>✅ <strong>Negative Cycles:</strong> Make shortest path undefined (can loop infinitely)</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Using Dijkstra with Negative Weights:</strong> Results will be incorrect!</li>
          <li>❌ <strong>Not Checking for Cycles:</strong> Bellman-Ford must check for negative cycles</li>
          <li>❌ <strong>Wrong Initialization:</strong> Forgetting to set source distance to 0</li>
          <li>❌ <strong>Off-by-One in Bellman-Ford:</strong> Need V-1 iterations, not V</li>
          <li>❌ <strong>Floyd-Warshall Order:</strong> Must iterate k, then i, then j (not i, j, k)</li>
        </ul>
      </div>
    </div>
  );
};


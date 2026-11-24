import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateKruskalFrames, generatePrimFrames } from '../utils/mstVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './MST.css';

const KRUSKAL_CODE = `def kruskal_mst(edges, n):
    """Kruskal's MST algorithm - O(E log E)"""
    # Sort edges by weight
    edges.sort(key=lambda x: x[2])
    
    parent = list(range(n))
    mst = []
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return False
        parent[px] = py
        return True
    
    for u, v, w in edges:
        if union(u, v):
            mst.append((u, v, w))
            if len(mst) == n - 1:
                break
    
    return mst

# Time: O(E log E), Space: O(V)
# Uses Union-Find for cycle detection`;

const PRIM_CODE = `def prim_mst(graph, start):
    """Prim's MST algorithm - O(E log V)"""
    import heapq
    n = len(graph)
    in_mst = [False] * n
    mst = []
    pq = [(0, start, -1)]  # (weight, node, parent)
    
    while pq and len(mst) < n - 1:
        w, u, parent = heapq.heappop(pq)
        if in_mst[u]:
            continue
        
        in_mst[u] = True
        if parent != -1:
            mst.append((parent, u, w))
        
        for v, weight in graph[u]:
            if not in_mst[v]:
                heapq.heappush(pq, (weight, v, u))
    
    return mst

# Time: O(E log V), Space: O(V)
# Uses priority queue to find min edge`;

const sampleNodes = {
  A: { x: 80, y: 60 },
  B: { x: 240, y: 60 },
  C: { x: 60, y: 220 },
  D: { x: 240, y: 220 },
  E: { x: 160, y: 140 },
};

const sampleEdges = [
  { u: 'A', v: 'B', weight: 4 },
  { u: 'A', v: 'C', weight: 2 },
  { u: 'B', v: 'D', weight: 3 },
  { u: 'C', v: 'D', weight: 4 },
  { u: 'A', v: 'E', weight: 3 },
  { u: 'B', v: 'E', weight: 2 },
  { u: 'C', v: 'E', weight: 4 },
  { u: 'D', v: 'E', weight: 5 },
];

export const MST: React.FC = () => {
  const { updateProgress } = useProgress();
  const [currentAlgorithm, setCurrentAlgorithm] = useState<'kruskal' | 'prim'>('kruskal');

  const kruskalFrames = useMemo(
    () => generateKruskalFrames(sampleNodes, sampleEdges),
    []
  );

  const primFrames = useMemo(
    () => generatePrimFrames(sampleNodes, sampleEdges),
    []
  );

  const currentFrames = currentAlgorithm === 'kruskal' ? kruskalFrames : primFrames;
  const currentCode = currentAlgorithm === 'kruskal' ? KRUSKAL_CODE : PRIM_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('mst', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderMSTFrame = (frame: VisualizerFrame) => {
    const weights = frame.arraySnapshot ?? [];
    const highlights = frame.highlights ?? [];

    return (
      <div className="mst-visual">
        <div className="mst-graph">
          <svg width="100%" height="300" viewBox="0 0 300 280">
            {sampleEdges.map((edge, idx) => {
              const u = sampleNodes[edge.u as keyof typeof sampleNodes];
              const v = sampleNodes[edge.v as keyof typeof sampleNodes];
              const isHighlighted = highlights.includes(idx);
              return (
                <line
                  key={idx}
                  x1={u.x}
                  y1={u.y}
                  x2={v.x}
                  y2={v.y}
                  stroke={isHighlighted ? '#f56565' : '#cbd5e0'}
                  strokeWidth={isHighlighted ? 4 : 2}
                  className={isHighlighted ? 'highlight-edge' : ''}
                />
              );
            })}
            {Object.entries(sampleNodes).map(([label, pos]) => (
              <g key={label}>
                <circle cx={pos.x} cy={pos.y} r="15" fill="#667eea" />
                <text
                  x={pos.x}
                  y={pos.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="mst-weights">
          <strong>Edge Weights (sorted):</strong>
          <div className="weight-list">
            {weights.map((w, idx) => (
              <span
                key={idx}
                className={`weight-item ${highlights.includes(idx) ? 'highlight' : ''}`}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mst-page">
      <div className="page-header">
        <h1>🕸️ Minimum Spanning Trees</h1>
        <p>Reference: CLRS Chapter 23 - Connect all vertices with minimal total weight!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="mst" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          Given a connected weighted graph, a <strong>Minimum Spanning Tree (MST)</strong> connects 
          all vertices with minimal total weight. No cycles, just the minimum edges needed.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Network Design:</strong> Laying fiber cables/roads/pipelines with minimal cost</li>
            <li><strong>Clustering:</strong> Group similar data points in machine learning</li>
            <li><strong>Circuit Design:</strong> Connect components with minimum wire length</li>
            <li><strong>Approximation Algorithms:</strong> Used in TSP and other optimization problems</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Interactive MST Visualizer</h2>
        <p>
          Watch how <strong>Kruskal's</strong> and <strong>Prim's</strong> algorithms build the MST step-by-step.
        </p>

        <div className="mst-algorithm-selector">
          <button
            className={currentAlgorithm === 'kruskal' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('kruskal')}
          >
            Kruskal's Algorithm
          </button>
          <button
            className={currentAlgorithm === 'prim' ? 'active' : ''}
            onClick={() => setCurrentAlgorithm('prim')}
          >
            Prim's Algorithm
          </button>
        </div>

        <AlgorithmVisualizer
          title={currentAlgorithm === 'kruskal' ? "Kruskal's MST" : "Prim's MST"}
          frames={currentFrames}
          renderFrame={renderMSTFrame}
          codeSample={currentCode}
          description={
            currentAlgorithm === 'kruskal'
              ? 'Sort edges by weight, add if no cycle (Union-Find). O(E log E) time.'
              : 'Grow tree from seed using priority queue. O(E log V) time.'
          }
        />
      </div>

      <div className="content-section">
        <h2>Kruskal's Algorithm</h2>
        <p>
          <strong>Kruskal's</strong> algorithm sorts all edges by weight and adds them one by one, 
          skipping edges that would create a cycle.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Sort all edges by weight (ascending)</li>
          <li>Initialize Union-Find data structure</li>
          <li>For each edge (in sorted order):</li>
          <li>  - If endpoints are in different sets, add edge to MST</li>
          <li>  - Union the two sets</li>
          <li>  - If endpoints are in same set, skip (would create cycle)</li>
          <li>Stop when we have V-1 edges</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(E log E) - dominated by sorting edges<br />
          <strong>Space Complexity:</strong> O(V) - for Union-Find data structure<br />
          <strong>Best For:</strong> Sparse graphs (few edges)
        </div>
      </div>

      <div className="content-section">
        <h2>Prim's Algorithm</h2>
        <p>
          <strong>Prim's</strong> algorithm grows the MST from a starting vertex, always adding 
          the minimum-weight edge connecting the MST to a vertex not yet in the MST.
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Start with any vertex in MST</li>
          <li>Use priority queue to track edges from MST to non-MST vertices</li>
          <li>While MST has fewer than V-1 edges:</li>
          <li>  - Extract minimum-weight edge from queue</li>
          <li>  - If endpoint not in MST, add edge and vertex</li>
          <li>  - Add all edges from new vertex to queue</li>
        </ol>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(E log V) - with binary heap<br />
          <strong>Space Complexity:</strong> O(V) - for priority queue<br />
          <strong>Best For:</strong> Dense graphs (many edges)
        </div>
      </div>

      <div className="content-section">
        <h2>MST Properties</h2>
        <ul>
          <li><strong>Cut Property:</strong> Minimum-weight edge crossing any cut belongs to MST</li>
          <li><strong>Cycle Property:</strong> Maximum-weight edge in any cycle doesn't belong to MST</li>
          <li><strong>Uniqueness:</strong> If all edge weights are distinct, MST is unique</li>
          <li><strong>Optimality:</strong> Both algorithms produce optimal MST</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>📝 Code Examples</h2>
        <p>See how MST algorithms are implemented in different programming languages:</p>

        <h3>1. Kruskal's Algorithm</h3>
        <MultiLanguageCode
          examples={{
            python: KRUSKAL_CODE,
            cpp: `#include <vector>
#include <algorithm>

struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

class UnionFind {
private:
    std::vector<int> parent;
    
public:
    UnionFind(int n) : parent(n) {
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
};

std::vector<Edge> kruskalMST(std::vector<Edge>& edges, int n) {
    std::sort(edges.begin(), edges.end());
    UnionFind uf(n);
    std::vector<Edge> mst;
    
    for (const Edge& e : edges) {
        if (uf.unite(e.u, e.v)) {
            mst.push_back(e);
            if (mst.size() == n - 1) break;
        }
    }
    
    return mst;
}

// Time: O(E log E) or O(E log V)`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int u, v, w;
} Edge;

int parent[100];

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

int unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return 0;
    parent[px] = py;
    return 1;
}

int compare(const void* a, const void* b) {
    return ((Edge*)a)->w - ((Edge*)b)->w;
}

Edge* kruskalMST(Edge edges[], int n, int m) {
    qsort(edges, m, sizeof(Edge), compare);
    for (int i = 0; i < n; i++) parent[i] = i;
    
    Edge* mst = (Edge*)malloc((n - 1) * sizeof(Edge));
    int mstSize = 0;
    
    for (int i = 0; i < m && mstSize < n - 1; i++) {
        if (unite(edges[i].u, edges[i].v)) {
            mst[mstSize++] = edges[i];
        }
    }
    
    return mst;
}

/* Time: O(E log E) */`,
            java: `import java.util.*;

class Edge implements Comparable<Edge> {
    int u, v, w;
    Edge(int u, int v, int w) {
        this.u = u;
        this.v = v;
        this.w = w;
    }
    
    @Override
    public int compareTo(Edge other) {
        return Integer.compare(this.w, other.w);
    }
}

class UnionFind {
    private int[] parent;
    
    public UnionFind(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    public boolean unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
}

public class KruskalMST {
    public static List<Edge> kruskalMST(List<Edge> edges, int n) {
        Collections.sort(edges);
        UnionFind uf = new UnionFind(n);
        List<Edge> mst = new ArrayList<>();
        
        for (Edge e : edges) {
            if (uf.unite(e.u, e.v)) {
                mst.add(e);
                if (mst.size() == n - 1) break;
            }
        }
        
        return mst;
    }
    
    // Time: O(E log E) or O(E log V)
}`
          }}
        />

        <h3>2. Prim's Algorithm</h3>
        <MultiLanguageCode
          examples={{
            python: PRIM_CODE,
            cpp: `#include <vector>
#include <queue>
#include <climits>

std::vector<std::pair<int, int>> primMST(const std::vector<std::vector<std::pair<int, int>>>& graph, int start) {
    int n = graph.size();
    std::vector<bool> inMST(n, false);
    std::vector<int> key(n, INT_MAX);
    std::vector<int> parent(n, -1);
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    
    key[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (inMST[u]) continue;
        inMST[u] = true;
        
        for (const auto& [v, w] : graph[u]) {
            if (!inMST[v] && w < key[v]) {
                key[v] = w;
                parent[v] = u;
                pq.push({w, v});
            }
        }
    }
    
    std::vector<std::pair<int, int>> mst;
    for (int i = 1; i < n; i++) {
        if (parent[i] != -1) {
            mst.push_back({parent[i], i});
        }
    }
    
    return mst;
}

// Time: O(E log V)`,
            c: `#include <stdio.h>
#include <limits.h>

#define MAX_N 100

int primMST(int graph[MAX_N][MAX_N], int n, int start) {
    int key[MAX_N], parent[MAX_N];
    bool inMST[MAX_N] = {false};
    
    for (int i = 0; i < n; i++) {
        key[i] = INT_MAX;
        parent[i] = -1;
    }
    
    key[start] = 0;
    
    for (int count = 0; count < n - 1; count++) {
        int u = -1;
        for (int v = 0; v < n; v++) {
            if (!inMST[v] && (u == -1 || key[v] < key[u])) {
                u = v;
            }
        }
        
        inMST[u] = true;
        
        for (int v = 0; v < n; v++) {
            if (graph[u][v] && !inMST[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }
    
    return 0;  // MST edges stored in parent array
}

/* Time: O(V²) with array, O(E log V) with heap */`,
            java: `import java.util.*;

public class PrimMST {
    public static List<int[]> primMST(List<List<int[]>> graph, int start) {
        int n = graph.size();
        boolean[] inMST = new boolean[n];
        int[] key = new int[n];
        int[] parent = new int[n];
        Arrays.fill(key, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        key[start] = 0;
        pq.offer(new int[]{start, 0});
        
        while (!pq.isEmpty()) {
            int u = pq.poll()[0];
            if (inMST[u]) continue;
            inMST[u] = true;
            
            for (int[] edge : graph.get(u)) {
                int v = edge[0], w = edge[1];
                if (!inMST[v] && w < key[v]) {
                    key[v] = w;
                    parent[v] = u;
                    pq.offer(new int[]{v, w});
                }
            }
        }
        
        List<int[]> mst = new ArrayList<>();
        for (int i = 1; i < n; i++) {
            if (parent[i] != -1) {
                mst.add(new int[]{parent[i], i});
            }
        }
        
        return mst;
    }
    
    // Time: O(E log V)
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Minimum Spanning Tree - Kruskal's Algorithm
def kruskal_mst(edges, n):
    edges.sort(key=lambda x: x[2])  # Sort by weight
    parent = list(range(n))
    mst = []
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return False
        parent[px] = py
        return True
    
    for u, v, w in edges:
        if union(u, v):
            mst.append((u, v, w))
            if len(mst) == n - 1:
                break
    
    return mst

# Example
edges = [
    (0, 1, 4), (0, 2, 2), (1, 3, 3),
    (2, 3, 4), (0, 4, 3), (1, 4, 2),
    (2, 4, 4), (3, 4, 5)
]
mst = kruskal_mst(edges, 5)
print(f"MST edges: {mst}")
print(f"Total weight: {sum(w for _, _, w in mst)}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of Kruskal's algorithm?"
          options={[
            {
              text: 'O(V²)',
              correct: false,
              explanation: 'That would be too slow. Kruskal sorts edges and uses Union-Find.',
            },
            {
              text: 'O(E log E)',
              correct: true,
              explanation: 'Correct! Kruskal sorts edges (O(E log E)) and processes them with Union-Find (O(E α(V))).',
            },
            {
              text: 'O(V log V)',
              correct: false,
              explanation: 'That\'s closer to Prim\'s complexity. Kruskal depends on number of edges.',
            },
            {
              text: 'O(E)',
              correct: false,
              explanation: 'We need to sort edges first, which takes O(E log E) time.',
            },
          ]}
          topicId="mst"
          conceptId="kruskal-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. How many edges does an MST of a graph with V vertices have?"
          options={[
            {
              text: 'V edges',
              correct: false,
              explanation: 'A tree with V vertices has V-1 edges, not V.',
            },
            {
              text: 'V - 1 edges',
              correct: true,
              explanation: 'Correct! A spanning tree connects all V vertices with exactly V-1 edges (no cycles).',
            },
            {
              text: 'E edges',
              correct: false,
              explanation: 'E is the total number of edges in the graph, not the MST.',
            },
            {
              text: 'V + 1 edges',
              correct: false,
              explanation: 'That would create a cycle. Trees have V-1 edges.',
            },
          ]}
          topicId="mst"
          conceptId="mst-edges"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. Which algorithm is better for dense graphs (many edges)?"
          options={[
            {
              text: 'Kruskal\'s',
              correct: false,
              explanation: 'Kruskal sorts all edges, which is expensive for dense graphs.',
            },
            {
              text: 'Prim\'s',
              correct: true,
              explanation: 'Correct! Prim\'s O(E log V) is better than Kruskal\'s O(E log E) when E ≈ V².',
            },
            {
              text: 'Both are equally good',
              correct: false,
              explanation: 'Prim\'s has better time complexity for dense graphs.',
            },
            {
              text: 'Neither',
              correct: false,
              explanation: 'Prim\'s is specifically better for dense graphs.',
            },
          ]}
          topicId="mst"
          conceptId="algorithm-choice"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>MST Goal:</strong> Connect all vertices with minimum total weight, no cycles</li>
          <li>✅ <strong>Kruskal:</strong> Sort edges, add if no cycle (Union-Find) - O(E log E)</li>
          <li>✅ <strong>Prim:</strong> Grow from seed with priority queue - O(E log V)</li>
          <li>✅ <strong>Edges:</strong> MST always has exactly V-1 edges</li>
          <li>✅ <strong>Applications:</strong> Network design, clustering, approximation algorithms</li>
          <li>✅ <strong>Properties:</strong> Cut property and cycle property characterize MST</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting Union-Find:</strong> Kruskal needs Union-Find to detect cycles efficiently</li>
          <li>❌ <strong>Wrong Edge Count:</strong> MST has V-1 edges, not V or E</li>
          <li>❌ <strong>Not Sorting:</strong> Kruskal must process edges in sorted order</li>
          <li>❌ <strong>Cycle Detection:</strong> Must check for cycles before adding edges</li>
          <li>❌ <strong>Graph Connectivity:</strong> MST only exists for connected graphs</li>
        </ul>
      </div>
    </div>
  );
};


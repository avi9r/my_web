import React, { useMemo } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateEdmondsKarpFrames } from '../utils/maxFlowVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './MaxFlow.css';

const EDMONDS_KARP_CODE = `def edmonds_karp(graph, source, sink):
    """Edmonds-Karp max flow - O(V E²)"""
    n = len(graph)
    residual = [[graph[i][j] for j in range(n)] for i in range(n)]
    max_flow = 0
    
    def bfs():
        parent = [-1] * n
        visited = [False] * n
        queue = [source]
        visited[source] = True
        
        while queue:
            u = queue.pop(0)
            for v in range(n):
                if not visited[v] and residual[u][v] > 0:
                    visited[v] = True
                    parent[v] = u
                    queue.append(v)
                    if v == sink:
                        # Reconstruct path
                        path = []
                        cur = sink
                        while cur != -1:
                            path.append(cur)
                            cur = parent[cur]
                        return path[::-1]
        return None
    
    while True:
        path = bfs()
        if not path:
            break
        
        # Find bottleneck
        min_capacity = float('inf')
        for i in range(len(path) - 1):
            u, v = path[i], path[i + 1]
            min_capacity = min(min_capacity, residual[u][v])
        
        # Augment flow
        for i in range(len(path) - 1):
            u, v = path[i], path[i + 1]
            residual[u][v] -= min_capacity
            residual[v][u] += min_capacity
        
        max_flow += min_capacity
    
    return max_flow

# Time: O(V E²), Space: O(V²)
# Uses BFS to find shortest augmenting path!`;

const sampleGraph = {
  n: 6,
  source: 0,
  sink: 5,
  edges: [
    { from: 0, to: 1, capacity: 16, flow: 0 },
    { from: 0, to: 2, capacity: 13, flow: 0 },
    { from: 1, to: 2, capacity: 10, flow: 0 },
    { from: 1, to: 3, capacity: 12, flow: 0 },
    { from: 2, to: 1, capacity: 4, flow: 0 },
    { from: 2, to: 4, capacity: 14, flow: 0 },
    { from: 3, to: 2, capacity: 9, flow: 0 },
    { from: 3, to: 5, capacity: 20, flow: 0 },
    { from: 4, to: 3, capacity: 7, flow: 0 },
    { from: 4, to: 5, capacity: 4, flow: 0 },
  ],
};

export const MaxFlow: React.FC = () => {
  const { updateProgress } = useProgress();

  const frames = useMemo(
    () => generateEdmondsKarpFrames(sampleGraph.n, sampleGraph.edges, sampleGraph.source, sampleGraph.sink),
    []
  );

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('max_flow', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderFlowFrame = (frame: VisualizerFrame) => {
    const capacities = frame.arraySnapshot ?? [];
    const highlights = frame.highlights ?? [];

    return (
      <div className="max-flow-visual">
        <div className="flow-graph">
          <svg width="100%" height="300" viewBox="0 0 400 300">
            {/* Simple graph visualization */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#667eea" />
              </marker>
            </defs>
            {sampleGraph.edges.map((edge, idx) => {
              const fromNode = edge.from;
              const toNode = edge.to;
              const x1 = 50 + (fromNode % 3) * 150;
              const y1 = 50 + Math.floor(fromNode / 3) * 100;
              const x2 = 50 + (toNode % 3) * 150;
              const y2 = 50 + Math.floor(toNode / 3) * 100;
              const isHighlighted = highlights.includes(fromNode) || highlights.includes(toNode);
              
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isHighlighted ? '#f56565' : '#cbd5e0'}
                  strokeWidth={isHighlighted ? 3 : 2}
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
            {Array.from({ length: sampleGraph.n }, (_, i) => {
              const x = 50 + (i % 3) * 150;
              const y = 50 + Math.floor(i / 3) * 100;
              const isHighlighted = highlights.includes(i);
              
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="20" fill={isHighlighted ? '#f56565' : '#667eea'} />
                  <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                    {i === sampleGraph.source ? 'S' : i === sampleGraph.sink ? 'T' : i}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flow-capacities">
          <strong>Edge Capacities:</strong>
          <div className="capacity-list">
            {sampleGraph.edges.map((edge, idx) => {
              const capacity = capacities[idx] ?? edge.capacity;
              const isHighlighted = highlights.includes(edge.from) || highlights.includes(edge.to);
              return (
                <div
                  key={idx}
                  className={`capacity-item ${isHighlighted ? 'highlight' : ''}`}
                >
                  {edge.from}→{edge.to}: {capacity}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-flow-page">
      <div className="page-header">
        <h1>🌊 Max Flow</h1>
        <p>Reference: CLRS Chapter 26 - Find maximum flow in a flow network!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="max_flow" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          The <strong>maximum flow problem</strong> finds the maximum amount of flow that can be sent 
          from a source to a sink in a flow network, respecting edge capacities.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Network Bandwidth:</strong> Maximize data flow through network links</li>
            <li><strong>Bipartite Matching:</strong> Match jobs to workers, students to courses</li>
            <li><strong>Sports Elimination:</strong> Determine if a team can still win</li>
            <li><strong>Image Segmentation:</strong> Separate foreground from background</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Interactive Max Flow Visualizer</h2>
        <p>
          Watch how <strong>Edmonds-Karp</strong> algorithm finds maximum flow using BFS to find 
          augmenting paths.
        </p>

        <AlgorithmVisualizer
          title="Edmonds-Karp Algorithm"
          frames={frames}
          renderFrame={renderFlowFrame}
          codeSample={EDMONDS_KARP_CODE}
          description="Uses BFS to find shortest augmenting paths. O(V E²) time complexity."
        />
      </div>

      <div className="content-section">
        <h2>Ford-Fulkerson Method</h2>
        <p>
          The <strong>Ford-Fulkerson</strong> method is a general approach for solving max flow:
        </p>

        <h3>Steps:</h3>
        <ol className="step-list">
          <li>Initialize flow to 0 for all edges</li>
          <li>While there exists an augmenting path from source to sink:</li>
          <li>  - Find augmenting path (path with positive residual capacity)</li>
          <li>  - Find bottleneck capacity (minimum residual capacity along path)</li>
          <li>  - Augment flow along path by bottleneck amount</li>
          <li>  - Update residual graph (forward edges decrease, reverse edges increase)</li>
          <li>Return maximum flow</li>
        </ol>

        <div className="info-box">
          <strong>Residual Graph:</strong> For each edge (u, v) with capacity c and flow f:<br />
          - Forward edge: residual capacity = c - f<br />
          - Reverse edge: residual capacity = f (allows "undoing" flow)
        </div>
      </div>

      <div className="content-section">
        <h2>Edmonds-Karp Algorithm</h2>
        <p>
          <strong>Edmonds-Karp</strong> is a specific implementation of Ford-Fulkerson that uses 
          BFS to find the shortest augmenting path in each iteration.
        </p>

        <h3>Why BFS?</h3>
        <ul>
          <li>Finds shortest augmenting path (fewest edges)</li>
          <li>Guarantees polynomial time: O(V E²)</li>
          <li>Prevents exponential worst-case of DFS-based Ford-Fulkerson</li>
        </ul>

        <div className="info-box">
          <strong>Time Complexity:</strong> O(V E²) - BFS takes O(E) time, at most O(V E) iterations<br />
          <strong>Space Complexity:</strong> O(V²) - for residual graph<br />
          <strong>Min-Cut:</strong> Set of reachable nodes from source in final residual graph
        </div>
      </div>

      <div className="content-section">
        <h2>Max-Flow Min-Cut Theorem</h2>
        <p>
          The <strong>max-flow min-cut theorem</strong> states that the maximum flow equals the 
          minimum cut capacity.
        </p>

        <ul>
          <li><strong>Cut:</strong> Partition of vertices into two sets (S containing source, T containing sink)</li>
          <li><strong>Cut Capacity:</strong> Sum of capacities of edges from S to T</li>
          <li><strong>Min-Cut:</strong> Cut with minimum capacity</li>
          <li><strong>Theorem:</strong> Max flow = Min cut capacity</li>
        </ul>

        <div className="info-box">
          <strong>Finding Min-Cut:</strong> After finding max flow, do BFS from source in residual graph. 
          All reachable nodes form set S, unreachable nodes form set T.
        </div>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Max Flow - Edmonds-Karp Algorithm
from collections import deque

def edmonds_karp(graph, source, sink):
    n = len(graph)
    residual = [row[:] for row in graph]
    max_flow = 0
    
    def bfs():
        parent = [-1] * n
        visited = [False] * n
        queue = deque([source])
        visited[source] = True
        
        while queue:
            u = queue.popleft()
            for v in range(n):
                if not visited[v] and residual[u][v] > 0:
                    visited[v] = True
                    parent[v] = u
                    queue.append(v)
                    if v == sink:
                        path = []
                        cur = sink
                        while cur != -1:
                            path.append(cur)
                            cur = parent[cur]
                        return path[::-1]
        return None
    
    while True:
        path = bfs()
        if not path:
            break
        
        min_capacity = float('inf')
        for i in range(len(path) - 1):
            u, v = path[i], path[i + 1]
            min_capacity = min(min_capacity, residual[u][v])
        
        for i in range(len(path) - 1):
            u, v = path[i], path[i + 1]
            residual[u][v] -= min_capacity
            residual[v][u] += min_capacity
        
        max_flow += min_capacity
    
    return max_flow

# Example
graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
]

max_flow = edmonds_karp(graph, 0, 5)
print(f"Maximum flow: {max_flow}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of Edmonds-Karp algorithm?"
          options={[
            {
              text: 'O(V E)',
              correct: false,
              explanation: 'That would be too optimistic. We need multiple BFS iterations.',
            },
            {
              text: 'O(V E²)',
              correct: true,
              explanation: 'Correct! BFS takes O(E) time, and we have at most O(V E) iterations, giving O(V E²) total.',
            },
            {
              text: 'O(V² E)',
              correct: false,
              explanation: 'That would be slower. Edmonds-Karp is O(V E²).',
            },
            {
              text: 'O(E³)',
              correct: false,
              explanation: 'That would be even slower. The correct complexity is O(V E²).',
            },
          ]}
          topicId="max_flow"
          conceptId="edmonds-karp-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. What does the residual graph represent?"
          options={[
            {
              text: 'The original graph with flow values',
              correct: false,
              explanation: 'The residual graph shows remaining capacity, not current flow.',
            },
            {
              text: 'The remaining capacity to send flow through edges',
              correct: true,
              explanation: 'Correct! The residual graph shows how much more flow can be sent through each edge, including reverse edges that allow "undoing" flow.',
            },
            {
              text: 'The minimum cut of the graph',
              correct: false,
              explanation: 'The residual graph is used to find augmenting paths, not the min-cut directly.',
            },
            {
              text: 'The maximum flow value',
              correct: false,
              explanation: 'The residual graph is a data structure, not a value.',
            },
          ]}
          topicId="max_flow"
          conceptId="residual-graph"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. According to the max-flow min-cut theorem, what is true?"
          options={[
            {
              text: 'Max flow is always greater than min cut',
              correct: false,
              explanation: 'They are equal, not one greater than the other.',
            },
            {
              text: 'Max flow equals min cut capacity',
              correct: true,
              explanation: 'Correct! The max-flow min-cut theorem states that the maximum flow value equals the minimum cut capacity. This is a fundamental result in network flow theory.',
            },
            {
              text: 'Min cut is always greater than max flow',
              correct: false,
              explanation: 'They are equal according to the theorem.',
            },
            {
              text: 'Max flow and min cut are unrelated',
              correct: false,
              explanation: 'They are directly related by the max-flow min-cut theorem.',
            },
          ]}
          topicId="max_flow"
          conceptId="max-flow-min-cut"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Ford-Fulkerson:</strong> General method - find augmenting paths, augment flow</li>
          <li>✅ <strong>Edmonds-Karp:</strong> Uses BFS for shortest path, O(V E²) time</li>
          <li>✅ <strong>Residual Graph:</strong> Shows remaining capacity, includes reverse edges</li>
          <li>✅ <strong>Augmenting Path:</strong> Path from source to sink with positive residual capacity</li>
          <li>✅ <strong>Max-Flow Min-Cut:</strong> Maximum flow equals minimum cut capacity</li>
          <li>✅ <strong>Applications:</strong> Network flow, bipartite matching, image segmentation</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting Reverse Edges:</strong> Must update reverse edges in residual graph</li>
          <li>❌ <strong>Not Finding Shortest Path:</strong> Using DFS instead of BFS can lead to exponential time</li>
          <li>❌ <strong>Wrong Bottleneck:</strong> Must find minimum residual capacity along entire path</li>
          <li>❌ <strong>Not Updating Residual:</strong> Must update both forward and reverse edges</li>
          <li>❌ <strong>Confusing Flow with Capacity:</strong> Flow is what we send, capacity is the limit</li>
        </ul>
      </div>
    </div>
  );
};


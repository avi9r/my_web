import type { VisualizerFrame } from '../hooks/useVisualizer';

export interface GraphEdge {
  from: number;
  to: number;
  weight: number;
}

export function generateDijkstraFrames(
  n: number,
  edges: GraphEdge[],
  start: number
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const dist: number[] = new Array(n).fill(Infinity);
  const visited: boolean[] = new Array(n).fill(false);
  const prev: (number | null)[] = new Array(n).fill(null);
  
  dist[start] = 0;
  
  frames.push({
    arraySnapshot: [...dist],
    highlights: [start],
    message: `Starting Dijkstra's algorithm from node ${start}. Initialize distances.`,
    codeLine: 1,
  });

  for (let i = 0; i < n; i++) {
    // Find unvisited node with minimum distance
    let u = -1;
    let minDist = Infinity;
    
    for (let v = 0; v < n; v++) {
      if (!visited[v] && dist[v] < minDist) {
        minDist = dist[v];
        u = v;
      }
    }

    if (u === -1 || dist[u] === Infinity) break;

    frames.push({
      arraySnapshot: [...dist],
      highlights: [u],
      message: `Selecting node ${u} with distance ${dist[u]}. Marking as visited.`,
      codeLine: 2,
    });

    visited[u] = true;

    // Relax edges from u
    for (const edge of edges) {
      if (edge.from === u && !visited[edge.to]) {
        const newDist = dist[u] + edge.weight;
        
        frames.push({
          arraySnapshot: [...dist],
          highlights: [u, edge.to],
          message: `Relaxing edge ${u}→${edge.to} (weight ${edge.weight}). Current: ${dist[edge.to]}, New: ${newDist}.`,
          codeLine: 3,
        });

        if (newDist < dist[edge.to]) {
          dist[edge.to] = newDist;
          prev[edge.to] = u;
          
          frames.push({
            arraySnapshot: [...dist],
            highlights: [u, edge.to],
            message: `✓ Updated distance to node ${edge.to}: ${newDist}.`,
            codeLine: 4,
          });
        } else {
          frames.push({
            arraySnapshot: [...dist],
            highlights: [u, edge.to],
            message: `✗ Distance ${dist[edge.to]} is already shorter. No update.`,
            codeLine: 4,
          });
        }
      }
    }
  }

  frames.push({
    arraySnapshot: [...dist],
    highlights: [],
    message: `Dijkstra's complete! Final shortest distances from node ${start}.`,
    codeLine: 5,
  });

  return frames;
}

export function generateBellmanFordFrames(
  n: number,
  edges: GraphEdge[],
  start: number
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const dist: number[] = new Array(n).fill(Infinity);
  dist[start] = 0;

  frames.push({
    arraySnapshot: [...dist],
    highlights: [start],
    message: `Starting Bellman-Ford algorithm from node ${start}. Initialize distances.`,
    codeLine: 1,
  });

  // Relax edges V-1 times
  for (let i = 0; i < n - 1; i++) {
    frames.push({
      arraySnapshot: [...dist],
      highlights: [],
      message: `Iteration ${i + 1}/${n - 1}: Relaxing all edges.`,
      codeLine: 2,
    });

    let updated = false;
    for (const edge of edges) {
      if (dist[edge.from] !== Infinity) {
        const newDist = dist[edge.from] + edge.weight;
        
        if (newDist < dist[edge.to]) {
          dist[edge.to] = newDist;
          updated = true;
          
          frames.push({
            arraySnapshot: [...dist],
            highlights: [edge.from, edge.to],
            message: `Relaxed ${edge.from}→${edge.to}: distance = ${newDist}.`,
            codeLine: 3,
          });
        }
      }
    }

    if (!updated) {
      frames.push({
        arraySnapshot: [...dist],
        highlights: [],
        message: `No updates in iteration ${i + 1}. Algorithm can terminate early.`,
        codeLine: 4,
      });
      break;
    }
  }

  // Check for negative cycles
  frames.push({
    arraySnapshot: [...dist],
    highlights: [],
    message: `Checking for negative cycles...`,
    codeLine: 5,
  });

  for (const edge of edges) {
    if (dist[edge.from] !== Infinity && dist[edge.from] + edge.weight < dist[edge.to]) {
      frames.push({
        arraySnapshot: [...dist],
        highlights: [edge.from, edge.to],
        message: `⚠ Negative cycle detected! Edge ${edge.from}→${edge.to} can be relaxed further.`,
        codeLine: 6,
      });
      return frames;
    }
  }

  frames.push({
    arraySnapshot: [...dist],
    highlights: [],
    message: `Bellman-Ford complete! No negative cycles. Final shortest distances.`,
    codeLine: 7,
  });

  return frames;
}

export function generateFloydWarshallFrames(n: number, edges: GraphEdge[]): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const dist: number[][] = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  
  // Initialize
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }
  for (const edge of edges) {
    dist[edge.from][edge.to] = edge.weight;
  }

  frames.push({
    arraySnapshot: dist[0],
    highlights: [],
    message: `Starting Floyd-Warshall. Initialize distance matrix.`,
    codeLine: 1,
  });

  // Floyd-Warshall algorithm
  for (let k = 0; k < n; k++) {
    frames.push({
      arraySnapshot: dist[k],
      highlights: [k],
      message: `Iteration k=${k}: Considering paths through intermediate node ${k}.`,
      codeLine: 2,
    });

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          const newDist = dist[i][k] + dist[k][j];
          
          if (newDist < dist[i][j]) {
            frames.push({
              arraySnapshot: dist[i],
              highlights: [i, j, k],
              message: `Update dist[${i}][${j}] via ${k}: ${dist[i][j]} → ${newDist}.`,
              codeLine: 3,
            });
            
            dist[i][j] = newDist;
          }
        }
      }
    }
  }

  frames.push({
    arraySnapshot: dist[n - 1],
    highlights: [],
    message: `Floyd-Warshall complete! All-pairs shortest paths found.`,
    codeLine: 4,
  });

  return frames;
}


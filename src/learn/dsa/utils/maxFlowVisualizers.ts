import type { VisualizerFrame } from '../hooks/useVisualizer';

export interface FlowEdge {
  from: number;
  to: number;
  capacity: number;
  flow: number;
}

export function generateEdmondsKarpFrames(
  n: number,
  edges: FlowEdge[],
  source: number,
  sink: number
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const residual: FlowEdge[] = edges.map(e => ({ ...e, flow: 0 }));
  let maxFlow = 0;

  frames.push({
    arraySnapshot: residual.map(e => e.capacity),
    highlights: [],
    message: `Starting Edmonds-Karp algorithm. Source: ${source}, Sink: ${sink}.`,
    codeLine: 1,
  });

  // BFS to find augmenting path
  const bfs = (): number[] | null => {
    const parent: (number | null)[] = new Array(n).fill(null);
    const visited: boolean[] = new Array(n).fill(false);
    const queue: number[] = [source];
    visited[source] = true;

    while (queue.length > 0) {
      const u = queue.shift()!;
      
      frames.push({
        arraySnapshot: residual.map(e => e.capacity - e.flow),
        highlights: [u],
        message: `BFS: Exploring from node ${u}.`,
        codeLine: 2,
      });

      for (const edge of residual) {
        if (edge.from === u && !visited[edge.to] && edge.capacity - edge.flow > 0) {
          visited[edge.to] = true;
          parent[edge.to] = u;
          queue.push(edge.to);

          frames.push({
            arraySnapshot: residual.map(e => e.capacity - e.flow),
            highlights: [u, edge.to],
            message: `Found edge ${u}→${edge.to} with residual capacity ${edge.capacity - edge.flow}.`,
            codeLine: 3,
          });

          if (edge.to === sink) {
            // Reconstruct path
            const path: number[] = [];
            let v: number | null = sink;
            while (v !== null && v !== -1) {
              path.unshift(v);
              v = parent[v] ?? null;
            }
            return path;
          }
        }
      }
    }
    return null;
  };

  // Main loop
  while (true) {
    const path = bfs();
    
    if (!path) {
      frames.push({
        arraySnapshot: residual.map(e => e.capacity - e.flow),
        highlights: [],
        message: `No augmenting path found. Max flow: ${maxFlow}.`,
        codeLine: 4,
      });
      break;
    }

    // Find minimum residual capacity along path
    let minCapacity = Infinity;
    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i + 1];
      const edge = residual.find(e => e.from === u && e.to === v);
      if (edge) {
        minCapacity = Math.min(minCapacity, edge.capacity - edge.flow);
      }
    }

    frames.push({
      arraySnapshot: residual.map(e => e.capacity - e.flow),
      highlights: path,
      message: `Found augmenting path: ${path.join('→')}. Bottleneck capacity: ${minCapacity}.`,
      codeLine: 5,
    });

    // Augment flow along path
    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i + 1];
      const edge = residual.find(e => e.from === u && e.to === v);
      if (edge) {
        edge.flow += minCapacity;
        
        // Update reverse edge
        let reverseEdge = residual.find(e => e.from === v && e.to === u);
        if (!reverseEdge) {
          reverseEdge = { from: v, to: u, capacity: 0, flow: 0 };
          residual.push(reverseEdge);
        }
        reverseEdge.flow -= minCapacity;
      }
    }

    maxFlow += minCapacity;

    frames.push({
      arraySnapshot: residual.map(e => e.capacity - e.flow),
      highlights: path,
      message: `Augmented flow by ${minCapacity}. Total flow: ${maxFlow}.`,
      codeLine: 6,
    });
  }

  frames.push({
    arraySnapshot: residual.map(e => e.flow),
    highlights: [],
    message: `Edmonds-Karp complete! Maximum flow: ${maxFlow}.`,
    codeLine: 7,
  });

  return frames;
}


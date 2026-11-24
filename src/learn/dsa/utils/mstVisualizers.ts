import type { VisualizerFrame } from '../hooks/useVisualizer';

export interface Edge {
  u: string;
  v: string;
  weight: number;
}

export interface GraphState {
  nodes: Record<string, { x: number; y: number }>;
  edges: Edge[];
  mstEdges: Edge[];
  selectedEdges: Edge[];
  message: string;
}

export function generateKruskalFrames(
  nodes: Record<string, { x: number; y: number }>,
  edges: Edge[]
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const sortedEdges = [...edges].sort((a, b) => a.weight - b.weight);
  const mstEdges: Edge[] = [];
  const parent: Record<string, string> = {};
  
  // Initialize Union-Find
  Object.keys(nodes).forEach(node => {
    parent[node] = node;
  });

  frames.push({
    arraySnapshot: sortedEdges.map(e => e.weight),
    highlights: [],
    message: `Starting Kruskal's algorithm. Sorting ${edges.length} edges by weight.`,
    codeLine: 1,
  });

  const find = (x: string): string => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (x: string, y: string): boolean => {
    const px = find(x);
    const py = find(y);
    if (px === py) return false;
    parent[px] = py;
    return true;
  };

  for (let i = 0; i < sortedEdges.length; i++) {
    const edge = sortedEdges[i];
    
    frames.push({
      arraySnapshot: sortedEdges.map(e => e.weight),
      highlights: [i],
      message: `Considering edge ${edge.u}-${edge.v} with weight ${edge.weight}.`,
      codeLine: 2,
    });

    if (find(edge.u) !== find(edge.v)) {
      union(edge.u, edge.v);
      mstEdges.push(edge);
      
      frames.push({
        arraySnapshot: sortedEdges.map(e => e.weight),
        highlights: [i],
        message: `✓ Added edge ${edge.u}-${edge.v} (weight ${edge.weight}). No cycle created.`,
        codeLine: 3,
      });
    } else {
      frames.push({
        arraySnapshot: sortedEdges.map(e => e.weight),
        highlights: [i],
        message: `✗ Skipped edge ${edge.u}-${edge.v}. Would create a cycle.`,
        codeLine: 4,
      });
    }

    if (mstEdges.length === Object.keys(nodes).length - 1) {
      frames.push({
        arraySnapshot: sortedEdges.map(e => e.weight),
        highlights: [],
        message: `MST complete! Found ${mstEdges.length} edges. Total weight: ${mstEdges.reduce((sum, e) => sum + e.weight, 0)}.`,
        codeLine: 5,
      });
      break;
    }
  }

  return frames;
}

export function generatePrimFrames(
  nodes: Record<string, { x: number; y: number }>,
  edges: Edge[]
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const mstEdges: Edge[] = [];
  const inMST: Set<string> = new Set();
  const startNode = Object.keys(nodes)[0];
  inMST.add(startNode);

  frames.push({
    arraySnapshot: Object.keys(nodes).map((_, i) => i),
    highlights: [0],
    message: `Starting Prim's algorithm from node ${startNode}.`,
    codeLine: 1,
  });

  while (inMST.size < Object.keys(nodes).length) {
    let minEdge: Edge | null = null;
    let minWeight = Infinity;

    // Find minimum weight edge connecting MST to non-MST
    for (const edge of edges) {
      const uInMST = inMST.has(edge.u);
      const vInMST = inMST.has(edge.v);
      
      if ((uInMST && !vInMST) || (!uInMST && vInMST)) {
        if (edge.weight < minWeight) {
          minWeight = edge.weight;
          minEdge = edge;
        }
      }
    }

    if (minEdge) {
      const newNode = inMST.has(minEdge.u) ? minEdge.v : minEdge.u;
      inMST.add(newNode);
      mstEdges.push(minEdge);

      frames.push({
        arraySnapshot: Object.keys(nodes).map((n) => inMST.has(n) ? 1 : 0),
        highlights: [Object.keys(nodes).indexOf(newNode)],
        message: `Added edge ${minEdge.u}-${minEdge.v} (weight ${minEdge.weight}). Added node ${newNode} to MST.`,
        codeLine: 2,
      });
    }
  }

  frames.push({
    arraySnapshot: Object.keys(nodes).map(() => 1),
    highlights: [],
    message: `MST complete! Found ${mstEdges.length} edges. Total weight: ${mstEdges.reduce((sum, e) => sum + e.weight, 0)}.`,
    codeLine: 3,
  });

  return frames;
}


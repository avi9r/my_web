import type { VisualizerFrame } from '../hooks/useVisualizer';

export interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function generateTreeTraversalFrames(
  root: TreeNode | null,
  traversalType: 'inorder' | 'preorder' | 'postorder'
): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const visited: number[] = [];

  if (!root) {
    frames.push({
      arraySnapshot: [],
      highlights: [],
      message: 'Tree is empty.',
      codeLine: 1,
    });
    return frames;
  }

  frames.push({
    arraySnapshot: [],
    highlights: [],
    message: `Starting ${traversalType} traversal.`,
    codeLine: 1,
  });

  const traverse = (node: TreeNode | null, type: 'inorder' | 'preorder' | 'postorder'): void => {
    if (!node) return;

    if (type === 'preorder') {
      visited.push(node.value);
      frames.push({
        arraySnapshot: [...visited],
        highlights: [visited.length - 1],
        message: `Visit node ${node.value} (Root first).`,
        codeLine: 2,
      });
    }

    traverse(node.left, type);

    if (type === 'inorder') {
      visited.push(node.value);
      frames.push({
        arraySnapshot: [...visited],
        highlights: [visited.length - 1],
        message: `Visit node ${node.value} (Between left and right).`,
        codeLine: 3,
      });
    }

    traverse(node.right, type);

    if (type === 'postorder') {
      visited.push(node.value);
      frames.push({
        arraySnapshot: [...visited],
        highlights: [visited.length - 1],
        message: `Visit node ${node.value} (Root last).`,
        codeLine: 4,
      });
    }
  };

  traverse(root, traversalType);

  frames.push({
    arraySnapshot: [...visited],
    highlights: [],
    message: `${traversalType} traversal complete! Order: [${visited.join(', ')}].`,
    codeLine: 5,
  });

  return frames;
}

// Sample tree:     1
//                 / \
//                2   3
//               / \
//              4   5
export const sampleTree: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: { value: 3, left: null, right: null },
};


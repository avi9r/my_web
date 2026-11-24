import type { VisualizerFrame } from '../hooks/useVisualizer';

export interface HeapState {
  array: number[];
  highlightedIndices?: number[];
  operation?: 'push' | 'pop' | 'heapify' | 'swap';
}

export function generateHeapPushFrames(heap: number[], value: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const newHeap = [...heap];
  
  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [],
    message: `Starting to push ${value} into the heap.`,
    codeLine: 1,
  });

  // Add element at the end
  newHeap.push(value);
  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [newHeap.length - 1],
    message: `Added ${value} at the end of the heap (index ${newHeap.length - 1}).`,
    codeLine: 2,
  });

  // Bubble up (swim)
  let i = newHeap.length - 1;
  while (i > 0) {
    const parentIdx = Math.floor((i - 1) / 2);
    
    frames.push({
      arraySnapshot: [...newHeap],
      highlights: [i, parentIdx],
      message: `Comparing ${newHeap[i]} with parent ${newHeap[parentIdx]}.`,
      codeLine: 3,
    });

    if (newHeap[i] >= newHeap[parentIdx]) {
      frames.push({
        arraySnapshot: [...newHeap],
        highlights: [i],
        message: `${newHeap[i]} >= ${newHeap[parentIdx]}. Heap property maintained.`,
        codeLine: 4,
      });
      break;
    }

    // Swap with parent
    [newHeap[i], newHeap[parentIdx]] = [newHeap[parentIdx], newHeap[i]];
    frames.push({
      arraySnapshot: [...newHeap],
      highlights: [i, parentIdx],
      message: `Swapped ${newHeap[parentIdx]} and ${newHeap[i]}. Moving up...`,
      codeLine: 5,
    });

    i = parentIdx;
  }

  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [],
    message: `Push complete! ${value} is now in the correct position.`,
    codeLine: 6,
  });

  return frames;
}

export function generateHeapPopFrames(heap: number[]): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const newHeap = [...heap];

  if (newHeap.length === 0) {
    frames.push({
      arraySnapshot: [],
      highlights: [],
      message: 'Heap is empty. Cannot pop.',
      codeLine: 1,
    });
    return frames;
  }

  const min = newHeap[0];
  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [0],
    message: `Popping minimum element: ${min} (at root).`,
    codeLine: 1,
  });

  // Move last element to root
  newHeap[0] = newHeap[newHeap.length - 1];
  newHeap.pop();
  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [0],
    message: `Moved last element ${newHeap[0]} to root.`,
    codeLine: 2,
  });

  // Bubble down (sink)
  let i = 0;
  while (true) {
    const leftIdx = 2 * i + 1;
    const rightIdx = 2 * i + 2;
    let smallest = i;

    if (leftIdx < newHeap.length) {
      frames.push({
        arraySnapshot: [...newHeap],
        highlights: [i, leftIdx],
        message: `Comparing ${newHeap[i]} with left child ${newHeap[leftIdx]}.`,
        codeLine: 3,
      });
      if (newHeap[leftIdx] < newHeap[smallest]) {
        smallest = leftIdx;
      }
    }

    if (rightIdx < newHeap.length) {
      frames.push({
        arraySnapshot: [...newHeap],
        highlights: [i, rightIdx],
        message: `Comparing ${newHeap[i]} with right child ${newHeap[rightIdx]}.`,
        codeLine: 4,
      });
      if (newHeap[rightIdx] < newHeap[smallest]) {
        smallest = rightIdx;
      }
    }

    if (smallest === i) {
      frames.push({
        arraySnapshot: [...newHeap],
        highlights: [i],
        message: `Heap property satisfied. Pop complete!`,
        codeLine: 5,
      });
      break;
    }

    // Swap with smallest child
    [newHeap[i], newHeap[smallest]] = [newHeap[smallest], newHeap[i]];
    frames.push({
      arraySnapshot: [...newHeap],
      highlights: [i, smallest],
      message: `Swapped ${newHeap[smallest]} and ${newHeap[i]}. Moving down...`,
      codeLine: 6,
    });

    i = smallest;
  }

  frames.push({
    arraySnapshot: [...newHeap],
    highlights: [],
    message: `Pop complete! Removed ${min}.`,
    codeLine: 7,
  });

  return frames;
}

export function generateHeapifyFrames(array: number[]): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const heap = [...array];
  const n = heap.length;

  frames.push({
    arraySnapshot: [...heap],
    highlights: [],
    message: `Starting heapify. Building heap from array of ${n} elements.`,
    codeLine: 1,
  });

  // Start from last non-leaf node
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    frames.push({
      arraySnapshot: [...heap],
      highlights: [i],
      message: `Heapifying subtree rooted at index ${i}.`,
      codeLine: 2,
    });

    let current = i;
    while (true) {
      const leftIdx = 2 * current + 1;
      const rightIdx = 2 * current + 2;
      let smallest = current;

      if (leftIdx < n && heap[leftIdx] < heap[smallest]) {
        smallest = leftIdx;
      }
      if (rightIdx < n && heap[rightIdx] < heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === current) {
        frames.push({
          arraySnapshot: [...heap],
          highlights: [current],
          message: `Subtree at ${current} is now a valid heap.`,
          codeLine: 3,
        });
        break;
      }

      [heap[current], heap[smallest]] = [heap[smallest], heap[current]];
      frames.push({
        arraySnapshot: [...heap],
        highlights: [current, smallest],
        message: `Swapped ${heap[smallest]} and ${heap[current]}.`,
        codeLine: 4,
      });

      current = smallest;
    }
  }

  frames.push({
    arraySnapshot: [...heap],
    highlights: [],
    message: `Heapify complete! Array is now a valid min-heap.`,
    codeLine: 5,
  });

  return frames;
}


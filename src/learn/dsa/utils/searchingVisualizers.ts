import type { VisualizerFrame } from '../hooks/useVisualizer';

export function generateLinearSearchFrames(arr: number[], target: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const array = [...arr];
  
  // Initial state
  frames.push({
    arraySnapshot: [...array],
    highlights: [],
    message: `Starting linear search for ${target}. We'll check each element from left to right.`,
    codeLine: 1,
  });

  for (let i = 0; i < array.length; i++) {
    // Highlight current index being checked
    frames.push({
      arraySnapshot: [...array],
      highlights: [i],
      message: `Checking index ${i}: array[${i}] = ${array[i]}. Comparing with target ${target}...`,
      codeLine: 2,
    });

    if (array[i] === target) {
      // Found!
      frames.push({
        arraySnapshot: [...array],
        highlights: [i],
        message: `✓ Found! Target ${target} is at index ${i}. Linear search complete.`,
        codeLine: 3,
      });
      return frames;
    } else {
      // Not found, continue
      frames.push({
        arraySnapshot: [...array],
        highlights: [i],
        message: `array[${i}] = ${array[i]} ≠ ${target}. Moving to next element...`,
        codeLine: 2,
      });
    }
  }

  // Not found
  frames.push({
    arraySnapshot: [...array],
    highlights: [],
    message: `✗ Target ${target} not found in array. Searched all ${array.length} elements.`,
    codeLine: 4,
  });

  return frames;
}

export function generateBinarySearchFrames(arr: number[], target: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const array = [...arr];
  
  // Verify array is sorted
  const isSorted = array.every((val, i) => i === 0 || array[i - 1] <= val);
  if (!isSorted) {
    frames.push({
      arraySnapshot: [...array],
      highlights: [],
      message: '⚠ Warning: Array must be sorted for binary search!',
      codeLine: -1,
    });
    return frames;
  }

  let left = 0;
  let right = array.length - 1;

  // Initial state
  frames.push({
    arraySnapshot: [...array],
    highlights: [],
    message: `Starting binary search for ${target}. Search space: indices ${left} to ${right}.`,
    codeLine: 1,
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];

    // Highlight middle element
    frames.push({
      arraySnapshot: [...array],
      highlights: [mid],
      message: `Search space: [${left}, ${right}]. Middle index: ${mid}, value: ${midValue}.`,
      codeLine: 3,
    });

    if (midValue === target) {
      // Found!
      frames.push({
        arraySnapshot: [...array],
        highlights: [mid],
        message: `✓ Found! Target ${target} is at index ${mid}. Binary search complete.`,
        codeLine: 4,
      });
      return frames;
    } else if (midValue < target) {
      // Search right half
      frames.push({
        arraySnapshot: [...array],
        highlights: [mid],
        message: `${midValue} < ${target}. Target must be in right half. Updating left = ${mid + 1}.`,
        codeLine: 5,
      });
      left = mid + 1;
    } else {
      // Search left half
      frames.push({
        arraySnapshot: [...array],
        highlights: [mid],
        message: `${midValue} > ${target}. Target must be in left half. Updating right = ${mid - 1}.`,
        codeLine: 6,
      });
      right = mid - 1;
    }

    // Show updated search space
    if (left <= right) {
      frames.push({
        arraySnapshot: [...array],
        highlights: [],
        message: `New search space: [${left}, ${right}]. Eliminated half the possibilities!`,
        codeLine: 2,
      });
    }
  }

  // Not found
  frames.push({
    arraySnapshot: [...array],
    highlights: [],
    message: `✗ Target ${target} not found. Search space exhausted.`,
    codeLine: 7,
  });

  return frames;
}


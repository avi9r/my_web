import type { VisualizerFrame } from '../hooks/useVisualizer';

export function generateArrayAccessFrames(arr: number[], index: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  
  frames.push({
    arraySnapshot: [...arr],
    highlights: [],
    message: `Accessing array element at index ${index}.`,
    codeLine: 1,
  });

  frames.push({
    arraySnapshot: [...arr],
    highlights: [index],
    message: `✓ Accessed arr[${index}] = ${arr[index]}. Time: O(1) - direct access!`,
    codeLine: 2,
  });

  return frames;
}

export function generateArraySearchFrames(arr: number[], target: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  
  frames.push({
    arraySnapshot: [...arr],
    highlights: [],
    message: `Searching for ${target} in array.`,
    codeLine: 1,
  });

  for (let i = 0; i < arr.length; i++) {
    frames.push({
      arraySnapshot: [...arr],
      highlights: [i],
      message: `Checking index ${i}: arr[${i}] = ${arr[i]}.`,
      codeLine: 2,
    });

    if (arr[i] === target) {
      frames.push({
        arraySnapshot: [...arr],
        highlights: [i],
        message: `✓ Found ${target} at index ${i}!`,
        codeLine: 3,
      });
      return frames;
    }
  }

  frames.push({
    arraySnapshot: [...arr],
    highlights: [],
    message: `✗ ${target} not found in array.`,
    codeLine: 4,
  });

  return frames;
}

export function generateArrayInsertFrames(arr: number[], value: number, index: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const newArr = [...arr];
  
  frames.push({
    arraySnapshot: [...newArr],
    highlights: [],
    message: `Inserting ${value} at index ${index}.`,
    codeLine: 1,
  });

  // Shift elements to the right
  for (let i = newArr.length; i > index; i--) {
    newArr[i] = newArr[i - 1];
    frames.push({
      arraySnapshot: [...newArr],
      highlights: [i, i - 1],
      message: `Shifting arr[${i - 1}] to arr[${i}].`,
      codeLine: 2,
    });
  }

  newArr[index] = value;
  frames.push({
    arraySnapshot: [...newArr],
    highlights: [index],
    message: `✓ Inserted ${value} at index ${index}.`,
    codeLine: 3,
  });

  return frames;
}

export function generateArrayDeleteFrames(arr: number[], index: number): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const newArr = [...arr];
  
  frames.push({
    arraySnapshot: [...newArr],
    highlights: [index],
    message: `Deleting element at index ${index} (value: ${newArr[index]}).`,
    codeLine: 1,
  });

  // Shift elements to the left
  for (let i = index; i < newArr.length - 1; i++) {
    newArr[i] = newArr[i + 1];
    frames.push({
      arraySnapshot: [...newArr],
      highlights: [i, i + 1],
      message: `Shifting arr[${i + 1}] to arr[${i}].`,
      codeLine: 2,
    });
  }

  newArr.pop();
  frames.push({
    arraySnapshot: [...newArr],
    highlights: [],
    message: `✓ Deleted element. Array size reduced.`,
    codeLine: 3,
  });

  return frames;
}


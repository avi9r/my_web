import type { VisualizerFrame } from '../hooks/useVisualizer';

export function generateKMPFrames(text: string, pattern: string): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const n = text.length;
  const m = pattern.length;

  // Build failure function (LPS array)
  const lps: number[] = new Array(m).fill(0);
  let len = 0;
  let i = 1;

  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: [],
    message: `Building failure function (LPS) for pattern "${pattern}".`,
    codeLine: 1,
  });

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
      
      frames.push({
        arraySnapshot: [...lps],
        highlights: [i - 1],
        message: `LPS[${i - 1}] = ${len} (match at position ${i - 1}).`,
        codeLine: 2,
      });
    } else {
      if (len !== 0) {
        len = lps[len - 1];
        frames.push({
          arraySnapshot: [...lps],
          highlights: [i],
          message: `Mismatch. Backtrack len to LPS[${len - 1}] = ${len}.`,
          codeLine: 3,
        });
      } else {
        lps[i] = 0;
        i++;
        frames.push({
          arraySnapshot: [...lps],
          highlights: [i - 1],
          message: `LPS[${i - 1}] = 0 (no match).`,
          codeLine: 4,
        });
      }
    }
  }

  // KMP search
  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: [],
    message: `Starting KMP search for "${pattern}" in "${text}".`,
    codeLine: 5,
  });

  i = 0; // index for text
  let j = 0; // index for pattern

  while (i < n) {
    frames.push({
      arraySnapshot: [...text.split('').map((_, idx) => idx)],
      highlights: [i],
      message: `Comparing text[${i}]='${text[i]}' with pattern[${j}]='${pattern[j]}'.`,
      codeLine: 6,
    });

    if (pattern[j] === text[i]) {
      i++;
      j++;
      if (j === m) {
        frames.push({
          arraySnapshot: [...text.split('').map((_, idx) => idx)],
          highlights: Array.from({ length: m }, (_, k) => i - m + k),
          message: `✓ Pattern found at index ${i - m}!`,
          codeLine: 7,
        });
        return frames;
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
        frames.push({
          arraySnapshot: [...text.split('').map((_, idx) => idx)],
          highlights: [i],
          message: `Mismatch. Backtrack j to ${j} using LPS.`,
          codeLine: 8,
        });
      } else {
        i++;
        frames.push({
          arraySnapshot: [...text.split('').map((_, idx) => idx)],
          highlights: [i],
          message: `Mismatch at start. Move to next position.`,
          codeLine: 9,
        });
      }
    }
  }

  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: [],
    message: `Pattern not found in text.`,
    codeLine: 10,
  });

  return frames;
}

export function generateRabinKarpFrames(text: string, pattern: string): VisualizerFrame[] {
  const frames: VisualizerFrame[] = [];
  const n = text.length;
  const m = pattern.length;
  const base = 256;
  const mod = 101; // Prime number for modulo

  // Calculate hash of pattern
  let patternHash = 0;
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
  }

  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: [],
    message: `Pattern hash: ${patternHash}. Starting Rabin-Karp search.`,
    codeLine: 1,
  });

  // Calculate hash of first window
  let textHash = 0;
  let h = 1;
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % mod;
  }

  for (let i = 0; i < m; i++) {
    textHash = (textHash * base + text.charCodeAt(i)) % mod;
  }

  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: Array.from({ length: m }, (_, k) => k),
    message: `Initial window hash: ${textHash}.`,
    codeLine: 2,
  });

  // Slide window
  for (let i = 0; i <= n - m; i++) {
    frames.push({
      arraySnapshot: [...text.split('').map((_, idx) => idx)],
      highlights: Array.from({ length: m }, (_, k) => i + k),
      message: `Window at position ${i}: hash = ${textHash}.`,
      codeLine: 3,
    });

    if (textHash === patternHash) {
      // Verify (spurious hit check)
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        frames.push({
          arraySnapshot: [...text.split('').map((_, idx) => idx)],
          highlights: Array.from({ length: m }, (_, k) => i + k),
          message: `✓ Pattern found at index ${i}! Hash match confirmed.`,
          codeLine: 4,
        });
        return frames;
      } else {
        frames.push({
          arraySnapshot: [...text.split('').map((_, idx) => idx)],
          highlights: Array.from({ length: m }, (_, k) => i + k),
          message: `Spurious hit! Hash matches but strings don't. Continue...`,
          codeLine: 5,
        });
      }
    } else {
      frames.push({
        arraySnapshot: [...text.split('').map((_, idx) => idx)],
        highlights: Array.from({ length: m }, (_, k) => i + k),
        message: `Hash mismatch. Slide window.`,
        codeLine: 6,
      });
    }

    // Calculate hash of next window
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % mod;
      if (textHash < 0) {
        textHash = (textHash + mod) % mod;
      }
    }
  }

  frames.push({
    arraySnapshot: [...text.split('').map((_, idx) => idx)],
    highlights: [],
    message: `Pattern not found in text.`,
    codeLine: 7,
  });

  return frames;
}


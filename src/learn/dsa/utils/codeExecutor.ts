// Enhanced Code Execution Engine for Python-like code

export function executeCode(code: string): string {
  let outputLines: string[] = [];
  const vars: Record<string, any> = {};
  
  // Helper functions
  const print = (...args: any[]) => {
    outputLines.push(args.map(formatValue).join(' '));
  };
  
  const len = (arr: any) => Array.isArray(arr) ? arr.length : (arr ? String(arr).length : 0);
  
  const range = (start: number, end?: number, step?: number): number[] => {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    step = step || 1;
    const result: number[] = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  };
  
  const sum = (arr: any[]): number => Array.isArray(arr) ? arr.reduce((a, b) => Number(a) + Number(b), 0) : 0;
  
  const max = (...args: any[]): number | undefined => {
    const nums = args.flat().filter(x => typeof x === 'number');
    return nums.length > 0 ? Math.max(...nums) : undefined;
  };
  
  const min = (...args: any[]): number | undefined => {
    const nums = args.flat().filter(x => typeof x === 'number');
    return nums.length > 0 ? Math.min(...nums) : undefined;
  };
  
  const sorted = (arr: any[]): any[] => Array.isArray(arr) ? [...arr].sort((a, b) => Number(a) - Number(b)) : [];
  
  // Evaluate expression helper
  const evalExpr = (expr: string): any => {
    expr = expr.trim();
    
    // Handle f-strings
    if (expr.match(/^f["']/)) {
      const content = expr.slice(2, -1);
      return content.replace(/\{([^}]+)\}/g, (_m, exp) => {
        try {
          return String(evalExpr(exp));
        } catch (e) {
          return exp;
        }
      });
    }
    
    // Handle strings
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    // Handle numbers
    if (!isNaN(Number(expr)) && expr !== '') {
      return parseFloat(expr);
    }
    
    // Handle lists
    if (expr.startsWith('[') && expr.endsWith(']')) {
      const content = expr.slice(1, -1).trim();
      if (!content) return [];
      return content.split(',').map(item => evalExpr(item.trim()));
    }
    
    // Handle array access arr[0]
    const arrAccess = expr.match(/(\w+)\[(\d+)\]/);
    if (arrAccess && vars[arrAccess[1]]) {
      const arr = vars[arrAccess[1]];
      const idx = parseInt(arrAccess[2]);
      if (Array.isArray(arr) && arr[idx] !== undefined) {
        return arr[idx];
      }
    }
    
    // Handle len() function
    const lenMatch = expr.match(/len\s*\(([^)]+)\)/);
    if (lenMatch) {
      return len(evalExpr(lenMatch[1]));
    }
    
    // Handle range() function
    const rangeMatch = expr.match(/range\s*\(([^)]+)\)/);
    if (rangeMatch) {
      const args = rangeMatch[1].split(',').map(a => evalExpr(a.trim())) as number[];
      if (args.length === 1) {
        return range(args[0]);
      } else if (args.length === 2) {
        return range(args[0], args[1]);
      } else if (args.length === 3) {
        return range(args[0], args[1], args[2]);
      }
      return range(args[0]);
    }
    
    // Handle sum() function
    const sumMatch = expr.match(/sum\s*\(([^)]+)\)/);
    if (sumMatch) {
      return sum(evalExpr(sumMatch[1]));
    }
    
    // Handle max() function
    const maxMatch = expr.match(/max\s*\(([^)]+)\)/);
    if (maxMatch) {
      const arg = evalExpr(maxMatch[1]);
      return Array.isArray(arg) ? max(...arg) : max(arg);
    }
    
    // Handle min() function
    const minMatch = expr.match(/min\s*\(([^)]+)\)/);
    if (minMatch) {
      const arg = evalExpr(minMatch[1]);
      return Array.isArray(arg) ? min(...arg) : min(arg);
    }
    
    // Handle sorted() function
    const sortedMatch = expr.match(/sorted\s*\(([^)]+)\)/);
    if (sortedMatch) {
      return sorted(evalExpr(sortedMatch[1]));
    }
    
    // Handle variables
    if (vars[expr] !== undefined) {
      return vars[expr];
    }
    
    // Handle operators
    if (expr.includes('+')) {
      const parts = expr.split('+').map(p => evalExpr(p.trim()));
      if (parts.some(p => typeof p === 'string')) {
        return parts.join('');
      }
      return parts.reduce((a, b) => Number(a) + Number(b), 0);
    }
    if (expr.includes('-') && !expr.startsWith('-')) {
      const parts = expr.split('-').map(p => evalExpr(p.trim()));
      return parts.reduce((a, b) => Number(a) - Number(b));
    }
    if (expr.includes('*')) {
      const parts = expr.split('*').map(p => evalExpr(p.trim()));
      return parts.reduce((a, b) => Number(a) * Number(b), 1);
    }
    if (expr.includes('/')) {
      const parts = expr.split('/').map(p => evalExpr(p.trim()));
      return parts.reduce((a, b) => Number(a) / Number(b));
    }
    if (expr.includes('%')) {
      const parts = expr.split('%').map(p => evalExpr(p.trim()));
      return parts.reduce((a, b) => Number(a) % Number(b));
    }
    
    return expr;
  };
  
  // Process code line by line
  const lines = code.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line || line.startsWith('#')) continue;
    
    // Handle print statements
    if (line.includes('print(')) {
      const printMatch = line.match(/print\s*\(([^)]+)\)/);
      if (printMatch) {
        try {
          const expr = printMatch[1].trim();
          const value = evalExpr(expr);
          print(value);
        } catch (e: any) {
          outputLines.push(`Error: ${e.message}`);
        }
      }
    }
    // Handle variable assignments
    else if (line.includes('=') && !line.includes('==') && !line.includes('!=')) {
      const parts = line.split('=');
      if (parts.length === 2) {
        const varName = parts[0].trim();
        const expr = parts[1].trim();
        try {
          vars[varName] = evalExpr(expr);
        } catch (e) {
          vars[varName] = expr;
        }
      }
    }
    // Handle for loops
    else if (line.startsWith('for ') && line.includes(' in ')) {
      const forMatch = line.match(/for\s+(\w+)\s+in\s+([^:]+):/);
      if (forMatch) {
        const varName = forMatch[1];
        const iterable = evalExpr(forMatch[2]);
        if (Array.isArray(iterable)) {
          // Find loop body
          let bodyLines: string[] = [];
          const indentMatch = lines[i].match(/^(\s*)/);
          const indent = indentMatch ? indentMatch[1].length : 0;
          for (let j = i + 1; j < lines.length; j++) {
            const nextIndentMatch = lines[j].match(/^(\s*)/);
            const nextIndent = nextIndentMatch ? nextIndentMatch[1].length : 0;
            if (nextIndent <= indent && lines[j].trim()) break;
            if (nextIndent > indent) {
              bodyLines.push(lines[j]);
            }
          }
          
          iterable.forEach((item: any) => {
            vars[varName] = item;
            bodyLines.forEach(bodyLine => {
              if (bodyLine.includes('print(')) {
                const printMatch = bodyLine.match(/print\s*\(([^)]+)\)/);
                if (printMatch) {
                  try {
                    const expr = printMatch[1].trim();
                    const value = evalExpr(expr);
                    print(value);
                  } catch (e) {}
                }
              }
            });
          });
          i += bodyLines.length;
        }
      }
    }
    // Handle if statements
    else if (line.startsWith('if ')) {
      const ifMatch = line.match(/if\s+(.+):/);
      if (ifMatch) {
        try {
          const condition = evalExpr(ifMatch[1]);
          if (condition && i + 1 < lines.length && lines[i + 1].trim().includes('print')) {
            const printMatch = lines[i + 1].match(/print\s*\(([^)]+)\)/);
            if (printMatch) {
              const expr = printMatch[1].trim();
              const value = evalExpr(expr);
              print(value);
              i++;
            }
          }
        } catch (e) {}
      }
    }
  }
  
  return outputLines.length > 0 ? outputLines.join('\n') : 'Code executed successfully (no output)';
}

function formatValue(value: any): string {
  if (Array.isArray(value)) {
    return '[' + value.map(formatValue).join(', ') + ']';
  }
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }
  return String(value);
}


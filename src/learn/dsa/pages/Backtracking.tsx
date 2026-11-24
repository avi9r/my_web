import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { useProgress } from '../contexts/ProgressContext';
import './Backtracking.css';

export const Backtracking: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('backtracking', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="backtracking-page">
      <div className="page-header">
        <h1>🔙 Backtracking</h1>
        <p>Systematically explore all possibilities - When brute force needs to be smart!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="backtracking" />
      </div>

      <div className="content-section">
        <h2>What is Backtracking?</h2>
        <p>
          <strong>Backtracking</strong> is a systematic method for solving problems by trying partial solutions 
          and abandoning them ("backtracking") if they cannot lead to a valid solution.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of backtracking like solving a maze:
          </p>
          <ul>
            <li>You try a path (make a choice)</li>
            <li>If it leads to a dead end, you go back (backtrack)</li>
            <li>You try a different path</li>
            <li>You systematically explore all possibilities</li>
            <li>You find the solution by trying and undoing</li>
          </ul>
        </div>

        <div className="key-principles">
          <h3>Key Concepts:</h3>
          <div className="principle-card">
            <strong>1. Constraint Satisfaction</strong>
            <p>Check if current partial solution satisfies constraints</p>
          </div>
          <div className="principle-card">
            <strong>2. Pruning</strong>
            <p>Abandon paths that cannot lead to solution (prune search space)</p>
          </div>
          <div className="principle-card">
            <strong>3. State Space Tree</strong>
            <p>Represent all possible solutions as a tree</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Backtracking Template</h2>
        <MultiLanguageCode
          examples={{
            python: `def backtrack(candidate):
    if is_solution(candidate):
        output(candidate)
        return
    
    for next_candidate in generate_candidates(candidate):
        if is_valid(next_candidate):  # Pruning
            make_move(next_candidate)
            backtrack(next_candidate)
            undo_move(next_candidate)  # Backtrack!

# Key steps:
# 1. Make a choice
# 2. Recursively solve
# 3. Undo the choice (backtrack)`,
            cpp: `void backtrack(Candidate candidate) {
    if (isSolution(candidate)) {
        output(candidate);
        return;
    }
    
    for (auto nextCandidate : generateCandidates(candidate)) {
        if (isValid(nextCandidate)) {  // Pruning
            makeMove(nextCandidate);
            backtrack(nextCandidate);
            undoMove(nextCandidate);  // Backtrack!
        }
    }
}

// Key steps:
// 1. Make a choice
// 2. Recursively solve
// 3. Undo the choice (backtrack)`,
            c: `void backtrack(Candidate candidate) {
    if (isSolution(candidate)) {
        output(candidate);
        return;
    }
    
    Candidate* candidates = generateCandidates(candidate);
    int count = getCandidateCount(candidates);
    
    for (int i = 0; i < count; i++) {
        if (isValid(candidates[i])) {  // Pruning
            makeMove(candidates[i]);
            backtrack(candidates[i]);
            undoMove(candidates[i]);  // Backtrack!
        }
    }
}

/* Key steps:
   1. Make a choice
   2. Recursively solve
   3. Undo the choice (backtrack) */`,
            java: `public void backtrack(Candidate candidate) {
    if (isSolution(candidate)) {
        output(candidate);
        return;
    }
    
    for (Candidate nextCandidate : generateCandidates(candidate)) {
        if (isValid(nextCandidate)) {  // Pruning
            makeMove(nextCandidate);
            backtrack(nextCandidate);
            undoMove(nextCandidate);  // Backtrack!
        }
    }
}

// Key steps:
// 1. Make a choice
// 2. Recursively solve
// 3. Undo the choice (backtrack)`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Classic Backtracking Problems</h2>
        
        <h3>1. N-Queens Problem</h3>
        <p><strong>Problem:</strong> Place N queens on N×N board so no two attack each other.</p>
        <MultiLanguageCode
          examples={{
            python: `def solve_n_queens(n):
    board = [['.' for _ in range(n)] for _ in range(n)]
    solutions = []
    
    def is_safe(row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        # Check diagonals
        for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
            if board[i][j] == 'Q':
                return False
        for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
            if board[i][j] == 'Q':
                return False
        return True
    
    def backtrack(row):
        if row == n:
            solutions.append([''.join(row) for row in board])
            return
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'  # Backtrack!
        return solutions`,
            cpp: `#include <vector>
#include <string>

class NQueens {
private:
    std::vector<std::vector<std::string>> solutions;
    
    bool isSafe(std::vector<std::string>& board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }
        // Check diagonals
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        return true;
    }
    
    void backtrack(std::vector<std::string>& board, int row, int n) {
        if (row == n) {
            solutions.push_back(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1, n);
                board[row][col] = '.';  // Backtrack!
            }
        }
    }
    
public:
    std::vector<std::vector<std::string>> solveNQueens(int n) {
        std::vector<std::string> board(n, std::string(n, '.'));
        backtrack(board, 0, n);
        return solutions;
    }
};`,
            c: `#include <stdio.h>
#include <stdbool.h>

#define MAX_N 20

bool isSafe(char board[][MAX_N], int row, int col, int n) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') return false;
    }
    // Check diagonals
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }
    return true;
}

void backtrack(char board[][MAX_N], int row, int n) {
    if (row == n) {
        // Print solution
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                printf("%c ", board[i][j]);
            }
            printf("\\n");
        }
        printf("\\n");
        return;
    }
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 'Q';
            backtrack(board, row + 1, n);
            board[row][col] = '.';  // Backtrack!
        }
    }
}`,
            java: `import java.util.*;

public class NQueens {
    private List<List<String>> solutions = new ArrayList<>();
    
    private boolean isSafe(char[][] board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }
        // Check diagonals
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        return true;
    }
    
    private void backtrack(char[][] board, int row, int n) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (char[] r : board) {
                solution.add(new String(r));
            }
            solutions.add(solution);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1, n);
                board[row][col] = '.';  // Backtrack!
            }
        }
    }
    
    public List<List<String>> solveNQueens(int n) {
        char[][] board = new char[n][n];
        for (char[] row : board) {
            Arrays.fill(row, '.');
        }
        backtrack(board, 0, n);
        return solutions;
    }
}`
          }}
        />

        <h3>2. Sudoku Solver</h3>
        <p><strong>Problem:</strong> Fill empty cells following Sudoku rules.</p>
        <pre className="code-block">{`def solve_sudoku(board):
    def is_valid(row, col, num):
        # Check row
        for j in range(9):
            if board[row][j] == num:
                return False
        # Check column
        for i in range(9):
            if board[i][col] == num:
                return False
        # Check 3x3 box
        box_row, box_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(box_row, box_row + 3):
            for j in range(box_col, box_col + 3):
                if board[i][j] == num:
                    return False
        return True
    
    def backtrack():
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in '123456789':
                        if is_valid(i, j, num):
                            board[i][j] = num
                            if backtrack():
                                return True
                            board[i][j] = '.'  # Backtrack
                    return False
        return True
    
    backtrack()`}</pre>

        <h3>3. Generate Parentheses</h3>
        <p><strong>Problem:</strong> Generate all valid combinations of n pairs of parentheses.</p>
        <pre className="code-block">{`def generate_parentheses(n):
    result = []
    
    def backtrack(current, open_count, close_count):
        # Base case
        if len(current) == 2 * n:
            result.append(current)
            return
        
        # Add opening parenthesis
        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        
        # Add closing parenthesis (only if valid)
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)
    
    backtrack('', 0, 0)
    return result`}</pre>

        <h3>4. Subset Generation</h3>
        <p><strong>Problem:</strong> Generate all subsets of an array.</p>
        <pre className="code-block">{`def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])  # Add current subset
        
        for i in range(start, len(nums)):
            current.append(nums[i])      # Make choice
            backtrack(i + 1, current)     # Recurse
            current.pop()                 # Backtrack
    
    backtrack(0, [])
    return result`}</pre>
      </div>

      <div className="content-section">
        <h2>Backtracking vs Other Techniques</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Technique</th>
              <th>When to Use</th>
              <th>Time Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Backtracking</td>
              <td>Constraint satisfaction, combinatorial problems</td>
              <td>Exponential (but pruned)</td>
            </tr>
            <tr>
              <td>Dynamic Programming</td>
              <td>Optimization with overlapping subproblems</td>
              <td>Polynomial</td>
            </tr>
            <tr>
              <td>Greedy</td>
              <td>When greedy choice property holds</td>
              <td>Usually O(n log n)</td>
            </tr>
            <tr>
              <td>Brute Force</td>
              <td>Small problem size</td>
              <td>Exponential (no pruning)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Optimization Techniques</h2>
        <ul className="explanation-list">
          <li><strong>Pruning:</strong> Early termination when constraints violated</li>
          <li><strong>Memoization:</strong> Cache results of subproblems (if applicable)</li>
          <li><strong>Constraint Propagation:</strong> Reduce search space by enforcing constraints early</li>
          <li><strong>Heuristics:</strong> Order choices to find solution faster</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Backtracking Examples

# Generate Parentheses
def generate_parentheses(n):
    result = []
    
    def backtrack(current, open_count, close_count):
        if len(current) == 2 * n:
            result.append(current)
            return
        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)
    
    backtrack('', 0, 0)
    return result

# Subsets
def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result

# Test
print(f"Parentheses(3): {generate_parentheses(3)}")
print(f"Subsets([1,2,3]): {subsets([1, 2, 3])}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the key characteristic of backtracking algorithms?"
          options={[
            {
              text: 'They always find optimal solutions',
              correct: false,
              explanation: 'Backtracking finds valid solutions, not necessarily optimal ones.',
            },
            {
              text: 'They systematically explore all possibilities and undo choices that fail',
              correct: true,
              explanation: 'Correct! Backtracking tries partial solutions, and if they can\'t lead to a valid solution, it undoes (backtracks) and tries a different path.',
            },
            {
              text: 'They use greedy choices',
              correct: false,
              explanation: 'Greedy algorithms make locally optimal choices. Backtracking explores all possibilities.',
            },
            {
              text: 'They are always O(n log n)',
              correct: false,
              explanation: 'Backtracking can be exponential in worst case. Pruning helps reduce the search space.',
            },
          ]}
          topicId="backtracking"
          conceptId="backtracking-characteristic"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. What is 'pruning' in backtracking?"
          options={[
            {
              text: 'Removing leaves from trees',
              correct: false,
              explanation: 'Pruning in backtracking is about search space, not tree structure.',
            },
            {
              text: 'Abandoning paths that cannot lead to a solution',
              correct: true,
              explanation: 'Correct! Pruning means stopping exploration of paths that violate constraints or cannot lead to a valid solution, reducing the search space.',
            },
            {
              text: 'Sorting the input',
              correct: false,
              explanation: 'Pruning is about search space reduction, not sorting.',
            },
            {
              text: 'Using memoization',
              correct: false,
              explanation: 'That\'s DP. Pruning is about cutting off invalid branches.',
            },
          ]}
          topicId="backtracking"
          conceptId="pruning"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is the time complexity of backtracking algorithms?"
          options={[
            {
              text: 'O(n)',
              correct: false,
              explanation: 'Backtracking explores exponential possibilities, not linear.',
            },
            {
              text: 'O(n log n)',
              correct: false,
              explanation: 'That would be for sorting. Backtracking is exponential.',
            },
            {
              text: 'Exponential, but pruned',
              correct: true,
              explanation: 'Correct! Backtracking has exponential time complexity (O(b^d) where b is branching factor, d is depth), but pruning significantly reduces the actual search space.',
            },
            {
              text: 'O(1)',
              correct: false,
              explanation: 'That would be constant time, which backtracking is not.',
            },
          ]}
          topicId="backtracking"
          conceptId="backtracking-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. When should you use backtracking?"
          options={[
            {
              text: 'For optimization problems',
              correct: false,
              explanation: 'Optimization problems often use DP or greedy. Backtracking is for constraint satisfaction.',
            },
            {
              text: 'For constraint satisfaction and combinatorial problems',
              correct: true,
              explanation: 'Correct! Backtracking is ideal for problems like N-Queens, Sudoku, generating permutations/combinations where you need to satisfy constraints.',
            },
            {
              text: 'For sorting',
              correct: false,
              explanation: 'Sorting has efficient algorithms. Backtracking is overkill.',
            },
            {
              text: 'For searching in sorted arrays',
              correct: false,
              explanation: 'Binary search is O(log n). Backtracking is for constraint satisfaction.',
            },
          ]}
          topicId="backtracking"
          conceptId="when-to-use-backtracking"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Systematic Exploration:</strong> Try all possibilities systematically</li>
          <li>✅ <strong>Undo Choices:</strong> Backtrack when path doesn't work</li>
          <li>✅ <strong>Pruning:</strong> Abandon invalid paths early to save time</li>
          <li>✅ <strong>Template:</strong> Make choice → Recurse → Undo choice</li>
          <li>✅ <strong>Constraint Checking:</strong> Validate partial solutions before continuing</li>
          <li>✅ <strong>Use Cases:</strong> N-Queens, Sudoku, Subsets, Permutations, Maze solving</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting to Undo:</strong> Must undo choices after recursion returns!</li>
          <li>❌ <strong>Not Pruning:</strong> Check constraints early to avoid exploring invalid paths</li>
          <li>❌ <strong>Wrong State Management:</strong> Ensure state is correctly restored after backtracking</li>
          <li>❌ <strong>Infinite Recursion:</strong> Always have base case and valid termination condition</li>
          <li>❌ <strong>Not Copying State:</strong> Be careful with mutable objects - may need to copy</li>
        </ul>
      </div>
    </div>
  );
};



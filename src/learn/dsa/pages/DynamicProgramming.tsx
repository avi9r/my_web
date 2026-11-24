import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { useProgress } from '../contexts/ProgressContext';
import './DynamicProgramming.css';

export const DynamicProgramming: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('dynamic_programming', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="dynamic-programming-page">
      <div className="page-header">
        <h1>⚡ Dynamic Programming</h1>
        <p>Solve complex problems by breaking them into simpler subproblems - Master the art of optimization!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="dynamic_programming" />
      </div>

      <div className="content-section">
        <h2>What is Dynamic Programming?</h2>
        <p>
          <strong>Dynamic Programming (DP)</strong> is a method for solving complex problems by breaking them down 
          into simpler subproblems. It stores the results of subproblems to avoid recomputing them.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of DP like solving a jigsaw puzzle:
          </p>
          <ul>
            <li>You solve small sections (subproblems) first</li>
            <li>You remember where each piece goes (memoization)</li>
            <li>You combine solved sections to complete the puzzle (optimal substructure)</li>
            <li>You never solve the same section twice (avoid recomputation)</li>
          </ul>
        </div>

        <div className="key-principles">
          <h3>Two Key Principles:</h3>
          <div className="principle-card">
            <strong>1. Optimal Substructure</strong>
            <p>Optimal solution contains optimal solutions to subproblems</p>
          </div>
          <div className="principle-card">
            <strong>2. Overlapping Subproblems</strong>
            <p>Same subproblems are solved multiple times - store results!</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Two Approaches to DP</h2>
        
        <h3>1. Top-Down (Memoization)</h3>
        <p>Start with the problem and recursively solve subproblems, storing results as you go.</p>
        <MultiLanguageCode
          examples={{
            python: `# Fibonacci with Memoization
memo = {}

def fib(n):
    if n in memo:
        return memo[n]  # Return cached result
    if n <= 1:
        return n
    memo[n] = fib(n-1) + fib(n-2)  # Store result
    return memo[n]

# Time: O(n), Space: O(n)
# Before memoization: O(2^n) exponential!`,
            cpp: `#include <unordered_map>

std::unordered_map<int, long long> memo;

long long fib(int n) {
    if (memo.find(n) != memo.end()) {
        return memo[n];  // Return cached result
    }
    if (n <= 1) return n;
    memo[n] = fib(n-1) + fib(n-2);  // Store result
    return memo[n];
}

// Time: O(n), Space: O(n)
// Before memoization: O(2^n) exponential!`,
            c: `#include <stdio.h>
#include <stdlib.h>

#define MAX_N 100
long long memo[MAX_N];
int memoized[MAX_N] = {0};

long long fib(int n) {
    if (memoized[n]) {
        return memo[n];  // Return cached result
    }
    if (n <= 1) return n;
    memo[n] = fib(n-1) + fib(n-2);  // Store result
    memoized[n] = 1;
    return memo[n];
}

/* Time: O(n), Space: O(n)
   Before memoization: O(2^n) exponential! */`,
            java: `import java.util.*;

public class FibonacciMemo {
    private Map<Integer, Long> memo = new HashMap<>();
    
    public long fib(int n) {
        if (memo.containsKey(n)) {
            return memo.get(n);  // Return cached result
        }
        if (n <= 1) return n;
        long result = fib(n-1) + fib(n-2);  // Store result
        memo.put(n, result);
        return result;
    }
    
    // Time: O(n), Space: O(n)
    // Before memoization: O(2^n) exponential!
}`
          }}
        />

        <h3>2. Bottom-Up (Tabulation)</h3>
        <p>Solve smallest subproblems first, build up to the solution.</p>
        <MultiLanguageCode
          examples={{
            python: `# Fibonacci with Tabulation
def fib(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]  # Build from bottom
    return dp[n]

# Time: O(n), Space: O(n)
# Can optimize to O(1) space by keeping only last 2 values`,
            cpp: `#include <vector>

long long fib(int n) {
    if (n <= 1) return n;
    
    std::vector<long long> dp(n + 1);
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];  // Build from bottom
    }
    return dp[n];
}

// Time: O(n), Space: O(n)
// Can optimize to O(1) space by keeping only last 2 values`,
            c: `#include <stdio.h>
#include <stdlib.h>

long long fib(int n) {
    if (n <= 1) return n;
    
    long long* dp = (long long*)malloc((n + 1) * sizeof(long long));
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];  // Build from bottom
    }
    
    long long result = dp[n];
    free(dp);
    return result;
}

/* Time: O(n), Space: O(n)
   Can optimize to O(1) space by keeping only last 2 values */`,
            java: `public class FibonacciTab {
    public long fib(int n) {
        if (n <= 1) return n;
        
        long[] dp = new long[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];  // Build from bottom
        }
        return dp[n];
    }
    
    // Time: O(n), Space: O(n)
    // Can optimize to O(1) space by keeping only last 2 values
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Classic DP Problems</h2>
        
        <h3>1. Climbing Stairs</h3>
        <p><strong>Problem:</strong> You can climb 1 or 2 steps at a time. How many ways to reach the top?</p>
        <MultiLanguageCode
          examples={{
            python: `def climb_stairs(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]  # Ways from (i-1) + ways from (i-2)
    return dp[n]

# Example: climb_stairs(5) = 8 ways`,
            cpp: `#include <vector>

int climbStairs(int n) {
    if (n <= 2) return n;
    
    std::vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];  // Ways from (i-1) + ways from (i-2)
    }
    
    return dp[n];
}

// Example: climbStairs(5) = 8 ways`,
            c: `#include <stdio.h>
#include <stdlib.h>

int climbStairs(int n) {
    if (n <= 2) return n;
    
    int* dp = (int*)malloc((n + 1) * sizeof(int));
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];  // Ways from (i-1) + ways from (i-2)
    }
    
    int result = dp[n];
    free(dp);
    return result;
}

/* Example: climbStairs(5) = 8 ways */`,
            java: `public class ClimbingStairs {
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];  // Ways from (i-1) + ways from (i-2)
        }
        
        return dp[n];
    }
    
    // Example: climbStairs(5) = 8 ways
}`
          }}
        />

        <h3>2. Coin Change</h3>
        <p><strong>Problem:</strong> Find minimum coins needed to make amount.</p>
        <MultiLanguageCode
          examples={{
            python: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins for amount 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Example: coin_change([1, 3, 4], 6) = 2 (3 + 3)`,
            cpp: `#include <vector>
#include <algorithm>
#include <climits>

int coinChange(std::vector<int>& coins, int amount) {
    std::vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;  // 0 coins for amount 0
    
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            if (dp[i - coin] != INT_MAX) {
                dp[i] = std::min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

// Example: coinChange({1, 3, 4}, 6) = 2 (3 + 3)`,
            c: `#include <stdio.h>
#include <limits.h>

int coinChange(int coins[], int coinsSize, int amount) {
    int dp[amount + 1];
    for (int i = 1; i <= amount; i++) dp[i] = INT_MAX;
    dp[0] = 0;  // 0 coins for amount 0
    
    for (int c = 0; c < coinsSize; c++) {
        for (int i = coins[c]; i <= amount; i++) {
            if (dp[i - coins[c]] != INT_MAX) {
                dp[i] = (dp[i] < dp[i - coins[c]] + 1) ? 
                        dp[i] : dp[i - coins[c]] + 1;
            }
        }
    }
    
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

/* Example: coinChange({1, 3, 4}, 3, 6) = 2 (3 + 3) */`,
            java: `import java.util.Arrays;

public class CoinChange {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;  // 0 coins for amount 0
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                if (dp[i - coin] != Integer.MAX_VALUE) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
    
    // Example: coinChange({1, 3, 4}, 6) = 2 (3 + 3)
}`
          }}
        />

        <h3>3. Longest Common Subsequence (LCS)</h3>
        <p><strong>Problem:</strong> Find longest common subsequence between two strings.</p>
        <MultiLanguageCode
          examples={{
            python: `def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# Example: lcs("ABCDGH", "AEDFHR") = 3 ("ADH")`,
            cpp: `#include <vector>
#include <string>
#include <algorithm>

int lcs(const std::string& s1, const std::string& s2) {
    int m = s1.length(), n = s2.length();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = std::max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}

// Example: lcs("ABCDGH", "AEDFHR") = 3 ("ADH")`,
            c: `#include <stdio.h>
#include <string.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int lcs(char* s1, char* s2) {
    int m = strlen(s1), n = strlen(s2);
    int dp[m+1][n+1];
    
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0;
            } else if (s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}

/* Example: lcs("ABCDGH", "AEDFHR") = 3 ("ADH") */`,
            java: `public class LCS {
    public int lcs(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    // Example: lcs("ABCDGH", "AEDFHR") = 3 ("ADH")
}`
          }}
        />

        <h3>4. 0/1 Knapsack</h3>
        <p><strong>Problem:</strong> Maximize value with weight constraint.</p>
        <MultiLanguageCode
          examples={{
            python: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                # Take item or skip it
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],  # Take
                    dp[i-1][w]  # Skip
                )
            else:
                dp[i][w] = dp[i-1][w]  # Can't take
    
    return dp[n][capacity]`,
            cpp: `#include <vector>
#include <algorithm>

int knapsack(std::vector<int>& weights, std::vector<int>& values, int capacity) {
    int n = weights.size();
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                // Take item or skip it
                dp[i][w] = std::max(
                    values[i-1] + dp[i-1][w - weights[i-1]],  // Take
                    dp[i-1][w]  // Skip
                );
            } else {
                dp[i][w] = dp[i-1][w];  // Can't take
            }
        }
    }
    
    return dp[n][capacity];
}`,
            c: `#include <stdio.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int knapsack(int weights[], int values[], int n, int capacity) {
    int dp[n+1][capacity+1];
    
    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                dp[i][w] = 0;
            } else if (weights[i-1] <= w) {
                // Take item or skip it
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],  // Take
                    dp[i-1][w]  // Skip
                );
            } else {
                dp[i][w] = dp[i-1][w];  // Can't take
            }
        }
    }
    
    return dp[n][capacity];
}`,
            java: `public class Knapsack {
    public int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i-1] <= w) {
                    // Take item or skip it
                    dp[i][w] = Math.max(
                        values[i-1] + dp[i-1][w - weights[i-1]],  // Take
                        dp[i-1][w]  // Skip
                    );
                } else {
                    dp[i][w] = dp[i-1][w];  // Can't take
                }
            }
        }
        
        return dp[n][capacity];
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>DP Patterns</h2>
        <div className="pattern-grid">
          <div className="pattern-card">
            <strong>1. 1D DP</strong>
            <p>Climbing stairs, Fibonacci, House Robber</p>
          </div>
          <div className="pattern-card">
            <strong>2. 2D DP</strong>
            <p>LCS, Edit Distance, Unique Paths</p>
          </div>
          <div className="pattern-card">
            <strong>3. Subsequence</strong>
            <p>LIS, LCS, Palindrome Subsequence</p>
          </div>
          <div className="pattern-card">
            <strong>4. Knapsack</strong>
            <p>0/1 Knapsack, Unbounded Knapsack</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>How to Identify DP Problems</h2>
        <ul className="explanation-list">
          <li>✅ Problem asks for optimal solution (max, min, count ways)</li>
          <li>✅ Can be broken into smaller subproblems</li>
          <li>✅ Subproblems overlap (same subproblem appears multiple times)</li>
          <li>✅ Optimal substructure (optimal solution uses optimal subproblems)</li>
          <li>✅ Brute force would be exponential - DP makes it polynomial</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Dynamic Programming Examples

# 1. Fibonacci (Memoization)
memo = {}
def fib(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]

# 2. Climbing Stairs
def climb_stairs(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Test
print(f"Fibonacci(10): {fib(10)}")
print(f"Climb Stairs(5): {climb_stairs(5)}")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What are the two key principles of Dynamic Programming?"
          options={[
            {
              text: 'Recursion and Iteration',
              correct: false,
              explanation: 'These are implementation techniques, not the core principles.',
            },
            {
              text: 'Optimal Substructure and Overlapping Subproblems',
              correct: true,
              explanation: 'Correct! Optimal substructure means optimal solution contains optimal subproblem solutions. Overlapping subproblems means same subproblems are solved multiple times.',
            },
            {
              text: 'Memoization and Tabulation',
              correct: false,
              explanation: 'These are implementation approaches, not the core principles.',
            },
            {
              text: 'Divide and Conquer',
              correct: false,
              explanation: 'That\'s a different paradigm. DP has overlapping subproblems.',
            },
          ]}
          topicId="dynamic_programming"
          conceptId="dp-principles"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. What is the time complexity of Fibonacci with memoization?"
          options={[
            {
              text: 'O(2^n)',
              correct: false,
              explanation: 'That would be naive recursion without memoization.',
            },
            {
              text: 'O(n)',
              correct: true,
              explanation: 'Correct! With memoization, each Fibonacci number is computed only once, giving O(n) time complexity.',
            },
            {
              text: 'O(n²)',
              correct: false,
              explanation: 'That would be slower. Memoization gives O(n).',
            },
            {
              text: 'O(log n)',
              correct: false,
              explanation: 'That would be even faster, but Fibonacci with memoization is O(n).',
            },
          ]}
          topicId="dynamic_programming"
          conceptId="fibonacci-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is the difference between memoization and tabulation?"
          options={[
            {
              text: 'Memoization is top-down, tabulation is bottom-up',
              correct: true,
              explanation: 'Correct! Memoization starts from the problem and works down to subproblems (recursive). Tabulation starts from base cases and builds up (iterative).',
            },
            {
              text: 'Memoization is bottom-up, tabulation is top-down',
              correct: false,
              explanation: 'It\'s the opposite! Memoization is top-down, tabulation is bottom-up.',
            },
            {
              text: 'They are the same thing',
              correct: false,
              explanation: 'They\'re different approaches to storing subproblem results.',
            },
            {
              text: 'Memoization uses arrays, tabulation uses dictionaries',
              correct: false,
              explanation: 'Both can use either data structure. The difference is the approach (top-down vs bottom-up).',
            },
          ]}
          topicId="dynamic_programming"
          conceptId="memoization-vs-tabulation"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. When should you use Dynamic Programming?"
          options={[
            {
              text: 'For all optimization problems',
              correct: false,
              explanation: 'DP is not suitable for all problems. It needs specific properties.',
            },
            {
              text: 'When problem has optimal substructure and overlapping subproblems',
              correct: true,
              explanation: 'Correct! DP is ideal when the problem can be broken into subproblems whose optimal solutions contribute to the overall optimal solution, and when the same subproblems are solved multiple times.',
            },
            {
              text: 'Only for sorting problems',
              correct: false,
              explanation: 'Sorting doesn\'t typically use DP. DP is for optimization problems.',
            },
            {
              text: 'When you need O(1) time complexity',
              correct: false,
              explanation: 'DP doesn\'t guarantee O(1). It optimizes from exponential to polynomial time.',
            },
          ]}
          topicId="dynamic_programming"
          conceptId="when-to-use-dp"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Break Down Problems:</strong> Complex problems = simpler subproblems</li>
          <li>✅ <strong>Store Results:</strong> Don't recompute - memoize or tabulate!</li>
          <li>✅ <strong>Two Approaches:</strong> Top-down (memoization) or bottom-up (tabulation)</li>
          <li>✅ <strong>Optimal Substructure:</strong> Optimal solution uses optimal subproblems</li>
          <li>✅ <strong>Space Optimization:</strong> Often can reduce space from O(n²) to O(n) or O(1)</li>
          <li>✅ <strong>Practice Patterns:</strong> Learn common patterns (1D, 2D, subsequence, knapsack)</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Not Identifying DP:</strong> Trying brute force when DP would be much faster</li>
          <li>❌ <strong>Forgetting Base Cases:</strong> Always define base cases for smallest subproblems</li>
          <li>❌ <strong>Wrong State Definition:</strong> DP state must capture all necessary information</li>
          <li>❌ <strong>Not Optimizing Space:</strong> Can often reduce space complexity significantly</li>
          <li>❌ <strong>Confusing with Greedy:</strong> DP considers all possibilities, greedy makes local choices</li>
        </ul>
      </div>
    </div>
  );
};



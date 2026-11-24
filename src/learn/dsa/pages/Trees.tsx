import React, { useMemo, useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { AlgorithmVisualizer } from '../components/AlgorithmVisualizer';
import { generateTreeTraversalFrames, sampleTree } from '../utils/treeVisualizers';
import { useProgress } from '../contexts/ProgressContext';
import type { VisualizerFrame } from '../hooks/useVisualizer';
import './Trees.css';

const INORDER_CODE = `def inorder(root):
    if root:
        inorder(root.left)   # Left
        print(root.data)      # Root
        inorder(root.right)  # Right

# Order: Left → Root → Right
# For BST: Gives sorted order!`;

const PREORDER_CODE = `def preorder(root):
    if root:
        print(root.data)      # Root
        preorder(root.left)   # Left
        preorder(root.right)  # Right

# Order: Root → Left → Right
# Good for copying trees!`;

const POSTORDER_CODE = `def postorder(root):
    if root:
        postorder(root.left)   # Left
        postorder(root.right)  # Right
        print(root.data)       # Root

# Order: Left → Right → Root
# Good for deleting trees!`;

export const Trees: React.FC = () => {
  const { updateProgress } = useProgress();
  const [traversalType, setTraversalType] = useState<'inorder' | 'preorder' | 'postorder'>('inorder');

  const traversalFrames = useMemo(
    () => generateTreeTraversalFrames(sampleTree, traversalType),
    [traversalType]
  );

  const currentCode = 
    traversalType === 'inorder' ? INORDER_CODE :
    traversalType === 'preorder' ? PREORDER_CODE :
    POSTORDER_CODE;

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('trees', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const renderTraversalFrame = (frame: VisualizerFrame) => {
    const visited = frame.arraySnapshot ?? [];
    const highlights = frame.highlights ?? [];

    return (
      <div className="traversal-visual">
        <div className="tree-structure">
          <div className="tree-node-visual root">1</div>
          <div className="tree-level">
            <div className="tree-node-visual">2</div>
            <div className="tree-node-visual">3</div>
          </div>
          <div className="tree-level">
            <div className="tree-node-visual">4</div>
            <div className="tree-node-visual">5</div>
            <div className="tree-node-visual empty"></div>
            <div className="tree-node-visual empty"></div>
          </div>
        </div>
        <div className="traversal-order">
          <strong>Traversal Order:</strong>
          <div className="order-list">
            {visited.map((value, idx) => (
              <span
                key={idx}
                className={`order-item ${highlights.includes(idx) ? 'highlight' : ''}`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="trees-page">
      <div className="page-header">
        <h1>🌳 Trees & Binary Trees</h1>
        <p>Hierarchical data structure - Think of it like a family tree or organizational chart!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="trees" />
      </div>

      <div className="content-section">
        <h2>What is a Tree?</h2>
        <p>
          A <strong>tree</strong> is a hierarchical data structure with nodes connected by edges. Unlike graphs, 
          trees have no cycles and have exactly one path between any two nodes.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of a <strong>tree</strong> like a family tree or company organization:
          </p>
          <ul>
            <li><strong>Root:</strong> The topmost node (CEO, ancestor)</li>
            <li><strong>Parent:</strong> A node with children (manager, parent)</li>
            <li><strong>Child:</strong> A node with a parent (employee, child)</li>
            <li><strong>Leaf:</strong> A node with no children (individual contributor, person with no children)</li>
            <li><strong>Path:</strong> Sequence of nodes from root to a node</li>
          </ul>
        </div>

        <div className="visual-diagram">
          <h3>Tree Structure</h3>
          <div className="tree-visual">
            <div className="tree-node root">1 (Root)</div>
            <div className="tree-level">
              <div className="tree-node">2</div>
              <div className="tree-node">3</div>
            </div>
            <div className="tree-level">
              <div className="tree-node leaf">4</div>
              <div className="tree-node leaf">5</div>
              <div className="tree-node leaf">6</div>
              <div className="tree-node leaf">7</div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Binary Tree</h2>
        <p>
          A <strong>binary tree</strong> is a tree where each node has at most 2 children: left and right.
        </p>

        <MultiLanguageCode
          examples={{
            python: `class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None   # Left child
        self.right = None  # Right child

# Create a binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)`,
            cpp: `struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

// Create a binary tree
TreeNode* root = new TreeNode(1);
root->left = new TreeNode(2);
root->right = new TreeNode(3);
root->left->left = new TreeNode(4);
root->left->right = new TreeNode(5);`,
            c: `typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int data) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = data;
    node->left = node->right = NULL;
    return node;
}

// Create a binary tree
TreeNode* root = createNode(1);
root->left = createNode(2);
root->right = createNode(3);
root->left->left = createNode(4);
root->left->right = createNode(5);`,
            java: `class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Create a binary tree
TreeNode root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);`
          }}
        />

        <h3>Types of Binary Trees</h3>
        <ul className="explanation-list">
          <li><strong>Full Binary Tree:</strong> Every node has 0 or 2 children</li>
          <li><strong>Complete Binary Tree:</strong> All levels are filled except possibly the last, filled left to right</li>
          <li><strong>Perfect Binary Tree:</strong> All internal nodes have 2 children, all leaves at same level</li>
          <li><strong>Balanced Binary Tree:</strong> Height difference between left and right subtrees is at most 1</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Tree Traversals</h2>
        <p>There are four main ways to visit all nodes in a tree:</p>

        <h3>1. Inorder (Left → Root → Right)</h3>
        <p>Visit left subtree, then root, then right subtree. For BST, gives sorted order!</p>
        <MultiLanguageCode
          examples={{
            python: `def inorder(root):
    if root:
        inorder(root.left)   # Left
        print(root.data)      # Root
        inorder(root.right)  # Right

# Example: [4, 2, 5, 1, 3]`,
            cpp: `struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};

void inorder(TreeNode* root) {
    if (root) {
        inorder(root->left);   // Left
        std::cout << root->data << " ";  // Root
        inorder(root->right);  // Right
    }
}

// Example: [4, 2, 5, 1, 3]`,
            c: `typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

void inorder(TreeNode* root) {
    if (root) {
        inorder(root->left);   // Left
        printf("%d ", root->data);  // Root
        inorder(root->right);  // Right
    }
}

/* Example: [4, 2, 5, 1, 3] */`,
            java: `class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
}

public void inorder(TreeNode root) {
    if (root != null) {
        inorder(root.left);   // Left
        System.out.print(root.data + " ");  // Root
        inorder(root.right);  // Right
    }
}

// Example: [4, 2, 5, 1, 3]`
          }}
        />

        <h3>2. Preorder (Root → Left → Right)</h3>
        <p>Visit root first, then left subtree, then right subtree. Good for copying trees!</p>
        <MultiLanguageCode
          examples={{
            python: `def preorder(root):
    if root:
        print(root.data)      # Root
        preorder(root.left)   # Left
        preorder(root.right)  # Right

# Example: [1, 2, 4, 5, 3]`,
            cpp: `void preorder(TreeNode* root) {
    if (root) {
        std::cout << root->data << " ";  // Root
        preorder(root->left);   // Left
        preorder(root->right);  // Right
    }
}

// Example: [1, 2, 4, 5, 3]`,
            c: `void preorder(TreeNode* root) {
    if (root) {
        printf("%d ", root->data);  // Root
        preorder(root->left);   // Left
        preorder(root->right);  // Right
    }
}

/* Example: [1, 2, 4, 5, 3] */`,
            java: `public void preorder(TreeNode root) {
    if (root != null) {
        System.out.print(root.data + " ");  // Root
        preorder(root.left);   // Left
        preorder(root.right);  // Right
    }
}

// Example: [1, 2, 4, 5, 3]`
          }}
        />

        <h3>3. Postorder (Left → Right → Root)</h3>
        <p>Visit left subtree, then right subtree, then root. Good for deleting trees!</p>
        <MultiLanguageCode
          examples={{
            python: `def postorder(root):
    if root:
        postorder(root.left)   # Left
        postorder(root.right)  # Right
        print(root.data)       # Root

# Example: [4, 5, 2, 3, 1]`,
            cpp: `void postorder(TreeNode* root) {
    if (root) {
        postorder(root->left);   // Left
        postorder(root->right);  // Right
        std::cout << root->data << " ";  // Root
    }
}

// Example: [4, 5, 2, 3, 1]`,
            c: `void postorder(TreeNode* root) {
    if (root) {
        postorder(root->left);   // Left
        postorder(root->right);  // Right
        printf("%d ", root->data);  // Root
    }
}

/* Example: [4, 5, 2, 3, 1] */`,
            java: `public void postorder(TreeNode root) {
    if (root != null) {
        postorder(root.left);   // Left
        postorder(root.right);  // Right
        System.out.print(root.data + " ");  // Root
    }
}

// Example: [4, 5, 2, 3, 1]`
          }}
        />

        <h3>4. Level Order (BFS)</h3>
        <p>Visit nodes level by level from top to bottom. Uses a queue!</p>
        <MultiLanguageCode
          examples={{
            python: `from collections import deque

def level_order(root):
    if not root:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.data)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

# Example: [1, 2, 3, 4, 5]`,
            cpp: `#include <queue>

void levelOrder(TreeNode* root) {
    if (!root) return;
    
    std::queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        std::cout << node->data << " ";
        
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
}

// Example: [1, 2, 3, 4, 5]`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct QueueNode {
    TreeNode* data;
    struct QueueNode* next;
} QueueNode;

void levelOrder(TreeNode* root) {
    if (!root) return;
    
    QueueNode* front = NULL, *rear = NULL;
    QueueNode* temp = (QueueNode*)malloc(sizeof(QueueNode));
    temp->data = root;
    temp->next = NULL;
    front = rear = temp;
    
    while (front) {
        TreeNode* node = front->data;
        printf("%d ", node->data);
        
        if (node->left) {
            QueueNode* left = (QueueNode*)malloc(sizeof(QueueNode));
            left->data = node->left;
            left->next = NULL;
            rear->next = left;
            rear = left;
        }
        if (node->right) {
            QueueNode* right = (QueueNode*)malloc(sizeof(QueueNode));
            right->data = node->right;
            right->next = NULL;
            rear->next = right;
            rear = right;
        }
        
        QueueNode* old = front;
        front = front->next;
        free(old);
    }
}

/* Example: [1, 2, 3, 4, 5] */`,
            java: `import java.util.*;

public void levelOrder(TreeNode root) {
    if (root == null) return;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        System.out.print(node.data + " ");
        
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}

// Example: [1, 2, 3, 4, 5]`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Interactive Tree Traversal Visualizer</h2>
        <p>
          Watch how different traversal algorithms visit nodes in a binary tree. 
          The order of visitation is shown step-by-step.
        </p>

        <div className="traversal-selector">
          <button
            className={traversalType === 'inorder' ? 'active' : ''}
            onClick={() => setTraversalType('inorder')}
          >
            Inorder
          </button>
          <button
            className={traversalType === 'preorder' ? 'active' : ''}
            onClick={() => setTraversalType('preorder')}
          >
            Preorder
          </button>
          <button
            className={traversalType === 'postorder' ? 'active' : ''}
            onClick={() => setTraversalType('postorder')}
          >
            Postorder
          </button>
        </div>

        <AlgorithmVisualizer
          title={`${traversalType.charAt(0).toUpperCase() + traversalType.slice(1)} Traversal`}
          frames={traversalFrames}
          renderFrame={renderTraversalFrame}
          codeSample={currentCode}
          description={
            traversalType === 'inorder'
              ? 'Left → Root → Right. For BST, gives sorted order!'
              : traversalType === 'preorder'
              ? 'Root → Left → Right. Good for copying trees!'
              : 'Left → Right → Root. Good for deleting trees!'
          }
        />
      </div>

      <div className="content-section">
        <h2>Binary Search Tree (BST)</h2>
        <p>
          A <strong>Binary Search Tree</strong> is a binary tree where:
        </p>
        <ul className="explanation-list">
          <li>All nodes in left subtree are less than root</li>
          <li>All nodes in right subtree are greater than root</li>
          <li>This property holds recursively for all subtrees</li>
        </ul>

        <MultiLanguageCode
          examples={{
            python: `class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, data):
        self.root = self._insert(self.root, data)
    
    def _insert(self, root, data):
        if not root:
            return TreeNode(data)
        if data < root.data:
            root.left = self._insert(root.left, data)
        else:
            root.right = self._insert(root.right, data)
        return root
    
    def search(self, data):
        return self._search(self.root, data)
    
    def _search(self, root, data):
        if not root or root.data == data:
            return root
        if data < root.data:
            return self._search(root.left, data)
        return self._search(root.right, data)`,
            cpp: `class BST {
private:
    TreeNode* root;
    
    TreeNode* insert(TreeNode* root, int data) {
        if (!root) return new TreeNode(data);
        if (data < root->data) {
            root->left = insert(root->left, data);
        } else {
            root->right = insert(root->right, data);
        }
        return root;
    }
    
    TreeNode* search(TreeNode* root, int data) {
        if (!root || root->data == data) return root;
        if (data < root->data) return search(root->left, data);
        return search(root->right, data);
    }
    
public:
    BST() : root(nullptr) {}
    
    void insert(int data) {
        root = insert(root, data);
    }
    
    TreeNode* search(int data) {
        return search(root, data);
    }
};`,
            c: `typedef struct BST {
    TreeNode* root;
} BST;

TreeNode* insert(TreeNode* root, int data) {
    if (!root) return createNode(data);
    if (data < root->data) {
        root->left = insert(root->left, data);
    } else {
        root->right = insert(root->right, data);
    }
    return root;
}

TreeNode* search(TreeNode* root, int data) {
    if (!root || root->data == data) return root;
    if (data < root->data) return search(root->left, data);
    return search(root->right, data);
}`,
            java: `class BST {
    private TreeNode root;
    
    public void insert(int data) {
        root = insert(root, data);
    }
    
    private TreeNode insert(TreeNode root, int data) {
        if (root == null) return new TreeNode(data);
        if (data < root.data) {
            root.left = insert(root.left, data);
        } else {
            root.right = insert(root.right, data);
        }
        return root;
    }
    
    public TreeNode search(int data) {
        return search(root, data);
    }
    
    private TreeNode search(TreeNode root, int data) {
        if (root == null || root.data == data) return root;
        if (data < root.data) return search(root.left, data);
        return search(root.right, data);
    }
}`
          }}
        />

        <div className="info-box">
          <strong>💡 Key Insight:</strong> BST allows O(log n) search, insert, and delete in balanced trees!
        </div>
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Average (Balanced)</th>
              <th>Worst (Unbalanced)</th>
              <th>Space</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Search</td>
              <td><span className="badge badge-good">O(log n)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(h)</td>
            </tr>
            <tr>
              <td>Insert</td>
              <td><span className="badge badge-good">O(log n)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(h)</td>
            </tr>
            <tr>
              <td>Delete</td>
              <td><span className="badge badge-good">O(log n)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(h)</td>
            </tr>
            <tr>
              <td>Traversal</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(h)</td>
            </tr>
          </tbody>
        </table>
        <p className="note-text">Note: h = height of tree. For balanced tree, h = log n</p>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Binary Tree Implementation
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# Tree Traversals
def inorder(root):
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)

def preorder(root):
    if root:
        print(root.data, end=" ")
        preorder(root.left)
        preorder(root.right)

def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.data, end=" ")

# Create tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print("Inorder:", end=" ")
inorder(root)
print()
print("Preorder:", end=" ")
preorder(root)
print()
print("Postorder:", end=" ")
postorder(root)`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of searching in a balanced Binary Search Tree?"
          options={[
            {
              text: 'O(1)',
              correct: false,
              explanation: 'That would be hash tables. BST requires traversal.',
            },
            {
              text: 'O(log n)',
              correct: true,
              explanation: 'Correct! A balanced BST has height O(log n), so search takes O(log n) time.',
            },
            {
              text: 'O(n)',
              correct: false,
              explanation: 'That would be for unbalanced trees. Balanced BST is O(log n).',
            },
            {
              text: 'O(n²)',
              correct: false,
              explanation: 'That would be extremely slow. Balanced BST is O(log n).',
            },
          ]}
          topicId="trees"
          conceptId="bst-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. Which traversal gives sorted order for a Binary Search Tree?"
          options={[
            {
              text: 'Preorder',
              correct: false,
              explanation: 'Preorder is Root → Left → Right, not sorted.',
            },
            {
              text: 'Inorder',
              correct: true,
              explanation: 'Correct! Inorder traversal (Left → Root → Right) of a BST visits nodes in sorted ascending order.',
            },
            {
              text: 'Postorder',
              correct: false,
              explanation: 'Postorder is Left → Right → Root, not sorted.',
            },
            {
              text: 'Level order',
              correct: false,
              explanation: 'Level order uses BFS, visiting level by level, not sorted.',
            },
          ]}
          topicId="trees"
          conceptId="inorder-bst"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. What is a leaf node in a tree?"
          options={[
            {
              text: 'The root node',
              correct: false,
              explanation: 'Root is the topmost node. Leaf nodes are at the bottom.',
            },
            {
              text: 'A node with no children',
              correct: true,
              explanation: 'Correct! A leaf node has no children - it\'s a terminal node in the tree.',
            },
            {
              text: 'A node with 2 children',
              correct: false,
              explanation: 'That would be an internal node in a full binary tree, not a leaf.',
            },
            {
              text: 'The largest node',
              correct: false,
              explanation: 'Leaf nodes are defined by having no children, not by their value.',
            },
          ]}
          topicId="trees"
          conceptId="leaf-node"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. What is the maximum number of nodes at level i in a binary tree?"
          options={[
            {
              text: 'i',
              correct: false,
              explanation: 'That would be linear growth. Binary trees grow exponentially.',
            },
            {
              text: '2^i',
              correct: true,
              explanation: 'Correct! At level 0 (root): 2^0 = 1 node. At level 1: 2^1 = 2 nodes. At level i: 2^i nodes maximum.',
            },
            {
              text: '2i',
              correct: false,
              explanation: 'That would be linear growth. Binary trees have exponential growth per level.',
            },
            {
              text: 'i²',
              correct: false,
              explanation: 'That would be quadratic. Binary trees have exponential (2^i) growth.',
            },
          ]}
          topicId="trees"
          conceptId="tree-level-nodes"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Hierarchical Structure:</strong> Trees represent hierarchical relationships naturally</li>
          <li>✅ <strong>No Cycles:</strong> Trees have exactly one path between any two nodes</li>
          <li>✅ <strong>BST Benefits:</strong> O(log n) operations in balanced BST - much faster than arrays!</li>
          <li>✅ <strong>Traversal Matters:</strong> Different traversals serve different purposes</li>
          <li>✅ <strong>Balance is Key:</strong> Unbalanced trees degrade to O(n) - use AVL or Red-Black trees</li>
          <li>✅ <strong>Recursive Nature:</strong> Tree operations are naturally recursive</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting Base Case:</strong> Always check if root is None in recursive functions!</li>
          <li>❌ <strong>Not Handling Unbalanced Trees:</strong> BST can become a linked list (O(n)) if not balanced</li>
          <li>❌ <strong>Wrong Comparison in BST:</strong> Left subtree &lt; root &lt; right subtree - get the order right!</li>
          <li>❌ <strong>Modifying During Traversal:</strong> Be careful when modifying tree structure during traversal</li>
          <li>❌ <strong>Confusing Traversals:</strong> Remember: Inorder = Left-Root-Right, Preorder = Root-Left-Right</li>
        </ul>
      </div>
    </div>
  );
};



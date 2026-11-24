import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { useProgress } from '../contexts/ProgressContext';
import './RBTrees.css';

export const RBTrees: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('rb_trees', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="rb-trees-page">
      <div className="page-header">
        <h1>🔴 Red-Black Trees</h1>
        <p>Reference: CLRS Chapter 13 - Self-balancing binary search trees with O(log n) operations!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="rb_trees" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          A <strong>Red-Black Tree</strong> is a self-balancing binary search tree that maintains 
          balance through color properties and rotations. It guarantees O(log n) time for all operations.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Java TreeMap/TreeSet:</strong> Underlying implementation</li>
            <li><strong>C++ std::map/std::set:</strong> Often implemented as RB trees</li>
            <li><strong>Linux Kernel:</strong> Used in process scheduling</li>
            <li><strong>Database Systems:</strong> Index structures</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Red-Black Tree Properties</h2>
        <p>
          A Red-Black tree must satisfy these properties:
        </p>

        <ol className="step-list">
          <li><strong>Color Property:</strong> Every node is either red or black</li>
          <li><strong>Root Property:</strong> The root is always black</li>
          <li><strong>Leaf Property:</strong> All leaves (NIL nodes) are black</li>
          <li><strong>Red Property:</strong> If a node is red, both its children are black</li>
          <li><strong>Depth Property:</strong> Every path from root to leaf has the same number of black nodes</li>
        </ol>

        <div className="info-box">
          <strong>Black Height:</strong> The number of black nodes on any path from root to leaf (excluding the root). 
          This property ensures the tree is balanced!
        </div>
      </div>

      <div className="content-section">
        <h2>Tree Structure</h2>
        <div className="tree-visualization">
          <div className="tree-diagram">
            <pre>{`
        [7]●
       /   \\
    [2]●    [11]●
    /  \\    /   \\
  [1]● [5]● [8]● [14]●
       /  \\
     [4]● [6]●

● = Black node
○ = Red node (if shown)
            `}</pre>
          </div>
          <div className="tree-explanation">
            <p><strong>Example Red-Black Tree:</strong></p>
            <ul>
              <li>Root (7) is black</li>
              <li>All paths have same black height (2)</li>
              <li>No two red nodes are adjacent</li>
              <li>Maintains BST property</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Operations</h2>

        <h3>1. Insertion</h3>
        <ol className="step-list">
          <li>Insert node as in BST (new node is always red)</li>
          <li>If parent is black, done (no violation)</li>
          <li>If parent is red, fix violations:</li>
          <li>  - Case 1: Uncle is red → Recolor</li>
          <li>  - Case 2: Uncle is black (triangle) → Rotate</li>
          <li>  - Case 3: Uncle is black (line) → Rotate and recolor</li>
        </ol>

        <h3>2. Deletion</h3>
        <ol className="step-list">
          <li>Delete node as in BST</li>
          <li>If deleted node was red, done</li>
          <li>If deleted node was black, fix double-black violation:</li>
          <li>  - Case 1: Sibling is red → Rotate and recolor</li>
          <li>  - Case 2: Sibling is black with black children → Recolor</li>
          <li>  - Case 3: Sibling is black with red child → Rotate and recolor</li>
        </ol>
      </div>

      <div className="content-section">
        <h2>Rotations</h2>
        <p>
          Rotations are used to maintain balance. There are two types:
        </p>

        <h3>Left Rotation</h3>
        <pre className="code-block">{`def left_rotate(tree, x):
    """Left rotate around node x"""
    y = x.right
    x.right = y.left
    if y.left:
        y.left.parent = x
    y.parent = x.parent
    if not x.parent:
        tree.root = y
    elif x == x.parent.left:
        x.parent.left = y
    else:
        x.parent.right = y
    y.left = x
    x.parent = y`}</pre>

        <h3>Right Rotation</h3>
        <pre className="code-block">{`def right_rotate(tree, x):
    """Right rotate around node x"""
    y = x.left
    x.left = y.right
    if y.right:
        y.right.parent = x
    y.parent = x.parent
    if not x.parent:
        tree.root = y
    elif x == x.parent.right:
        x.parent.right = y
    else:
        x.parent.left = y
    y.right = x
    x.parent = y`}</pre>
      </div>

      <div className="content-section">
        <h2>Insertion Cases</h2>

        <h3>Case 1: Uncle is Red</h3>
        <p>
          If both parent and uncle are red, recolor parent, uncle, and grandparent. 
          Then check grandparent for violations.
        </p>

        <h3>Case 2: Uncle is Black (Triangle)</h3>
        <p>
          If uncle is black and node forms a triangle with parent, rotate parent 
          to make it a line, then apply Case 3.
        </p>

        <h3>Case 3: Uncle is Black (Line)</h3>
        <p>
          If uncle is black and node forms a line with parent, rotate grandparent 
          and recolor parent and grandparent.
        </p>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Red-Black Tree Implementation
class RBNode:
    def __init__(self, val, color='RED'):
        self.val = val
        self.color = color
        self.left = None
        self.right = None
        self.parent = None

class RBTree:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        node = RBNode(val)
        if not self.root:
            self.root = node
            node.color = 'BLACK'
            return
        
        # BST insert
        current = self.root
        while True:
            if val < current.val:
                if not current.left:
                    current.left = node
                    node.parent = current
                    break
                current = current.left
            else:
                if not current.right:
                    current.right = node
                    node.parent = current
                    break
                current = current.right
        
        # Fix violations
        self._fix_insert(node)
    
    def _fix_insert(self, node):
        while node.parent and node.parent.color == 'RED':
            # Implementation of fix cases
            pass

# Test
tree = RBTree()
tree.insert(7)
tree.insert(2)
tree.insert(11)
print("Red-Black Tree created!")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the time complexity of operations in a Red-Black tree?"
          options={[
            {
              text: 'O(n)',
              correct: false,
              explanation: 'That would be for unbalanced trees. Red-Black trees are balanced!',
            },
            {
              text: 'O(log n)',
              correct: true,
              explanation: 'Correct! Red-Black trees maintain balance, ensuring O(log n) height, so all operations are O(log n).',
            },
            {
              text: 'O(n log n)',
              correct: false,
              explanation: 'That would be for sorting. Tree operations are O(log n).',
            },
            {
              text: 'O(1)',
              correct: false,
              explanation: 'Only hash tables give O(1). Trees require traversal.',
            },
          ]}
          topicId="rb_trees"
          conceptId="rb-complexity"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. What is the black height property?"
          options={[
            {
              text: 'The number of black nodes in the entire tree',
              correct: false,
              explanation: 'Black height is about paths, not total nodes.',
            },
            {
              text: 'The number of black nodes on any path from root to leaf',
              correct: true,
              explanation: 'Correct! The black height property ensures all paths from root to leaf have the same number of black nodes, which keeps the tree balanced.',
            },
            {
              text: 'The height of the black subtree',
              correct: false,
              explanation: 'Black height is a count, not a subtree height.',
            },
            {
              text: 'The maximum depth of red nodes',
              correct: false,
              explanation: 'Black height counts black nodes, not red nodes.',
            },
          ]}
          topicId="rb_trees"
          conceptId="black-height"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. Why are new nodes inserted as red?"
          options={[
            {
              text: 'Red nodes are faster to access',
              correct: false,
              explanation: 'Color doesn\'t affect access speed.',
            },
            {
              text: 'It minimizes violations of the red-black properties',
              correct: true,
              explanation: 'Correct! Inserting as red only potentially violates the "red parent-red child" rule, which is easier to fix than violating the black height property.',
            },
            {
              text: 'Red nodes are more visible',
              correct: false,
              explanation: 'Color is for balancing, not visibility.',
            },
            {
              text: 'It makes the tree faster',
              correct: false,
              explanation: 'Color choice is about maintaining properties, not speed.',
            },
          ]}
          topicId="rb_trees"
          conceptId="insert-color"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Self-Balancing:</strong> Maintains O(log n) height through color properties</li>
          <li>✅ <strong>Properties:</strong> 5 properties ensure balance (color, root, leaf, red, depth)</li>
          <li>✅ <strong>Black Height:</strong> Same number of black nodes on all paths</li>
          <li>✅ <strong>Operations:</strong> Insert, delete, search all O(log n)</li>
          <li>✅ <strong>Rotations:</strong> Used to fix violations after insert/delete</li>
          <li>✅ <strong>Applications:</strong> Used in standard library implementations (Java, C++)</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting to Recolor:</strong> Must recolor nodes, not just rotate</li>
          <li>❌ <strong>Wrong Rotation Direction:</strong> Left vs right rotation depends on structure</li>
          <li>❌ <strong>Not Handling All Cases:</strong> Must check all 3 insertion cases</li>
          <li>❌ <strong>Ignoring NIL Nodes:</strong> Leaves are black NIL nodes, not null</li>
          <li>❌ <strong>Root Color:</strong> Root must always be black after fixes</li>
        </ul>
      </div>
    </div>
  );
};


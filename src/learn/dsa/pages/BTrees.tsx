import React from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { useProgress } from '../contexts/ProgressContext';
import './BTrees.css';

export const BTrees: React.FC = () => {
  const { updateProgress } = useProgress();

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('b_trees', {
        conceptsMastered: [conceptId],
      });
    }
  };

  return (
    <div className="b-trees-page">
      <div className="page-header">
        <h1>🌲 B-Trees</h1>
        <p>Reference: CLRS Chapter 18 - External-memory balanced trees for databases!</p>
      </div>

      <div className="content-section">
        <ProgressTracker topicId="b_trees" />
      </div>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          A <strong>B-Tree</strong> is a self-balancing tree data structure that maintains sorted data 
          and allows searches, sequential access, insertions, and deletions in O(log n) time. 
          Designed for systems that read and write large blocks of data.
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Applications</h3>
          <ul>
            <li><strong>Database Systems:</strong> Index structures (MySQL, PostgreSQL use B+ trees)</li>
            <li><strong>File Systems:</strong> NTFS, HFS+, ext4 use B-trees</li>
            <li><strong>Storage Systems:</strong> Optimized for disk I/O operations</li>
            <li><strong>Large Data Sets:</strong> When data doesn't fit in memory</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>B-Tree Properties</h2>
        <p>
          For a B-tree of order <code>m</code> (minimum degree <code>t = ⌈m/2⌉</code>):
        </p>

        <ol className="step-list">
          <li><strong>Node Capacity:</strong> Every node has at most <code>m</code> children</li>
          <li><strong>Minimum Children:</strong> Every internal node (except root) has at least <code>t</code> children</li>
          <li><strong>Root Exception:</strong> Root has at least 2 children (unless it's a leaf)</li>
          <li><strong>Key Count:</strong> Internal node with <code>k</code> children has <code>k-1</code> keys</li>
          <li><strong>Leaf Level:</strong> All leaves are at the same level</li>
          <li><strong>Sorted Order:</strong> Keys in each node are sorted</li>
        </ol>

        <div className="info-box">
          <strong>Why B-Trees?</strong> They minimize disk I/O by storing many keys per node. 
          Reading one node from disk gives access to many keys, reducing the number of disk reads!
        </div>
      </div>

      <div className="content-section">
        <h2>Tree Structure</h2>
        <div className="tree-visualization">
          <div className="tree-diagram">
            <pre>{`
        [50]
       /    \\
    [20,30]  [70,80]
    / | \\    / | \\
  [10][25][35] [60][75][90]

B-Tree of order 3 (t=2)
Each node can have 1-2 keys
            `}</pre>
          </div>
          <div className="tree-explanation">
            <p><strong>Example B-Tree (order 3):</strong></p>
            <ul>
              <li>Root has 1 key (50)</li>
              <li>Internal nodes have 1-2 keys</li>
              <li>All leaves at same level</li>
              <li>Keys are sorted within nodes</li>
              <li>Optimized for disk block size</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Operations</h2>

        <h3>1. Search</h3>
        <ol className="step-list">
          <li>Start at root</li>
          <li>For each node, find key or child pointer</li>
          <li>If key found, return it</li>
          <li>If not found, follow appropriate child pointer</li>
          <li>Repeat until found or reach leaf</li>
        </ol>
        <p><strong>Time:</strong> O(log n) - height is O(log<sub>t</sub> n) where t is minimum degree</p>

        <h3>2. Insertion</h3>
        <ol className="step-list">
          <li>Search for insertion position</li>
          <li>Insert key into appropriate leaf</li>
          <li>If leaf is full (has m-1 keys):</li>
          <li>  - Split leaf into two nodes</li>
          <li>  - Promote middle key to parent</li>
          <li>  - If parent is full, split parent recursively</li>
        </ol>
        <p><strong>Time:</strong> O(log n) - at most one split per level</p>

        <h3>3. Deletion</h3>
        <ol className="step-list">
          <li>Search for key to delete</li>
          <li>If key is in internal node, replace with predecessor/successor</li>
          <li>Delete from leaf</li>
          <li>If leaf has too few keys (less than t-1):</li>
          <li>  - Borrow from sibling if possible</li>
          <li>  - Otherwise, merge with sibling</li>
          <li>  - Propagate merge up if needed</li>
        </ol>
        <p><strong>Time:</strong> O(log n)</p>
      </div>

      <div className="content-section">
        <h2>B-Tree vs B+ Tree</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>B-Tree</th>
              <th>B+ Tree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Storage</td>
              <td>Keys and data in all nodes</td>
              <td>Data only in leaves</td>
            </tr>
            <tr>
              <td>Leaf Links</td>
              <td>No links between leaves</td>
              <td>Leaves linked for sequential access</td>
            </tr>
            <tr>
              <td>Search</td>
              <td>Can find data in internal nodes</td>
              <td>Must reach leaf for data</td>
            </tr>
            <tr>
              <td>Range Queries</td>
              <td>Less efficient</td>
              <td>Very efficient (linked leaves)</td>
            </tr>
            <tr>
              <td>Common Use</td>
              <td>General purpose</td>
              <td>Databases (MySQL, PostgreSQL)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Why B-Trees for Databases?</h2>
        <ul>
          <li><strong>Disk Block Size:</strong> Nodes sized to match disk block size (4KB, 8KB)</li>
          <li><strong>Minimize I/O:</strong> Each node read from disk contains many keys</li>
          <li><strong>Shallow Trees:</strong> High branching factor means low height</li>
          <li><strong>Sequential Access:</strong> B+ trees link leaves for efficient range queries</li>
          <li><strong>Cache Friendly:</strong> Fewer cache misses compared to binary trees</li>
        </ul>

        <div className="info-box">
          <strong>Example:</strong> A B-tree of order 1000 (t=500) with 1 billion keys has height at most 3! 
          Only 3 disk reads to find any key!
        </div>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# B-Tree Implementation (Simplified)
class BTreeNode:
    def __init__(self, leaf=False):
        self.keys = []
        self.children = []
        self.leaf = leaf
    
    def search(self, key):
        """Search for key in B-tree"""
        i = 0
        while i < len(self.keys) and key > self.keys[i]:
            i += 1
        
        if i < len(self.keys) and self.keys[i] == key:
            return self
        
        if self.leaf:
            return None
        
        return self.children[i].search(key)

class BTree:
    def __init__(self, t):
        self.root = BTreeNode(leaf=True)
        self.t = t  # Minimum degree
    
    def search(self, key):
        return self.root.search(key)
    
    def insert(self, key):
        # If root is full, split it
        if len(self.root.keys) == 2 * self.t - 1:
            new_root = BTreeNode()
            new_root.children.append(self.root)
            new_root.split_child(0, self.root)
            self.root = new_root
        
        self.root.insert_non_full(key)

# Test
tree = BTree(t=3)  # Order 5
tree.insert(10)
tree.insert(20)
tree.insert(5)
print("B-Tree created!")`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <AdaptiveQuiz
          question="1. What is the main advantage of B-trees over binary search trees?"
          options={[
            {
              text: 'Faster search time',
              correct: false,
              explanation: 'Both are O(log n) for search. The advantage is different.',
            },
            {
              text: 'Minimizes disk I/O by storing many keys per node',
              correct: true,
              explanation: 'Correct! B-trees are designed for external memory. By storing many keys per node (matching disk block size), they minimize the number of disk reads needed.',
            },
            {
              text: 'Uses less memory',
              correct: false,
              explanation: 'B-trees actually use more memory per node, but it\'s optimized for disk access.',
            },
            {
              text: 'Simpler implementation',
              correct: false,
              explanation: 'B-trees are actually more complex due to splitting and merging.',
            },
          ]}
          topicId="b_trees"
          conceptId="b-tree-advantage"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. In a B-tree of order m, what is the minimum number of keys in a non-root internal node?"
          options={[
            {
              text: 'm - 1',
              correct: false,
              explanation: 'That\'s the maximum. We need the minimum.',
            },
            {
              text: '⌈m/2⌉ - 1',
              correct: true,
              explanation: 'Correct! For minimum degree t = ⌈m/2⌉, a non-root internal node must have at least t children, which means at least t-1 keys.',
            },
            {
              text: 'm',
              correct: false,
              explanation: 'That would be too many. Nodes have at most m children.',
            },
            {
              text: '1',
              correct: false,
              explanation: 'That\'s too few. The minimum depends on the order m.',
            },
          ]}
          topicId="b_trees"
          conceptId="b-tree-min-keys"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. Why are B+ trees preferred over B-trees in databases?"
          options={[
            {
              text: 'They are faster for point queries',
              correct: false,
              explanation: 'Point queries are similar. The advantage is for range queries.',
            },
            {
              text: 'They support efficient range queries through linked leaves',
              correct: true,
              explanation: 'Correct! B+ trees store data only in leaves and link leaves together, making sequential access and range queries very efficient - perfect for databases.',
            },
            {
              text: 'They use less disk space',
              correct: false,
              explanation: 'Space usage is similar. The advantage is about access patterns.',
            },
            {
              text: 'They are simpler to implement',
              correct: false,
              explanation: 'Implementation complexity is similar. The advantage is functional.',
            },
          ]}
          topicId="b_trees"
          conceptId="b-plus-advantage"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>External Memory:</strong> Designed for systems with disk I/O</li>
          <li>✅ <strong>High Branching:</strong> Many keys per node reduce tree height</li>
          <li>✅ <strong>Self-Balancing:</strong> Maintains balance through splits and merges</li>
          <li>✅ <strong>Operations:</strong> All operations O(log n) with low constant factors</li>
          <li>✅ <strong>B+ Trees:</strong> Variant with data only in leaves, better for databases</li>
          <li>✅ <strong>Applications:</strong> Databases, file systems, large-scale storage</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Confusing Order and Degree:</strong> Order m means max m children, min degree t = ⌈m/2⌉</li>
          <li>❌ <strong>Wrong Split Logic:</strong> Must promote middle key correctly when splitting</li>
          <li>❌ <strong>Not Handling Root Split:</strong> Root split creates new root with single key</li>
          <li>❌ <strong>Forgetting Minimum Keys:</strong> Nodes must have at least t-1 keys (except root)</li>
          <li>❌ <strong>Mixing B-Tree and B+ Tree:</strong> Understand the differences!</li>
        </ul>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { AdaptiveQuiz } from '../components/AdaptiveQuiz';
import { ProgressTracker } from '../components/ProgressTracker';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { SpeedControls } from '../components/SpeedControls';
import { useProgress } from '../contexts/ProgressContext';
import './LinkedLists.css';

interface ListNode {
  value: number;
  next: ListNode | null;
}

export const LinkedLists: React.FC = () => {
  const { updateProgress } = useProgress();
  const [list, setList] = useState<ListNode | null>(null);
  const [highlightedNode, setHighlightedNode] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('10');

  const handleQuizResult = (correct: boolean, conceptId: string) => {
    if (correct) {
      updateProgress('linked_lists', {
        conceptsMastered: [conceptId],
      });
    }
  };

  const createNode = (value: number): ListNode => ({ value, next: null });

  const insertAtHead = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) return;
    const newNode = createNode(value);
    newNode.next = list;
    setList(newNode);
    setHighlightedNode(value);
    setTimeout(() => setHighlightedNode(null), 1000);
  };

  const insertAtTail = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) return;
    const newNode = createNode(value);
    if (!list) {
      setList(newNode);
    } else {
      let current = list;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      setList({ ...list });
    }
    setHighlightedNode(value);
    setTimeout(() => setHighlightedNode(null), 1000);
  };

  const resetList = () => {
    setList(null);
    setHighlightedNode(null);
  };

  const renderList = (): React.ReactElement[] => {
    const nodes: React.ReactElement[] = [];
    let current = list;
    let index = 0;

    while (current) {
      nodes.push(
        <React.Fragment key={index}>
          <div className={`linked-node ${highlightedNode === current.value ? 'highlight' : ''}`}>
            <div className="node-value">{current.value}</div>
            <div className="node-pointer">→</div>
          </div>
          {current.next && <div className="node-arrow">→</div>}
        </React.Fragment>
      );
      current = current.next;
      index++;
    }

    if (nodes.length === 0) {
      return [<div key="empty" className="node-null">Empty List (NULL)</div>];
    }

    nodes.push(<div key="null" className="node-null">NULL</div>);
    return nodes;
  };

  return (
    <div className="linked-lists-page">
      <div className="page-header">
        <h1>🔗 Linked Lists</h1>
        <p>Linear data structure where elements are linked using pointers - Think of it like a treasure hunt where each clue points to the next!</p>
      </div>

      <div className="content-section">
        <h2>What is a Linked List?</h2>
        <p>
          A <strong>linked list</strong> is like a chain of boxes. Each box (node) contains:
        </p>
        <ul className="explanation-list">
          <li><strong>Data:</strong> The actual value stored (like a number or string)</li>
          <li><strong>Next Pointer:</strong> A reference to the next box in the chain</li>
        </ul>
        <p>
          Unlike arrays, these boxes don't need to be next to each other in memory. They're connected by "pointers" - 
          like addresses that tell you where to find the next box.
        </p>

        <div className="interactive-demo">
          <h3>Visual Linked List Representation</h3>
          <SpeedControls />
          <div className="linked-list-visual">
            {renderList()}
          </div>
          <div className="controls">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Value"
              className="node-input"
            />
            <button onClick={insertAtHead}>Insert at Head</button>
            <button onClick={insertAtTail}>Insert at Tail</button>
            <button onClick={resetList}>Reset</button>
          </div>
          <div className="info-box">
            <strong>💡 Tip:</strong> Inserting at head is O(1) - instant! Inserting at tail requires traversing the entire list - O(n).
          </div>
        </div>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of a <strong>linked list</strong> like a scavenger hunt:
          </p>
          <ul>
            <li>Each clue (node) has information (data) and tells you where to find the next clue (pointer)</li>
            <li>You can't jump directly to clue #5 - you must follow the chain from the beginning</li>
            <li>Adding a new clue at the start is easy, but finding the last clue requires following the entire chain</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Types of Linked Lists</h2>
        
        <h3>1. Singly Linked List</h3>
        <p>Each node points only to the next node. Like a one-way street - you can only go forward.</p>
        <div className="visual-diagram">
          <div className="singly-list-demo">
            <div className="node-box">10</div> → <div className="node-box">20</div> → <div className="node-box">30</div> → NULL
          </div>
        </div>
        <pre className="code-block">{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None  # Points to next node

class LinkedList:
    def __init__(self):
        self.head = None  # First node
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        # Traverse to end
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node`}</pre>

        <h3>2. Doubly Linked List</h3>
        <p>Each node points to both next AND previous nodes. Like a two-way street - you can go forward or backward.</p>
        <div className="visual-diagram">
          <div className="doubly-list-demo">
            NULL ⇄ <div className="node-box">10</div> ⇄ <div className="node-box">20</div> ⇄ <div className="node-box">30</div> ⇄ NULL
          </div>
        </div>
        <pre className="code-block">{`class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.next = None   # Points forward
        self.prev = None   # Points backward`}</pre>

        <h3>3. Circular Linked List</h3>
        <p>The last node points back to the first node, forming a circle. Like a roundabout!</p>
        <div className="visual-diagram">
          <div className="circular-list-demo">
            <div className="node-box">10</div> → <div className="node-box">20</div> → <div className="node-box">30</div> ↻
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access by Index</td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(1)</td>
              <td>Must traverse from head to index</td>
            </tr>
            <tr>
              <td>Insert at Head</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>O(1)</td>
              <td>Just update head pointer</td>
            </tr>
            <tr>
              <td>Insert at Tail</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(1)</td>
              <td>Must traverse to find last node</td>
            </tr>
            <tr>
              <td>Delete Node</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(1)</td>
              <td>Must find node first, then update pointers</td>
            </tr>
            <tr>
              <td>Search</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>O(1)</td>
              <td>Worst case: check all nodes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Common Operations Explained</h2>
        
        <h3>1. Insert at Head (O(1))</h3>
        <p><strong>Step-by-step:</strong></p>
        <ol className="step-list">
          <li>Create a new node with the data</li>
          <li>Set new node's next pointer to current head</li>
          <li>Update head to point to new node</li>
        </ol>
        <MultiLanguageCode
          examples={{
            python: `def insert_at_head(self, data):
    new_node = Node(data)
    new_node.next = self.head  # Point to old head
    self.head = new_node        # Update head`,
            cpp: `void insertAtHead(int data) {
    Node* newNode = new Node(data);
    newNode->next = head;  // Point to old head
    head = newNode;        // Update head
}`,
            c: `void insertAtHead(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = head;  // Point to old head
    head = newNode;        // Update head
}`,
            java: `public void insertAtHead(int data) {
    Node newNode = new Node(data);
    newNode.next = head;  // Point to old head
    head = newNode;      // Update head
}`
          }}
        />

        <h3>2. Delete a Node</h3>
        <p><strong>Key insight:</strong> You need to update the previous node's next pointer!</p>
        <MultiLanguageCode
          examples={{
            python: `def delete_node(self, value):
    if not self.head:
        return
    
    # If deleting head
    if self.head.data == value:
        self.head = self.head.next
        return
    
    # Find the node to delete
    current = self.head
    while current.next and current.next.data != value:
        current = current.next
    
    # Update pointers
    if current.next:
        current.next = current.next.next`,
            cpp: `void deleteNode(int value) {
    if (!head) return;
    
    if (head->data == value) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return;
    }
    
    Node* current = head;
    while (current->next && current->next->data != value) {
        current = current->next;
    }
    
    if (current->next) {
        Node* temp = current->next;
        current->next = current->next->next;
        delete temp;
    }
}`,
            c: `void deleteNode(int value) {
    if (!head) return;
    
    if (head->data == value) {
        Node* temp = head;
        head = head->next;
        free(temp);
        return;
    }
    
    Node* current = head;
    while (current->next && current->next->data != value) {
        current = current->next;
    }
    
    if (current->next) {
        Node* temp = current->next;
        current->next = current->next->next;
        free(temp);
    }
}`,
            java: `public void deleteNode(int value) {
    if (head == null) return;
    
    if (head.data == value) {
        head = head.next;
        return;
    }
    
    Node current = head;
    while (current.next != null && current.next.data != value) {
        current = current.next;
    }
    
    if (current.next != null) {
        current.next = current.next.next;
    }
}`
          }}
        />

        <h3>3. Reverse Linked List</h3>
        <p><strong>Classic problem!</strong> Reverse the entire list in-place.</p>
        <MultiLanguageCode
          examples={{
            python: `def reverse(self):
    prev = None
    current = self.head
    
    while current:
        next_node = current.next  # Save next
        current.next = prev        # Reverse pointer
        prev = current             # Move prev forward
        current = next_node        # Move current forward
    
    self.head = prev  # New head is old tail`,
            cpp: `void reverse() {
    Node* prev = nullptr;
    Node* current = head;
    
    while (current) {
        Node* next = current->next;  // Save next
        current->next = prev;        // Reverse pointer
        prev = current;              // Move prev forward
        current = next;              // Move current forward
    }
    
    head = prev;  // New head is old tail
}`,
            c: `void reverse() {
    Node* prev = NULL;
    Node* current = head;
    
    while (current) {
        Node* next = current->next;  // Save next
        current->next = prev;        // Reverse pointer
        prev = current;              // Move prev forward
        current = next;              // Move current forward
    }
    
    head = prev;  // New head is old tail
}`,
            java: `public void reverse() {
    Node prev = null;
    Node current = head;
    
    while (current != null) {
        Node next = current.next;  // Save next
        current.next = prev;        // Reverse pointer
        prev = current;            // Move prev forward
        current = next;            // Move current forward
    }
    
    head = prev;  // New head is old tail
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <p>Practice linked list operations!</p>
        <CodePlayground
          defaultCode={`# Linked List Implementation
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return " -> ".join(elements) + " -> NULL"

# Create and use linked list
ll = LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
print(ll.display())`}
        />
      </div>

      <div className="content-section">
        <ProgressTracker topicId="linked_lists" />
      </div>

      <div className="content-section">
        <h2>🧪 Adaptive Quiz</h2>
        <p>Test your understanding! Get hints if you're stuck.</p>
        <AdaptiveQuiz
          question="1. What is the time complexity of accessing an element at index i in a linked list?"
          options={[
            {
              text: 'O(1) - Constant time',
              correct: false,
              explanation: 'That would be arrays. Linked lists don\'t have random access.',
            },
            {
              text: 'O(n) - Must traverse from head',
              correct: true,
              explanation: 'Correct! Linked lists require traversing from the head node to reach any element, giving O(n) time complexity.',
            },
            {
              text: 'O(log n) - Logarithmic time',
              correct: false,
              explanation: 'That would be for binary search trees. Linked lists are linear.',
            },
            {
              text: 'O(n²) - Quadratic time',
              correct: false,
              explanation: 'That would be extremely slow. Linked list access is O(n).',
            },
          ]}
          topicId="linked_lists"
          conceptId="linked-list-access"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="2. Why is inserting at the head of a linked list O(1)?"
          options={[
            {
              text: 'Because head is always at index 0',
              correct: false,
              explanation: 'Linked lists don\'t use indices. The advantage is about pointer updates.',
            },
            {
              text: 'Because we only need to update the head pointer, no traversal needed',
              correct: true,
              explanation: 'Correct! Inserting at head just requires creating a new node and updating the head pointer - no traversal needed, giving O(1) time.',
            },
            {
              text: 'Because linked lists are faster than arrays',
              correct: false,
              explanation: 'Linked lists aren\'t generally faster. The O(1) comes from no traversal needed.',
            },
            {
              text: 'Because we can use binary search',
              correct: false,
              explanation: 'Binary search requires sorted data and random access, which linked lists don\'t provide.',
            },
          ]}
          topicId="linked_lists"
          conceptId="linked-list-insert-head"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="3. How do you detect a cycle in a linked list?"
          options={[
            {
              text: 'Linear search through all nodes',
              correct: false,
              explanation: 'Linear search would work but is inefficient. There\'s a better algorithm.',
            },
            {
              text: "Floyd's cycle detection (two pointers - slow and fast)",
              correct: true,
              explanation: 'Correct! Floyd\'s algorithm uses two pointers moving at different speeds. If there\'s a cycle, they will eventually meet.',
            },
            {
              text: 'Binary search',
              correct: false,
              explanation: 'Binary search doesn\'t work on linked lists - they don\'t have random access.',
            },
            {
              text: 'Use a hash table',
              correct: false,
              explanation: 'Hash table would work but uses O(n) extra space. Floyd\'s algorithm uses O(1) space.',
            },
          ]}
          topicId="linked_lists"
          conceptId="cycle-detection"
          onResult={handleQuizResult}
        />
        <AdaptiveQuiz
          question="4. What is the main advantage of linked lists over arrays?"
          options={[
            {
              text: 'Faster random access',
              correct: false,
              explanation: 'Arrays have faster random access (O(1) vs O(n)).',
            },
            {
              text: 'Dynamic size and efficient insertion/deletion at head',
              correct: true,
              explanation: 'Correct! Linked lists can grow/shrink dynamically and insert/delete at head in O(1) time, unlike arrays which need O(n) for middle operations.',
            },
            {
              text: 'Better cache locality',
              correct: false,
              explanation: 'Arrays have better cache locality because elements are contiguous in memory.',
            },
            {
              text: 'Lower memory overhead',
              correct: false,
              explanation: 'Linked lists actually have higher overhead due to storing pointers.',
            },
          ]}
          topicId="linked_lists"
          conceptId="linked-list-advantages"
          onResult={handleQuizResult}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Dynamic Size:</strong> Linked lists can grow/shrink without pre-allocation</li>
          <li>✅ <strong>O(1) Head Operations:</strong> Insert/delete at head is instant - no shifting needed!</li>
          <li>✅ <strong>No Random Access:</strong> Must traverse from head to access any node</li>
          <li>✅ <strong>Memory Efficient:</strong> Only use memory for nodes that exist</li>
          <li>✅ <strong>Pointer Management:</strong> Always update pointers correctly to avoid losing nodes</li>
          <li>✅ <strong>Use Cases:</strong> When you need frequent insertions/deletions, especially at the beginning</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Forgetting to Update Pointers:</strong> When deleting, always update the previous node's next pointer, or you'll lose the connection!</li>
          <li>❌ <strong>Null Pointer Errors:</strong> Always check if list is empty (head == None) before operations</li>
          <li>❌ <strong>Losing Head Reference:</strong> When inserting at head, update head AFTER setting new node's next, not before</li>
          <li>❌ <strong>Off-by-One in Traversal:</strong> Be careful with loop conditions - current vs current.next matters!</li>
          <li>❌ <strong>Memory Leaks (C/C++):</strong> Don't forget to free memory when deleting nodes</li>
          <li>❌ <strong>Modifying While Iterating:</strong> Be careful when modifying list structure during traversal</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>🎯 Real-World Applications</h2>
        <div className="applications-grid">
          <div className="app-card">
            <strong>📱 Music Playlists</strong>
            <p>Next/Previous song navigation uses linked lists</p>
          </div>
          <div className="app-card">
            <strong>🌐 Browser History</strong>
            <p>Back/Forward buttons use doubly linked lists</p>
          </div>
          <div className="app-card">
            <strong>📝 Undo/Redo</strong>
            <p>Text editors use linked lists for command history</p>
          </div>
          <div className="app-card">
            <strong>🗂️ File Systems</strong>
            <p>Directory structures can be represented as linked lists</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>🔍 Common Interview Problems</h2>
        <ol className="problem-list">
          <li><strong>Reverse Linked List:</strong> Classic problem - reverse in-place</li>
          <li><strong>Merge Two Sorted Lists:</strong> Combine two sorted linked lists</li>
          <li><strong>Detect Cycle:</strong> Use Floyd's algorithm (tortoise and hare)</li>
          <li><strong>Find Middle Node:</strong> Use two pointers - one moves twice as fast</li>
          <li><strong>Remove Nth Node from End:</strong> Two-pass or one-pass with two pointers</li>
          <li><strong>Intersection of Two Lists:</strong> Find where two lists meet</li>
        </ol>
      </div>
    </div>
  );
};


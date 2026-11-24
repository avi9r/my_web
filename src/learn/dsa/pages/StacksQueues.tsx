import React, { useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { Quiz } from '../components/Quiz';
import './StacksQueues.css';

export const StacksQueues: React.FC = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [stackInput, setStackInput] = useState('10');
  const [queueInput, setQueueInput] = useState('10');

  const pushToStack = () => {
    const value = parseInt(stackInput);
    if (!isNaN(value)) {
      setStack([...stack, value]);
      setStackInput('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    }
  };

  const enqueue = () => {
    const value = parseInt(queueInput);
    if (!isNaN(value)) {
      setQueue([...queue, value]);
      setQueueInput('');
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };

  return (
    <div className="stacks-queues-page">
      <div className="page-header">
        <h1>📚 Stacks & Queues</h1>
        <p>LIFO and FIFO data structures - Think of a stack like a stack of plates, and a queue like a line at a store!</p>
      </div>

      <div className="content-section">
        <h2>What is a Stack?</h2>
        <p>
          A <strong>stack</strong> is a LIFO (Last In, First Out) data structure. Imagine a stack of plates:
        </p>
        <ul className="explanation-list">
          <li>You add plates to the <strong>top</strong> (push)</li>
          <li>You remove plates from the <strong>top</strong> (pop)</li>
          <li>The last plate you put on is the first one you take off</li>
        </ul>

        <div className="analogy-box">
          <h3>🎯 Real-World Examples</h3>
          <ul>
            <li><strong>Browser Back Button:</strong> Each page you visit is "pushed" onto a stack. When you hit back, you "pop" the last page.</li>
            <li><strong>Undo/Redo:</strong> Text editors use stacks to undo operations in reverse order.</li>
            <li><strong>Function Calls:</strong> When functions call other functions, the call stack tracks them.</li>
            <li><strong>Expression Evaluation:</strong> Stacks help evaluate mathematical expressions.</li>
          </ul>
        </div>

        <div className="interactive-demo">
          <h3>Visual Stack Representation</h3>
          <div className="stack-visual">
            {stack.length === 0 ? (
              <div className="empty-structure">Stack is Empty</div>
            ) : (
              stack.slice().reverse().map((value, index) => (
                <div key={index} className="stack-item">
                  {value}
                  {index === 0 && <span className="top-label">TOP</span>}
                </div>
              ))
            )}
          </div>
          <div className="controls">
            <input
              type="number"
              value={stackInput}
              onChange={(e) => setStackInput(e.target.value)}
              placeholder="Value"
              className="structure-input"
            />
            <button onClick={pushToStack}>Push (Add to Top)</button>
            <button onClick={popFromStack}>Pop (Remove from Top)</button>
            <button onClick={() => setStack([])}>Clear</button>
          </div>
          <div className="info-box">
            <strong>💡 Key Operations:</strong> Push (O(1)), Pop (O(1)), Peek/Top (O(1))
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>What is a Queue?</h2>
        <p>
          A <strong>queue</strong> is a FIFO (First In, First Out) data structure. Imagine a line at a store:
        </p>
        <ul className="explanation-list">
          <li>People join at the <strong>back</strong> (enqueue)</li>
          <li>People leave from the <strong>front</strong> (dequeue)</li>
          <li>The first person in line is the first one served</li>
        </ul>

        <div className="analogy-box">
          <h3>🎯 Real-World Examples</h3>
          <ul>
            <li><strong>Print Queue:</strong> Documents wait in line to be printed - first submitted, first printed.</li>
            <li><strong>Task Scheduling:</strong> Operating systems use queues to schedule processes fairly.</li>
            <li><strong>Breadth-First Search:</strong> BFS algorithm uses queues to explore level by level.</li>
            <li><strong>Message Queues:</strong> Systems use queues to handle messages in order.</li>
          </ul>
        </div>

        <div className="interactive-demo">
          <h3>Visual Queue Representation</h3>
          <div className="queue-visual">
            {queue.length === 0 ? (
              <div className="empty-structure">Queue is Empty</div>
            ) : (
              <>
                <div className="queue-label front">FRONT</div>
                {queue.map((value, index) => (
                  <div key={index} className="queue-item">
                    {value}
                  </div>
                ))}
                <div className="queue-label back">BACK</div>
              </>
            )}
          </div>
          <div className="controls">
            <input
              type="number"
              value={queueInput}
              onChange={(e) => setQueueInput(e.target.value)}
              placeholder="Value"
              className="structure-input"
            />
            <button onClick={enqueue}>Enqueue (Add to Back)</button>
            <button onClick={dequeue}>Dequeue (Remove from Front)</button>
            <button onClick={() => setQueue([])}>Clear</button>
          </div>
          <div className="info-box">
            <strong>💡 Key Operations:</strong> Enqueue (O(1)), Dequeue (O(1)), Front/Peek (O(1))
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Stack Implementation</h2>
        <MultiLanguageCode
          examples={{
            python: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add item to top of stack - O(1)"""
        self.items.append(item)
    
    def pop(self):
        """Remove and return top item - O(1)"""
        if self.is_empty():
            return None
        return self.items.pop()
    
    def peek(self):
        """Return top item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        """Check if stack is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Return number of items - O(1)"""
        return len(self.items)

# Usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.pop())  # Output: 30 (last in, first out)`,
            cpp: `#include <vector>
#include <stdexcept>

class Stack {
private:
    std::vector<int> items;
    
public:
    void push(int item) {
        items.push_back(item);  // O(1)
    }
    
    int pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        int item = items.back();
        items.pop_back();  // O(1)
        return item;
    }
    
    int peek() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        return items.back();  // O(1)
    }
    
    bool isEmpty() {
        return items.empty();  // O(1)
    }
    
    int size() {
        return items.size();  // O(1)
    }
};`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* items;
    int top;
    int capacity;
} Stack;

Stack* createStack(int capacity) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->items = (int*)malloc(capacity * sizeof(int));
    stack->top = -1;
    stack->capacity = capacity;
    return stack;
}

void push(Stack* stack, int item) {
    if (stack->top == stack->capacity - 1) {
        printf("Stack overflow\\n");
        return;
    }
    stack->items[++stack->top] = item;  // O(1)
}

int pop(Stack* stack) {
    if (stack->top == -1) {
        printf("Stack underflow\\n");
        return -1;
    }
    return stack->items[stack->top--];  // O(1)
}

int peek(Stack* stack) {
    if (stack->top == -1) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack->items[stack->top];  // O(1)
}`,
            java: `import java.util.ArrayList;

class Stack {
    private ArrayList<Integer> items;
    
    public Stack() {
        items = new ArrayList<>();
    }
    
    public void push(int item) {
        items.add(item);  // O(1)
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return items.remove(items.size() - 1);  // O(1)
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return items.get(items.size() - 1);  // O(1)
    }
    
    public boolean isEmpty() {
        return items.isEmpty();  // O(1)
    }
    
    public int size() {
        return items.size();  // O(1)
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Queue Implementation</h2>
        <pre className="code-block">{`class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        """Add item to back of queue - O(1)"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove and return front item - O(n) with list, O(1) with deque"""
        if self.is_empty():
            return None
        return self.items.pop(0)  # Remove from front
    
    def front(self):
        """Return front item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[0]
    
    def is_empty(self):
        """Check if queue is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Return number of items - O(1)"""
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(queue.dequeue())  # Output: 10 (first in, first out)`}</pre>
        <div className="warning-box">
          <strong>⚠️ Performance Note:</strong> Using list.pop(0) is O(n) because all elements shift. 
          For O(1) dequeue, use <code>collections.deque</code> in Python!
        </div>
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Stack</th>
              <th>Queue (List)</th>
              <th>Queue (Deque)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Push/Enqueue</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>Add to end</td>
            </tr>
            <tr>
              <td>Pop/Dequeue</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>List shifts elements</td>
            </tr>
            <tr>
              <td>Peek/Front</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td>Just access element</td>
            </tr>
            <tr>
              <td>Search</td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td><span className="badge badge-medium">O(n)</span></td>
              <td>Must check all elements</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Common Applications</h2>
        
        <h3>Stack Applications</h3>
        <ol className="step-list">
          <li><strong>Expression Evaluation:</strong> Convert infix to postfix, evaluate expressions</li>
          <li><strong>Balanced Parentheses:</strong> Check if parentheses are balanced</li>
          <li><strong>Function Call Stack:</strong> Track function calls and returns</li>
          <li><strong>Backtracking:</strong> Store state for backtracking algorithms</li>
          <li><strong>Undo/Redo:</strong> Implement undo functionality</li>
        </ol>

        <h3>Queue Applications</h3>
        <ol className="step-list">
          <li><strong>BFS (Breadth-First Search):</strong> Explore graph level by level</li>
          <li><strong>Task Scheduling:</strong> Process tasks in order</li>
          <li><strong>Print Queue:</strong> Manage print jobs</li>
          <li><strong>Message Queues:</strong> Handle messages in order</li>
          <li><strong>Level Order Traversal:</strong> Traverse trees level by level</li>
        </ol>
      </div>

      <div className="content-section">
        <h2>Classic Problems</h2>
        
        <h3>1. Valid Parentheses (Stack)</h3>
        <p>Check if parentheses are balanced: "()[]{}" is valid, "([)]" is not.</p>
        <pre className="code-block">{`def is_valid_parentheses(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in pairs:  # Closing bracket
            if not stack or stack.pop() != pairs[char]:
                return False
        else:  # Opening bracket
            stack.append(char)
    
    return len(stack) == 0

# Test
print(is_valid_parentheses("()[]{}"))  # True
print(is_valid_parentheses("([)]"))     # False`}</pre>

        <h3>2. Implement Queue using Stacks</h3>
        <p>Use two stacks to implement a queue!</p>
        <pre className="code-block">{`class QueueUsingStacks:
    def __init__(self):
        self.stack1 = []  # For enqueue
        self.stack2 = []  # For dequeue
    
    def enqueue(self, item):
        self.stack1.append(item)
    
    def dequeue(self):
        if not self.stack2:
            # Transfer all from stack1 to stack2
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop() if self.stack2 else None`}</pre>
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Stack Implementation and Usage
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop()
    
    def peek(self):
        return self.items[-1] if not self.is_empty() else None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Queue Implementation
class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)
    
    def is_empty(self):
        return len(self.items) == 0

# Test Stack
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(f"Stack size: {stack.size()}")
print(f"Popped: {stack.pop()}")  # 30
print(f"Top: {stack.peek()}")     # 20

# Test Queue
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(f"Dequeued: {queue.dequeue()}")  # 10`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Quick Quiz</h2>
        <Quiz
          question="1. What does LIFO stand for in the context of stacks?"
          options={[
            { text: 'Last In, First Out', correct: true },
            { text: 'First In, First Out', correct: false },
            { text: 'Last In, Last Out', correct: false },
            { text: 'Linear In, First Out', correct: false },
          ]}
        />
        <Quiz
          question="2. What is the time complexity of popping from a stack?"
          options={[
            { text: 'O(n)', correct: false },
            { text: 'O(1)', correct: true },
            { text: 'O(log n)', correct: false },
            { text: 'O(n²)', correct: false },
          ]}
        />
        <Quiz
          question="3. Which data structure is best for implementing a print queue?"
          options={[
            { text: 'Stack', correct: false },
            { text: 'Queue', correct: true },
            { text: 'Array', correct: false },
            { text: 'Linked List', correct: false },
          ]}
        />
        <Quiz
          question="4. What operation removes an element from the front of a queue?"
          options={[
            { text: 'Enqueue', correct: false },
            { text: 'Dequeue', correct: true },
            { text: 'Push', correct: false },
            { text: 'Pop', correct: false },
          ]}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>Stack = LIFO:</strong> Last element added is first removed (like plates)</li>
          <li>✅ <strong>Queue = FIFO:</strong> First element added is first removed (like a line)</li>
          <li>✅ <strong>O(1) Operations:</strong> Both support fast push/pop and enqueue/dequeue</li>
          <li>✅ <strong>Use Stacks for:</strong> Undo, backtracking, expression evaluation, balanced parentheses</li>
          <li>✅ <strong>Use Queues for:</strong> BFS, task scheduling, print queues, level-order traversal</li>
          <li>✅ <strong>Implementation Tip:</strong> Use <code>collections.deque</code> for O(1) queue operations in Python</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Confusing LIFO and FIFO:</strong> Remember - Stack is LIFO (Last In First Out), Queue is FIFO (First In First Out)</li>
          <li>❌ <strong>Using list.pop(0) for Queue:</strong> This is O(n)! Use deque for O(1) operations</li>
          <li>❌ <strong>Not Checking Empty:</strong> Always check if stack/queue is empty before pop/dequeue to avoid errors</li>
          <li>❌ <strong>Wrong End Operations:</strong> Stack operations are at the SAME end (top), Queue operations are at DIFFERENT ends (front/back)</li>
          <li>❌ <strong>Forgetting Stack Order:</strong> When popping from stack, you get the most recently added item, not the oldest</li>
        </ul>
      </div>
    </div>
  );
};



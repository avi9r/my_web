import React, { useState } from 'react';
import { CodePlayground } from '../components/CodePlayground';
import { MultiLanguageCode } from '../components/MultiLanguageCode';
import { Quiz } from '../components/Quiz';
import './HashTables.css';

export const HashTables: React.FC = () => {
  const [key, setKey] = useState('apple');

  const hashFunction = (key: string, size: number = 10): number => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % size;
    }
    return hash;
  };

  // Hash table operations would be implemented here
  // For demo purposes, we show the hash function visualization

  return (
    <div className="hash-tables-page">
      <div className="page-header">
        <h1>🗂️ Hash Tables</h1>
        <p>Fast key-value storage - Think of it like a library catalog where you can instantly find any book!</p>
      </div>

      <div className="content-section">
        <h2>What is a Hash Table?</h2>
        <p>
          A <strong>hash table</strong> (also called hash map) is a data structure that stores key-value pairs. 
          It uses a hash function to compute an index into an array, giving you <strong>O(1) average-time</strong> access!
        </p>

        <div className="analogy-box">
          <h3>🎯 Real-World Analogy</h3>
          <p>
            Think of a <strong>hash table</strong> like a library:
          </p>
          <ul>
            <li>Each book (value) has a unique call number (key)</li>
            <li>The hash function is like a librarian who knows exactly where to find any book</li>
            <li>Instead of searching shelf by shelf (O(n)), you go directly to the right shelf (O(1))</li>
            <li>Sometimes two books might have similar call numbers (collision), but the librarian handles it!</li>
          </ul>
        </div>

        <div className="interactive-demo">
          <h3>How Hash Function Works</h3>
          <div className="hash-demo">
            <div className="hash-input-group">
              <label>Key:</label>
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter key"
                className="hash-input"
              />
              <span className="hash-result">
                Hash Index: {key ? hashFunction(key) : '?'}
              </span>
            </div>
            <div className="hash-explanation">
              <strong>Hash Function:</strong> Sum of character codes modulo table size
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>How Hash Tables Work</h2>
        <ol className="step-list">
          <li><strong>Hash Function:</strong> Takes a key and returns an index (0 to table_size-1)</li>
          <li><strong>Insert:</strong> Hash the key to get index, store value at that index</li>
          <li><strong>Lookup:</strong> Hash the key to get index, retrieve value from that index</li>
          <li><strong>Collision Handling:</strong> When two keys hash to same index, use chaining or open addressing</li>
        </ol>

        <div className="visual-diagram">
          <h3>Hash Table Structure</h3>
          <div className="hash-table-visual">
            <div className="hash-bucket">
              <div className="bucket-index">0</div>
              <div className="bucket-items">apple → 10</div>
            </div>
            <div className="hash-bucket">
              <div className="bucket-index">1</div>
              <div className="bucket-items">banana → 20</div>
            </div>
            <div className="hash-bucket">
              <div className="bucket-index">2</div>
              <div className="bucket-items empty">Empty</div>
            </div>
            <div className="hash-bucket">
              <div className="bucket-index">3</div>
              <div className="bucket-items">cherry → 30</div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Hash Function Examples</h2>
        <MultiLanguageCode
          examples={{
            python: `# Simple hash function (sum of character codes)
def simple_hash(key, table_size):
    hash_value = 0
    for char in key:
        hash_value += ord(char)  # ASCII value
    return hash_value % table_size

# Better hash function (polynomial rolling hash)
def polynomial_hash(key, table_size):
    hash_value = 0
    p = 31  # Prime number
    for char in key:
        hash_value = (hash_value * p + ord(char)) % table_size
    return hash_value

# Test
print(simple_hash("apple", 10))      # Example: 5
print(simple_hash("banana", 10))     # Example: 1
print(polynomial_hash("apple", 10))  # Better distribution`,
            cpp: `#include <string>
#include <iostream>

// Simple hash function (sum of character codes)
int simpleHash(const std::string& key, int tableSize) {
    int hashValue = 0;
    for (char c : key) {
        hashValue += c;  // ASCII value
    }
    return hashValue % tableSize;
}

// Polynomial rolling hash
int polynomialHash(const std::string& key, int tableSize) {
    long long hashValue = 0;
    const int p = 31;  // Prime number
    for (char c : key) {
        hashValue = (hashValue * p + c) % tableSize;
    }
    return (int)hashValue;
}

// Test
std::cout << simpleHash("apple", 10) << std::endl;      // Example: 5
std::cout << simpleHash("banana", 10) << std::endl;     // Example: 1
std::cout << polynomialHash("apple", 10) << std::endl;  // Better distribution`,
            c: `#include <stdio.h>

// Simple hash function (sum of character codes)
int simple_hash(const char* key, int table_size) {
    int hash_value = 0;
    for (int i = 0; key[i] != '\0'; i++) {
        hash_value += key[i];  // ASCII value
    }
    return hash_value % table_size;
}

// Polynomial rolling hash
int polynomial_hash(const char* key, int table_size) {
    long long hash_value = 0;
    const int p = 31;  // Prime number
    for (int i = 0; key[i] != '\0'; i++) {
        hash_value = (hash_value * p + key[i]) % table_size;
    }
    return (int)hash_value;
}

// Test
printf("%d\\n", simple_hash("apple", 10));       // Example: 5
printf("%d\\n", simple_hash("banana", 10));      // Example: 1
printf("%d\\n", polynomial_hash("apple", 10));   // Better distribution`,
            java: `public class HashFunctions {
    // Simple hash function (sum of character codes)
    public static int simpleHash(String key, int tableSize) {
        int hashValue = 0;
        for (char c : key.toCharArray()) {
            hashValue += c;  // ASCII value
        }
        return hashValue % tableSize;
    }

    // Polynomial rolling hash
    public static int polynomialHash(String key, int tableSize) {
        long hashValue = 0;
        int p = 31;  // Prime number
        for (char c : key.toCharArray()) {
            hashValue = (hashValue * p + c) % tableSize;
        }
        return (int)hashValue;
    }

    public static void main(String[] args) {
        System.out.println(simpleHash("apple", 10));      // Example: 5
        System.out.println(simpleHash("banana", 10));     // Example: 1
        System.out.println(polynomialHash("apple", 10));  // Better distribution
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Collision Resolution</h2>
        
        <h3>1. Chaining (Separate Chaining)</h3>
        <p>Each bucket contains a linked list of entries with the same hash.</p>
        <div className="visual-diagram">
          <div className="chaining-demo">
            Index 0: [apple→10] → [apricot→15] → NULL<br />
            Index 1: [banana→20] → NULL<br />
            Index 2: NULL<br />
            Index 3: [cherry→30] → NULL
          </div>
        </div>
        <MultiLanguageCode
          examples={{
            python: `class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]  # List of lists
    
    def _hash(self, key):
        return sum(ord(c) for c in key) % self.size
    
    def insert(self, key, value):
        index = self._hash(key)
        # Check if key already exists
        for pair in self.table[index]:
            if pair[0] == key:
                pair[1] = value  # Update
                return
        self.table[index].append([key, value])  # Add new
    
    def get(self, key):
        index = self._hash(key)
        for pair in self.table[index]:
            if pair[0] == key:
                return pair[1]
        return None`,
            cpp: `#include <vector>
#include <list>
#include <string>

class HashTable {
private:
    int size;
    std::vector<std::list<std::pair<std::string, int>>> table;
    
    int hash(const std::string& key) {
        int hashValue = 0;
        for (char c : key) {
            hashValue += c;
        }
        return hashValue % size;
    }
    
public:
    HashTable(int size = 10) : size(size) {
        table.resize(size);
    }
    
    void insert(const std::string& key, int value) {
        int index = hash(key);
        for (auto& pair : table[index]) {
            if (pair.first == key) {
                pair.second = value;  // Update
                return;
            }
        }
        table[index].push_back({key, value});  // Add new
    }
    
    int get(const std::string& key) {
        int index = hash(key);
        for (const auto& pair : table[index]) {
            if (pair.first == key) {
                return pair.second;
            }
        }
        return -1;  // Not found
    }
};`,
            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

typedef struct Node {
    char* key;
    int value;
    struct Node* next;
} Node;

typedef struct {
    Node* buckets[TABLE_SIZE];
} HashTable;

int hash(const char* key) {
    int hashValue = 0;
    for (int i = 0; key[i] != '\\0'; i++) {
        hashValue += key[i];
    }
    return hashValue % TABLE_SIZE;
}

void insert(HashTable* ht, const char* key, int value) {
    int index = hash(key);
    Node* current = ht->buckets[index];
    
    while (current) {
        if (strcmp(current->key, key) == 0) {
            current->value = value;  // Update
            return;
        }
        current = current->next;
    }
    
    // Add new
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = strdup(key);
    newNode->value = value;
    newNode->next = ht->buckets[index];
    ht->buckets[index] = newNode;
}

int get(HashTable* ht, const char* key) {
    int index = hash(key);
    Node* current = ht->buckets[index];
    
    while (current) {
        if (strcmp(current->key, key) == 0) {
            return current->value;
        }
        current = current->next;
    }
    return -1;  // Not found
}`,
            java: `import java.util.ArrayList;
import java.util.LinkedList;

class HashTable {
    private int size;
    private ArrayList<LinkedList<Pair>> table;
    
    private class Pair {
        String key;
        int value;
        Pair(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private int hash(String key) {
        int hashValue = 0;
        for (char c : key.toCharArray()) {
            hashValue += c;
        }
        return hashValue % size;
    }
    
    public HashTable(int size) {
        this.size = size;
        table = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            table.add(new LinkedList<>());
        }
    }
    
    public void insert(String key, int value) {
        int index = hash(key);
        for (Pair pair : table.get(index)) {
            if (pair.key.equals(key)) {
                pair.value = value;  // Update
                return;
            }
        }
        table.get(index).add(new Pair(key, value));  // Add new
    }
    
    public int get(String key) {
        int index = hash(key);
        for (Pair pair : table.get(index)) {
            if (pair.key.equals(key)) {
                return pair.value;
            }
        }
        return -1;  // Not found
    }
}`
          }}
        />

        <h3>2. Open Addressing</h3>
        <p>When collision occurs, find next available slot using probing (linear, quadratic, or double hashing).</p>
        <MultiLanguageCode
          examples={{
            python: `# Linear Probing
def linear_probe(table, key, value):
    index = hash(key) % len(table)
    while table[index] is not None:
        if table[index][0] == key:
            table[index][1] = value  # Update
            return
        index = (index + 1) % len(table)  # Next slot
    table[index] = [key, value]  # Insert`,
            cpp: `#include <vector>
#include <string>

void linearProbe(std::vector<std::pair<std::string, int>*>& table,
                 const std::string& key, int value) {
    int index = std::hash<std::string>{}(key) % table.size();
    while (table[index] != nullptr) {
        if (table[index]->first == key) {
            table[index]->second = value;  // Update
            return;
        }
        index = (index + 1) % table.size();  // Next slot
    }
    table[index] = new std::pair<std::string, int>(key, value);  // Insert
}`,
            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Entry {
    char* key;
    int value;
} Entry;

void linear_probe(Entry** table, int size, const char* key, int value) {
    int index = abs((int)key[0]) % size;  // Simplified hash
    while (table[index] != NULL) {
        if (strcmp(table[index]->key, key) == 0) {
            table[index]->value = value;  // Update
            return;
        }
        index = (index + 1) % size;  // Next slot
    }
    table[index] = (Entry*)malloc(sizeof(Entry));
    table[index]->key = strdup(key);
    table[index]->value = value;  // Insert
}`,
            java: `import java.util.Arrays;

public class LinearProbing {
    private static class Entry {
        String key;
        int value;
        Entry(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    public void linearProbe(Entry[] table, String key, int value) {
        int index = Math.abs(key.hashCode()) % table.length;
        while (table[index] != null) {
            if (table[index].key.equals(key)) {
                table[index].value = value;  // Update
                return;
            }
            index = (index + 1) % table.length;  // Next slot
        }
        table[index] = new Entry(key, value);  // Insert
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>Time & Space Complexity</h2>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Average</th>
              <th>Worst Case</th>
              <th>Space</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insert</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(n)</td>
              <td>Worst case: all keys hash to same index</td>
            </tr>
            <tr>
              <td>Search</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(n)</td>
              <td>Average is O(1) with good hash function</td>
            </tr>
            <tr>
              <td>Delete</td>
              <td><span className="badge badge-good">O(1)</span></td>
              <td><span className="badge badge-bad">O(n)</span></td>
              <td>O(n)</td>
              <td>Similar to search</td>
            </tr>
          </tbody>
        </table>
        <div className="info-box">
          <strong>💡 Key Insight:</strong> With a good hash function and load factor &lt; 0.7, operations are O(1) on average!
        </div>
      </div>

      <div className="content-section">
        <h2>Load Factor & Rehashing</h2>
        <p>
          <strong>Load Factor = Number of elements / Table size</strong>
        </p>
        <ul className="explanation-list">
          <li>When load factor exceeds threshold (typically 0.7), table is too full</li>
          <li><strong>Rehashing:</strong> Create larger table, rehash all elements</li>
          <li>This keeps operations efficient (O(1) average)</li>
        </ul>
        <MultiLanguageCode
          examples={{
            python: `def rehash(old_table):
    new_size = len(old_table) * 2
    new_table = [[] for _ in range(new_size)]
    
    # Rehash all elements
    for bucket in old_table:
        for key, value in bucket:
            new_index = hash(key) % new_size
            new_table[new_index].append([key, value])
    
    return new_table`,
            cpp: `#include <vector>
#include <utility>

std::vector<std::vector<std::pair<std::string, int>>> rehash(
    const std::vector<std::vector<std::pair<std::string, int>>>& oldTable) {
    int newSize = oldTable.size() * 2;
    std::vector<std::vector<std::pair<std::string, int>>> newTable(newSize);
    
    for (const auto& bucket : oldTable) {
        for (const auto& [key, value] : bucket) {
            int newIndex = std::hash<std::string>{}(key) % newSize;
            newTable[newIndex].push_back({key, value});
        }
    }
    return newTable;
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Entry {
    char* key;
    int value;
    struct Entry* next;
} Entry;

Entry** rehash(Entry** old_table, int old_size) {
    int new_size = old_size * 2;
    Entry** new_table = (Entry**)calloc(new_size, sizeof(Entry*));
    
    for (int i = 0; i < old_size; i++) {
        Entry* current = old_table[i];
        while (current) {
            int new_index = abs((int)current->key[0]) % new_size;
            Entry* next = current->next;
            current->next = new_table[new_index];
            new_table[new_index] = current;
            current = next;
        }
    }
    return new_table;
}`,
            java: `import java.util.*;

public class Rehashing {
    public List<List<Entry>> rehash(List<List<Entry>> oldTable) {
        int newSize = oldTable.size() * 2;
        List<List<Entry>> newTable = new ArrayList<>(Collections.nCopies(newSize, null));
        for (int i = 0; i < newSize; i++) {
            newTable.set(i, new ArrayList<>());
        }
        for (List<Entry> bucket : oldTable) {
            for (Entry entry : bucket) {
                int newIndex = Math.abs(entry.key.hashCode()) % newSize;
                newTable.get(newIndex).add(entry);
            }
        }
        return newTable;
    }
    
    private static class Entry {
        String key;
        int value;
        Entry(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }
}`
          }}
        />
      </div>

      <div className="content-section">
        <h2>💻 Code Playground</h2>
        <CodePlayground
          defaultCode={`# Hash Table Implementation
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return sum(ord(c) for c in str(key)) % self.size
    
    def insert(self, key, value):
        index = self._hash(key)
        # Check if key exists
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        self.table[index].append((key, value))
    
    def get(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None
    
    def delete(self, key):
        index = self._hash(key)
        self.table[index] = [(k, v) for k, v in self.table[index] if k != key]

# Usage
ht = HashTable()
ht.insert("apple", 10)
ht.insert("banana", 20)
ht.insert("cherry", 30)

print(f"apple: {ht.get('apple')}")      # 10
print(f"banana: {ht.get('banana')}")    # 20
print(f"grape: {ht.get('grape')}")      # None`}
        />
      </div>

      <div className="content-section">
        <h2>🧪 Quick Quiz</h2>
        <Quiz
          question="1. What is the average time complexity of hash table operations (insert, search, delete)?"
          options={[
            { text: 'O(n)', correct: false },
            { text: 'O(1)', correct: true },
            { text: 'O(log n)', correct: false },
            { text: 'O(n²)', correct: false },
          ]}
        />
        <Quiz
          question="2. What happens when two different keys hash to the same index?"
          options={[
            { text: 'The second key overwrites the first', correct: false },
            { text: 'A collision occurs and must be resolved', correct: true },
            { text: 'The hash table automatically resizes', correct: false },
            { text: 'An error is thrown', correct: false },
          ]}
        />
        <Quiz
          question="3. What is the best load factor threshold for hash tables?"
          options={[
            { text: '0.3', correct: false },
            { text: '0.7', correct: true },
            { text: '1.0', correct: false },
            { text: '2.0', correct: false },
          ]}
        />
        <Quiz
          question="4. Which collision resolution method uses linked lists?"
          options={[
            { text: 'Linear probing', correct: false },
            { text: 'Chaining (separate chaining)', correct: true },
            { text: 'Quadratic probing', correct: false },
            { text: 'Double hashing', correct: false },
          ]}
        />
      </div>

      <div className="content-section key-takeaways">
        <h2>💡 Key Takeaways</h2>
        <ul>
          <li>✅ <strong>O(1) Average Operations:</strong> Hash tables provide constant-time operations on average</li>
          <li>✅ <strong>Hash Function is Critical:</strong> Good hash function distributes keys evenly to avoid collisions</li>
          <li>✅ <strong>Collision Handling:</strong> Use chaining or open addressing to handle collisions</li>
          <li>✅ <strong>Load Factor Matters:</strong> Keep load factor below 0.7 for optimal performance</li>
          <li>✅ <strong>Perfect for Key-Value Storage:</strong> Ideal for dictionaries, caches, symbol tables</li>
          <li>✅ <strong>Trade-off:</strong> Fast access but uses more memory than arrays</li>
        </ul>
      </div>

      <div className="content-section common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <ul>
          <li>❌ <strong>Poor Hash Function:</strong> Bad hash function causes many collisions, degrading to O(n) performance</li>
          <li>❌ <strong>Ignoring Load Factor:</strong> Not rehashing when load factor is high leads to poor performance</li>
          <li>❌ <strong>Mutable Keys:</strong> Don't use mutable objects as keys - if key changes, you can't find the value!</li>
          <li>❌ <strong>Assuming O(1) Always:</strong> Worst case is O(n) - understand when this happens</li>
          <li>❌ <strong>Not Handling Collisions:</strong> Must implement collision resolution, can't just overwrite</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>🎯 Real-World Applications</h2>
        <div className="applications-grid">
          <div className="app-card">
            <strong>📚 Dictionaries</strong>
            <p>Python dict, JavaScript Map - fast key-value lookups</p>
          </div>
          <div className="app-card">
            <strong>💾 Caching</strong>
            <p>LRU cache, browser cache - store frequently accessed data</p>
          </div>
          <div className="app-card">
            <strong>🔍 Database Indexing</strong>
            <p>Fast lookups in databases using hash indexes</p>
          </div>
          <div className="app-card">
            <strong>🌐 URL Shorteners</strong>
            <p>Map short URLs to long URLs instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};


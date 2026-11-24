import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { AnimationProvider } from './contexts/AnimationContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Arrays } from './pages/Arrays';
import { LinkedLists } from './pages/LinkedLists';
import { StacksQueues } from './pages/StacksQueues';
import { HashTables } from './pages/HashTables';
import { Trees } from './pages/Trees';
import { Sorting } from './pages/Sorting';
import { Searching } from './pages/Searching';
import { DynamicProgramming } from './pages/DynamicProgramming';
import { Greedy } from './pages/Greedy';
import { Backtracking } from './pages/Backtracking';
import { Graphs } from './pages/Graphs';
import './App.css';

import { HeapsPriority } from './pages/HeapsPriority';
import { MST } from './pages/MST';
import { ShortestPaths } from './pages/ShortestPaths';
import { StringMatching } from './pages/StringMatching';
import { MaxFlow } from './pages/MaxFlow';
import { RBTrees } from './pages/RBTrees';
import { BTrees } from './pages/BTrees';

function App() {
  return (
    <DarkModeProvider>
      <AnimationProvider>
        <ProgressProvider>
          <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/linked-lists" element={<LinkedLists />} />
              <Route path="/stacks-queues" element={<StacksQueues />} />
              <Route path="/hash-tables" element={<HashTables />} />
              <Route path="/trees" element={<Trees />} />
              <Route path="/graphs" element={<Graphs />} />
              <Route path="/sorting" element={<Sorting />} />
              <Route path="/searching" element={<Searching />} />
              <Route path="/dynamic-programming" element={<DynamicProgramming />} />
              <Route path="/greedy" element={<Greedy />} />
              <Route path="/backtracking" element={<Backtracking />} />
              <Route path="/rb-trees" element={<RBTrees />} />
              <Route path="/b-trees" element={<BTrees />} />
              <Route path="/heaps-priority" element={<HeapsPriority />} />
              <Route path="/mst" element={<MST />} />
              <Route path="/shortest-paths" element={<ShortestPaths />} />
              <Route path="/string-matching" element={<StringMatching />} />
              <Route path="/max-flow" element={<MaxFlow />} />
            </Routes>
          </Layout>
        </Router>
        </ProgressProvider>
      </AnimationProvider>
    </DarkModeProvider>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import './ConceptGraph.css';

interface ConceptNode {
  id: string;
  label: string;
  path: string;
  prerequisites?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const concepts: ConceptNode[] = [
  { id: 'arrays', label: 'Arrays', path: '/learn/dsa/arrays', difficulty: 'beginner' },
  { id: 'linked-lists', label: 'Linked Lists', path: '/learn/dsa/linked-lists', prerequisites: ['arrays'], difficulty: 'beginner' },
  { id: 'stacks-queues', label: 'Stacks & Queues', path: '/learn/dsa/stacks-queues', prerequisites: ['arrays', 'linked-lists'], difficulty: 'beginner' },
  { id: 'hash-tables', label: 'Hash Tables', path: '/learn/dsa/hash-tables', prerequisites: ['arrays'], difficulty: 'intermediate' },
  { id: 'trees', label: 'Trees', path: '/learn/dsa/trees', prerequisites: ['linked-lists'], difficulty: 'intermediate' },
  { id: 'graphs', label: 'Graphs', path: '/learn/dsa/graphs', prerequisites: ['trees'], difficulty: 'advanced' },
  { id: 'sorting', label: 'Sorting', path: '/learn/dsa/sorting', prerequisites: ['arrays'], difficulty: 'intermediate' },
  { id: 'searching', label: 'Searching', path: '/learn/dsa/searching', prerequisites: ['arrays'], difficulty: 'beginner' },
  { id: 'dynamic-programming', label: 'Dynamic Programming', path: '/learn/dsa/dynamic-programming', prerequisites: ['arrays', 'sorting'], difficulty: 'advanced' },
  { id: 'greedy', label: 'Greedy', path: '/learn/dsa/greedy', prerequisites: ['sorting'], difficulty: 'intermediate' },
  { id: 'backtracking', label: 'Backtracking', path: '/learn/dsa/backtracking', prerequisites: ['graphs'], difficulty: 'advanced' },
];

export const ConceptGraph: React.FC = () => {
  const { getTopicProgress } = useProgress();

  const getNodeStatus = (nodeId: string) => {
    const progress = getTopicProgress(nodeId);
    if (progress?.completed) return 'completed';
    if (progress) return 'in-progress';
    return 'not-started';
  };

  const canAccess = (node: ConceptNode) => {
    if (!node.prerequisites || node.prerequisites.length === 0) return true;
    return node.prerequisites.every((prereq) => {
      const prereqProgress = getTopicProgress(prereq);
      return prereqProgress?.completed;
    });
  };

  return (
    <div className="concept-graph">
      <h2>🗺️ Learning Path</h2>
      <p>Follow the recommended path to master DSA. Complete prerequisites to unlock advanced topics!</p>
      
      <div className="graph-container">
        {concepts.map((concept) => {
          const status = getNodeStatus(concept.id);
          const accessible = canAccess(concept);
          
          return (
            <div key={concept.id} className={`concept-node ${status} ${accessible ? 'accessible' : 'locked'} difficulty-${concept.difficulty}`}>
              <Link to={concept.path} className={accessible ? '' : 'disabled-link'}>
                <div className="node-content">
                  <div className="node-label">{concept.label}</div>
                  <div className="node-status">
                    {status === 'completed' && '✓'}
                    {status === 'in-progress' && '◐'}
                    {!accessible && '🔒'}
                  </div>
                  <div className="node-difficulty">{concept.difficulty}</div>
                </div>
              </Link>
              {concept.prerequisites && concept.prerequisites.length > 0 && (
                <div className="prerequisites">
                  <small>Requires: {concept.prerequisites.join(', ')}</small>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="graph-legend">
        <div className="legend-item">
          <span className="legend-color completed"></span>
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-color in-progress"></span>
          <span>In Progress</span>
        </div>
        <div className="legend-item">
          <span className="legend-color not-started"></span>
          <span>Not Started</span>
        </div>
        <div className="legend-item">
          <span className="legend-color locked"></span>
          <span>Locked (Complete Prerequisites)</span>
        </div>
      </div>
    </div>
  );
};


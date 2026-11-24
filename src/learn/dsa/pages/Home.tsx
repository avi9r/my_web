import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../utils/navigation';
import { ConceptGraph } from '../components/ConceptGraph';
import './Home.css';

export const Home: React.FC = () => {
  const topics = navigationItems.filter((item) => item.section !== 'main');

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>🚀 Master Data Structures & Algorithms</h1>
        <p>Interactive visual learning platform with comprehensive examples and practice problems</p>
        <Link to="/learn/dsa/arrays" className="cta-button">
          Start Learning →
        </Link>
      </div>

      <div className="content-section">
        <ConceptGraph />
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <Link key={topic.path} to={topic.path} className="topic-card">
            <span className="topic-card-icon">{topic.icon}</span>
            <h3>{topic.label}</h3>
            <p>
              {topic.section === 'data-structures' && 'Learn fundamental data structures with interactive visualizations'}
              {topic.section === 'algorithms' && 'Master essential algorithms with step-by-step explanations'}
              {topic.section === 'clrs' && 'Advanced algorithms from Introduction to Algorithms (CLRS)'}
            </p>
            <span className="feature-badge">
              {topic.section === 'data-structures' && 'Data Structure'}
              {topic.section === 'algorithms' && 'Algorithm'}
              {topic.section === 'clrs' && 'CLRS'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};



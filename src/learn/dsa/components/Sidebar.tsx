import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, getSectionTitle } from '../utils/navigation';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = ['main', 'data-structures', 'algorithms', 'clrs'] as const;

  return (
    <>
      {isMobile && (
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}
      {isMobile && isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)} />
      )}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1>📚 DSA Master</h1>
          <p>Complete Learning Platform</p>
        </div>
        {sections.map((section) => {
          const items = navigationItems.filter(item => item.section === section);
          if (items.length === 0) return null;
          return (
            <div key={section} className="nav-section">
              <div className="nav-section-title">{getSectionTitle(section)}</div>
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-item-icon">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          );
        })}
      </nav>
    </>
  );
};


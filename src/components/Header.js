import React from 'react';
import './Header.css';

const Header = () => {
  const topLinks = [
    { name: 'Q Search', icon: '🔍' },
    { name: 'Help', icon: '❓' },
    { name: 'ProPerks', icon: '💎' },
    { name: 'Sign In', icon: '👤' }
  ];

  return (
    <header className="main-header">
      <div className="header-content">
        {/* Votre logo et navigation principale ici */}
        
        <div className="top-links">
          {topLinks.map(link => (
            <button 
              key={link.name}
              className="top-link-btn"
            >
              <span className="link-icon">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
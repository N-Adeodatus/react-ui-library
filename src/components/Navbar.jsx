import { useState } from 'react';
import Button from './Button';

export default function Navbar({ logo, links = [], className = '', actions = null, ...rest }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${className}`} {...rest}>
      <div className="container nav-content">
        <div className="nav-logo">
          {logo}
        </div>

        <nav style={{ position: 'relative' }}>
          <button 
            className="nav-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {links.map((l, i) => (
              <a 
                key={i} 
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            {actions || <Button variant="primary">Sign up</Button>}
          </div>
        </nav>
      </div>
    </header>
  );
}
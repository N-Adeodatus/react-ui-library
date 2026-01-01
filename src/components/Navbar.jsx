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

        <nav className="nav-inline">
          <button 
            className="nav-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
            <div className="nav-actions nav-actions-mobile">
              {actions || <Button variant="primary">Sign up</Button>}
            </div>
          </div>

          <div className="nav-actions nav-actions-desktop">
            {actions || <Button variant="primary">Sign up</Button>}
          </div>
        </nav>
      </div>
    </header>
  );
}
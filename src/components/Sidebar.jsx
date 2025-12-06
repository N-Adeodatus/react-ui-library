import { useState } from 'react';

export default function Sidebar({ 
  logo, 
  links = [], 
  activeLink = '',
  onLinkClick,
  className = '', 
  ...rest 
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href) => {
    if (onLinkClick) {
      onLinkClick(href);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''} ${className}`} {...rest}>
        {logo && (
          <div className="sidebar-logo">
            {logo}
          </div>
        )}

        <nav className="sidebar-nav">
          {links.map((link, i) => {
            const isActive = activeLink === link.href || activeLink === link.label;
            return (
              <a
                key={i}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.icon && <span className="sidebar-icon">{link.icon}</span>}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}


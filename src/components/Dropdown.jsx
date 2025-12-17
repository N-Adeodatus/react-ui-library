import { useState, useRef, useEffect } from 'react';

export default function Dropdown({
  trigger,
  items = [],
  position = 'bottom-left',
  onSelect,
  className = '',
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-wrapper ${className}`.trim()} ref={dropdownRef} {...rest}>
      <div
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </div>
      {isOpen && (
        <div className={`dropdown-menu dropdown-${position}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`dropdown-item ${item.disabled ? 'disabled' : ''} ${item.divider ? 'divider' : ''}`}
              onClick={() => !item.disabled && !item.divider && handleSelect(item)}
            >
              {item.icon && <span className="dropdown-item-icon">{item.icon}</span>}
              <span className="dropdown-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


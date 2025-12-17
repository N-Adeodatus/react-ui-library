import { useState } from 'react';

export default function Tooltip({
  content,
  children,
  position = 'top',
  className = '',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`tooltip-wrapper ${className}`.trim()}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...rest}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
}


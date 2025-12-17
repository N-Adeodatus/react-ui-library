import { useEffect } from 'react';

export default function Toast({
  message,
  variant = 'info',
  duration = 3000,
  onClose,
  className = '',
  ...rest
}) {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${variant} ${className}`.trim()} role="alert" {...rest}>
      <div className="toast-content">
        <span className="toast-message">{message}</span>
      </div>
      {onClose && (
        <button
          type="button"
          className="toast-close"
          onClick={onClose}
          aria-label="Close toast"
        >
          ×
        </button>
      )}
    </div>
  );
}


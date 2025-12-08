export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className = '',
  ...rest
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal ${className}`.trim()}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        {...rest}
      >
        <div className="modal-header">
          {title && <h3>{title}</h3>}
          <button className="modal-close" aria-label="Close modal" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}


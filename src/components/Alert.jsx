export default function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return (
    <div className={`alert alert-${variant} ${className}`.trim()} role="alert" {...rest}>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
}


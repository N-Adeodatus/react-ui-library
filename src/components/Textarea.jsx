export default function Textarea({
  label,
  error,
  className = '',
  rows = 4,
  ...rest
}) {
  const textareaId = rest.id || rest.name || undefined;

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`.trim()}>
      {label && (
        <label className="form-label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className="form-control form-textarea"
        {...rest}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}


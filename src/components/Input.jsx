export default function Input({
  label,
  type = 'text',
  error,
  className = '',
  ...rest
}) {
  const inputId = rest.id || rest.name || undefined;

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`.trim()}>
      {label && (
        <label className="form-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="form-control"
        {...rest}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}



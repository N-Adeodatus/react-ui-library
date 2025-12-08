export default function Select({
  label,
  placeholder = 'Select an option',
  options = [],
  error,
  className = '',
  ...rest
}) {
  const selectId = rest.id || rest.name || undefined;

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`.trim()}>
      {label && (
        <label className="form-label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="form-select-wrapper">
        <select
          id={selectId}
          className="form-control form-select"
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value ?? option.label} value={option.value ?? option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="form-select-icon">▾</span>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}


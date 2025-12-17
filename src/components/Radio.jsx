export default function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  id,
  name,
  value,
  ...rest
}) {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`radio-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()}>
      <input
        type="radio"
        id={radioId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        className="radio-input"
        {...rest}
      />
      {label && (
        <label htmlFor={radioId} className="radio-label">
          {label}
        </label>
      )}
    </div>
  );
}


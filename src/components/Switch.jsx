export default function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  id,
  name,
  ...rest
}) {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`switch-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()}>
      <input
        type="checkbox"
        id={switchId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className="switch-input"
        role="switch"
        aria-checked={checked}
        {...rest}
      />
      <label htmlFor={switchId} className="switch-label">
        <span className="switch-slider"></span>
        {label && <span className="switch-text">{label}</span>}
      </label>
    </div>
  );
}


export default function Checkbox({
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
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`checkbox-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        className="checkbox-input"
        {...rest}
      />
      {label && (
        <label htmlFor={checkboxId} className="checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
}


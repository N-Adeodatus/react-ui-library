export default function Progress({
  value = 0,
  max = 100,
  showLabel = false,
  size = 'md',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`progress-wrapper progress-${size} ${className}`.trim()} {...rest}>
      {showLabel && (
        <div className="progress-label">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={`progress-fill progress-${variant}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}


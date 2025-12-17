export default function Spinner({
  size = 'md',
  variant = 'primary',
  className = '',
  ...rest
}) {
  return (
    <div
      className={`spinner spinner-${size} spinner-${variant} ${className}`.trim()}
      role="status"
      aria-label="Loading"
      {...rest}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}


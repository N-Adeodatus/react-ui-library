export default function Badge({ 
  variant = 'default',
  children, 
  className = '', 
  ...rest 
}) {
  const variantClass = 
    variant === 'primary' ? 'badge-primary' :
    variant === 'success' ? 'badge-success' :
    variant === 'warning' ? 'badge-warning' :
    variant === 'danger' ? 'badge-danger' :
    'badge-default';

  return (
    <span className={`badge ${variantClass} ${className}`} {...rest}>
      {children}
    </span>
  );
}


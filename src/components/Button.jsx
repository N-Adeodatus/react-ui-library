export default function Button({ variant = 'primary', children, className = '', ...rest }) {
  const base = 'btn';
  const variantClass = 
    variant === 'secondary' ? 'btn-secondary' : 
    variant === 'outline' ? 'btn-outline' : 
    'btn-primary';
  
  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}
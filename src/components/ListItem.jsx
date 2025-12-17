export default function ListItem({
  children,
  onClick,
  selected = false,
  className = '',
  ...rest
}) {
  return (
    <div
      className={`list-item ${selected ? 'selected' : ''} ${onClick ? 'clickable' : ''} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e);
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
}


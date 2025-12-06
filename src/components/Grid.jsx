export default function Grid({ columns = 2, gap = 'var(--space-4)', children, className = '', style = {}, ...rest }) {
  const gridStyle = {
    display: 'grid',
    gap,
    gridTemplateColumns: typeof columns === 'number' 
      ? `repeat(${columns}, 1fr)` 
      : columns,
    ...style
  };

  return (
    <div 
      className={`ui-grid ${className}`} 
      style={gridStyle} 
      {...rest}
    >
      {children}
    </div>
  );
}
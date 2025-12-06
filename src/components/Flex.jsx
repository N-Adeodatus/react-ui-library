export default function Flex({ direction = 'row', align = 'stretch', justify = 'flex-start', gap = 'var(--space-4)', children, className = '', style = {}, ...rest }) {
  const flexStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    ...style
  };
  return (
    <div className={`ui-flex ${className}`} style={flexStyle} {...rest}>
      {children}
    </div>
  );
}
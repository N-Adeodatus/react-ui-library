export default function Container({ children, className = '', style = {}, ...rest }) {
  return (
    <div className={`container ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
}
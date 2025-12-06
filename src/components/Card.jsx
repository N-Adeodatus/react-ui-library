export default function Card({ title, description, children, className = '', style = {}, ...rest }) {
  return (
    <article className={`card ${className}`} style={style} {...rest}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </article>
  );
}
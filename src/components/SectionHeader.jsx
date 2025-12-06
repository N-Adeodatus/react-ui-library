export default function SectionHeader({ title, subtitle, className = '', ...rest }) {
  return (
    <div className={`section-header ${className}`} {...rest}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
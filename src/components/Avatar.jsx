function getInitials(text) {
  if (!text) return '';
  return text
    .trim()
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className = '',
  ...rest
}) {
  const displayInitials = initials || getInitials(alt);
  const sizeClass = ['sm', 'md', 'lg', 'xl'].includes(size) ? size : 'md';

  return (
    <div className={`avatar avatar-${sizeClass} ${className}`.trim()} {...rest}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span>{displayInitials}</span>
      )}
    </div>
  );
}



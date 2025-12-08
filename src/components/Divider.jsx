export default function Divider({ className = '', ...rest }) {
  return <hr className={`divider ${className}`.trim()} {...rest} />;
}


import Input from './Input';

export default function SearchInput({
  onSearch,
  placeholder = 'Search...',
  className = '',
  ...rest
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className={`search-input-wrapper ${className}`.trim()}>
      <Input
        type="search"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        className="search-input"
        {...rest}
      />
      <span className="search-icon" aria-hidden="true">🔍</span>
    </div>
  );
}


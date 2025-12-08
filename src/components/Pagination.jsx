const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

export default function Pagination({
  totalPages,
  currentPage = 1,
  onPageChange,
  className = '',
  ...rest
}) {
  if (!totalPages || totalPages < 1) return null;

  const pages = range(1, totalPages);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  const handleChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  return (
    <div className={`pagination ${className}`.trim()} {...rest}>
      <button
        className="page-item"
        onClick={() => handleChange(currentPage - 1)}
        disabled={isFirst}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => handleChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="page-item"
        onClick={() => handleChange(currentPage + 1)}
        disabled={isLast}
      >
        Next
      </button>
    </div>
  );
}


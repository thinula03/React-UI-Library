import type { HTMLAttributes } from 'react'
import './Pagination.css'

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  onPageChange: (page: number) => void
  page: number
  totalPages: number
}

export function Pagination({
  className = '',
  onPageChange,
  page,
  totalPages,
  ...props
}: PaginationProps) {
  const safeTotal = Math.max(totalPages, 1)
  const currentPage = Math.min(Math.max(page, 1), safeTotal)
  const classes = ['jui-pagination', className].filter(Boolean).join(' ')

  return (
    <div aria-label="Pagination" className={classes} {...props}>
      <button
        className="jui-pagination__button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
      >
        Previous
      </button>
      <span className="jui-pagination__status">
        Page {currentPage} of {safeTotal}
      </span>
      <button
        className="jui-pagination__button"
        disabled={currentPage === safeTotal}
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        Next
      </button>
    </div>
  )
}

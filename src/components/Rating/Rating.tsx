import type { HTMLAttributes } from 'react'
import './Rating.css'

export type RatingProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  max?: number
  onValueChange?: (value: number) => void
  value: number
}

export function Rating({
  className = '',
  max = 5,
  onValueChange,
  value,
  ...props
}: RatingProps) {
  const classes = ['jui-rating', className].filter(Boolean).join(' ')

  return (
    <div
      aria-label={`${value} out of ${max}`}
      className={classes}
      role={onValueChange ? 'radiogroup' : 'img'}
      {...props}
    >
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1
        const isActive = starValue <= value

        return onValueChange ? (
          <button
            aria-checked={starValue === value}
            aria-label={`${starValue} out of ${max}`}
            className={`jui-rating__star ${isActive ? 'jui-rating__star--active' : ''}`}
            key={starValue}
            onClick={() => onValueChange(starValue)}
            role="radio"
            type="button"
          >
            ★
          </button>
        ) : (
          <span
            aria-hidden="true"
            className={`jui-rating__star ${isActive ? 'jui-rating__star--active' : ''}`}
            key={starValue}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}

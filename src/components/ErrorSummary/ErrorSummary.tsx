import type { ReactNode } from 'react'
import './ErrorSummary.css'

export type ErrorSummaryItem = {
  href?: string
  message: ReactNode
}

export type ErrorSummaryProps = {
  errors: ErrorSummaryItem[]
  title?: ReactNode
}

export function ErrorSummary({
  errors,
  title = 'There is a problem',
}: ErrorSummaryProps) {
  if (errors.length === 0) {
    return null
  }

  return (
    <div className="jui-error-summary" role="alert">
      <strong className="jui-error-summary__title">{title}</strong>
      <ul className="jui-error-summary__list">
        {errors.map((error, index) => (
          <li key={index}>
            {error.href ? (
              <a className="jui-error-summary__link" href={error.href}>
                {error.message}
              </a>
            ) : (
              error.message
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

import type { HTMLAttributes } from 'react'
import './Spinner.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  label?: string
  size?: SpinnerSize
}

export function Spinner({
  className = '',
  label = 'Loading',
  size = 'md',
  ...props
}: SpinnerProps) {
  const classes = ['jui-spinner', `jui-spinner--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span aria-label={label} className={classes} role="status" {...props}>
      <span className="jui-spinner__track" />
    </span>
  )
}

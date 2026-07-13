import type { HTMLAttributes } from 'react'
import './StatusDot.css'

export type StatusDotTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'

export type StatusDotProps = HTMLAttributes<HTMLSpanElement> & {
  label: string
  tone?: StatusDotTone
}

export function StatusDot({
  className = '',
  label,
  tone = 'neutral',
  ...props
}: StatusDotProps) {
  const classes = ['jui-status-dot', `jui-status-dot--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      <span aria-hidden="true" className="jui-status-dot__mark" />
      {label}
    </span>
  )
}

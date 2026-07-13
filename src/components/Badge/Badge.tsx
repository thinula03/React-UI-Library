import type { HTMLAttributes, ReactNode } from 'react'
import './Badge.css'

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
}

export function Badge({
  children,
  className = '',
  variant = 'neutral',
  ...props
}: BadgeProps) {
  const classes = ['jui-badge', `jui-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

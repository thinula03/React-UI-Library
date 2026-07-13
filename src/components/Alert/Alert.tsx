import type { HTMLAttributes, ReactNode } from 'react'
import './Alert.css'

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  title?: string
  variant?: AlertVariant
}

export function Alert({
  children,
  className = '',
  title,
  variant = 'info',
  ...props
}: AlertProps) {
  const classes = ['jui-alert', `jui-alert--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} role="status" {...props}>
      {title ? <strong className="jui-alert__title">{title}</strong> : null}
      <div className="jui-alert__content">{children}</div>
    </div>
  )
}

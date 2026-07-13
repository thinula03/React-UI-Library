import type { HTMLAttributes, ReactNode } from 'react'
import './VisuallyHidden.css'

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function VisuallyHidden({
  children,
  className = '',
  ...props
}: VisuallyHiddenProps) {
  const classes = ['jui-visually-hidden', className].filter(Boolean).join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

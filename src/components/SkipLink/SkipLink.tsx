import type { AnchorHTMLAttributes, ReactNode } from 'react'
import './SkipLink.css'

export type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function SkipLink({ children, className = '', ...props }: SkipLinkProps) {
  const classes = ['jui-skip-link', className].filter(Boolean).join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

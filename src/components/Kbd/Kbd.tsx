import type { HTMLAttributes, ReactNode } from 'react'
import './Kbd.css'

export type KbdProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function Kbd({ children, className = '', ...props }: KbdProps) {
  const classes = ['jui-kbd', className].filter(Boolean).join(' ')

  return (
    <kbd className={classes} {...props}>
      {children}
    </kbd>
  )
}

import type { HTMLAttributes, ReactNode } from 'react'
import './Toolbar.css'

export type ToolbarProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Toolbar({ children, className = '', ...props }: ToolbarProps) {
  const classes = ['jui-toolbar', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="toolbar" {...props}>
      {children}
    </div>
  )
}

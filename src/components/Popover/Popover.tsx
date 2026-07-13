import type { ReactNode } from 'react'
import './Popover.css'

export type PopoverProps = {
  children: ReactNode
  content: ReactNode
}

export function Popover({ children, content }: PopoverProps) {
  return (
    <details className="jui-popover">
      <summary className="jui-popover__trigger">{children}</summary>
      <div className="jui-popover__content">{content}</div>
    </details>
  )
}

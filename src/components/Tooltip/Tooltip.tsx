import type { ReactNode } from 'react'
import './Tooltip.css'

export type TooltipProps = {
  children: ReactNode
  content: ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <span className="jui-tooltip">
      {children}
      <span className="jui-tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  )
}

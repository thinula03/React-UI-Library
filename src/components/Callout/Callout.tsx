import type { ReactNode } from 'react'
import './Callout.css'

export type CalloutTone = 'info' | 'success' | 'warning' | 'danger'

export type CalloutProps = {
  children: ReactNode
  icon?: ReactNode
  tone?: CalloutTone
  title?: ReactNode
}

export function Callout({
  children,
  icon = 'i',
  tone = 'info',
  title,
}: CalloutProps) {
  return (
    <div className={`jui-callout jui-callout--${tone}`}>
      <span aria-hidden="true" className="jui-callout__icon">
        {icon}
      </span>
      <div className="jui-callout__copy">
        {title ? <strong className="jui-callout__title">{title}</strong> : null}
        <div className="jui-callout__content">{children}</div>
      </div>
    </div>
  )
}

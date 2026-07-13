import type { ReactNode } from 'react'
import './EmptyState.css'

export type EmptyStateProps = {
  action?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  title: ReactNode
}

export function EmptyState({
  action,
  description,
  icon,
  title,
}: EmptyStateProps) {
  return (
    <div className="jui-empty-state">
      {icon ? <div className="jui-empty-state__icon">{icon}</div> : null}
      <div className="jui-empty-state__copy">
        <strong className="jui-empty-state__title">{title}</strong>
        {description ? (
          <p className="jui-empty-state__description">{description}</p>
        ) : null}
      </div>
      {action ? <div className="jui-empty-state__action">{action}</div> : null}
    </div>
  )
}

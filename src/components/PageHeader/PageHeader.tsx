import type { HTMLAttributes, ReactNode } from 'react'
import './PageHeader.css'

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  actions?: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  title: ReactNode
}

export function PageHeader({
  actions,
  className = '',
  description,
  eyebrow,
  title,
  ...props
}: PageHeaderProps) {
  const classes = ['jui-page-header', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jui-page-header__copy">
        {eyebrow ? <span className="jui-page-header__eyebrow">{eyebrow}</span> : null}
        <h1 className="jui-page-header__title">{title}</h1>
        {description ? (
          <p className="jui-page-header__description">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="jui-page-header__actions">{actions}</div> : null}
    </div>
  )
}

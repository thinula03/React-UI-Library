import type { ReactNode } from 'react'
import './LogoCloud.css'

export type LogoCloudItem = {
  label: ReactNode
  meta?: ReactNode
}

export type LogoCloudProps = {
  items: LogoCloudItem[]
  title?: ReactNode
}

export function LogoCloud({ items, title }: LogoCloudProps) {
  return (
    <section className="jui-logo-cloud" aria-label="Featured logos">
      {title ? <p className="jui-logo-cloud__title">{title}</p> : null}
      <div className="jui-logo-cloud__grid">
        {items.map((item, index) => (
          <div className="jui-logo-cloud__item" key={index}>
            <strong>{item.label}</strong>
            {item.meta ? <span>{item.meta}</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

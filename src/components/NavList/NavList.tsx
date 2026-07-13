import type { ReactNode } from 'react'
import './NavList.css'

export type NavListItem = {
  active?: boolean
  badge?: ReactNode
  href?: string
  label: ReactNode
  onSelect?: () => void
}

export type NavListProps = {
  items: NavListItem[]
  label?: string
}

export function NavList({ items, label = 'Navigation' }: NavListProps) {
  return (
    <nav aria-label={label} className="jui-nav-list">
      {items.map((item, index) => {
        const content = (
          <>
            <span>{item.label}</span>
            {item.badge ? <span className="jui-nav-list__badge">{item.badge}</span> : null}
          </>
        )

        return item.href ? (
          <a
            aria-current={item.active ? 'page' : undefined}
            className="jui-nav-list__item"
            href={item.href}
            key={index}
          >
            {content}
          </a>
        ) : (
          <button
            aria-current={item.active ? 'page' : undefined}
            className="jui-nav-list__item"
            key={index}
            onClick={item.onSelect}
            type="button"
          >
            {content}
          </button>
        )
      })}
    </nav>
  )
}

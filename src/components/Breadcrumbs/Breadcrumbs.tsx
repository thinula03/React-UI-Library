import type { AnchorHTMLAttributes, ReactNode } from 'react'
import './Breadcrumbs.css'

export type BreadcrumbItem = {
  href?: string
  label: ReactNode
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="jui-breadcrumbs">
      <ol className="jui-breadcrumbs__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li className="jui-breadcrumbs__item" key={index}>
              {item.href && !isCurrent ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <span
                  aria-current={isCurrent ? 'page' : undefined}
                  className="jui-breadcrumbs__current"
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function BreadcrumbLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="jui-breadcrumbs__link" {...props}>
      {children}
    </a>
  )
}

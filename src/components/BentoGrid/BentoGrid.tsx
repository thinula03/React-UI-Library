import type { HTMLAttributes, ReactNode } from 'react'
import './BentoGrid.css'

export type BentoGridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export type BentoItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  span?: 'default' | 'wide' | 'tall'
}

export function BentoGrid({ children, className = '', ...props }: BentoGridProps) {
  const classes = ['jui-bento-grid', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function BentoItem({
  children,
  className = '',
  span = 'default',
  ...props
}: BentoItemProps) {
  const classes = ['jui-bento-item', `jui-bento-item--${span}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

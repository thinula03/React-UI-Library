import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  const classes = ['jui-card', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function CardHeader({
  children,
  className = '',
  ...props
}: CardHeaderProps) {
  const classes = ['jui-card__header', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export type CardBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function CardBody({ children, className = '', ...props }: CardBodyProps) {
  const classes = ['jui-card__body', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

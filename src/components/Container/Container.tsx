import type { HTMLAttributes, ReactNode } from 'react'
import './Container.css'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  size?: ContainerSize
}

export function Container({
  children,
  className = '',
  size = 'lg',
  ...props
}: ContainerProps) {
  const classes = ['jui-container', `jui-container--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

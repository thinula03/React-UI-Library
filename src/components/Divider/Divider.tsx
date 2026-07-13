import type { HTMLAttributes } from 'react'
import './Divider.css'

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({
  className = '',
  orientation = 'horizontal',
  ...props
}: DividerProps) {
  const classes = ['jui-divider', `jui-divider--${orientation}`, className]
    .filter(Boolean)
    .join(' ')

  return <hr aria-orientation={orientation} className={classes} {...props} />
}

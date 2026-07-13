import type { HTMLAttributes, ReactNode } from 'react'
import './Marquee.css'

export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  direction?: 'left' | 'right'
  repeat?: number
  speedSeconds?: number
}

export function Marquee({
  children,
  className = '',
  direction = 'left',
  repeat = 3,
  speedSeconds = 18,
  ...props
}: MarqueeProps) {
  const classes = ['jui-marquee', `jui-marquee--${direction}`, className]
    .filter(Boolean)
    .join(' ')
  const items = Array.from({ length: repeat }, (_, index) => index)

  return (
    <div className={classes} {...props}>
      <div
        className="jui-marquee__track"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {items.map((item) => (
          <div aria-hidden={item > 0} className="jui-marquee__item" key={item}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

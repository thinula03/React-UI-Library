import type { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react'
import './SpotlightCard.css'

export type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function SpotlightCard({
  children,
  className = '',
  style,
  ...props
}: SpotlightCardProps) {
  const classes = ['jui-spotlight-card', className].filter(Boolean).join(' ')

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    event.currentTarget.style.setProperty('--jui-spotlight-x', `${x}px`)
    event.currentTarget.style.setProperty('--jui-spotlight-y', `${y}px`)
  }

  return (
    <div
      className={classes}
      onMouseMove={handleMouseMove}
      style={style as CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}

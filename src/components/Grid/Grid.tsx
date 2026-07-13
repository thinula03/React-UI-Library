import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import './Grid.css'

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  gap?: number | string
  minColumnWidth?: number | string
}

export function Grid({
  children,
  className = '',
  gap = '1rem',
  minColumnWidth = '14rem',
  style,
  ...props
}: GridProps) {
  const classes = ['jui-grid', className].filter(Boolean).join(' ')
  const gridStyle = {
    '--jui-grid-gap': gap,
    '--jui-grid-min-column-width': minColumnWidth,
    ...style,
  } as CSSProperties

  return (
    <div className={classes} style={gridStyle} {...props}>
      {children}
    </div>
  )
}

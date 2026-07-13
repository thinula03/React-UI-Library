import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import './Stack.css'

export type StackDirection = 'row' | 'column'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch'
export type StackJustify = 'start' | 'center' | 'end' | 'between'

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  align?: StackAlign
  children: ReactNode
  direction?: StackDirection
  gap?: number | string
  justify?: StackJustify
  wrap?: boolean
}

export function Stack({
  align = 'stretch',
  children,
  className = '',
  direction = 'column',
  gap = '1rem',
  justify = 'start',
  style,
  wrap = false,
  ...props
}: StackProps) {
  const classes = [
    'jui-stack',
    `jui-stack--${direction}`,
    `jui-stack--align-${align}`,
    `jui-stack--justify-${justify}`,
    wrap ? 'jui-stack--wrap' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const stackStyle = { '--jui-stack-gap': gap, ...style } as CSSProperties

  return (
    <div className={classes} style={stackStyle} {...props}>
      {children}
    </div>
  )
}

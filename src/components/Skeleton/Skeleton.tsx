import type { HTMLAttributes } from 'react'
import './Skeleton.css'

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  height?: number | string
  width?: number | string
}

export function Skeleton({
  className = '',
  height,
  width,
  style,
  ...props
}: SkeletonProps) {
  const classes = ['jui-skeleton', className].filter(Boolean).join(' ')

  return (
    <div
      aria-hidden="true"
      className={classes}
      style={{ height, width, ...style }}
      {...props}
    />
  )
}

import type { SVGAttributes } from 'react'
import './Sparkline.css'

export type SparklineProps = SVGAttributes<SVGSVGElement> & {
  data: number[]
  height?: number
  width?: number
}

export function Sparkline({
  className = '',
  data,
  height = 48,
  width = 160,
  ...props
}: SparklineProps) {
  const classes = ['jui-sparkline', className].filter(Boolean).join(' ')
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const points = data
    .map((value, index) => {
      const x = data.length === 1 ? width : (index / (data.length - 1)) * width
      const y = height - ((value - min) / range) * height

      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg
      aria-hidden="true"
      className={classes}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      {...props}
    >
      <polyline className="jui-sparkline__line" points={points} />
    </svg>
  )
}

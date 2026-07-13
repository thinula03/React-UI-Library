import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import './MetricRing.css'

export type MetricRingProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode
  max?: number
  value: number
}

export function MetricRing({
  className = '',
  label,
  max = 100,
  value,
  ...props
}: MetricRingProps) {
  const percentage = Math.min(Math.max(value / max, 0), 1) * 100
  const classes = ['jui-metric-ring', className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ '--jui-ring-value': `${percentage}%` } as CSSProperties}
      {...props}
    >
      <div
        aria-label={`${Math.round(percentage)} percent`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(percentage)}
        className="jui-metric-ring__chart"
        role="progressbar"
      >
        <span className="jui-metric-ring__value">{Math.round(percentage)}%</span>
      </div>
      <span className="jui-metric-ring__label">{label}</span>
    </div>
  )
}

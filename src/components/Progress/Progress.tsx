import type { HTMLAttributes } from 'react'
import './Progress.css'

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  label?: string
  max?: number
  value: number
}

export function Progress({
  className = '',
  label,
  max = 100,
  value,
  ...props
}: ProgressProps) {
  const safeMax = Math.max(max, 1)
  const safeValue = Math.min(Math.max(value, 0), safeMax)
  const percentage = Math.round((safeValue / safeMax) * 100)
  const classes = ['jui-progress', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {label ? (
        <div className="jui-progress__meta">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      ) : null}
      <div
        aria-label={label}
        aria-valuemax={safeMax}
        aria-valuemin={0}
        aria-valuenow={safeValue}
        className="jui-progress__track"
        role="progressbar"
      >
        <span
          className="jui-progress__bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

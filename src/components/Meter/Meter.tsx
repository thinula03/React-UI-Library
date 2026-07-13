import type { MeterHTMLAttributes } from 'react'
import './Meter.css'

export type MeterProps = MeterHTMLAttributes<HTMLMeterElement> & {
  label: string
}

export function Meter({ className = '', label, value, ...props }: MeterProps) {
  const classes = ['jui-meter', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <span className="jui-meter__meta">
        <span>{label}</span>
        {typeof value !== 'undefined' ? (
          <span className="jui-meter__value">{value}</span>
        ) : null}
      </span>
      <meter className="jui-meter__bar" value={value} {...props} />
    </label>
  )
}

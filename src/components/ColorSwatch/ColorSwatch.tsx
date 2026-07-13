import type { HTMLAttributes } from 'react'
import './ColorSwatch.css'

export type ColorSwatchProps = HTMLAttributes<HTMLDivElement> & {
  color: string
  label: string
}

export function ColorSwatch({
  className = '',
  color,
  label,
  ...props
}: ColorSwatchProps) {
  const classes = ['jui-color-swatch', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <span
        aria-hidden="true"
        className="jui-color-swatch__chip"
        style={{ background: color }}
      />
      <span className="jui-color-swatch__label">{label}</span>
      <code className="jui-color-swatch__value">{color}</code>
    </div>
  )
}

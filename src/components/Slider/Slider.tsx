import type { InputHTMLAttributes } from 'react'
import './Slider.css'

export type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  output?: string
}

export function Slider({
  className = '',
  label,
  output,
  ...props
}: SliderProps) {
  const classes = ['jui-slider', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <span className="jui-slider__meta">
        <span>{label}</span>
        {output ? <span className="jui-slider__output">{output}</span> : null}
      </span>
      <input className="jui-slider__input" type="range" {...props} />
    </label>
  )
}

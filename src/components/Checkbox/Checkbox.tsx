import type { InputHTMLAttributes } from 'react'
import './Checkbox.css'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string
  helperText?: string
}

export function Checkbox({
  className = '',
  helperText,
  label,
  id,
  ...props
}: CheckboxProps) {
  const inputId = id ?? props.name
  const messageId = helperText && inputId ? `${inputId}-message` : undefined
  const classes = ['jui-checkbox__input', className].filter(Boolean).join(' ')

  return (
    <label className="jui-checkbox">
      <input
        aria-describedby={messageId}
        className={classes}
        id={inputId}
        type="checkbox"
        {...props}
      />
      <span className="jui-checkbox__content">
        <span className="jui-checkbox__label">{label}</span>
        {helperText ? (
          <span className="jui-checkbox__message" id={messageId}>
            {helperText}
          </span>
        ) : null}
      </span>
    </label>
  )
}

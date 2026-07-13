import type { InputHTMLAttributes } from 'react'
import './Switch.css'

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  helperText?: string
  label: string
}

export function Switch({
  className = '',
  helperText,
  id,
  label,
  ...props
}: SwitchProps) {
  const inputId = id ?? props.name
  const messageId = helperText && inputId ? `${inputId}-message` : undefined
  const classes = ['jui-switch__input', className].filter(Boolean).join(' ')

  return (
    <label className="jui-switch">
      <span className="jui-switch__content">
        <span className="jui-switch__label">{label}</span>
        {helperText ? (
          <span className="jui-switch__message" id={messageId}>
            {helperText}
          </span>
        ) : null}
      </span>
      <span className="jui-switch__control">
        <input
          aria-describedby={messageId}
          className={classes}
          id={inputId}
          type="checkbox"
          {...props}
        />
        <span className="jui-switch__track" />
      </span>
    </label>
  )
}

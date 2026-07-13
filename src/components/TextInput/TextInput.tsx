import type { InputHTMLAttributes } from 'react'
import './TextInput.css'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
}

export function TextInput({
  className = '',
  error,
  helperText,
  id,
  label,
  ...props
}: TextInputProps) {
  const inputId = id ?? props.name
  const message = error ?? helperText
  const messageId = message && inputId ? `${inputId}-message` : undefined
  const classes = [
    'jui-text-input',
    error ? 'jui-text-input--error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className="jui-field">
      {label ? <span className="jui-field__label">{label}</span> : null}
      <input
        aria-describedby={messageId}
        aria-invalid={error ? true : undefined}
        className={classes}
        id={inputId}
        {...props}
      />
      {message ? (
        <span className="jui-field__message" id={messageId}>
          {message}
        </span>
      ) : null}
    </label>
  )
}

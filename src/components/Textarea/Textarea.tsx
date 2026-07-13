import type { TextareaHTMLAttributes } from 'react'
import './Textarea.css'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  helperText?: string
  label?: string
}

export function Textarea({
  className = '',
  error,
  helperText,
  id,
  label,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name
  const message = error ?? helperText
  const messageId = message && textareaId ? `${textareaId}-message` : undefined
  const classes = ['jui-textarea', error ? 'jui-textarea--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className="jui-textarea-field">
      {label ? <span className="jui-textarea-field__label">{label}</span> : null}
      <textarea
        aria-describedby={messageId}
        aria-invalid={error ? true : undefined}
        className={classes}
        id={textareaId}
        {...props}
      />
      {message ? (
        <span className="jui-textarea-field__message" id={messageId}>
          {message}
        </span>
      ) : null}
    </label>
  )
}

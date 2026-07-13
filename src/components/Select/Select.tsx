import type { SelectHTMLAttributes } from 'react'
import './Select.css'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string
  helperText?: string
  label?: string
  options: SelectOption[]
}

export function Select({
  className = '',
  error,
  helperText,
  id,
  label,
  options,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name
  const message = error ?? helperText
  const messageId = message && selectId ? `${selectId}-message` : undefined
  const classes = ['jui-select', error ? 'jui-select--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className="jui-select-field">
      {label ? <span className="jui-select-field__label">{label}</span> : null}
      <select
        aria-describedby={messageId}
        aria-invalid={error ? true : undefined}
        className={classes}
        id={selectId}
        {...props}
      >
        {options.map((option) => (
          <option
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {message ? (
        <span className="jui-select-field__message" id={messageId}>
          {message}
        </span>
      ) : null}
    </label>
  )
}

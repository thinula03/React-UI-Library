import type { InputHTMLAttributes } from 'react'
import './RadioGroup.css'

export type RadioOption = {
  disabled?: boolean
  label: string
  value: string
}

export type RadioGroupProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'type' | 'value'
> & {
  helperText?: string
  label: string
  name: string
  onValueChange?: (value: string) => void
  options: RadioOption[]
  value?: string
}

export function RadioGroup({
  helperText,
  label,
  name,
  onValueChange,
  options,
  value,
  ...props
}: RadioGroupProps) {
  return (
    <fieldset className="jui-radio-group">
      <legend className="jui-radio-group__legend">{label}</legend>
      <div className="jui-radio-group__options">
        {options.map((option) => (
          <label className="jui-radio-group__option" key={option.value}>
            <input
              checked={value ? option.value === value : undefined}
              disabled={option.disabled}
              name={name}
              onChange={() => onValueChange?.(option.value)}
              type="radio"
              value={option.value}
              {...props}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {helperText ? (
        <p className="jui-radio-group__message">{helperText}</p>
      ) : null}
    </fieldset>
  )
}

import type { InputHTMLAttributes } from 'react'
import './Combobox.css'

export type ComboboxOption = {
  label: string
  value: string
}

export type ComboboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  label: string
  onInputChange: (value: string) => void
  onValueChange: (value: string) => void
  options: ComboboxOption[]
  value: string
}

export function Combobox({
  className = '',
  label,
  onInputChange,
  onValueChange,
  options,
  value,
  ...props
}: ComboboxProps) {
  const listId = `${props.name ?? 'combobox'}-list`
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase()),
  )
  const classes = ['jui-combobox', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <span className="jui-combobox__label">{label}</span>
      <input
        aria-autocomplete="list"
        aria-controls={listId}
        className="jui-combobox__input"
        onChange={(event) => onInputChange(event.currentTarget.value)}
        role="combobox"
        value={value}
        {...props}
      />
      {filteredOptions.length > 0 ? (
        <span className="jui-combobox__list" id={listId} role="listbox">
          {filteredOptions.map((option) => (
            <button
              className="jui-combobox__option"
              key={option.value}
              onClick={() => onValueChange(option.label)}
              role="option"
              type="button"
            >
              {option.label}
            </button>
          ))}
        </span>
      ) : null}
    </label>
  )
}

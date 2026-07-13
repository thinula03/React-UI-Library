import type { InputHTMLAttributes, KeyboardEvent } from 'react'
import { Badge } from '../Badge'
import './TagInput.css'

export type TagInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  label?: string
  onValueChange: (value: string[]) => void
  value: string[]
}

export function TagInput({
  className = '',
  label,
  onValueChange,
  placeholder = 'Add tag',
  value,
  ...props
}: TagInputProps) {
  function addTag(rawValue: string) {
    const nextTag = rawValue.trim()

    if (!nextTag || value.includes(nextTag)) {
      return
    }

    onValueChange([...value, nextTag])
  }

  function removeTag(tag: string) {
    onValueChange(value.filter((item) => item !== tag))
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter' && event.key !== ',') {
      return
    }

    event.preventDefault()
    addTag(event.currentTarget.value)
    event.currentTarget.value = ''
  }

  const classes = ['jui-tag-input', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      {label ? <span className="jui-tag-input__label">{label}</span> : null}
      <span className="jui-tag-input__control">
        {value.map((tag) => (
          <span className="jui-tag-input__tag" key={tag}>
            <Badge>{tag}</Badge>
            <button
              aria-label={`Remove ${tag}`}
              className="jui-tag-input__remove"
              onClick={() => removeTag(tag)}
              type="button"
            >
              ×
            </button>
          </span>
        ))}
        <input
          className="jui-tag-input__input"
          onBlur={(event) => {
            addTag(event.currentTarget.value)
            event.currentTarget.value = ''
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          {...props}
        />
      </span>
    </label>
  )
}

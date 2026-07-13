import type { InputHTMLAttributes } from 'react'
import './SearchInput.css'

export type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
}

export function SearchInput({
  className = '',
  label = 'Search',
  placeholder = 'Search',
  ...props
}: SearchInputProps) {
  const classes = ['jui-search-input', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <span className="jui-search-input__label">{label}</span>
      <span className="jui-search-input__control">
        <span aria-hidden="true" className="jui-search-input__icon">
          ⌕
        </span>
        <input
          className="jui-search-input__input"
          placeholder={placeholder}
          type="search"
          {...props}
        />
      </span>
    </label>
  )
}

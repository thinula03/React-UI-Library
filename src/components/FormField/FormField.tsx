import type { ReactNode } from 'react'
import './FormField.css'

export type FormFieldProps = {
  children: ReactNode
  description?: ReactNode
  error?: ReactNode
  label: ReactNode
  required?: boolean
}

export function FormField({
  children,
  description,
  error,
  label,
  required = false,
}: FormFieldProps) {
  return (
    <div className="jui-form-field">
      <div className="jui-form-field__label">
        <span>{label}</span>
        {required ? <span className="jui-form-field__required">Required</span> : null}
      </div>
      {description ? (
        <p className="jui-form-field__description">{description}</p>
      ) : null}
      {children}
      {error ? <p className="jui-form-field__error">{error}</p> : null}
    </div>
  )
}

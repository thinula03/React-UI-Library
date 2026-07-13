import type { InputHTMLAttributes } from 'react'
import './FileUpload.css'

export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  helperText?: string
  label: string
}

export function FileUpload({
  className = '',
  helperText,
  id,
  label,
  ...props
}: FileUploadProps) {
  const inputId = id ?? props.name
  const classes = ['jui-file-upload', className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <span className="jui-file-upload__label">{label}</span>
      <span className="jui-file-upload__dropzone">
        <span className="jui-file-upload__cta">Choose file</span>
        <span className="jui-file-upload__hint">
          {helperText ?? 'Drag and drop is supported by the browser.'}
        </span>
      </span>
      <input className="jui-file-upload__input" id={inputId} type="file" {...props} />
    </label>
  )
}

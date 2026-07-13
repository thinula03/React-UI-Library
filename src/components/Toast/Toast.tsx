import type { ReactNode } from 'react'
import './Toast.css'

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

export type ToastProps = {
  action?: ReactNode
  children?: ReactNode
  onClose?: () => void
  title: string
  variant?: ToastVariant
}

export function Toast({
  action,
  children,
  onClose,
  title,
  variant = 'info',
}: ToastProps) {
  return (
    <div className={`jui-toast jui-toast--${variant}`} role="status">
      <div className="jui-toast__content">
        <strong className="jui-toast__title">{title}</strong>
        {children ? <div className="jui-toast__message">{children}</div> : null}
      </div>
      {action ? <div className="jui-toast__action">{action}</div> : null}
      {onClose ? (
        <button
          aria-label="Close notification"
          className="jui-toast__close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      ) : null}
    </div>
  )
}

export type ToastViewportProps = {
  children: ReactNode
}

export function ToastViewport({ children }: ToastViewportProps) {
  return <div className="jui-toast-viewport">{children}</div>
}

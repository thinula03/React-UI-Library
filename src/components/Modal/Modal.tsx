import type { HTMLAttributes, ReactNode } from 'react'
import { Button } from '../Button'
import './Modal.css'

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export function Modal({
  children,
  className = '',
  isOpen,
  onClose,
  title,
  ...props
}: ModalProps) {
  if (!isOpen) {
    return null
  }

  const classes = ['jui-modal', className].filter(Boolean).join(' ')

  return (
    <div className="jui-modal__overlay" role="presentation">
      <div
        aria-labelledby="jui-modal-title"
        aria-modal="true"
        className={classes}
        role="dialog"
        {...props}
      >
        <div className="jui-modal__header">
          <h2 className="jui-modal__title" id="jui-modal-title">
            {title}
          </h2>
          <Button aria-label="Close modal" onClick={onClose} variant="ghost">
            Close
          </Button>
        </div>
        <div className="jui-modal__body">{children}</div>
      </div>
    </div>
  )
}

import type { HTMLAttributes, ReactNode } from 'react'
import { Button } from '../Button'
import './Drawer.css'

export type DrawerSide = 'left' | 'right'

export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  side?: DrawerSide
  title: string
}

export function Drawer({
  children,
  className = '',
  isOpen,
  onClose,
  side = 'right',
  title,
  ...props
}: DrawerProps) {
  if (!isOpen) {
    return null
  }

  const classes = ['jui-drawer', `jui-drawer--${side}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="jui-drawer__overlay" role="presentation">
      <aside
        aria-labelledby="jui-drawer-title"
        aria-modal="true"
        className={classes}
        role="dialog"
        {...props}
      >
        <div className="jui-drawer__header">
          <h2 className="jui-drawer__title" id="jui-drawer-title">
            {title}
          </h2>
          <Button aria-label="Close drawer" onClick={onClose} variant="ghost">
            Close
          </Button>
        </div>
        <div className="jui-drawer__body">{children}</div>
      </aside>
    </div>
  )
}

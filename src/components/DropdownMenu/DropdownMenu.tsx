import type { ReactNode } from 'react'
import './DropdownMenu.css'

export type DropdownMenuItem = {
  disabled?: boolean
  label: ReactNode
  onSelect: () => void
}

export type DropdownMenuProps = {
  align?: 'left' | 'right'
  items: DropdownMenuItem[]
  trigger: ReactNode
}

export function DropdownMenu({
  align = 'left',
  items,
  trigger,
}: DropdownMenuProps) {
  return (
    <details className={`jui-dropdown jui-dropdown--${align}`}>
      <summary className="jui-dropdown__trigger">{trigger}</summary>
      <div className="jui-dropdown__menu" role="menu">
        {items.map((item, index) => (
          <button
            className="jui-dropdown__item"
            disabled={item.disabled}
            key={index}
            onClick={(event) => {
              item.onSelect()
              event.currentTarget.closest('details')?.removeAttribute('open')
            }}
            role="menuitem"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </details>
  )
}

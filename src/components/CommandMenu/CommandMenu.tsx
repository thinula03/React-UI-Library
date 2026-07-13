import type { ReactNode } from 'react'
import './CommandMenu.css'

export type CommandMenuItem = {
  shortcut?: ReactNode
  title: ReactNode
  value: string
}

export type CommandMenuProps = {
  emptyMessage?: ReactNode
  items: CommandMenuItem[]
  onSelect: (value: string) => void
  query: string
}

export function CommandMenu({
  emptyMessage = 'No commands found.',
  items,
  onSelect,
  query,
}: CommandMenuProps) {
  const filteredItems = items.filter((item) =>
    String(item.title).toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="jui-command-menu" role="menu">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <button
            className="jui-command-menu__item"
            key={item.value}
            onClick={() => onSelect(item.value)}
            role="menuitem"
            type="button"
          >
            <span>{item.title}</span>
            {item.shortcut ? (
              <span className="jui-command-menu__shortcut">{item.shortcut}</span>
            ) : null}
          </button>
        ))
      ) : (
        <span className="jui-command-menu__empty">{emptyMessage}</span>
      )}
    </div>
  )
}

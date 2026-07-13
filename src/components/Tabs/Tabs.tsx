import type { HTMLAttributes, ReactNode } from 'react'
import './Tabs.css'

export type TabItem = {
  content: ReactNode
  disabled?: boolean
  id: string
  label: string
}

export type TabsProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  activeId: string
  onChange: (id: string) => void
  tabs: TabItem[]
}

export function Tabs({
  activeId,
  className = '',
  onChange,
  tabs,
  ...props
}: TabsProps) {
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0]
  const classes = ['jui-tabs', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div aria-label="Tabs" className="jui-tabs__list" role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id

          return (
            <button
              aria-controls={`${tab.id}-panel`}
              aria-selected={isActive}
              className="jui-tabs__trigger"
              disabled={tab.disabled}
              id={`${tab.id}-tab`}
              key={tab.id}
              onClick={() => onChange(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div
        aria-labelledby={`${activeTab.id}-tab`}
        className="jui-tabs__panel"
        id={`${activeTab.id}-panel`}
        role="tabpanel"
      >
        {activeTab.content}
      </div>
    </div>
  )
}

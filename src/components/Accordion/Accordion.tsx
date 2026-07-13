import type { ReactNode } from 'react'
import './Accordion.css'

export type AccordionItem = {
  content: ReactNode
  disabled?: boolean
  id: string
  title: ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  openId?: string
  onOpenChange?: (id: string) => void
}

export function Accordion({ items, onOpenChange, openId }: AccordionProps) {
  return (
    <div className="jui-accordion">
      {items.map((item) => {
        const isOpen = item.id === openId

        return (
          <div className="jui-accordion__item" key={item.id}>
            <button
              aria-expanded={isOpen}
              className="jui-accordion__trigger"
              disabled={item.disabled}
              onClick={() => onOpenChange?.(isOpen ? '' : item.id)}
              type="button"
            >
              <span>{item.title}</span>
              <span aria-hidden="true" className="jui-accordion__chevron">
                +
              </span>
            </button>
            {isOpen ? (
              <div className="jui-accordion__panel">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

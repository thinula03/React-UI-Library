import type { ReactNode } from 'react'
import './KanbanBoard.css'

export type KanbanCard = {
  id: string
  meta?: ReactNode
  title: ReactNode
}

export type KanbanColumn = {
  cards: KanbanCard[]
  id: string
  title: ReactNode
}

export type KanbanBoardProps = {
  columns: KanbanColumn[]
}

export function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <div className="jui-kanban" role="list">
      {columns.map((column) => (
        <section className="jui-kanban__column" key={column.id} role="listitem">
          <div className="jui-kanban__column-header">
            <strong>{column.title}</strong>
            <span>{column.cards.length}</span>
          </div>
          <div className="jui-kanban__cards">
            {column.cards.map((card) => (
              <article className="jui-kanban__card" key={card.id}>
                <strong>{card.title}</strong>
                {card.meta ? <span>{card.meta}</span> : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

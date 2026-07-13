import type { ReactNode } from 'react'
import './Timeline.css'

export type TimelineItem = {
  content?: ReactNode
  id: string
  meta?: ReactNode
  title: ReactNode
}

export type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="jui-timeline">
      {items.map((item) => (
        <li className="jui-timeline__item" key={item.id}>
          <span className="jui-timeline__dot" />
          <div className="jui-timeline__copy">
            <strong className="jui-timeline__title">{item.title}</strong>
            {item.meta ? <span className="jui-timeline__meta">{item.meta}</span> : null}
            {item.content ? (
              <div className="jui-timeline__content">{item.content}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

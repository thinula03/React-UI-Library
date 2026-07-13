import './BeforeAfter.css'
import type { CSSProperties } from 'react'

export type BeforeAfterProps = {
  after: string
  afterAlt?: string
  before: string
  beforeAlt?: string
  value?: number
}

export function BeforeAfter({
  after,
  afterAlt = 'After',
  before,
  beforeAlt = 'Before',
  value = 50,
}: BeforeAfterProps) {
  return (
    <div
      className="jui-before-after"
      style={{ '--jui-before-after': `${value}%` } as CSSProperties}
    >
      <img alt={afterAlt} className="jui-before-after__image" src={after} />
      <div className="jui-before-after__before">
        <img alt={beforeAlt} className="jui-before-after__image" src={before} />
      </div>
      <span className="jui-before-after__handle" />
    </div>
  )
}

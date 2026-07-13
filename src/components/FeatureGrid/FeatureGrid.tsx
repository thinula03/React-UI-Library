import type { ReactNode } from 'react'
import './FeatureGrid.css'

export type FeatureGridItem = {
  description: ReactNode
  eyebrow?: ReactNode
  icon?: ReactNode
  title: ReactNode
}

export type FeatureGridProps = {
  features: FeatureGridItem[]
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="jui-feature-grid">
      {features.map((feature, index) => (
        <article className="jui-feature-grid__item" key={index}>
          <div className="jui-feature-grid__topline">
            {feature.icon ? (
              <span className="jui-feature-grid__icon">{feature.icon}</span>
            ) : null}
            {feature.eyebrow ? (
              <span className="jui-feature-grid__eyebrow">{feature.eyebrow}</span>
            ) : null}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  )
}

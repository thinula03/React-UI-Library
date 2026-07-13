import type { ReactNode } from 'react'
import './FeatureTour.css'

export type FeatureTourStep = {
  description: ReactNode
  title: ReactNode
}

export type FeatureTourProps = {
  activeIndex?: number
  steps: FeatureTourStep[]
}

export function FeatureTour({ activeIndex = 0, steps }: FeatureTourProps) {
  return (
    <ol className="jui-feature-tour">
      {steps.map((step, index) => (
        <li
          className={`jui-feature-tour__step ${
            index === activeIndex ? 'jui-feature-tour__step--active' : ''
          }`}
          key={index}
        >
          <span className="jui-feature-tour__marker">{index + 1}</span>
          <span className="jui-feature-tour__copy">
            <strong>{step.title}</strong>
            <span>{step.description}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

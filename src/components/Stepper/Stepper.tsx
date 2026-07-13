import type { ReactNode } from 'react'
import './Stepper.css'

export type StepperStep = {
  description?: ReactNode
  id: string
  label: ReactNode
}

export type StepperProps = {
  activeId: string
  steps: StepperStep[]
}

export function Stepper({ activeId, steps }: StepperProps) {
  const activeIndex = Math.max(
    steps.findIndex((step) => step.id === activeId),
    0,
  )

  return (
    <ol className="jui-stepper">
      {steps.map((step, index) => {
        const state =
          index < activeIndex ? 'complete' : index === activeIndex ? 'active' : 'pending'

        return (
          <li className={`jui-stepper__item jui-stepper__item--${state}`} key={step.id}>
            <span className="jui-stepper__marker">{index + 1}</span>
            <span className="jui-stepper__copy">
              <strong className="jui-stepper__label">{step.label}</strong>
              {step.description ? (
                <span className="jui-stepper__description">{step.description}</span>
              ) : null}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

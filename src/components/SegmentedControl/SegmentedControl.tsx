import type { ReactNode } from 'react'
import './SegmentedControl.css'

export type SegmentedControlOption = {
  disabled?: boolean
  label: ReactNode
  value: string
}

export type SegmentedControlProps = {
  label?: string
  onValueChange: (value: string) => void
  options: SegmentedControlOption[]
  value: string
}

export function SegmentedControl({
  label,
  onValueChange,
  options,
  value,
}: SegmentedControlProps) {
  return (
    <div aria-label={label} className="jui-segmented-control" role="radiogroup">
      {options.map((option) => (
        <button
          aria-checked={option.value === value}
          className="jui-segmented-control__option"
          disabled={option.disabled}
          key={option.value}
          onClick={() => onValueChange(option.value)}
          role="radio"
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

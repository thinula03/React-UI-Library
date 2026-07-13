import { useEffect, useRef, useState } from 'react'
import './AnimatedNumber.css'

export type AnimatedNumberProps = {
  durationMs?: number
  format?: (value: number) => string
  value: number
}

export function AnimatedNumber({
  durationMs = 700,
  format = (value) => Math.round(value).toLocaleString(),
  value,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const previousValue = useRef(value)

  useEffect(() => {
    const startValue = previousValue.current
    const delta = value - startValue
    const startTime = performance.now()
    let frame = 0

    function tick(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(startValue + delta * eased)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    previousValue.current = value

    return () => cancelAnimationFrame(frame)
  }, [durationMs, value])

  return <span className="jui-animated-number">{format(displayValue)}</span>
}

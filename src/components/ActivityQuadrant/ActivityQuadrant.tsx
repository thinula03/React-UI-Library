import './ActivityQuadrant.css'

export type ActivityQuadrantMetric = {
  label: string
  position: 'bottom' | 'left' | 'right' | 'top'
  value: number
}

export type ActivityQuadrantProps = {
  metrics: ActivityQuadrantMetric[]
}

const positions = {
  bottom: { x: 50, y: 83 },
  left: { x: 16, y: 50 },
  right: { x: 84, y: 50 },
  top: { x: 50, y: 17 },
}

export function ActivityQuadrant({ metrics }: ActivityQuadrantProps) {
  const points = metrics
    .map((metric) => {
      const position = positions[metric.position]
      const distance = Math.max(0, Math.min(metric.value, 100)) / 100
      const x = 50 + (position.x - 50) * distance
      const y = 50 + (position.y - 50) * distance

      return `${x},${y}`
    })
    .join(' ')

  return (
    <figure className="jui-activity-quadrant">
      <svg aria-label="Activity overview" role="img" viewBox="0 0 100 100">
        <line className="jui-activity-quadrant__axis" x1="8" x2="92" y1="50" y2="50" />
        <line className="jui-activity-quadrant__axis" x1="50" x2="50" y1="8" y2="92" />
        <polygon className="jui-activity-quadrant__shape" points={points} />
        {metrics.map((metric) => {
          const position = positions[metric.position]
          const distance = Math.max(0, Math.min(metric.value, 100)) / 100
          const x = 50 + (position.x - 50) * distance
          const y = 50 + (position.y - 50) * distance

          return <circle className="jui-activity-quadrant__point" cx={x} cy={y} key={metric.position} r="2.2" />
        })}
      </svg>
      {metrics.map((metric) => (
        <figcaption className={`jui-activity-quadrant__label jui-activity-quadrant__label--${metric.position}`} key={metric.position}>
          <strong>{metric.value}%</strong>
          <span>{metric.label}</span>
        </figcaption>
      ))}
    </figure>
  )
}

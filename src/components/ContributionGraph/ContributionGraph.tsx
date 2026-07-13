import './ContributionGraph.css'

export type ContributionGraphDay = {
  date: string
  label?: string
  value: number
}

export type ContributionGraphProps = {
  days: ContributionGraphDay[]
  max?: number
  title?: string
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function ContributionGraph({ days, max, title }: ContributionGraphProps) {
  const maxValue = max ?? Math.max(...days.map((day) => day.value), 1)
  const monthLabels = days.reduce<Array<{ label: string; week: number }>>((labels, day, index) => {
    const date = new Date(`${day.date}T00:00:00`)
    const label = months[date.getMonth()]
    const week = Math.floor(index / 7) + 1

    if (labels.at(-1)?.label !== label) {
      labels.push({ label, week })
    }

    return labels
  }, [])

  return (
    <section className="jui-contribution-graph">
      {title ? <h3>{title}</h3> : null}
      <div className="jui-contribution-graph__viewport">
        <div className="jui-contribution-graph__months" aria-hidden="true">
          {monthLabels.map((month) => (
            <span key={`${month.label}-${month.week}`} style={{ gridColumn: month.week }}>
              {month.label}
            </span>
          ))}
        </div>
        <div className="jui-contribution-graph__body">
          <div className="jui-contribution-graph__weekdays" aria-hidden="true">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          <div aria-label={title ?? 'Contribution graph'} className="jui-contribution-graph__grid" role="img">
            {days.map((day) => {
              const intensity = Math.ceil((Math.min(day.value, maxValue) / maxValue) * 4)

              return (
                <span
                  aria-label={day.label ?? `${day.date}: ${day.value} contributions`}
                  className={`jui-contribution-graph__day jui-contribution-graph__day--${intensity}`}
                  key={day.date}
                  title={day.label ?? `${day.date}: ${day.value} contributions`}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="jui-contribution-graph__legend" aria-hidden="true">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <i className={`jui-contribution-graph__day jui-contribution-graph__day--${level}`} key={level} />
        ))}
        <span>More</span>
      </div>
    </section>
  )
}

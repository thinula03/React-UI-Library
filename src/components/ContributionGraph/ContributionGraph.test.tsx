import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContributionGraph } from './ContributionGraph'

describe('ContributionGraph', () => {
  it('renders contribution days with accessible labels', () => {
    render(
      <ContributionGraph
        days={[
          { date: '2026-01-01', label: 'New year: 4 contributions', value: 4 },
          { date: '2026-01-02', value: 0 },
        ]}
        max={10}
        title="2 contributions"
      />,
    )

    expect(screen.getByText('2 contributions')).toBeInTheDocument()
    expect(screen.getByLabelText('New year: 4 contributions')).toBeInTheDocument()
    expect(screen.getByLabelText('2026-01-02: 0 contributions')).toBeInTheDocument()
  })
})

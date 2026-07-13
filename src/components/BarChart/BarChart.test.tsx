import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BarChart } from './BarChart'

describe('BarChart', () => {
  it('renders labels and values', () => {
    render(
      <BarChart
        data={[
          { label: 'Commits', value: 87 },
          { label: 'Issues', value: 1 },
        ]}
      />,
    )

    expect(screen.getByText('Commits')).toBeInTheDocument()
    expect(screen.getByText('87')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Bar chart' })).toBeInTheDocument()
  })
})

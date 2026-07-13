import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sparkline } from './Sparkline'

describe('Sparkline', () => {
  it('renders a polyline for provided values', () => {
    render(<Sparkline data={[1, 2, 3]} data-testid="sparkline" />)

    const sparkline = screen.getByTestId('sparkline')
    const line = sparkline.querySelector('polyline')

    expect(line).toBeTruthy()
    expect(line?.getAttribute('points')).toContain(',')
  })
})

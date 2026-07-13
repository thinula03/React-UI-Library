import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MetricRing } from './MetricRing'

describe('MetricRing', () => {
  it('clamps and announces progress percentage', () => {
    render(<MetricRing label="Score" max={100} value={120} />)

    const progress = screen.getByRole('progressbar')

    expect(progress.getAttribute('aria-valuenow')).toBe('100')
    expect(screen.getByText('Score')).toBeTruthy()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingTable } from './PricingTable'

describe('PricingTable', () => {
  it('renders tiers, features, and highlighted labels', () => {
    render(
      <PricingTable
        tiers={[
          {
            cta: 'Start',
            description: 'For new teams',
            features: ['Typed APIs', 'Design tokens'],
            highlighted: true,
            name: 'Studio',
            price: '$49',
            suffix: '/seat',
          },
        ]}
      />,
    )

    expect(screen.getByText('Studio')).toBeInTheDocument()
    expect(screen.getByText('Popular')).toBeInTheDocument()
    expect(screen.getByText('Typed APIs')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument()
  })
})

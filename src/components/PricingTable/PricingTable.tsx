import type { ReactNode } from 'react'
import { Badge } from '../Badge'
import { Button } from '../Button'
import './PricingTable.css'

export type PricingTier = {
  cta: ReactNode
  description: ReactNode
  features: ReactNode[]
  highlighted?: boolean
  name: ReactNode
  price: ReactNode
  suffix?: ReactNode
}

export type PricingTableProps = {
  tiers: PricingTier[]
}

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="jui-pricing-table">
      {tiers.map((tier, index) => (
        <section
          className={`jui-pricing-table__tier ${
            tier.highlighted ? 'jui-pricing-table__tier--highlighted' : ''
          }`}
          key={index}
        >
          <div className="jui-pricing-table__header">
            <div>
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>
            </div>
            {tier.highlighted ? <Badge variant="primary">Popular</Badge> : null}
          </div>
          <div className="jui-pricing-table__price">
            <strong>{tier.price}</strong>
            {tier.suffix ? <span>{tier.suffix}</span> : null}
          </div>
          <ul className="jui-pricing-table__features">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          <Button fullWidth variant={tier.highlighted ? 'primary' : 'secondary'}>
            {tier.cta}
          </Button>
        </section>
      ))}
    </div>
  )
}

import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { client } from 'stories/data/testData-client'
import { NbosClientOverview } from './NbosClientOverview'

const ClientWrapper = props => {
  return <NbosClientOverview pageData={client} />
}

const renderClient = props => {
  return render(<ClientWrapper {...props} />)
}

describe('NbosClientOverview', () => {
  it('should display data from dataset', () => {
    renderClient()
    const total_rel = screen.getByText(client.total_relationships).textContent
    const credit_only = screen.getByText(
      client.credit_only_relationships,
    ).textContent
    const low_rev = screen.getByText(
      client.relationships_low_revenue,
    ).textContent
    const top_prosp = screen.getByText(client.top_prospects).textContent
    const suspects = screen.getByText(client.suspects).textContent

    expect(total_rel).toBe('56')
    expect(credit_only).toBe('4')
    expect(low_rev).toBe('6')
    expect(top_prosp).toBe('14')
    expect(suspects).toBe('0')
  })

  it('should display correct labels', () => {
    renderClient()
    screen.getByText('TOTAL RELATIONSHIPS')
    screen.getByText('Credit Only Relationships')
    screen.getByText('Relationships with <$25k TTM Revenue')
    screen.getByText('Top Prospects')
    screen.getByText('Suspects')
  })
})

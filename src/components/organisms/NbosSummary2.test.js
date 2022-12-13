import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { summary2 } from 'stories/data/testData-summary'
import { NbosSummary2 } from './NbosSummary2'

const Summary2Wrapper = props => {
  return <NbosSummary2 pageData={summary2} />
}

const renderSummary2 = props => {
  return render(<Summary2Wrapper {...props} />)
}

describe('NbosSummary2', () => {
  it('should display data from dataset', () => {
    renderSummary2()
    const rev = screen.getByText(summary2.ttm_revenue).textContent

    const raroc = screen.getByText(summary2.ttm_avg_raroc).textContent

    const loan_comm = screen.getByText(
      summary2.fee_equivalent_card_percent_load_commit,
    ).textContent

    expect(rev).toBe('$518.89k')
    expect(raroc).toBe('4.41%')
    expect(loan_comm).toBe('0.94%')
  })

  it('should display correct labels', () => {
    renderSummary2()
    screen.getByText('TTM Revenue')
    screen.getByText('TTM Avg RAROC')
    screen.getByText('Fee Equivalent + Card % of Loan Commit')
  })
})

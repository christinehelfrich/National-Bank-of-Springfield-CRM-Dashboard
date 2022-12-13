import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { summary1 } from 'stories/data/testData-summary'
import { NbosSummary1 } from './NbosSummary1'

const Summary1Wrapper = props => {
  return <NbosSummary1 pageData={summary1} />
}

const renderSummary1 = props => {
  return render(<Summary1Wrapper {...props} />)
}

describe('NbosSummary1', () => {
  it('should display data from dataset', () => {
    renderSummary1()
    const tloan_balance = screen.getByText(
      summary1.ttm_avg_loan_balance,
    ).textContent

    const credit_comm = screen.getByText(
      summary1.ttm_avg_credit_commitments,
    ).textContent

    const dep_bal = screen.getByText(summary1.ttm_deposit_balance).textContent

    expect(tloan_balance).toBe('$519.09k')
    expect(credit_comm).toBe('$549.13k')
    expect(dep_bal).toBe('$0.00')
  })

  it('should display correct labels', () => {
    renderSummary1()
    screen.getByText('TTM Avg Loan Balance')
    screen.getByText('TTM Avg Credit Commitments')
    screen.getByText('TTM Deposit Balance')
  })
})

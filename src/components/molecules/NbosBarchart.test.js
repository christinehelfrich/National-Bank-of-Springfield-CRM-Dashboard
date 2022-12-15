import React, { Component, useState } from 'react'
import { NbosBarchart } from './NbosBarchart'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'
import { render, screen } from '@testing-library/react'
import { convertNum } from 'utilities/convertNum'

const BarchartWrapper = props => {
  return (
    <NbosBarchart
      data={outcomeMetricsTable}
      categories={[
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ]}
      clientId={4}
      bgColor="#1B6AF8"
      datasetOneLabel="RM"
      datasetTwoLabel="This Time Last Year"
    />
  )
}
const renderBarchart = props => {
  return render(<BarchartWrapper {...props} />)
}

describe('NbosBarchart', () => {
  it('categories should be correct', () => {
    renderBarchart()

    screen.getByText('Loan Production')
    screen.getByText('Deposit Growth')
    screen.getByText('TM Growth')
    screen.getByText('New Clients')
  })

  it('should display data in the right format', () => {
    const { container } = renderBarchart()

    const loan_prod_y1 = container.getElementsByClassName(
      'highcharts-data-label',
    )

    expect(loan_prod_y1[0].textContent).toMatch(/[\d+] K/)
  })

  it('should switch x and y axises', () => {
    const { container } = renderBarchart()
    const yaxis = container.getElementsByClassName('highcharts-xaxis')
    expect(yaxis[0]).toBeVisible()
  })

  it('should have a legend', () => {
    renderBarchart()
    screen.getByText('RM')
    screen.getByText('This Time Last Year')
  })

  it('should display last years data as grey, adn this years as blue', () => {
    const { container } = renderBarchart()
    const lastyear = container.getElementsByClassName('highcharts-point')
    expect(lastyear[0].getAttribute('fill')).toBe('#1B6AF8')
    expect(lastyear[4].getAttribute('fill')).toBe('lightgrey')
  })

  it('should new clients data as red if under 4', () => {
    const { container } = renderBarchart()
    const lastyear = container.getElementsByClassName('highcharts-point')
    expect(lastyear[3].getAttribute('fill')).toBe('red')
  })
})

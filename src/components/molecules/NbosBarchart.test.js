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
    renderBarchart()

    // const loan_prod_y1 = screen.getByText(
    //   outcomeMetricsTable[1].loan_prod_y1,
    // ).textContent
  })

  it('should switch x and y axises', () => {
    renderBarchart()
  })

  it('should have a legend', () => {
    renderBarchart()
    screen.getByText('RM')
    screen.getByText('This Time Last Year')
  })

  it('should display last years data as grey, adn this years as blue', () => {
    // const { container } = renderBarchart()
    // const lastyear = container.getElementsByClassName('highcharts-point')
    // expect(lastyear).toHaveAttribute('fill')
  })

  it('should new clients data as red if under 4', () => {
    renderBarchart()
  })
})

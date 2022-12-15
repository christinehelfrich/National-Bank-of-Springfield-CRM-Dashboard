import React from 'react'

import { NbosColumnChart } from './NbosColumnChart'
import { OpportunitiesSummaryTable } from '../../stories/data/opportunitiesSummaryTable'

import { render, screen } from '@testing-library/react'

const ColumnChartWrapper = props => {
  return (
    <NbosColumnChart
      data={OpportunitiesSummaryTable}
      categories={['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD']}
      yTitle="Revenue"
      bgColor="#1B6AF8"
      title="Current vs. Same Time Last year"
      datasetOneLabel="2021"
      datasetTwoLabel="2020"
    />
  )
}

const renderColumnChart = props => {
  return render(<ColumnChartWrapper {...props} />)
}

describe('NbosBarchart', () => {
  it('chart should be defined', () => {
    const container = renderColumnChart()

    expect(container).toBeDefined()
  })

  it('categories should show up', () => {
    renderColumnChart()

    screen.getByText('Stage 1')
    screen.getByText('Stage 2')
    screen.getByText('Stage 3')
    screen.getByText('Stage 4')
    screen.getByText('Booked YTD')
  })

  it('should display a title', () => {
    renderColumnChart()

    const title = screen.getByText('Current vs. Same Time Last year')
    expect(title).toBeVisible()
  })

  it('should display a legend', () => {
    renderColumnChart()

    const yearone = screen.getByText('2020')
    const yeartwo = screen.getByText('2021')

    expect(yearone).toBeVisible()
    expect(yeartwo).toBeVisible()
  })

  it('should display a y axis label', () => {
    renderColumnChart()

    const ylabel = screen.getByText('Revenue')

    expect(ylabel).toBeVisible()
  })
})

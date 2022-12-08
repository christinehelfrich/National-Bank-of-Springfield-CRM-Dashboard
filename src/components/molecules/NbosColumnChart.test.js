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
      title="Current VS Same Time Last Year"
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
})

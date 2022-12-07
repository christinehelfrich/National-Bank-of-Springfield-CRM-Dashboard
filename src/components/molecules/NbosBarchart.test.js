import React, { Component, useState } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NbosBarchart } from './NbosBarchart'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { render, screen } from '@testing-library/react'
Enzyme.configure({ adapter: new Adapter() })
const exampleoptions = {
  chart: {
    type: 'bar',
    style: {
      fontFamily: '',
    },
  },
  legend: {
    align: 'left',
  },
  title: {
    text: 'NA',
    align: 'left',
  },
  xAxis: {
    categories: [],
    tickLength: 500,
    endOnTick: false,
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    visible: false,
    tickLength: 0,
    minorGridLineWidth: 0,
  },
  tooltip: {
    formatter: function () {
      return convertNum(this.y)
    },
  },

  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        formatter: function () {
          return convertNum(this.y)
        },
      },
      borderRadius: 10,
      borderWidth: 10,
    },
  },
  series: [
    {
      name: 'NA',
      data: [],
      lineWidth: 5,
      minPointLength: 100,
      color: '#1B6AF8',
      zoneAxis: 'y',
      zones: [
        {
          value: 3,
          color: 'red',
        },
        {
          color: '#1B6AF8',
        },
      ],
    },
    {
      name: 'NA',
      data: [],
      lineWidth: 5,
      minPointLength: 100,
      color: 'lightgrey',
    },
  ],
  dataLabels: {
    color: '#FFFFFF',
  },
}

const BarchartWrapper = props => {
  const [options, setOptions] = useState(exampleoptions)

  return (
    <NbosBarchart
      data={outcomeMetricsTable}
      categories={[
        'Avg. Overall RM Satisfaction',
        'Client Calls',
        'Prospect Calls',
        'Strategies Updated',
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
  it('should render the HighCharts element', () => {
    const wrapper = shallow(
      <NbosBarchart
        data={outcomeMetricsTable}
        categories={[
          'Avg. Overall RM Satisfaction',
          'Client Calls',
          'Prospect Calls',
          'Strategies Updated',
        ]}
        clientId={4}
        bgColor="#1B6AF8"
        datasetOneLabel="RM"
        datasetTwoLabel="This Time Last Year"
      />,
    )

    // const highchartsElement = wrapper.find('.highcharts')

    expect(
      wrapper.contains(
        <HighchartsReact
          classsName="highcharts"
          highcharts={Highcharts}
          options={exampleoptions}
        />,
      ),
    )
  })

  it('chart should be defined', () => {
    const { container } = render(
      <NbosBarchart
        data={outcomeMetricsTable}
        categories={[
          'Avg. Overall RM Satisfaction',
          'Client Calls',
          'Prospect Calls',
          'Strategies Updated',
        ]}
        clientId={4}
        bgColor="#1B6AF8"
        datasetOneLabel="RM"
        datasetTwoLabel="This Time Last Year"
      />,
    )

    expect(container).toBeDefined()
  })

  it('categories should show up', () => {
    const wrapper = renderBarchart()

    screen.getByText('Avg. Overall RM Satisfaction')
    screen.getByText('Client Calls')
    screen.getByText('Prospect Calls')
    screen.getByText('Strategies Updated')
  })
})

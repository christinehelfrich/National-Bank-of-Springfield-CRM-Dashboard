import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
// Load Highcharts
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { users } from 'stories/data/testData-users'
import { convertNum } from 'utilities/convertNum'
import { BehaviorMetricsTable as behaviorMetricsTable } from 'stories/data/behaviorMetricsTable'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

export const NbosBarchart = ({
  data,
  categories,
  clientId,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  const datasetOne = []
  const datasetTwo = []

  for (const item in data[clientId]) {
    if (item.slice(-2) === 'y1') {
      const chartData1 = data[clientId][item]

      datasetOne.push(chartData1)
    } else if (item.slice(-2) === 'y2') {
      const chartData2 = data[clientId][item]

      datasetTwo.push(chartData2)
    } else if (item === 'user_id') {
      continue
    } else {
      datasetOne.push(data[clientId][item])
      datasetTwo.push(data[clientId][item])
    }
  }

  const [options, setOptions] = useState({
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
  })

  const updateSeries = () => {
    setOptions({
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
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: categories,
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
          name: datasetOneLabel,
          data: datasetOne,
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
          name: datasetTwoLabel,
          data: datasetTwo,
          lineWidth: 5,
          minPointLength: 100,
          color: 'lightgrey',
        },
      ],
      dataLabels: {
        color: '#FFFFFF',
      },
    })
  }

  useEffect(() => {
    updateSeries()
  }, [data])

  return (
    <div>
      <HighchartsReact
        data-testid="barchart"
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

NbosBarchart.propTypes = {
  data: PropTypes.array || PropTypes.string,
  categories: PropTypes.array,
  clientId: PropTypes.number,
  bgColor: PropTypes.string,
  datasetOneLabel: PropTypes.string,
  datasetTwoLabel: PropTypes.string,
}

NbosBarchart.defaultProps = {
  data: [
    { notprovided: 10, notprovided2: 10 },
    { notprovided: 10, notprovided2: 10 },
  ],
  categories: ['Not Provided', 'Not Provided'],
  clientId: 0,
  bgColor: 'black',
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

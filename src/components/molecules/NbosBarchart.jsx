import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { users } from 'stories/data/testData-users'
import { convertNum } from 'services/convertNum'
import { BehaviorMetricsTable } from 'stories/data/behaviorMetricsTable'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

const options = {
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
      colorByPoint: true,
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
    },
    {
      name: 'NA',
      data: [],
      lineWidth: 5,
    },
  ],
  dataLabels: {
    color: '#FFFFFF',
  },
}

export const NbosBarchart = ({
  data,
  clientId,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  let datasetOne = []
  let datasetTwo = []
  let rowData = []
  let categories = []

  if (data == 'BehaviorMetricsTable') {
    rowData = BehaviorMetricsTable
    categories = [
      'Avg. Overall RM Satisfaction',
      'Client Calls',
      'Prospect Calls',
      'Strategies Updated',
    ]
    if (rowData[clientId].prospect_calls_y1 <= 2) {
      options.series[0].colors = [bgColor, bgColor, 'red', bgColor]
    }
  } else if (data == 'outcomeMetricsTable') {
    rowData = outcomeMetricsTable
    categories = [
      'Loan Production',
      'Deposit Growth',
      'TM Growth',
      'New Clients',
    ]
    if (rowData[clientId].new_clients_y1 <= 2) {
      options.series[0].colors = [bgColor, bgColor, bgColor, 'red']
    }
  } else {
    rowData = [{ NotProvided: 1, NotProvided: 1 }]
    categories = ['Not Provided', 'Not Provided']
  }

  for (const item in rowData[clientId]) {
    if (item.slice(-2) == 'y1') {
      let chartData1 = rowData[clientId][item]
      datasetOne.push(chartData1)
    } else if (item.slice(-2) == 'y2') {
      let chartData2 = rowData[clientId][item]
      datasetTwo.push(chartData2)
    } else if (item == 'user_id') {
    } else {
      datasetOne.push(rowData[clientId][item])
      datasetTwo.push(rowData[clientId][item])
    }
  }

  //options.title.text = `${users[clientId].tl_first_name} ${users[clientId].tl_last_name} VS This Time Last Year`
  options.title.text = ''
  options.xAxis.categories = categories
  options.series[0].color = bgColor
  options.series[0].name = datasetOneLabel
  options.series[0].data = datasetOne
  options.series[1].name = datasetTwoLabel
  options.series[1].data = datasetTwo

  options.series[1].colors = [
    'lightgrey',
    'lightgrey',
    'lightgrey',
    'lightgrey',
  ]

  options.series[0].colors = [bgColor, bgColor, bgColor, bgColor]

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

NbosBarchart.propTypes = {
  data: PropTypes.oneOf(['BehaviorMetricsTable', 'outcomeMetricsTable', '']),
  clientId: PropTypes.number,
  bgColor: PropTypes.string,
  datasetOneLabel: PropTypes.string,
  datasetTwoLabel: PropTypes.string,
}

NbosBarchart.defaultProps = {
  data: '',
  clientId: 0,
  bgColor: 'black',
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

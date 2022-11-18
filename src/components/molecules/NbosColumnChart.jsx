import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosText } from 'components/atoms/NbosText'
import { convertNum } from 'services/convertNum'
import { OpportunitiesSummaryTable } from '../../stories/data/opportunitiesSummaryTable'

const options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'NA',
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    title: {
      text: 'NA',
    },
    labels: {
      enabled: true,
    },
  },
  tooltip: {
    formatter: function () {
      return '$' + convertNum(this.y)
    },
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
        formatter: function () {
          return convertNum(this.y)
        },
      },

      groupPadding: 0.2,
      pointPadding: 0,
    },
  },
  series: [
    {
      name: 'NA',
      data: [],
      color: 'grey',
    },
    {
      name: 'NA',
      data: [],
      color: '#adcaf7',
    },
  ],
  dataLabels: {
    color: '#FFFFFF',
  },
}

export const NbosColumnChart = ({
  data,
  title,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  let datasetOne = []
  let datasetTwo = []
  let allRowData = []
  let categories = []
  let yTitle = 'Not Provided'

  if (data == 'OpportunitiesSummaryTable') {
    allRowData = OpportunitiesSummaryTable
    categories = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD']
    yTitle = 'Revenue'
    for (const item in allRowData[0]) {
      if (item != 'year') {
        let datasetOneItem = allRowData[1][item]
        datasetOne.push(datasetOneItem)

        let datasetTwoItem = allRowData[2][item]
        datasetTwo.push(datasetTwoItem)
      }
    }
  } else {
    allRowData = [{ NotProvided: 1 }, { NotProvided: 1 }]
    categories = ['NotProvided']

    for (const item in allRowData[0]) {
      let chartData1 = allRowData[0][item]
      datasetOne.push(chartData1)

      let chartData2 = allRowData[1][item]
      datasetTwo.push(chartData2)
    }
  }

  options.title.text = title
  options.xAxis.categories = categories
  options.yAxis.title.text = yTitle
  options.series[0].color = bgColor
  options.series[0].name = datasetOneLabel
  options.series[0].data = datasetOne
  options.series[1].name = datasetTwoLabel
  options.series[1].data = datasetTwo

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

NbosColumnChart.propTypes = {
  data: PropTypes.oneOf(['OpportunitiesSummaryTable', '']),
  bgColor: PropTypes.string,
  title: PropTypes.string,
  datasetOneLabel: PropTypes.string,
  datasetTwoLabel: PropTypes.string,
}

NbosColumnChart.defaultProps = {
  data: '',
  bgColor: 'black',
  title: 'No Title Propvided',
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

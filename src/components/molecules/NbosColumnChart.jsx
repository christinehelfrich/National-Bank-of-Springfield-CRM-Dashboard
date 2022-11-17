import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosText } from 'components/atoms/NbosText'
import { convertNum } from 'services/convertNum'

const options = {
  chart: {
    type: 'column',
  },
  title: {
    useHTML: true,
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
  categories,
  yTitle,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  let datasetOne = []
  let datasetTwo = []

  datasetOne.push(data[1].stage_1)
  datasetOne.push(data[1].stage_2)
  datasetOne.push(data[1].stage_3)
  datasetOne.push(data[1].stage_4)
  datasetOne.push(data[1].booked_ytd)

  datasetTwo.push(data[2].stage_1)
  datasetTwo.push(data[2].stage_2)
  datasetTwo.push(data[2].stage_3)
  datasetTwo.push(data[2].stage_4)
  datasetTwo.push(data[2].booked_ytd)

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
  data: PropTypes.array,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  yTitle: PropTypes.string,
  categories: PropTypes.array,
  datasetOne: PropTypes.array,
  datasetOneLabel: PropTypes.string,
  datasetTwo: PropTypes.array,
  datasetTwoLabel: PropTypes.string,
}

NbosColumnChart.defaultProps = {
  data: [
    {
      year: 0,
      stage_1: 1,
      stage_2: 1,
      stage_3: 1,
      stage_4: 1,
      booked_ytd: 1,
    },
    {
      year: 0,
      stage_1: 1,
      stage_2: 1,
      stage_3: 1,
      stage_4: 1,
      booked_ytd: 1,
    },
    {
      year: 0,
      stage_1: 1,
      stage_2: 1,
      stage_3: 1,
      stage_4: 1,
      booked_ytd: 1,
    },
  ],
  bgColor: 'black',
  title: 'No Title Propvided',
  yTitle: 'No Title Provided',
  categories: [
    'Not Provided',
    'Not Provided',
    'Not Provided',
    'Not Provided',
    'Not Provided',
  ],
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

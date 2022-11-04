import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosText } from 'components/atoms/NbosText'

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

  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
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
  title,
  categories,
  yTitle,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
  datasetOne,
  datasetTwo,
}) => {
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
  bgColor: 'black',
  title: 'No Title Propvided',
  yTitle: 'No Title Provided',
  categories: ['Not Provided', 'Not Provided'],
  datasetOne: [1, 1],
  datasetOneLabel: 'Not Provided',
  datasetTwo: [1, 1],
  datasetTwoLabel: 'Not Provided',
}

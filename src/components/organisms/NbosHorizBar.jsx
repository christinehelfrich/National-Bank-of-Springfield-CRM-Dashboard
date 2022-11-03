import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'bar',
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

  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
      borderRadius: 10,
      borderWidth: 10,
    },
  },
  series: [
    {
      name: 'NA',
      data: [],
      color: 'grey',
      lineWidth: 5,
    },
    {
      name: 'NA',
      data: [],
      color: 'lightgrey',
      lineWidth: 5,
    },
  ],
  dataLabels: {
    color: '#FFFFFF',
  },
}

export const NbosHorizBar = ({
  title,
  categories,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
  datasetOne,
  datasetTwo,
}) => {
  options.title.text = title
  options.xAxis.categories = categories
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

NbosHorizBar.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.array,
  datasetOne: PropTypes.array,
  datasetOneLabel: PropTypes.string,
  datasetTwo: PropTypes.array,
  datasetTwoLabel: PropTypes.string,
}

NbosHorizBar.defaultProps = {
  bgColor: 'black',
  title: 'No Title Propvided',
  categories: ['Not Provided', 'Not Provided'],
  datasetOne: [1, 1],
  datasetOneLabel: 'Not Provided',
  datasetTwo: [1, 1],
  datasetTwoLabel: 'Not Provided',
}

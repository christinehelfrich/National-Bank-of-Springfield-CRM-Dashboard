import PropTypes from 'prop-types'
import React from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { users } from 'stories/data/testData-users'
import { convertNum } from 'services/convertNum'

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

export const NbosBarchart = ({
  data,
  clientId,
  categories,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  let datasetOne = []
  let datasetTwo = []

  datasetOne.push(data[clientId].avg_overall_rm_sat_y1)
  datasetOne.push(data[clientId].client_calls_y1)
  datasetOne.push(data[clientId].prospect_calls_y1)
  datasetOne.push(data[clientId].strat_uploaded_y1)

  datasetTwo.push(data[clientId].avg_overall_rm_sat_y2)
  datasetTwo.push(data[clientId].client_calls_y2)
  datasetTwo.push(data[clientId].prospect_calls_y2)
  datasetTwo.push(data[clientId].strat_uploaded_y2)

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

  if (data[clientId].prospect_calls_y1 <= 2) {
    options.series[0].colors = [bgColor, bgColor, 'red', bgColor]
  } else {
    options.series[0].colors = [bgColor, bgColor, bgColor, bgColor]
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

NbosBarchart.propTypes = {
  data: PropTypes.array,
  clientId: PropTypes.number,
  bgColor: PropTypes.string,
  categories: PropTypes.array,
  datasetOneLabel: PropTypes.string,
  datasetTwoLabel: PropTypes.string,
}

NbosBarchart.defaultProps = {
  data: [
    {
      user_id: 1,
      avg_overall_rm_sat_y1: 1,
      avg_overall_rm_sat_y2: 1,
      client_calls_y1: 1,
      client_calls_y2: 1,
      prospect_calls_y1: 1,
      prospect_calls_y2: 1,
      strat_uploaded_y1: 1,
      strat_uploaded_y2: 1,
    },
  ],
  clientId: 0,
  bgColor: 'black',
  categories: ['Not Provided', 'Not Provided', 'Not Provided', 'Not Provided'],
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

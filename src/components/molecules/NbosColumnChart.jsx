import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
// Load Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosText } from 'components/atoms/NbosText'
import { convertNum } from 'utilities/convertNum'
import { OpportunitiesSummaryTable } from '../../stories/data/opportunitiesSummaryTable'

export const NbosColumnChart = ({
  data,
  categories,
  yTitle,
  title,
  bgColor,
  datasetOneLabel,
  datasetTwoLabel,
}) => {
  const datasetOne = []
  const datasetTwo = []

  for (const item in data[0]) {
    if (item !== 'year') {
      const datasetOneItem = data[1][item]
      datasetOne.push(datasetOneItem)

      const datasetTwoItem = data[2][item]
      datasetTwo.push(datasetTwoItem)
    }
  }

  const [options, setOptions] = useState({
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
        return `$ ${convertNum(this.y)}`
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
        data: datasetOne,
        color: 'grey',
      },
      {
        name: 'NA',
        data: datasetTwo,
        color: '#adcaf7',
      },
    ],
    dataLabels: {
      color: '#FFFFFF',
    },
  })

  const updateSeries = () => {
    setOptions({
      chart: {
        type: 'column',
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: yTitle,
        },
        labels: {
          enabled: true,
        },
      },
      tooltip: {
        formatter: function () {
          return `$ ${convertNum(this.y)}`
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
          name: datasetOneLabel,
          data: datasetOne,
          color: bgColor,
        },
        {
          name: datasetTwoLabel,
          data: datasetTwo,
          color: '#adcaf7',
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

  options.series[0].color = bgColor

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

NbosColumnChart.propTypes = {
  data: PropTypes.array,
  categories: PropTypes.array,
  yTitle: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  datasetOneLabel: PropTypes.string,
  datasetTwoLabel: PropTypes.string,
}

NbosColumnChart.defaultProps = {
  data: [{ NotProvided: 1 }, { NotProvided: 1 }, { NotProvided: 1 }],
  categories: ['NotProvided'],
  yTitle: 'Not Provided',
  bgColor: 'black',
  title: 'No Title Propvided',
  datasetOneLabel: 'Not Provided',
  datasetTwoLabel: 'Not Provided',
}

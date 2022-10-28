import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export function NbosHighcharts() {
  const chartTitle = 'Highcharts Example'
  const options = {
    title: {
      text: chartTitle,
    },
    series: [
      {
        data: [1, 2, 3],
        name: 'Test Data',
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

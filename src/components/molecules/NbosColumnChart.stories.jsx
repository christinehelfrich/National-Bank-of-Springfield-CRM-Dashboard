import { NbosColumnChart } from './NbosColumnChart'
import { OpportunitiesSummaryTable } from '../../stories/data/opportunitiesSummaryTable'

export default {
  title: 'Molecules/NbosColumnChart',
  component: NbosColumnChart,
}

const Template = args => <NbosColumnChart {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const CurrentVSSameTimeLastYear = Template.bind({})
CurrentVSSameTimeLastYear.args = {
  data: OpportunitiesSummaryTable,
  bgColor: '#1B6AF8',
  title: 'Current VS Same Time Last Year',
  yTitle: 'Revenue',
  categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD'],
  datasetOneLabel: '2021',
  datasetTwoLabel: '2020',
}

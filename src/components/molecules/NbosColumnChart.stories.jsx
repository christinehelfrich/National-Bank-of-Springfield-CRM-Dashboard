import { NbosColumnChart } from './NbosColumnChart'

export default {
  title: 'Molecules/NbosColumnChart',
  component: NbosColumnChart,
}

const Template = args => <NbosColumnChart {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const CurrentVSSameTimeLastYear = Template.bind({})
CurrentVSSameTimeLastYear.args = {
  bgColor: '#1B6AF8',
  title: 'Current VS Same Time Last Year',
  yTitle: 'Revenue',
  categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD'],
  datasetOne: [1300, 1350, 800, 1600, 1200],
  datasetOneLabel: '2021',
  datasetTwo: [1600, 1250, 600, 1600, 1100],
  datasetTwoLabel: '2020',
}

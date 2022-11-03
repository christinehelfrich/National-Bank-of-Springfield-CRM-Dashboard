import { NbosHorizBar } from './NbosHorizBar'

export default {
  title: 'Organisms/NbosHorizBar',
  component: NbosHorizBar,
}

const Template = args => <NbosHorizBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  bgColor: '#1B6AF8',
  title: 'Patrick Barnes VS This Time Last Year',
  categories: [
    'Avg. Overall RM Satisfaction',
    'Client Calls',
    'Prospect Calls',
    'Strategies Updated',
  ],
  datasetOne: [4.2, 54, 2, 6],
  datasetOneLabel: 'RM',
  datasetTwo: [5, 84, 11, 4],
  datasetTwoLabel: 'This Time Last Year',
}

import { NbosBarchart } from './NbosBarchart'
import { BehaviorMetricsTable } from 'stories/data/behaviorMetricsTable'

export default {
  title: 'Molecules/NbosBarchart',
  component: NbosBarchart,
}

const Template = args => <NbosBarchart {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PatrickBarnesVSThisTimeLastYear = Template.bind({})
PatrickBarnesVSThisTimeLastYear.args = {
  data: BehaviorMetricsTable,
  clientId: 1,
  bgColor: '#1B6AF8',
  categories: [
    'Avg. Overall RM Satisfaction',
    'Client Calls',
    'Prospect Calls',
    'Strategies Updated',
  ],
  datasetOneLabel: 'RM',
  datasetTwoLabel: 'This Time Last Year',
}

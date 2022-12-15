import { NbosBarchart } from './NbosBarchart'
import { BehaviorMetricsTable as behaviorMetricsTable } from 'stories/data/behaviorMetricsTable'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

export default {
  title: 'Molecules/NbosBarchart',
  component: NbosBarchart,
}

const Template = args => <NbosBarchart {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const BehaviorMetricsTable = Template.bind({})
BehaviorMetricsTable.args = {
  data: behaviorMetricsTable,
  categories: [
    'Avg. Overall RM Satisfaction',
    'Client Calls',
    'Prospect Calls',
    'Strategies Updated',
  ],
  clientId: 4,
  bgColor: '#1B6AF8',
  datasetOneLabel: 'RM',
  datasetTwoLabel: 'This Time Last Year',
}

export const OutcomeMetricsTable = Template.bind({})
OutcomeMetricsTable.args = {
  data: outcomeMetricsTable,
  categories: ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients'],
  clientId: 0,
  bgColor: '#1B6AF8',
  datasetOneLabel: 'RM',
  datasetTwoLabel: 'This Time Last Year',
}

import { NbosSelector } from './NbosSelector'

export default {
  title: 'Molecules/NbosSelector',
  component: NbosSelector,
}

const Template = args => <NbosSelector {...args} />

export const Large = Template.bind({})
Large.args = {
  bgColor: '#1B6AF8',
  labels: [
    'All',
    'Credit',
    'Deposit',
    'Capital Markets',
    'Treasury Management',
    'Other',
  ],
  onChange: alignment => {
    console.log(alignment)
  },
}

export const Small = Template.bind({})
Small.args = {
  bgColor: '#1B6AF8',
  labels: ['Outcome Metrics', 'Behavior Metrics'],
  onChange: alignment => {
    console.log(alignment)
  },
}

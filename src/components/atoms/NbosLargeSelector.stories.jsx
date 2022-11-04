import { NbosLargeSelector } from './NbosLargeSelector'

export default {
  title: 'Atoms/NbosLargeSelector',
  component: NbosLargeSelector,
}

const Template = args => <NbosLargeSelector {...args} />

export const Primary = Template.bind({})
Primary.args = {
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

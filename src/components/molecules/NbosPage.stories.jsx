import { NbosPage } from './NbosPage'

export default {
  title: 'Molecules/NbosPage',
  component: NbosPage,
}

const Template = args => <NbosPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Total = Template.bind({})
Total.args = {
  key: 1,
  title: 'Total Relationships',
  count: 56,
  bgColor: '#fff',
}

export const CreditOnly = Template.bind({})
CreditOnly.args = {
  key: 4,
  title: 'Credit Only Relationships',
  count: 6,
  bgColor: '#fff',
}

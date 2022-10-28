import { NbosDashboard } from './NbosDashboard'
import cards from '../../stories/data/testData-cards'

export default {
  title: 'Organisms/NbosDashboard',
  component: NbosDashboard,
}

const Template = args => <NbosDashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  cards,
}

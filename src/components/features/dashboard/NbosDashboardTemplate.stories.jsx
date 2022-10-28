import { NbosDashboardTemplate } from './NbosDashboardTemplate'
import cards from '../../../stories/data/testData-cards'

export default {
  title: 'Templates/NbosDashboardTemplate',
  component: NbosDashboardTemplate,
}

const Template = args => <NbosDashboardTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {
  cards,
}

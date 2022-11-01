import { NbosDashboardOverviewTemplate } from './NbosDashboardOverviewTemplate'

export default {
  title: 'Templates/NbosDashboardOverviewTemplate',
  component: NbosDashboardOverviewTemplate,
}

const Template = args => <NbosDashboardOverviewTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}

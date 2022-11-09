import { NbosMetricsTemplate } from './NbosOpportunitiesSummaryTemplate'

export default {
  title: 'Templates/NbosMetricsTemplate',
  component: NbosMetricsTemplate,
}

const Template = args => <NbosMetricsTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}

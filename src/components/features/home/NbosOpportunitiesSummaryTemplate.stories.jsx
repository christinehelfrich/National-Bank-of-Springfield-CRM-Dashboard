import { NbosOpportunitiesSummaryTemplate } from './NbosOpportunitiesSummaryTemplate'

export default {
  title: 'Templates/NbosOpportunitiesSummaryTemplate',
  component: NbosOpportunitiesSummaryTemplate,
}

const Template = args => <NbosOpportunitiesSummaryTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}

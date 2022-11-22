import { NbosOpportunitiesTableTemplate } from './NbosOpportunitiesTableTemplate'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'

export default {
  title: 'Templates/NbosOpportunitiesTableTemplate',
  component: NbosOpportunitiesTableTemplate,
}

const testData = [
  {
    Relationship: 'Relationship 1',
    ProductType: 'Loan',
    SalesStage: 'Opportunity',
    Revenue: '4.81',
    DateClosed: '1/1/2021',
  },
  {
    Relationship: 'Relationship 2',
    ProductType: 'Lease',
    SalesStage: 'Proposal',
    Revenue: '5.67',
    DateClosed: '2/1/2021',
  },
  {
    Relationship: 'Relationship 3',
    ProductType: 'Term Loan',
    SalesStage: 'Pending',
    Revenue: '4.18',
    DateClosed: '2/1/2021',
  },
  {
    Relationship: 'Relationship 4',
    ProductType: 'Revolving Credit',
    SalesStage: 'Pending',
    Revenue: '3.78',
    DateClosed: '2/1/2021',
  },
  {
    Relationship: 'Relationship 5',
    ProductType: 'Line of Credit',
    SalesStage: 'Commitment',
    Revenue: '3.78',
    DateClosed: '5/2/2021',
  },
]

const Template = args => <NbosOpportunitiesTableTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}

import { NbosTable } from './NbosTable'

export default {
  title: 'Molecules/NbosTable',
  component: NbosTable,
}

const Template = args => <NbosTable {...args} />

export const OpportunitiesTable = Template.bind({})
OpportunitiesTable.args = {
  rdata: [
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
  ],
  columnNames: [
    {
      field: 'Relationship',
    },
    { field: 'ProductType' },
    { field: 'SalesStage' },
    { field: 'Revenue' },
    { field: 'DateClosed' },
  ],
  rowHeight: 80,
}

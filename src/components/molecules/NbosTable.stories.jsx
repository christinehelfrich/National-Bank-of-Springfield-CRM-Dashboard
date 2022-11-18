import { NbosTable } from './NbosTable'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'

export default {
  title: 'Molecules/NbosTable',
  component: NbosTable,
}

const Template = args => <NbosTable {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const OpportunitiesTable = Template.bind({})
OpportunitiesTable.args = {
  data: 'opportunitiesDetailsTable',
  rowHeight: 80,
  shortenPipe: false,
}

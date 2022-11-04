import { NbosTable } from './NbosTable'

export default {
  title: 'Organisms/NbosTable',
  component: NbosTable,
}

const Template = args => <NbosTable {...args} />

export const Primary = Template.bind({})
Primary.args = {}

import { NbosPageset } from './NbosPageset'
import { client } from '../../stories/data/testData-client'
import { summary1 } from 'stories/data/testData-summary'
import { summary2 } from 'stories/data/testData-summary'

export default {
  title: 'Molecules/NbosPageset',
  component: NbosPageset,
}

const Template = args => <NbosPageset {...args} />

export const Primary = Template.bind({})
Primary.args = {
  pageData: client,
}

export const Client = Template.bind({})
Client.args = {
  pageData: client,
}

export const Summary1 = Template.bind({})
Summary1.args = {
  pageData: summary1,
}

export const Summary2 = Template.bind({})
Summary2.args = {
  pageData: summary2,
}

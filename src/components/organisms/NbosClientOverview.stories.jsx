import { NbosClientOverview } from './NbosClientOverview'
import { client } from '../../stories/data/testData-client'

export default {
  title: 'Organisms/NbosClientOverview',
  component: NbosClientOverview,
}

const Template = args => <NbosClientOverview {...args} />

export const Client = Template.bind({})
Client.args = {
  pageData: client,
}

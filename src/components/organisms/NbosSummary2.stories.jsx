import { NbosSummary2 } from './NbosSummary2'
import { client } from '../../stories/data/testData-client'
import { summary2 } from 'stories/data/testData-summary'

export default {
  title: 'Organisms/NbosSummary2',
  component: NbosSummary2,
}

const Template = args => <NbosSummary2 {...args} />

export const Summary2 = Template.bind({})
Summary2.args = {
  pageData: summary2,
}

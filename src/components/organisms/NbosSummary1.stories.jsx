import { NbosSummary1 } from './NbosSummary1'
import { client } from '../../stories/data/testData-client'
import { summary1 } from 'stories/data/testData-summary'

export default {
  title: 'Organisms/NbosSummary1',
  component: NbosSummary1,
}

const Template = args => <NbosSummary1 {...args} />

export const Summary1 = Template.bind({})
Summary1.args = {
  pageData: summary1,
}

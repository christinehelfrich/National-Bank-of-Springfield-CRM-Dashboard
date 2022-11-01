import { Nbos1Summary } from './Nbos1Summary'
import { client } from '../../stories/data/testData-client'
import { summary1 } from 'stories/data/testData-summary'

export default {
  title: 'Organisms/Nbos1Summary',
  component: Nbos1Summary,
}

const Template = args => <Nbos1Summary {...args} />

export const Summary1 = Template.bind({})
Summary1.args = {
  pageData: summary1,
}

import { NbosCardset } from './NbosCardset'
import cards from '../../stories/data/testData-cards'

export default {
  title: 'Molecules/NbosCardset',
  component: NbosCardset,
}

const Template = args => <NbosCardset {...args} />

export const Primary = Template.bind({})
Primary.args = {
  cards,
}

import { NbosAvatar } from './NbosAvatar'

export default {
  title: 'Atoms/NbosAvatar',
  component: NbosAvatar,
}

const Template = args => <NbosAvatar {...args} />

export const Primary = Template.bind({})
Primary.args = {}

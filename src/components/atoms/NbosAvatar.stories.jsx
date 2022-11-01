import { NbosAvatar } from './NbosAvatar'

export default {
  title: 'Atoms/NbosAvatar',
  component: NbosAvatar,
}

const Template = args => <NbosAvatar {...args} />

export const BrokenImage = Template.bind({})
BrokenImage.args = {}

export const Woman = Template.bind({})
Woman.args = {
  url: 'https://m.media-amazon.com/images/I/31Cd9UQp6eL.jpg',
}

export const Man = Template.bind({})
Man.args = {
  url: 'https://m.media-amazon.com/images/I/41jLBhDISxL.jpg',
}

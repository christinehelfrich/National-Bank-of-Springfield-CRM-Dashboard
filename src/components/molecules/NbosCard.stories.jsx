import { NbosCard } from './NbosCard'

export default {
  title: 'Molecules/NbosCard',
  component: NbosCard,
}

const Template = args => <NbosCard {...args} />

export const TotalProjects = Template.bind({})
TotalProjects.args = {
  key: 1,
  title: 'Total Projects',
  count: 107,
  bgColor: '#9900cc',
  icon: 'auto_awesome_motion',
}

export const GreenProjects = Template.bind({})
GreenProjects.args = {
  key: 4,
  title: 'Green Projects',
  count: 41,
  bgColor: '#009933',
  icon: 'thumb_up',
}

import { NbosSelector } from './NbosSelector'

export default {
  title: 'Atoms/NbosSelector',
  component: NbosSelector,
}

const Template = args => <NbosSelector {...args} />

export const Primary = Template.bind({})
Primary.args = {
  bgColor: '#1B6AF8',
  labelOne: 'Outcome Metrics',
  labelTwo: 'Behavior Metrics',
  onChange: alignment => {
    console.log(alignment)
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  bgColor: '#010101',
  labelOne: 'option 1',
  labelTwo: 'option 2',
}

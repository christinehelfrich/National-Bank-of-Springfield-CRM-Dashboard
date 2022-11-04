import { NbosTextField } from './NbosTextField'

export default {
  title: 'Atoms/NbosTextField',
  component: NbosTextField,
}

const Template = args => <NbosTextField {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const FullWidth = Template.bind({})
FullWidth.args = {
  defaultValue: 'Text',
  label: 'Full Width',
  fullWidth: true,
}

export const Success = Template.bind({})
Success.args = {
  defaultValue: 'Text',
  label: 'Success',
  color: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  defaultValue: 'Text',
  label: 'Warning',
  color: 'warning',
}

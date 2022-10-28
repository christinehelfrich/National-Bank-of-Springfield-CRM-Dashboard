import { NbosUser } from './NbosUser'
import { users } from '@/stories/data/testData-users'

export default {
  component: NbosUser,
  title: 'Molecules/NbosUser',
}

const Template = args => <NbosUser {...args} />

export const Default = Template.bind({})
Default.args = {
  user: {
    id: 1,
    tl_first_name: 'John',
    tl_last_name: 'Doe',
    first_name: 'Steve',
    last_name: 'Pietrek',
    email: 'steve.pietrek@insight.com',
    role: 'Services Manager',
  },
}

export const NullUser = Template.bind({})
NullUser.args = {
  user: null,
}

export const User0 = Template.bind({})
User0.args = {
  user: users[0],
}

export const User1 = Template.bind({})
User1.args = {
  user: users[1],
}

export const User2 = Template.bind({})
User2.args = {
  user: users[2],
}

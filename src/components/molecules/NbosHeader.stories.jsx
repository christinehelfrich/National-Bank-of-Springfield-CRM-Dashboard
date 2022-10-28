import { NbosHeader } from './NbosHeader'

export default {
  title: 'Molecules/NbosHeader',
  component: NbosHeader,
}

const Template = args => <NbosHeader {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
  onLogin: () => {
    alert('onLogin')
  },
  onLogout: () => {
    alert('onLogout')
  },
  onCreateAccount: () => {
    alert('onCreateAccount')
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  onLogin: () => {
    alert('onLogin')
  },
  onLogout: () => {
    alert('onLogout')
  },
  onCreateAccount: () => {
    alert('onCreateAccount')
  },
}

import { NbosText } from './NbosText'

export default {
  title: 'Atoms/NbosText',
  component: NbosText,
}

const Template = args => <NbosText {...args} />

export const Xs = Template.bind([])
Xs.args = {
  size: 'xs',
  text: 'Text',
}

export const Lg = Template.bind([])
Lg.args = {
  size: 'lg',
  text: 'Text',
}

export const LgUppercase = Template.bind([])
LgUppercase.args = {
  size: 'lg',
  text: 'Text',
  uppercase: true,
}

export const Xl = Template.bind([])
Xl.args = {
  size: 'xl',
  text: 'Text',
}

export const Xl2 = Template.bind([])
Xl2.args = {
  size: '2xl',
  text: 'Text',
}

export const Xl3 = Template.bind([])
Xl3.args = {
  size: '3xl',
  text: 'Text',
}

export const Xl4 = Template.bind([])
Xl4.args = {
  size: '4xl',
  text: 'Text',
}

export const Xl5 = Template.bind([])
Xl5.args = {
  size: '5xl',
  text: 'Text',
}

export const Xl6 = Template.bind([])
Xl6.args = {
  size: '6xl',
  text: 'Text',
}

export const Xl7 = Template.bind([])
Xl7.args = {
  size: '7xl',
  text: 'Text',
}

export const Xl8 = Template.bind([])
Xl8.args = {
  size: '8xl',
  text: 'Text',
}

export const Xl9 = Template.bind([])
Xl9.args = {
  size: '9xl',
  text: 'Text',
}

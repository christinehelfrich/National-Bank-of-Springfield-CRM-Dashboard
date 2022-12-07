import React, { useState } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen } from '@testing-library/react'

import { NbosSelector } from './NbosSelector'

Enzyme.configure({ adapter: new Adapter() })

const SelectorWrapper = props => {
  //const [alignment, setAlignment] = React.useState(props.labels[0])

  return (
    <NbosSelector
      bgColor="#1B6AF8"
      labels={['Outcome Metrics', 'Behavior Metrics']}
      onChange={alignment => {
        console.log(alignment)
      }}
    />
  )
}

const renderSelector = props => {
  return render(<SelectorWrapper {...props} />)
}

describe('NbosSelector', () => {
  it('should render the labels in the selector', () => {
    renderSelector()

    screen.getByText('Outcome Metrics')
  })
})

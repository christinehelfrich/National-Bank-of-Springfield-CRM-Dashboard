import React, { useState } from 'react'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

import { NbosSelector } from './NbosSelector'

const SelectorWrapper = props => {
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

  it('the button should work', () => {
    const handleClick = jest.fn()
    render(
      <NbosSelector
        bgColor="#1B6AF8"
        labels={['Outcome Metrics', 'Behavior Metrics']}
        onChange={handleClick}
      />,
    )

    const ToggleButton = screen.getByText('Outcome Metrics')

    fireEvent.click(ToggleButton)
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})

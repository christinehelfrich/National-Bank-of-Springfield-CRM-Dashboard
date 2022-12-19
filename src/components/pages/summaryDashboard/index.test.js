import { render } from '@testing-library/react'
import React from 'react'
import { SummaryDashboard } from '.'
import { store } from './store'
import { Provider } from 'react-redux'

const DashboardWrapper = props => {
  return (
    <Provider store={store}>
      <SummaryDashboard />{' '}
    </Provider>
  )
}

const renderDashboard = props => {
  return render(<DashboardWrapper {...props} />)
}

describe('SummaryDashboard', () => {
  it('should render page', () => {
    renderDashboard()
  })
})

// module dependancy
// tests should be independant
// msw library -> middleware between async api layers and tests
// tests should not make calls in the real world
// read msw docs!!! build in isolation first
// react testing lib docs has a full example
// search github code examples

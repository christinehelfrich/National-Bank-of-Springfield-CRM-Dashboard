import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('full app renders', () => {
  const { container } = render(<App />)

  expect(container).toBeDefined()
})

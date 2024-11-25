import App from '../App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('The app is rendered', () => {
    render(<App />)
  })
})
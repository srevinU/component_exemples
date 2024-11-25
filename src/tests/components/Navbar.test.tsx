import { NavBar } from '../../components/navbar.component'
import { render } from '@testing-library/react'

describe('NavBar', () => {
  it('The navBar is rendered', () => {
    render(<NavBar />)
  })

    it('The navBar has a tabs', () => {
        const { getByText } = render(<NavBar />)
        getByText('Form')
        getByText('Table')
        getByText('Card')
    })
})
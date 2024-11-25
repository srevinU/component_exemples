import { Form } from '../../components/form.component'
import { render } from '@testing-library/react'

describe('Form', () => {
  it('The form is rendered', () => {
    render(<Form />)
  })

    it('The form has a title', () => {
        const { getByText } = render(<Form />)
        getByText('Registration Form')
    })

    it('The form has placehorlders', () => {
        const { getByPlaceholderText } = render(<Form />)
        getByPlaceholderText('First name')
        getByPlaceholderText('Last name')
        getByPlaceholderText('Birthday (DD/MM/YYYY)')
        getByPlaceholderText('Email')
        getByPlaceholderText('Phone Number')
    })

    it('The form has radio buttons', () => {
        const { getByLabelText } = render(<Form />)
        getByLabelText('Male')
        getByLabelText('Female')
        getByLabelText('Other')
      })

})
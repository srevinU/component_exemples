import { Table } from '../../components/table.component'
import { render } from '@testing-library/react'

describe('Table', () => {
  it('The table is rendered', () => {
    render(<Table />)
  })

  it('The table has colums', () => {
    const { getByText } = render(<Table />)
    getByText('First Name')
    getByText('Last Name')
    getByText('Birthday')
    getByText('Gender')
    getByText('Email')
    getByText('Phone Number')
    getByText('Option')
  })
})
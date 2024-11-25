import { Card } from '../../components/card.component'
import { render } from '@testing-library/react'
import { Person } from '../../types/person.type'

describe('Card', () => {

    const data: Person = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        birthday: '01/01/2000',
        gender: 'male',
        email: 'john@email.com',
        phone: '123-456-7890',
        option: 'option1',
        img: ''
    }
  it('The card is rendered', () => {
    render(<Card person={data}/>)
  })

  it('The card has texts', () => {
    const { getByText } = render(<Card person={data}/>)
    getByText('John Doe')
    getByText('01/01/2000')
    getByText('male')
    getByText('john@email.com')
    getByText('123-456-7890')
    getByText('option1')
  })
})
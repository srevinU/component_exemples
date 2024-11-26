import { Card } from "../components/card.component";
import { Person } from "../types/person.type";
import imgJane from '../assets/jane_doe.png';
import imgJohn from '../assets/john_doe.png';
import imgSteve from '../assets/steve_smith.png';

export function CardPage() {

    const persons: Person[] = [
        {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            birthday: '01/01/2000',
            gender: 'male',
            email: 'john@email.com',
            phone: '123-456-7890',
            option: 'option1',
            img: imgJohn
        }, {
            id: '2',
            firstName: 'Jane',
            lastName: 'Doe',
            birthday: '01/01/2000',
            gender: 'female',
            email: 'jane@email.com',
            phone: '123-456-7890',
            option: 'option2',
            img: imgJane
        }, {
            id: '3',
            firstName: 'Steve',
            lastName: 'Smith',
            birthday: '01/01/2001',
            gender: 'other',
            email: 'alice@email.com',
            phone: '123-456-7890',
            option: 'option3',
            img: imgSteve
        }
    ]
 
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '50px' }}>
            {persons.map(person => <Card person={person} />)}
        </div>
    )
}
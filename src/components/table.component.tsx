import { useState } from 'react';
import '../styles/table.style.css';
import { Person } from '../types/person.type';

export function Table() {

    const persons: Person[] = [
        { id: "1", firstName: 'John', lastName: 'Doe', birthday: '01/01/1991', gender: 'Male', email: 'john@email.com', phone: '1234567890', option: 'Option 1' },
        { id: "2", firstName: 'Jane', lastName: 'Doe', birthday: '01/01/1992', gender: 'Female', email: 'jane@email.com', phone: '1234567890', option: 'Option 2' },
        { id: "3", firstName: 'Toto', lastName: 'Smith', birthday: '01/01/1993', gender: 'Other', email: 'toto@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "4", firstName: 'Tata', lastName: 'Smith', birthday: '01/01/1994', gender: 'Other', email: 'tata@email.com', phone: '1234567890', option: 'Option 1' },
        { id: "5", firstName: 'Titi', lastName: 'Smith', birthday: '01/01/1995', gender: 'Other', email: 'titi@email.com', phone: '1234567890', option: 'Option 2' },
    ];

    const [search, setSearch] = useState<{ [key: string]: string }>({
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        email: '',
        phone: '',
        option: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearch(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const filteredPersons = persons.filter((person: Person) => {
        return Object.keys(search).every((key) => {
            const value = person[key as keyof Person];
            return value !== undefined && value.toString().toLowerCase().includes(search[key].toLowerCase());
        });
    });

    return (
       <>
        <table>
            <thead>
                <tr>
                    <th>First Name
                        <input type="text" name="firstName" onChange={handleChange} placeholder='Search...'/>
                    </th>
                    <th>Last Name
                        <input type="text" name="lastName" onChange={handleChange} placeholder='Search...'/>
                    </th>
                    <th>Birthday
                        <input type="text" name="birthday" onChange={handleChange} placeholder='Search...'/>
                    </th>    
                    <th>Gender
                        <input type="text" name="gender" onChange={handleChange} placeholder='Search...'/>
                    </th>
                    <th>Email
                        <input type="text" name="email" onChange={handleChange} placeholder='Search...'/>
                    </th>
                    <th>Phone Number
                        <input type="text" name="phone" onChange={handleChange} placeholder='Search...'/>
                    </th>
                    <th>Option
                        <input type="text" name="option" onChange={handleChange} placeholder='Search...'/>
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredPersons.map((item: Person) => (
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.birthday}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>   
                        <td>{item.phone}</td>
                        <td>{item.option}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </>
    )
}
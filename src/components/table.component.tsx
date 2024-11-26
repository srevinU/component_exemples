import { useState } from 'react';
import '../styles/table.style.css';
import { Person } from '../types/person.type';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export function Table() {

    const persons: Person[] = [
        { id: "1", firstName: 'John', lastName: 'Doe', birthday: '01/01/1991', gender: 'Male', email: 'john@email.com', phone: '1234567890', option: 'Option 1' },
        { id: "2", firstName: 'Jane', lastName: 'Doe', birthday: '01/01/1992', gender: 'Female', email: 'jane@email.com', phone: '1234567890', option: 'Option 2' },
        { id: "3", firstName: 'Toto', lastName: 'Smith', birthday: '01/01/1993', gender: 'Other', email: 'toto@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "4", firstName: 'Tata', lastName: 'Smith', birthday: '01/01/1994', gender: 'Other', email: 'tata@email.com', phone: '1234567890', option: 'Option 1' },
        { id: "5", firstName: 'Titi', lastName: 'Smith', birthday: '01/01/1995', gender: 'Other', email: 'titi@email.com', phone: '1234567890', option: 'Option 2' },
        { id: "6", firstName: 'Tewtew', lastName: 'mat', birthday: '01/01/1996', gender: 'Male', email: 'twtw@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "7", firstName: 'Teytey', lastName: 'mat', birthday: '01/01/1996', gender: 'Female', email: 'tyty@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "8", firstName: 'Tewtew', lastName: 'mat', birthday: '01/01/1996', gender: 'Male', email: 'twtw@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "9", firstName: 'Teztez', lastName: 'mat', birthday: '01/01/1996', gender: 'Female', email: 'tztz@email.com', phone: '1234567890', option: 'Option 3' },
        { id: "10", firstName: 'Tevtev', lastName: 'mat', birthday: '01/01/1996', gender: 'Male', email: 'Tevtev@email.com', phone: '1234567890', option: 'Option 3' },
    ];

    const [filteredPersons, setFilteredPersons] = useState<Person[]>(persons.sort((a, b) => a.firstName.localeCompare(b.firstName)));
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const filtered = persons.filter((person: Person) => 
          (person[event.target.name as keyof Person] as string).toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPersons(filtered);
      };

    const [sortIcons, setSortIcons] = useState<{ [key: string]: { up: boolean; down: boolean } }>({
        firstName: { up: true, down: false },
        lastName: { up: false, down: false },
        birthday: { up: false, down: false },
        gender: { up: false, down: false },
        email: { up: false, down: false },
        phone: { up: false, down: false },
        option: { up: false, down: false },
    });


    const handleSort = (property: keyof Person, action: string) => {
        const sortedPersons = [...filteredPersons].sort((a, b) => {
          if (a[property] !== undefined && b[property] !== undefined && a[property] < b[property]) {
            return action === 'asc' ? 1 : -1;
          }
          if (a[property] !== undefined && b[property] !== undefined && a[property] > b[property]) {
            return action === 'asc' ? -1 : 1;
          }
          return 0;
        });
      
        setFilteredPersons(sortedPersons);

        setSortIcons({
            firstName: { up: property === 'firstName' && action !== 'asc', down: property === 'firstName' && action === 'asc' },
            lastName: { up: property === 'lastName' && action !== 'asc', down: property === 'lastName' && action === 'asc' },
            birthday: { up: property === 'birthday' && action !== 'asc', down: property === 'birthday' && action === 'asc' },
            gender: { up: property === 'gender' && action !== 'asc', down: property === 'gender' && action === 'asc' },
            email: { up: property === 'email' && action !== 'asc', down: property === 'email' && action === 'asc' },
            phone: { up: property === 'phone' && action !== 'asc', down: property === 'phone' && action === 'asc' },
            option: { up: property === 'option' && action !== 'asc', down: property === 'option' && action === 'asc' },
        });
      };

      const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        };
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = filteredPersons.slice(indexOfFirstItem, indexOfLastItem);
  
      const totalPages = Math.ceil(filteredPersons.length / itemsPerPage);

    return (
       <>
        <table>
            <thead>
                <tr>
                    <th>
                        <div className='title'>
                            <label onClick={() => handleSort('firstName', 'dsc')}>First Name</label>
                            <input type="text" name="firstName" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.firstName.up &&  <FaArrowUp className="icon" onClick={() => handleSort('firstName', 'asc')}/>}
                            { sortIcons.firstName.down && <FaArrowDown className="icon" onClick={() => handleSort('firstName', 'dsc')}/>}
                        </div>
                    </th>
                    <th>
                        <div>
                            <label onClick={() => handleSort('lastName', 'dsc')}>Last Name</label>
                            <input type="text" name="lastName" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.lastName.up && <FaArrowUp className="icon" onClick={() => handleSort('lastName', 'asc')} />}
                            { sortIcons.lastName.down && <FaArrowDown className="icon" onClick={() => handleSort('lastName', 'desc')} />}
                        </div>
                    </th>
                    <th>
                        <div>
                            <label onClick={() => handleSort('birthday', 'dsc')}>Birthday</label>
                            <input type="text" name="birthday" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.birthday.up && <FaArrowUp className="icon" onClick={() => handleSort('birthday', 'asc')}/>}
                            { sortIcons.birthday.down && <FaArrowDown className="icon" onClick={() => handleSort('birthday', 'dsc')}/>}
                        </div>
                    </th>    
                    <th>
                        <div>
                            <label onClick={() => handleSort('gender', 'dsc')}>Gender</label>
                            <input type="text" name="gender" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.gender.up && <FaArrowUp className="icon" onClick={() => handleSort('gender', 'asc')}/>}
                            { sortIcons.gender.down && <FaArrowDown className="icon" onClick={() => handleSort('gender', 'dsc')}/>}
                        </div>
                    </th>
                    <th>
                        <div>
                            <label onClick={() => handleSort('email', 'dsc')}>Email</label>
                            <input type="text" name="email" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.email.up && <FaArrowUp className="icon" onClick={() => handleSort('email', 'asc')}/>}
                            { sortIcons.email.down && <FaArrowDown className="icon" onClick={() => handleSort('email', 'dsc')}/>}
                        </div>
                    </th>
                    <th>
                        <div>
                            <label onClick={() => handleSort('phone', 'dsc')}>Phone Number</label>
                            <input type="text" name="phone" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.phone.up && <FaArrowUp className="icon" onClick={() => handleSort('phone', 'asc')}/>}
                            { sortIcons.phone.down && <FaArrowDown className="icon" onClick={() => handleSort('phone', 'dsc')}/>}
                        </div>
                    </th>
                    <th>
                        <div>
                            <label onClick={() => handleSort('option', 'dsc')}>Option</label>
                            <input type="text" name="option" onChange={handleChange} placeholder='Search...'/>
                        </div>
                        <div className='filter'>
                            { sortIcons.option.up && <FaArrowUp className="icon" onClick={() => handleSort('option', 'asc')}/>}
                            { sortIcons.option.down && <FaArrowDown className="icon" onClick={() => handleSort('option', 'dsc')}/>}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((item: Person) => (
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
            <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
        </table>
       </>
    )
}
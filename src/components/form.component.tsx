import { useState } from 'react';
import '../styles/form.style.css';
import { Loader } from './loader.component';
import { Person } from '../types/person.type';
import { Option } from '../types/option.type';

export function Form() {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<Person>({
        id: '1',
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        email: '',
        phone: '',
        option: 'option1',
    });

    const options: Option[] = [
        { id: "1", value: 'option1', label: 'Option 1' },
        { id: "2", value: 'option2', label: 'Option 2' },
        { id: "3", value: 'option3', label: 'Option 3' }
      ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({ ...form, option: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        console.info(form);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>  
            {loading ? <Loader/> : null}
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <div>
                    <input required type="text" name="firstName" onChange={handleChange} placeholder='First name'/>
                    <input required type="text" name="lastName" onChange={handleChange} placeholder='Last name'/>
                </div>
                <div id='box2'>
                    <input required type="text" name="birthday" onChange={handleChange} placeholder='Birthday (DD/MM/YYYY)'/>
                    <div id='select-box2'>
                        <label>
                            <input required className='radio' type='radio' name='gender' value='male' onChange={handleChange}></input>
                            <span>Male</span>
                        </label>
                        <label>
                            <input required className='radio' type='radio' name='gender' value='female' onChange={handleChange}></input>
                            <span>Female</span>
                        </label>
                        <label>
                        <input required className='radio' type='radio' name='gender'value='other' onChange={handleChange}></input>
                        <span>Other</span>
                        </label>
                    </div>
                </div>
                <div>
                    <input required type="email" name="email" onChange={handleChange} placeholder='Email'/>
                    <input required type="text" name="phone" onChange={handleChange} placeholder='Phone Number'/>
                </div>
                <div>
                    <select onChange={handleSelectChange}>
                        {
                            options.map((option: Option) => {
                                return <option key={option.id} value={option.value}>{option.label}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
    
}
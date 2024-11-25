import { Person } from "../types/person.type";
import '../styles/card.style.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithubAlt } from "react-icons/fa";

export function Card({ person } : { person: Person }) {
    return (
        <div className="card">
            <div>
                <img src={person.img} alt="profile"/>
                <h1>{person.firstName} {person.lastName}</h1>
            </div>
            <div className="info-section">
                <div className="section">
                    <label>Birthday: </label>
                    <label>{person.birthday}</label>
                </div>
                <div className="section">
                    <label>Gender: </label>
                    <label>{person.gender}</label>
                </div>
                <div className="section">
                    <label>Email: </label>
                    <label>{person.email}</label>
                </div>
                <div className="section">
                    <label>Phone: </label>
                    <label>{person.phone}</label>
                </div>
                <div className="section">
                    <label>Option: </label>
                    <label>{person.option}</label>
                </div>
            </div>
            <div className="section-social">
                <FaFacebook className="icon" size={25}/>
                <FaLinkedin className="icon" size={25}/>
                <FaTwitter className="icon" size={25}/>
                <FaGithubAlt className="icon" size={25}/>
            </div>
            
        </div>
    )
}
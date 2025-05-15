import './Contacts.css';

import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-content">
                <h2 className='title'>Entre em contato</h2>
                <p className='subtitle'>Fique a vontade para entrar em contato caso tenha alguma duvida ou oportunidade</p>

                <div className="contact-icons">
                    <div className="icon-item">
                        <a href="mailto:acsantos.amorin@gmail.com" className="icon-circle">
                            <MdOutlineEmail className="icon" />
                        </a>
                        <p className="icon-label">Email</p>
                        <p className="icon-contact">acsantos.amorin@gmail.com</p>
                    </div>

                    <div className="icon-item">
                        <a href="https://www.linkedin.com/in/anaclaradev/" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <FaLinkedinIn className="icon" />
                        </a>
                        <p className="icon-label">LinkedIn</p>
                        <p className="icon-contact">@anaclaradev</p>
                    </div>

                    <div className="icon-item">
                        <a href="https://github.com/anaclara-s" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <FiGithub className="icon" />
                        </a>
                        <p className="icon-label">GitHub</p>
                        <p className="icon-contact">@anaclara-s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
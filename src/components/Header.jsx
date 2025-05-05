import { useState } from 'react';
import { FaCode, FaLinkedin, FaGithub, FaBars} from "react-icons/fa";

import './Header.css';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='header-wrapper'>
            <header className="header">
                <div className="left-section">
                    <FaCode className="icon-header" />
                    <span className="brand">Ana.dev</span>
                </div>

                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                    <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
                    <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre mim</a>
                    <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
                    <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                    <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
                </nav>

                <div className="right-section">
                    <a href="https://www.linkedin.com/in/anaclaradev/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon-header" />
                    </a>
                    <a href="https://github.com/anaclara-s" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon-header" />
                    </a>
                    <FaBars className="menu-toggle" onClick={toggleMenu} />
                </div>
            </header>
        </div>
    );
};


export default Header;

import { Link } from "react-router-dom";
import { FaCode, FaLinkedin, FaGithub } from "react-icons/fa";

import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapped'>
            <header className="header">
                <div className="left-section">
                    <FaCode className="icon" />
                    <span className="brand">Ana.dev</span>
                </div>

                <nav className='menu'>
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre mim</Link>
                    <Link to="/habilidades">Skills</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/contato">Contato</Link>
                </nav>

                <div className="right-section">
                    <a href="https://www.linkedin.com/in/anaclaradev/" target="_blank" rel="noopener nereferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/anaclara-s" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;

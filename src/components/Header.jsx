import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapped'>
            <header className="header">
                <nav className='menu'>
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre mim</Link>
                    <Link to="/habilidades">Skills</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;

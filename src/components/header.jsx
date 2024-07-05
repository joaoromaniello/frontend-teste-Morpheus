import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <img src="src\assets\logo-morpheus.png" alt="Logo Morpheus" height = "40px"/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Adicione usuários</Link>
                    </li>
                    <li>
                        <Link to="/list">Listagem de usuários</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

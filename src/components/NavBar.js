import React from 'react';
import Logo from './Logo';



const NavBar = () => {
    return <div>
        <nav className="navbar">
            <Logo />
            <ul>
                <li>Inicio</li>
                <li>Tienda</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>

    </div>;
};



export default NavBar;

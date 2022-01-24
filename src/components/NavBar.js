import React from 'react';
import CartWidget from './CartWidget';



const NavBar = () => {
    return <div>
        <nav className="navbar">
            <CartWidget />
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

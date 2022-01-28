import React from 'react';
import '../Logo/logo.css'
import img from '../Logo/logo.png'


const Logo = () => {
    return <div>
        <img className='logo' src={img} alt='logo' />

    </div>;
};


export default Logo;
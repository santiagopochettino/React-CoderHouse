import React from 'react';
import './logo.css'
import img from './logo.png'


const Logo = () => {
    return <div>
        <img className='logo' src={img} alt='logo' />

    </div>;
};


export default Logo;
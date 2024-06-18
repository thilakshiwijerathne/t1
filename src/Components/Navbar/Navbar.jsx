import React from 'react';

import './Navbar.css';
import nav_logo from '../Assets/pic4.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} alt='Logo' className='logo' />
      <ul>
        <li>
          Home
        </li>
        <li>About Us</li>
        <li>
          Login
        </li>
        <li>
          Contact Us
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

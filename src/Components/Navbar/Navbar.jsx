import React from 'react';
import './Navbar.css';
import nav_logo from '../Assets/pic4.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} alt='Logo' className='logo' />
      <ul>

         <Link to='/'><li>Home</li></Link>
         <Link to='/'><li>Contact Us</li></Link>
         <Link to='/'><li>About</li></Link>
         <Link to='/login'><li>Login</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;

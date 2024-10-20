import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
      <img src='/Images/logo.webp' alt='Logo' className='logo' />
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/booking'>Book slot</Link></li>
      <li><button><Link to='/login'>Log in</Link></button></li>
      </ul>
    </div>
  )
}

export default Nav

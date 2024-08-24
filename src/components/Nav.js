import React from 'react';
import '../App.css';
//import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
      <img src='/Images/logo.webp' alt='Logo' className='logo' />
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Contact</a></li>
      <li><a href='#'>Book slot</a></li>
      <li><button>LOG in</button></li>
      </ul>
    </div>
  )
}

export default Nav

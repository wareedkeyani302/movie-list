import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <ul className='nav-bar'>
        <li className='nav-item'>
          <NavLink to='/home' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

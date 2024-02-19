import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate ();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
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
      <div className='logout-button'>
      <button type='submit' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;

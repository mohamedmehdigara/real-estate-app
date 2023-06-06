import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Header() {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listing">Listings</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    
  );
}

export default Header;



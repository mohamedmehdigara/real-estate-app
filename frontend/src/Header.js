import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listing">Listings</Link>
            <Logout />

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

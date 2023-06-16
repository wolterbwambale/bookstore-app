import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>Bookstore CMS</div>
      <ul>
        <li><Link to="/" className="navbar-link">BOOKS</Link></li>
        <li><Link to="/categories" className="navbar-link">CATEGORIES</Link></li>
      </ul>
      <div>user icon</div>
    </nav>
  );
}

export default Navbar;

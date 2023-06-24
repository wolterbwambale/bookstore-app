import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bookstore CMS</div>
      <ul>
        <li><Link to="/" className="navbar-link">BOOKS</Link></li>
        <li><Link to="/categoriesShow" className="navbar-link">CATEGORIES</Link></li>
      </ul>
      <div className="user-icon">User</div>
    </nav>
  );
}

export default Navbar;

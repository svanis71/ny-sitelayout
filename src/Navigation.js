import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isOpen, pages }) => (
  <nav className={isOpen ? '' : 'hidden'}>
    <ul className="nav__menu">
      {pages.map(page => (
        <li className="nav__menu-item">
          <Link to={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import Clock from './Clock';

const Header = ({ pages, loading }) => (
  <header className="site__header">
    <FontAwesomeIcon icon={faHamburger} className="hamburger-icon" />
    <h1 className={loading ? 'loading' : ''}>Lorem h1</h1>
    <Clock />
    <Navigation pages={pages} />
  </header>
);

export default Header;

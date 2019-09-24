import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import Clock from './Clock';

const Header = ({ pages, loading }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site__header">
      <button
        autoFocus={true}
        tabindex="0"
        className="header__burger-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faHamburger} className="hamburger-icon" />
      </button>
      <h1 className={loading ? 'loading' : ''}>Lorem h1</h1>
      <Clock />
      <Navigation isOpen={menuOpen} pages={pages} />
    </header>
  );
};
export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SiteContext from './SiteContext';

const LogInOut = ({ isLoggedIn, name }) => {
  const targetUrl = isLoggedIn ? '/logout' : '/login';
  const linkTitle = isLoggedIn ? `Logga ut ${name}` : 'Login';
  return (
    <li>
      <Link to={targetUrl}>{linkTitle}</Link>
    </li>
  );
};

const Navigation = ({ isOpen, pages }) => {
  const ctx = useContext(SiteContext);
  const { loggedin, auth } = ctx;
  return (
    <nav className={isOpen ? '' : 'hidden'}>
      <ul className="nav__menu">
        {pages.map(page => (
          <li className="nav__menu-item">
            <Link to={page.url}>{page.title}</Link>
          </li>
        ))}
        <LogInOut isLoggedIn={loggedin} name={auth.name()} />
      </ul>
    </nav>
  );
};
export default Navigation;

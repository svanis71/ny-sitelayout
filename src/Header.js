import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import Clock from "./Clock";
import SiteContext from "./SiteContext";

const Header = ({ pages, loading }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useContext(SiteContext);
  const { pagesList } = ctx;

  return (
    <header className="site__header">
      <button
        autoFocus={true}
        tabindex="0"
        className="header__burger-button"
        aria-haspopup="true"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon
          icon={menuOpen ? faWindowClose : faHamburger}
          className="hamburger-icon"
        />
      </button>
      <h1 className={loading ? "loading" : ""}>Lorem h1</h1>
      <Clock />
      <Navigation isOpen={menuOpen} pages={pages} />
    </header>
  );
};
export default Header;

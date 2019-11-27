import React, { createContext, useContext, useState } from "react";

class Auth {
  constructor(history) {
    this.history = history;
  }
  hasHistory() {
    return this.history !== undefined;
  }
  name = () => "RevolverHarry";
}

const SiteContext = createContext();

const SiteContextProvider = ({ browserHistory, children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [auth] = useState(new Auth(browserHistory));
  const [pagesList, setPagesList] = useState([]);

  const value = {
    auth,
    loggedin,
    pagesList,
    login: () => {
      setLoggedin(true);
    },
    logout: () => {
      setLoggedin(false);
    }
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

const SiteContextConsumer = SiteContext.Consumer;
export default SiteContext;
export { SiteContextProvider, SiteContextConsumer };

export const UseSiteContext = () => useContext(SiteContext);

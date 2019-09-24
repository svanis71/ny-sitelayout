import React, { createContext } from 'react';

let defaultState = {
  loggedin: true,
  login: () => {},
};
const SiteContext = createContext(defaultState);

const SiteContextProvider = ({ children }) => (
  <SiteContext.Provider value={defaultState}>{children}</SiteContext.Provider>
);

const SiteContextConsumer = SiteContext.Consumer;
export default SiteContext;
export { SiteContextProvider, SiteContextConsumer };

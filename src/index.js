import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SiteContextProvider } from './SiteContext';

const s = { loggedin: true };
const Index = () => (
  <SiteContextProvider>
    <Router>
      <Route component={App} />
    </Router>
  </SiteContextProvider>
);

render(<Index />, document.getElementById('root'));

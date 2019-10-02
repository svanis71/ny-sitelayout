import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Index = () => (
  <Router>
    <Route component={App} />
  </Router>
);

render(<Index />, document.getElementById('root'));

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import APage from './pages/APage';

const Rutter = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/apage" exact component={APage} />
  </Switch>
);

export default Rutter;

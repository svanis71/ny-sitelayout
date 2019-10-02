import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import APage from './pages/APage';
import Login from './Login';
import Logout from './Logout';

const Rutter = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/apage" exact component={APage} />
    <Route path="/login" exact component={Login} />
    <Route path="/logout" exact component={Logout} />
  </Switch>
);

export default Rutter;

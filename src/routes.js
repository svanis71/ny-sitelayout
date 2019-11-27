import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const HomePage = lazy(() => import('./pages/HomePage'));
const APage = lazy(() => import('./pages/APage'));

const Rutter = () => (
  <Suspense fallback={<p>Laddar</p>}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/apage" exact component={APage} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  </Suspense>
);

export default Rutter;

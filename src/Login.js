import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import SiteContext from './SiteContext';

const Login = () => {
  const ctx = useContext(SiteContext);
  ctx.login();
  return <Redirect to="/" />;
};

export default Login;

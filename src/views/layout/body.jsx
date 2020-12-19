import React from 'react';
import { navigate, Router } from '@reach/router';

import { ROUTE_LOGIN, ROUTE_HOME } from '../../routes/routes';
import Login from '../login/login';
import Home from '../home/home';
import getRedux from '../../redux/selectors/getSelector';
import { tokenKey } from '../../redux/selectors/keys';

export default () => {
  const token = getRedux(tokenKey);
  React.useEffect(() => {
    if (token) {
      navigate(ROUTE_HOME);
    } else {
      navigate(ROUTE_LOGIN);
    }
  });
  return (
    <div>
      <Router>
        <Login path={ROUTE_LOGIN} default />
        <Home path={ROUTE_HOME} />
      </Router>
    </div>
  );
};

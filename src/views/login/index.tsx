import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';

function LoginRoute() {
  return (
    <Switch>
      <Route exact path="/login" render={() => <Login />} />
    </Switch>
  );
}

export default LoginRoute;

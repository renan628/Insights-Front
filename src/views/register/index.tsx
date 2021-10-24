import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './register';

function LoginRoute() {
  return (
    <Switch>
      <Route exact path="/register" render={() => <Register />} />
    </Switch>
  );
}

export default LoginRoute;

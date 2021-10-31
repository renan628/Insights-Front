import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feed from './feed';

function LoginRoute() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Feed />} />
    </Switch>
  );
}

export default LoginRoute;

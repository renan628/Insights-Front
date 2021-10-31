import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './create';

function LoginRoute() {
  return (
    <Switch>
      <Route exact path="/new" render={() => <Create />} />
    </Switch>
  );
}

export default LoginRoute;

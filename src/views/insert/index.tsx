import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Create from './create';

function LoginRoute() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/new" render={() => <Create />} />
      </Switch>
    </AnimatePresence>
  );
}

export default LoginRoute;

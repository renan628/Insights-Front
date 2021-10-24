import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import System from './layout/system';
import Login from './views/login';
import Register from './views/register';

function App() {
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => <System component={<Login />} />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <System component={<Register />} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

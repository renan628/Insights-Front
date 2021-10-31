import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import System from './layout/system';
import Compact from './layout/compact';
import Create from './views/insert';
import Feed from './views/feed';

function App() {
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route
          path="/new"
          render={(props) => <Compact component={<Create />} />}
        />
        <Route path="/" render={(props) => <System component={<Feed />} />} />
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

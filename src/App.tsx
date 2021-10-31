import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import System from './layout/system';
import Compact from './layout/compact';
import Feed from './views/feed';
import Create from './views/create';

function App() {
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <System component={<Feed />} />}
        />
        <Route
          path="/new"
          render={(props) => <Compact component={<Create />} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

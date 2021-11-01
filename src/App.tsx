import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import System from './layout/system';
import Compact from './layout/compact';
import Create from './views/insert';
import Feed from './views/feed';
import { InsightContainer } from './api/contexts/insights';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <InsightContainer.Provider>
        <BrowserRouter basename="">
          <Switch>
            <Route
              path="/new"
              render={(props) => <Compact component={<Create />} />}
            />
            <Route
              path="/"
              render={(props) => <System component={<Feed />} />}
            />
            <Redirect from="/" to="/" />
          </Switch>
        </BrowserRouter>
      </InsightContainer.Provider>
    </QueryClientProvider>
  );
}

export default App;

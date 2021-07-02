import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import ContextContainer from './ContextContainer';
import React from 'react';

export default function Router() {
  return (
    <BrowserRouter>
      {/* essentially a switch statement that chooses the component to render based on the path */}
      <Switch>
        <Route exact path="/" render={() => <ContextContainer />} />
        <Route path="/app" render={() => <ContextContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

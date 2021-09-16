import React from 'react';
import NewsSearch from '../../containers/NewsSearch';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={NewsSearch} />
          {/* <Route exact path="/:title" component={NewsSearch} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

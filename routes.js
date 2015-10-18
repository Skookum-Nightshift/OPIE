/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import App from './handlers/Base';
import Home from './handlers/Home';
import SignUp from './handlers/SignUp';
import Quiz from './handlers/Quiz';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute handler={NotFound} />

    <Route path="/signup" name="SignUp" handler={SignUp} />
    <Route path="/quiz" handler={Quiz} />
  </Route>
);

export default routes;

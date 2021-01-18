import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Profile from 'Routes/Profile';
import Movie from 'Routes/Movie';
import searchMovie from '../Routes/SearchMovie';
import Navigation from './Header/HeaderTemplate/HeaderTemplate';
import Confirm from 'Routes/Confirm';

function AppRouter({ isLogin }) {
  return (
    <Router>
      <Navigation isLogin={isLogin} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/searchMovie" component={searchMovie} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/confirm" component={Confirm} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Profile from 'Routes/Profile';
import Movie from 'Routes/Movie';
import MovieList from './MovieList';
import Navigation from './Header/HeaderTemplate/HeaderTemplate';

function AppRouter({ isLogin }) {
  return (
    <Router>
      <Navigation isLogin={isLogin} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/searchMovie" component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;

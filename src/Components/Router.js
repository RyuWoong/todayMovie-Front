import { useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Profile from 'Routes/Profile';
import Movie from 'Routes/Movie';

import MovieList from './MovieList';
import Navigation from './Navigation';
import Sign from 'Routes/Sign';

function AppRouter({ isLogin }) {
  const [signShow, setShow] = useState(false);

  return (
    <Router>
      <Navigation isLogin={isLogin} setShow={setShow} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/searchMovie">
          <MovieList />
        </Route>
        <Route exact path="/movie/:id">
          <Movie />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      {signShow && <Sign setShow={setShow} />}
    </Router>
  );
}

export default AppRouter;

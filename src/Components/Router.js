import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Profile from "Routes/Profile";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default AppRouter;

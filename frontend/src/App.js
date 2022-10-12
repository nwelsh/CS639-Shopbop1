import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>

      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      {routes}
    </Router>
  );
};

export default App;

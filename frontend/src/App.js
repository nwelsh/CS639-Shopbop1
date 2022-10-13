import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Choices from "./components/Choices";
import Swipe from "./components/Swipe";
import Welcome from "./components/Welcome";

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Welcome/>
      </Route>

      <Route path="/choices" exact>
        <Choices/>
      </Route>

      <Route path="/swipe" exact>
        <Swipe/>
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

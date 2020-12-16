import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

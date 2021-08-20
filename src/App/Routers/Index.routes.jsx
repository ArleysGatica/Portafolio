import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./../Pages/home";

export const IndexRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

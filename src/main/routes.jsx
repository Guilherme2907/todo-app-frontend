import React from "react";
import { Switch, Route } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

export default props => (
  <Switch>
    <Route path="/" exact component={Todo} />
    <Route path="/todos" exact component={Todo} />
    <Route path="/about" exact component={About} />
  </Switch>
);

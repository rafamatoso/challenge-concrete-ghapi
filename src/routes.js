import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true} component={Home}></Route>
      <Route path={"/result"} component={Result}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

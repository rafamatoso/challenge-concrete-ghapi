import React from "react";
import Home from "./pages/home";
import Result from "./pages/result";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
      <Switch>
        <Route path={"/"} exact={true} component={Home}></Route>
        <Route path={"/result/:search"} component={Result}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;

import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./client/components/Registration";
import Login from "./client/components/Login";
import Fire from "./client/components/department/Fire";
import Meteorological from "./client/components/department/Meteorological";
import Security from "./client/components/department/Security";
import Medical from "./client/components/department/Medicine";
import RedCross from "./client/components/department/Redcross";
import About from "./client/components/About";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} />
      <Route path="/fire" component={Fire} />
      <Route path="/meteorogical" component={Meteorological} />
      <Route path="/security" component={Security} />
      <Route path="/redcross" component={RedCross} />
      <Route path="/medical" component={Medical} />
      <Route path="/About" component={About} />
      <Route path="/registration" component={Registration} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

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
import Navbar from "./client/components/Navbar/Navbar"; //#b44903
import Profile from "./client/components/Profile";
import Sidebar from "./client/admin/Sidebar";
import Fir from "./client/admin/jodit";
import Secure from "./client/admin/security";
import Meteor from "./client/admin/meteorological";
import Med from "./client/admin/medical";
import Cross from "./client/admin/redcross";
ReactDOM.render(
  <BrowserRouter>
    <Navbar />

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
      <Route path="/profile" component={Profile} />
      <Route path="/admin" component={Sidebar} />
      <Route path="/fir" component={Fir} />
      <Route path="/secure" component={Secure} />
      <Route path="/meteor" component={Meteor} />
      <Route path="/med" component={Med} />
      <Route path="/red" component={Cross} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

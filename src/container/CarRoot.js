import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home/Home";
import Cars from "../components/Cars/Cars";
import Toolbar from "../components/Toolbar/Toolbar";
import InvalidPage from "./InvalidPage";
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";
const CarRoot = () => {
  return (
    <div>
      <Toolbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cars" exact component={Cars} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route component={InvalidPage} />
      </Switch>
      
    </div>
  );
};

export default CarRoot;

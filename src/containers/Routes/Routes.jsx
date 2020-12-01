import React from "react";
import { Router } from "@reach/router";
import styles from "./Routes.module.scss";

import Home from "../Home";
import Login from "../Login";
import Favourites from "../Favourites";
import NotFound from "../../components/NotFound"


const Routes = () => {
  return (
    <Router>
      <Login path="login" />
      <Home path="home" />
      <Favourites path="favourites" />
      <NotFound default />
  </Router>
  );
};

export default Routes;

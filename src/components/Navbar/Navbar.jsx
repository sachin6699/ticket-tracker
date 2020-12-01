import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className ={styles.navbar}>
      <Link to="home">
        <p>Home</p>
      </Link>
      <Link to="favourites">
        <p>Favourites</p>
      </Link>
      <Link to="login">
        <p>Login</p>
      </Link>
    </nav>
  );
};

export default Navbar; 

import React from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";
import UserMenu from "./UserMenu";
import styles from "./css/Nav.module.css";
import logoImg from "./img/logo.svg";

function Navbar(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <Menu />
          </li>
        </ul>
        <Link to="/">
          <img src={logoImg} alt="goldenPension Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <UserMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

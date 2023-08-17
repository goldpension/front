import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";
import UserMenu from "./UserMenu";
import styles from "../../css/Nav.module.css";
import logoImg from "../../img/logo.png";

function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <Menu />
        </div>
        <div className={styles.navItem}>
          <Link to="/" state={"first"}>
            <img src={logoImg} alt="goldenPension Logo" />
          </Link>
        </div>
        <div className={styles.navItemlogin}>
          <Link to="/Login">
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

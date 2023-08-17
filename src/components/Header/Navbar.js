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
        <div className={styles.nav}>
          <div className={styles.navItem}>
            <Menu />
          </div>
          <div className={styles.navItem}>
            <Link to="/" state={"first"}>
              <img src={logoImg} alt="goldenPension Logo" />
            </Link>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.space}></span>
        </div>
        <div className={styles.navItem}>
          <UserMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;

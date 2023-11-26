import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import seniorState from "../../recoil/seniorState";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import styles from "../../css/Nav.module.css";
import logoImg from "../../img/logo.png";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(seniorState);
  const logout = () => {
    setLoggedInUser({
      isLoggedIn: false,
      userName: null,
      email: null,
    });
  };
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <Menu isLoggedIn={loggedInUser.isLoggedIn} />
        </div>
        <div className={styles.navItem}>
          <Link to="/" state={"first"}>
            <img src={logoImg} alt="goldenPension Logo" />
          </Link>
        </div>
        <div className={styles.navItemlogin}>
          {loggedInUser.isLoggedIn ? (
            <div className={styles.logoutBtnContainer}>
              <Link to="/myinfo">{loggedInUser.userName}</Link>님{" "}
              <Link to="/">
                <div className={styles.logoutBtn} onClick={logout}>
                  로그아웃
                </div>
              </Link>
            </div>
          ) : (
            <Link to="/Login">
              <p>로그인</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "../../recoil/userState";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import styles from "../../css/Nav.module.css";
import logoImg from "../../img/logo.png";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(userState);
  const logout = () => {
    setLoggedInUser({
      isLoggedIn: false,
      userName: null,
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
              {loggedInUser.userName}님{" "}
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

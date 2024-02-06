import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import seniorState from "../../recoil/seniorState";
import Menu from "./Menu";
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
    <header>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <Menu isLoggedIn={loggedInUser.isLoggedIn} />
        </div>
        <div className={styles.navItem}>
          <Link to="/" state={"first"}>
            <img src={logoImg} width='90' alt="황금연금 로고" />
          </Link>
        </div>
        <div className={styles.navItemlogin}>
          {loggedInUser.isLoggedIn ? (
            <div className={styles.logoutBtnContainer}>
              <Link to="/myinfo">내정보</Link>{" "}
              <span>{loggedInUser.userName}</span>님{" "}
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
    </header>
  );
}

export default Navbar;

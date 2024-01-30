import React from "react";
import LoginMent1 from "../components/Login/LoginMent1";
import LInput from "../components/Login/LInput";
import LKakao from "../components/Login/LKakao";
import LNaver from "../components/Login/LNaver";
import styles from "../css/Login.module.css";
import LoginMent2 from "../components/Login/LMent2";

const Login = () => {
  return (
    <div>
      <div>
        <LoginMent1 />
      </div>

      <div className={styles.container}>
        <div>
          <LKakao />
        </div>
      </div>
    </div>
  );
};

export default Login;

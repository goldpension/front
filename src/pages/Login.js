import React from "react";
import LoginMent1 from "../components/Login/LMent1";
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
          <div>
            <LInput />
          </div>
        </div>

        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div className={styles.v_line}></div>
          <div
            className={styles.text}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            또는
          </div>
          <div className={styles.v_line}></div>
        </div>

        <div>
          <div>
            <LKakao />
          </div>
          <div>
            <LNaver />
          </div>
        </div>
      </div>

      <div>
        <LoginMent2 />
      </div>
    </div>
  );
};

export default Login;

import React, {useEffect} from "react";
import LoginMent1 from "../components/Login/LoginMent1";
import LInput from "../components/Login/LInput";
import LKakao from "../components/Login/LKakao";
import LNaver from "../components/Login/LNaver";
import styles from "../css/Login.module.css";
import LoginMent2 from "../components/Login/LMent2";

const Login = () => {
  useEffect(() => {
    document.title = '로그인 - 황금연금';
  }, [])
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

import React from "react";
import LoginMent from "../components/Login/LMent";
import LInput from "../components/Login/LInput";
import LKakao from "../components/Login/LKakao";
import LNaver from "../components/Login/LNaver";

const Login = () => {
  return (
    <div>
      <div>
        <LoginMent />
      </div>
      <div>
        <LInput />
      </div>
      <div>
        <LKakao />
        <LNaver />
      </div>
    </div>
  );
};

export default Login;

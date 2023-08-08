// 로그인 버튼 컴포넌트
import React from "react";

const LNaver = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000/oauth"; // Callback URL
  const STATE = "flase";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLoginHandler = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button
      type="button"
      onClick={NaverLoginHandler}
      style={{
        borderColor: "black 1px",
        borderRadius: "10px",
        backgroundColor: "#03C832",
        width: "180px",
        height: "40px",
        fontWeight: "bold",
      }}
    >
      네이버 로그인 하기
    </button>
  );
};

export default LNaver;

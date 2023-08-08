// 로그인 버튼 컴포넌트
import React from "react";

const LKakao = () => {
  const REST_API_KEY = "백엔드한테 달라하자1";
  const REDIRECT_URI = "백엔드한테 달라하자2";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const KakaoLoginHandler = () => {
    window.location.href = link;
  };

  return (
    <button
      type="button"
      onClick={KakaoLoginHandler}
      style={{
        borderColor: "black 1px",
        borderRadius: "10px",
        backgroundColor: "#FFEB00",
        width: "180px",
        height: "40px",
        fontWeight: "bold",
      }}
    >
      카카오 로그인 하기
    </button>
  );
};

export default LKakao;

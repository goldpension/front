// 로그인 버튼 컴포넌트
import React from "react";
import styles from "../../css/Login.module.css";

const LKakao = () => {
  const REST_API_KEY = "백엔드한테 달라하자1";
  const REDIRECT_URI = "백엔드한테 달라하자2";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const KakaoLoginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className={styles.ktop}>
      <button
        type="button"
        onClick={KakaoLoginHandler}
        className={styles.kakao}
      >
        카카오 로그인 하기
      </button>
    </div>
  );
};

export default LKakao;

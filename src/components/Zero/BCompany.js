// 로그인 버튼 컴포넌트
import React from "react";
import styles from "../../css/Login.module.css";
import styles from "../../css/Zero.module.css";

const BCompany = () => {
  return (
    <div className={styles.ntop}>
      <button
        type="button"
        onClick={NaverLoginHandler}
        className={styles.naver}
      >
        파트너 되기
      </button>
    </div>
  );
};

export default BCompany;

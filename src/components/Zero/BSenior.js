import React from "react";
import styles from "../../css/Login.module.css";
import styles from "../../css/Zero.module.css";

const BSenior = () => {
  return (
    <div className={styles.ntop}>
      <button
        type="button"
        onClick={NaverLoginHandler}
        className={styles.naver}
      >
        일자리 찾기
      </button>
    </div>
  );
};

export default BSenior;

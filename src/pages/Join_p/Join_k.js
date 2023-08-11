import React from "react";
import JoinMentKakao from "../../components/Join_c/JMent_k";
import ButtonKakao from "../../components/Join_c/ButtonKakao";
import styles from "../../css/Join.module.css";

const Join_k = () => {
  return (
    <div>
      <div>
        <JoinMentKakao />
      </div>

      <div className={styles.ktop2}>
        <ButtonKakao />
      </div>
    </div>
  );
};

export default Join_k;

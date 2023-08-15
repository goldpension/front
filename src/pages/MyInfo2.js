import React from "react";
import styles from "../css/MyInfo2.module.css";
import InfoMent2 from "../components/Info/IMent2";
import ButtonNaver from "../components/Join_c/ButtonNaver";
import ButtonKakao from "../components/Join_c/ButtonKakao";

const MyInfo2 = () => {
  return (
    <div>
      <InfoMent2 />
      <div className={styles.center}>
        <div>
          <ButtonNaver />
        </div>
        <div className={styles.ktop}>
          <ButtonKakao />
        </div>
      </div>
    </div>
  );
};

export default MyInfo2;

import React from "react";
import styles from "../css/ChangeAccount.module.css";
import InfoMent2 from "../components/Info/IMent2";
import ButtonNaver from "../components/Join_c/ButtonNaver";
import ButtonKakao from "../components/Join_c/ButtonKakao";

const ChangeAccount = () => {
  return (
    <main>
      <InfoMent2 />
      <div className={styles.center}>
        <div>
          <ButtonNaver />
        </div>
        <div className={styles.ktop}>
          <ButtonKakao />
        </div>
      </div>
    </main>
  );
};

export default ChangeAccount;

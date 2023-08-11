import React from "react";
import JoinMentNaver from "../../components/Join_c/JMent_n";
import ButtonNaver from "../../components/Join_c/ButtonNaver";
import styles from "../../css/Join.module.css";

const Join_n = () => {
  return (
    <div>
      <div>
        <JoinMentNaver />
      </div>

      <div className={styles.ntop}>
        <ButtonNaver />
      </div>
    </div>
  );
};

export default Join_n;

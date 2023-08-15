import React from "react";
import { Link } from "react-router-dom";
import JoinMent from "../../components/Join_c/JMent";
import ButtonTel from "../../components/Join_c/ButtonTel";
import ButtonKakao from "../../components/Join_c/ButtonKakao";
import ButtonNaver from "../../components/Join_c/ButtonNaver";
import styles from "../../css/Join.module.css";

const Join = () => {
  return (
    <div>
      <JoinMent />
      <div className={styles.container}>
        <div className={styles.top}>
          <Link to="/join/join_tel">
            <ButtonTel />
          </Link>
        </div>

        <div style={{ marginLeft: "90px", marginRight: "100px" }}>
          <div className={styles.v_line}></div>
          <div
            className={styles.text}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            또는
          </div>
          <div className={styles.v_line}></div>
        </div>

        <div>
          <div className={styles.ktop1}>
            <ButtonKakao />
          </div>
          <div className={styles.ntop}>
            <ButtonNaver />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;

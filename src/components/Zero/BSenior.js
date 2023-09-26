import React from "react";
import styles from "../../css/Zero.module.css";
import { Link } from "react-router-dom";

const BSenior = () => {
  return (
    <div className={styles.btop}>
      <Link to="/first">
        <button type="button" className={styles.bsenior}>
          일자리 찾기
        </button>
      </Link>
    </div>
  );
};

export default BSenior;

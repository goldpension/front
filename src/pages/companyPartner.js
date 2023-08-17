import React, { useState } from "react";
import styles from "../css/companyPartner.module.css";
import { Link } from "react-router-dom";

const companyPartner = (props) => {
  return (
    <>
      <div className={styles.cp_container}>
        <div className={styles.cp_title}>
          <h4>
            <b>노인 일자리 사업의 새로운 기준</b>
          </h4>
        </div>
        <div className={styles.cp_title2}>
          <h1>
            <b>황금연금의 파트너가 되세요</b>
          </h1>
        </div>
        <div>
          <div className={styles.cp_btn}>
            <Link to="/companyPartner/apply">
              <p>파트너 지원하기</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default companyPartner;

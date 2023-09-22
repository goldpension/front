import React, { useState } from "react";
import styles from "../css/CompanyPartnerApplyDone.module.css";
import { Link } from "react-router-dom";

const companyPartner = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content1}>
          <p>
            공고가 성공적으로 등록되었습니다!
            <br />
            황금연금의 파트너사가 되신것을 환영합니다!
          </p>
        </div>
        <div className={styles.content2}>
          <p>
            파워 파트너사에 지원하셨을 경우,
            <br />
            추후 저희가 연락드리겠습니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default companyPartner;

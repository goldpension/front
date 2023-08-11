import React, { useState } from "react";
import styles from "../css/companyPartnerApply.module.css";
import { Link } from "react-router-dom";

const CompanyPartnerApply = (props) => {
  return (
    <>
      <div className={styles.cp_container}>
        <div className={styles.cp_general}>
          <div className={styles.cp_title}>
            <h2>
              <b>일반 파트너사</b>
            </h2>
          </div>
          <div className={styles.cp_content}>
            <h3>
              위치: 황금연금 일자리찾기 페이지
              <br />
              무료 서비스: 일자리 공고 등록
            </h3>
          </div>
          <button className={styles.cp_btn}>
            <Link to="/companyPartner/apply">
              <p>일반 파트너 지원하기</p>
            </Link>
          </button>
        </div>
        <div className={styles.cp_power}>
          <div className={styles.cp_title}>
            <h2>
              <b>파워 파트너사</b>
            </h2>
          </div>
          <div className={styles.cp_content}>
            <h3>
              위치: 황금연금 일자리찾기 페이지,
              <br />
              황금연금 보증기업 페이지
              <br />
              무료 서비스: 일자리 공고 등록,
              <br />
              상위 노출,검증 마크 부여
            </h3>
          </div>
          <button className={styles.cp_btn}>
            <Link to="/companyPartner/apply">
              <p>파워 파트너 지원하기</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CompanyPartnerApply;

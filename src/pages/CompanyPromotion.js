import React, { useState } from "react";
import styles from "../css/CompanyPromotion.module.css";
import { Link } from "react-router-dom";
import JobBox from "../components/JobBox";

const CompanyPromotion = (props) => {
  const card = [
    {
      cardJstatus: "구인상태",
      cardJname: "건물경비원",
      cardCname: "잠실한양3차아파트대표회의",
      cardJplace: "서울시 송파구 방이동",
      cardDay: "월~금",
      cardTime: "오전 9시~ 오후 6시",
    },
  ];
  return (
    <>
      <div className={styles.cp_container}>
        <div className={styles.cp_title}>
          <h1>
            <b>황금연금이 보증하는 일자리를 만나보세요!</b>
          </h1>
        </div>
        <div className={styles.cp_content}>
          <div className={styles.cp_contentText}>
            ~~하셔서 걱정되시나요?
            <br />
            (검증된 기업이라는 멘트)
            <br />
            (검증된 기업이라는 멘트)
            <br />
            (검증 마크 확인하라는 멘트)
          </div>
          <div>
            <JobBox />
          </div>
        </div>
        <div className={styles.cp_btn}>
          <Link to="/companyPromotion/add">
            <p>더보러가기</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyPromotion;

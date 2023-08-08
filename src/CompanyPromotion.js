import React, { useState } from "react";
import styles from "./css/CompanyPromotion.module.css";
import { Link } from "react-router-dom";

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
  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

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
          <div className={styles.cp_card}>
            <div className={styles.cp_cardJstatus}>
              <p>{card[0].cardJstatus}</p>
            </div>
            <div className={styles.cp_cardJname}>
              <p>{card[0].cardJname}</p>
            </div>
            <div className={styles.cp_cardCname}>
              <p>{card[0].cardCname}</p>
            </div>
            <div className={styles.cp_cardJplace}>
              <p>{card[0].cardJplace}</p>
            </div>
            <div className={styles.cp_cardDay}>
              <p>{card[0].cardDay}</p>
            </div>
            <div className={styles.cp_cardTime}>
              <p>{card[0].cardTime}</p>
            </div>
          </div>
        </div>
        <div className={styles.cp_btn}>
          <Link to="/">
            <p>더보러가기</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyPromotion;

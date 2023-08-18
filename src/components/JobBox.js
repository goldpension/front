import React, { useState } from "react";
import styles from "../css/card.module.css";

const JobBox = ({ companies, openModal }) => {
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
    <div className={styles.JobBoxComponent}>
      <div className={styles.cp_content}>
        {companies.map((company) => (
          <div className={styles.cp_card} onClick={() => openModal(company)}>
            <div className={styles.cp_cardJstatus}>
              <p>{card[0].cardJstatus}</p>
            </div>
            <div className={styles.cp_cardJname}>
              <p>{company.apply_work}</p>
            </div>
            <div className={styles.cp_cardCname}>
              <p>{company.company_name}</p>
            </div>
            <div className={styles.cp_cardJplace}>
              <p>{company.work_place}</p>
            </div>
            <div className={styles.cp_cardDay}>
              <p>{company.work_day}</p>
            </div>
            <div className={styles.cp_cardTime}>
              <p>{company.work_hour}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBox;

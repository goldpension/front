import React, { useState } from "react";
import styles from "../css/card.module.css";

const JobBox = (props) => {
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
    </div>
  );
};

export default JobBox;

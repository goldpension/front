import React, { useState } from "react";
import styles from "../css/CPAdd.module.css";
import Card from "../components/card";

const CompanyPromotion = (props) => {
  return (
    <>
      <div className={styles.cp_container}>
        <div className={styles.cp_title}>
          <h1>
            <b>황금연금이 보증하는 일자리를 만나보세요!</b>
          </h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default CompanyPromotion;

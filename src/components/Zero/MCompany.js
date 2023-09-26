import React from "react";
import styles from "../../css/Zero.module.css";

const MCompany = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <p>
          <span>
            황금연금에 일자리를 등록하고자 하는
            <span className={styles.mobileBr}> 기업이신가요?</span>{" "}
          </span>
        </p>
        파란 버튼을 클릭해 주세요!
      </h2>
    </div>
  );
};

export default MCompany;

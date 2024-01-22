import React from "react";
import styles from '../css/Zero.module.css'
import { Link } from "react-router-dom";

const Zero = () => {
  return (
    <div>
      <div>
        <div>
        <h2
          style={{
            textAlign: "center",
            paddingTop: "80px",
          }}
        >
          <p>
            <span>
              황금연금에 일자리를 등록하고자 하는
              <span className={styles.mobileBr}> 시니어이신가요?</span>
            </span>
          </p>
          노란 버튼을 클릭해 주세요!
        </h2>
      </div>
      <div className={styles.btop}>
      <Link to="/first">
        <button type="button" className={styles.bsenior}>
          일자리 찾기
        </button>
      </Link>
    </div>
      </div>
      <div>
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
        <div className={styles.btop}>
          <Link to="/companyPartner">
            <button type="button" className={styles.bcompany}>
              파트너 되기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Zero;

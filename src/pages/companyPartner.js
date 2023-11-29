import React, { useState } from "react";
import styles from "../css/companyPartner.module.css";
import { Link } from "react-router-dom";

const CompanyPartner = (props) => {
  const [screen, setScreen] = useState('main');
  const changeType = (type) => {
    setScreen(type);
  }
  return (
    <>
      <div className={styles.cp_container}>
        {screen === 'main' ? (
          <>
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
            <div className={styles.cp_commentContainer}>
              <div className={styles.cp_btn}>
                <Link to="/companyPartner/apply">
                  <p>파트너 지원하기</p>
                </Link>
              </div>
              <p className={styles.cp_comment} onClick={()=>changeType('comment')}>파트너 설명</p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.comments}>
              <div className={styles.comment}>
                <h1 className={styles.comment_title}>일반 파트너사</h1>
                <div className={styles.comment_detail}>
                  <p>공고 게시 위치: 일반 일자리 찾기</p>
                  <p>무료 서비스: 일자리 공고 등록</p>
                </div>
              </div>
              <div className={styles.comment}>
                <h1 className={styles.comment_title}>파워 파트너사</h1>
                <div className={styles.comment_detail}>
                  <p>공고 게시 위치: 일반 일자리 찾기,</p>
                  <p>     보증된 일자리 찾기</p>
                  <p>무료 서비스: 일자리 공고 등록,</p>
                  <p>            상위 노출, 검증 마크 부여</p>
                </div>
              </div>
            </div>
            <button className={styles.cp_btn} onClick={()=>changeType('main')}>
              <p>돌아가기</p>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CompanyPartner;

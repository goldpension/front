import React, {useEffect} from "react";
import styles from '../css/Zero.module.css'
import { Link } from "react-router-dom";

const Zero = () => {

  useEffect(() => {
    document.title = '황금연금 | 시니어 취업, 채용 플랫폼 No.1';
  }, [])

  return (
    <main>
      <div style={{
            textAlign: "center",
            paddingTop: "80px",
          }}>
        <h2>황금연금에 일자리를 등록하고자 하는 시니어이신가요?<br/>노란 버튼을 클릭해 주세요!</h2>
        <div className={styles.btop}>
          <Link to="/first" className={styles.bsenior}>
            일자리 찾기
          </Link>
        </div>
      </div>
      <div style={{
            textAlign: "center",
            paddingTop: "100px",
          }}>
        <h2>황금연금에 일자리를 등록하고자 하는 기업이신가요?<br/>
        파란 버튼을 클릭해 주세요!
        </h2>
        <div className={styles.btop}>
          <Link to="/companyPartner" className={styles.bcompany}>
            파트너 되기
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Zero;

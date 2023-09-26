// 로그인 버튼 컴포넌트
import React from "react";
import styles from "../../css/Zero.module.css";
import { Link } from "react-router-dom";

const BCompany = () => {
  return (
    <div className={styles.btop}>
      <Link to="/companyPartner">
        <button type="button" className={styles.bcompany}>
          파트너 되기
        </button>
      </Link>
    </div>
  );
};

export default BCompany;

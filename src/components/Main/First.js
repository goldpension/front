import React from 'react';
import styles from '../../css/first.css';
import { Link } from "react-router-dom";

const First = ({onClickGoCounts}) => {
  return (
    <div>
      메인화면 첫페이지입니다
      <Link to="/findJobs">
        <button className={styles.goCountsButton} onClick={onClickGoCounts}>일자리 찾기</button>
      </Link>
    </div>
  )
}

export default First;
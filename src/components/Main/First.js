import React from 'react';
import styles from '../../css/first.css';

const First = ({onClickGoCounts}) => {
  return (
    <div>
      메인화면 첫페이지입니다
      <button onClick={onClickGoCounts}>일자리 찾기</button>
    </div>
  )
}

export default First;